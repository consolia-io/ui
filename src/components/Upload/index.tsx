/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useRef, useState, type JSX } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../icons";
import { IUpload } from "../../types";
import Badge from "../Badge";
import Button from "../Button";
import Loading from "../Loading";
import Text from "../Text";
import {
  UploadCoreStyled,
  UploadFooterStyled,
  UploadInputStyled,
  UploadStyled,
  UploadCallbackStyled,
} from "./styles";

export default function Upload<T extends boolean>({
  accept,
  css,
  disabled,
  error,
  errorMessage,
  loading,
  maxFiles = 25,
  maxSize = 5000000,
  multiple,
  onUpload,
  success,
  successMessage,
  width,
}: IUpload<T>): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);
  const [forceError, setForceError] = useState(error);

  const maxSizeMB = maxSize / 1000000;
  const isUploadSuccessful = success;
  const hasError = forceError || error;
  const hasCallback = hasError || success;
  const isDisabled = disabled || loading;

  function formatAccept(accept: string | undefined): string | undefined {
    const capitalize = (s: string): string => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    if (!accept) {
      return "Any file type";
    }

    if (accept.includes("/*")) {
      return capitalize(accept.replace("/*", "s"));
    }

    return capitalize(accept);
  }

  function checkFileSize(size: number): boolean {
    if (size > maxSize) {
      setForceError(true);
      toast.error(`File size must be less than ${maxSizeMB}MB`);

      return false;
    }

    return true;
  }

  function handleUpload(event: ChangeEvent<HTMLInputElement>): void {
    if (isDisabled) return;

    const { files } = event.target;

    if (files && files.length > 0) {
      setForceError(false);
      const filesArray = Array.from(files);
      const validFiles = filesArray.filter(({ size }) => checkFileSize(size));

      if (validFiles.length === 0) {
        return;
      }

      if (multiple && validFiles.length > maxFiles) {
        toast.error(`You can only upload up to ${maxFiles} files at once.`);

        return;
      }

      if (multiple) {
        onUpload(files as any);
      } else {
        onUpload(validFiles[0] as any);
      }
    }

    event.target.value = "";
  }

  function handleButtonClick(): void {
    if (isDisabled) return;

    if (ref && ref.current) {
      ref.current.click();
    }
  }

  return (
    <UploadStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
        ...css,
      }}
      disabled={isDisabled}>
      <UploadCoreStyled>
        <Button
          block
          disabled={isDisabled}
          icon={
            isUploadSuccessful ? (
              <Icons.CheckCircle />
            ) : multiple ? (
              <Icons.Upload />
            ) : (
              <Icons.UploadSimple />
            )
          }
          onClick={() => handleButtonClick()}>
          {isUploadSuccessful ? "Uploaded" : multiple ? "Upload files" : "Upload file"}
        </Button>
        <UploadInputStyled
          ref={ref}
          accept={accept}
          disabled={isDisabled}
          multiple={multiple}
          type="file"
          onChange={(event) => handleUpload(event)}
        />
      </UploadCoreStyled>

      <UploadFooterStyled>
        <Text accent as="small" bottom="none">
          <a
            href={`https://google.com/search?q=${accept}%20file%20format`}
            rel="noopener noreferrer"
            target="_blank">
            {formatAccept(accept)} (Max {maxSizeMB}MB)
          </a>
        </Text>
        {loading && <Loading />}
      </UploadFooterStyled>

      {hasCallback && (
        <UploadCallbackStyled>
          {hasError && (
            <Badge icon={!errorMessage ? <Icons.Warning /> : undefined} theme="orange">
              {errorMessage || "Upload error"}
            </Badge>
          )}
          {success && (
            <Badge icon={!successMessage ? <Icons.CheckCircle /> : undefined} theme="blue">
              {successMessage || "Upload successful"}
            </Badge>
          )}
        </UploadCallbackStyled>
      )}
    </UploadStyled>
  );
}
