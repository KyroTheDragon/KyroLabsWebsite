import type React from "react";
import { cn } from "@/lib/utils";

export interface ButtonGroupProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, orientation = "horizontal", ...rest } = props;

  return (
    <div
      className={cn(
        "flex w-fit items-stretch gap-1",
        orientation === "vertical" ? "flex-col" : "flex-row",
        className
      )}
      data-orientation={orientation}
      data-slot="button-group"
      role="group"
      {...rest}
    />
  );
};
