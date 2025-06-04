import { useEffect, type JSX } from "react";
import toast, { Toast, useToaster, Toaster } from "react-hot-toast";

import { Badge, useEventListener } from "../../../index";
import { IToast } from "../../../types";
import { ToastStyled } from "../styles";

const TOAST_LIMIT = 4;
const DEFAULT_DURATION = 3000;

function prepareMessage(message: Toast["message"]): string {
  if (!message) return "No information provided.";

  return message.toString().replace(/\.$/, "");
}

export function ToastController({
  position = "top-left",
  toastOptions,
  ...props
}: IToast): JSX.Element {
  const { handlers, toasts } = useToaster();
  const { endPause, startPause } = handlers;

  const visibleToasts = toasts.filter((t) => t.visible);
  const excessToasts = visibleToasts.filter((_, i) => i >= TOAST_LIMIT);
  const shouldDismissOnEscape = (key: string): boolean => key === "Escape" || key === "Enter";

  const handleKeyboardDismiss = (event: KeyboardEvent): void => {
    if (shouldDismissOnEscape(event.key)) {
      event.preventDefault();
      toast.dismiss();
    }
  };

  const getToastTheme = (type: Toast["type"]): "orange" | "blue" | "purple" => {
    switch (type) {
      case "error":
        return "orange";
      case "success":
        return "blue";
      default:
        return "purple";
    }
  };

  const handleToastClick = (id: string): void => {
    toast.remove(id);
  };

  const renderToast = (t: Toast): JSX.Element => {
    const theme = getToastTheme(t.type);
    const message = prepareMessage(t.message);

    return (
      <ToastStyled
        onClick={() => handleToastClick(t.id)}
        onMouseEnter={startPause}
        onMouseLeave={endPause}>
        <Badge link theme={theme}>
          {message}
        </Badge>
      </ToastStyled>
    );
  };

  useEventListener("keydown", handleKeyboardDismiss);

  useEffect(() => {
    excessToasts.forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <Toaster
      {...props}
      position={position}
      toastOptions={{
        duration: toastOptions?.duration || DEFAULT_DURATION,
        style: {
          background: "transparent",
          boxShadow: "none",
          padding: 0,
        },
        ...toastOptions,
      }}>
      {renderToast}
    </Toaster>
  );
}
