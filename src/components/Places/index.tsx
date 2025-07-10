import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState, useRef, type JSX } from "react";

import {
  Input,
  Loading,
  Text,
  useDebounce,
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  type IPlaces,
} from "../../index";
import { PlacesStyled, PlacesDropdownStyled, PlacesItemStyled, PlacesEmptyStyled } from "./styles";

interface PlacePrediction {
  description: string;
  place_id: string;
  structured_formatting?: {
    main_text: string;
    secondary_text: string;
  };
  types: string[];
}

interface AutocompleteService {
  getPlacePredictions: (
    request: Record<string, unknown>,
    callback: (results: PlacePrediction[] | null, status: string) => void,
  ) => void;
}

export default function Places({
  apiKey,
  countries,
  css,
  disabled,
  dropdownCSS,
  dropdownHeight,
  dropdownWidth,
  error,
  errorMessage,
  id,
  loading: externalLoading,
  name,
  onChange,
  onPlaceSelect,
  placeholder = "Search for places...",
  success,
  successMessage,
  types,
  value,
  warning,
  warningMessage,
  width,
  ...inputProps
}: IPlaces): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { height: windowHeight } = useWindowDimensions();

  const [inputValue, setInputValue] = useState((value as string) || "");
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");
  const [isReady, setIsReady] = useState(false);

  const debouncedValue = useDebounce(inputValue, 300);
  const serviceRef = useRef<unknown>(null);

  // Initialize Google Maps
  useEffect(() => {
    if (!apiKey || isReady) return;

    const initGoogleMaps = async (): Promise<void> => {
      const loader = new Loader({
        apiKey,
        libraries: ["places", "maps"],
        version: "weekly",
      });

      const google = await loader.load();

      if (google.maps?.places) {
        serviceRef.current = new google.maps.places.AutocompleteService();
        setIsReady(true);
      }
    };

    initGoogleMaps();
  }, [apiKey, isReady]);

  // Search places when dropdown is open and user types
  useEffect(() => {
    if (!debouncedValue.trim() || !isOpen || !serviceRef.current) {
      setPredictions([]);

      return;
    }

    setLoading(true);
    const request = {
      input: debouncedValue,
      ...(countries && { componentRestrictions: { country: countries } }),
      ...(types && { types }),
    };

    (serviceRef.current as AutocompleteService).getPlacePredictions(
      request,
      (results: PlacePrediction[] | null, status: string) => {
        setLoading(false);
        setPredictions(status === "OK" && results ? results : []);
      },
    );
  }, [debouncedValue, isOpen, countries, types]);

  // Reset focus when dropdown closes
  useEffect(() => {
    if (!isOpen) setFocused("");
  }, [isOpen]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  }

  function handleSelection(prediction: PlacePrediction): void {
    setInputValue(prediction.description);
    handleClose();
    if (onPlaceSelect) onPlaceSelect(prediction);
  }

  function handleKeyDown(event: KeyboardEvent): void {
    // Only handle keyboard events when THIS dropdown is open
    if (!isOpen || !predictions.length) return;

    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const index = predictions.findIndex((p) => p.place_id === focused);

      if (index < predictions.length - 1) {
        setFocused(predictions[index + 1].place_id);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const index = predictions.findIndex((p) => p.place_id === focused);

      if (index > 0) {
        setFocused(predictions[index - 1].place_id);
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const prediction = predictions.find((p) => p.place_id === focused);

      if (prediction) handleSelection(prediction);
    }
  }

  const handleTriggerClick = (e: React.MouseEvent): void => {
    e.stopPropagation(); // CRITICAL: Prevent event bubbling to other components
    if (!disabled && isReady) {
      handleClick();
    }
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled && isReady) {
        handleClick();
      }
    }
  };

  const handleItemClick =
    (prediction: PlacePrediction) =>
    (e: React.MouseEvent): void => {
      e.stopPropagation(); // Prevent bubbling on item selection too
      handleSelection(prediction);
    };

  const handleItemMouseOver = (placeId: string) => (): void => {
    setFocused(placeId);
  };

  useOutsideClick(contentRef, handleClose);
  useEventListener("keydown", handleKeyDown);

  return (
    <PlacesStyled css={css}>
      <div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        onClick={(e) => handleTriggerClick(e)}
        onKeyDown={(e) => handleTriggerKeyDown(e)}>
        <Input
          {...inputProps}
          css={{ width: width || "100%", ...css }}
          disabled={disabled || !isReady}
          error={error}
          errorMessage={errorMessage}
          id={id || name}
          loading={externalLoading || !isReady}
          name={name}
          placeholder={isReady ? placeholder : "Loading..."}
          success={success}
          successMessage={successMessage}
          value={inputValue}
          warning={warning}
          warningMessage={warningMessage}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      {isMounted && isOpen && (
        <PlacesDropdownStyled
          ref={contentRef}
          animation={isOpen}
          css={{
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            maxWidth: dropdownWidth || "500px",
            minWidth: dropdownWidth || "200px",
            width: dropdownWidth || "100%",
            ...dropdownCSS,
          }}>
          {loading ? (
            <Loading />
          ) : predictions.length > 0 ? (
            predictions.map((prediction) => (
              <PlacesItemStyled
                key={prediction.place_id}
                focused={prediction.place_id === focused}
                onClick={handleItemClick(prediction)}
                onMouseOver={handleItemMouseOver(prediction.place_id)}>
                {prediction.structured_formatting ? (
                  <div>
                    <Text as="strong">{prediction.structured_formatting.main_text}</Text>
                    <Text as="small">{prediction.structured_formatting.secondary_text}</Text>
                  </div>
                ) : (
                  <Text as="p" css={{ margin: 0 }}>
                    {prediction.description}
                  </Text>
                )}
              </PlacesItemStyled>
            ))
          ) : debouncedValue.trim() ? (
            <PlacesEmptyStyled>No places found</PlacesEmptyStyled>
          ) : (
            <PlacesEmptyStyled>Start typing to search</PlacesEmptyStyled>
          )}
        </PlacesDropdownStyled>
      )}
    </PlacesStyled>
  );
}
