import type React from "react";
import { createContext, useContext, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const FieldContext = createContext<{ invalid?: boolean }>({});

export interface FieldProps extends React.ComponentProps<"div"> {
  invalid?: boolean;
}

export const Field = (props: FieldProps) => {
  const { className, invalid, ...rest } = props;
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (invalid === undefined || !root.current) return;
    const inputs = root.current.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea");
    inputs.forEach((input) => {
      if (invalid) {
        input.setAttribute("aria-invalid", "true");
      } else {
        input.removeAttribute("aria-invalid");
      }
    });
  }, [invalid]);

  return (
    <FieldContext.Provider value={{ invalid }}>
      <div
        className={cn("flex flex-col gap-1.5 w-full", className)}
        data-invalid={invalid ? "true" : undefined}
        data-slot="field"
        ref={root}
        role="group"
        {...rest}
      />
    </FieldContext.Provider>
  );
};

export const FieldGroup = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn("flex flex-col gap-4 w-full", className)}
      data-slot="field-group"
      {...rest}
    />
  );
};

export const FieldLabel = (props: React.ComponentProps<"label">) => {
  const { className, ...rest } = props;
  return (
    <label
      className={cn(
        "text-xs font-medium text-foreground select-none flex items-center gap-1.5",
        className
      )}
      data-slot="field-label"
      {...rest}
    />
  );
};

export const FieldDescription = (props: React.ComponentProps<"p">) => {
  const { className, ...rest } = props;
  return (
    <p
      className={cn("text-xs text-muted-foreground leading-normal", className)}
      data-slot="field-description"
      {...rest}
    />
  );
};

export const FieldError = (props: React.ComponentProps<"div">) => {
  const { className, children, ...rest } = props;
  const { invalid } = useContext(FieldContext);

  if (!children || invalid === false) {
    return null;
  }

  return (
    <div
      className={cn("text-xs text-destructive flex items-center gap-1.5", className)}
      data-slot="field-error"
      role="alert"
      {...rest}
    >
      {children}
    </div>
  );
};
