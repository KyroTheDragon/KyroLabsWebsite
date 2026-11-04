import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export interface ShineButtonProps extends Omit<ButtonProps, "children"> {
  /** The label, above the light. */
  children?: ReactNode;
  /**
   * How long one sweep of light takes to cross the button, in milliseconds.
   *
   * @default 700
   */
  duration?: number;
  /**
   * The light's color, any CSS color. By default it's the label's color at
   * a little over a third of its strength, which reads on every variant.
   */
  shineColor?: string;
  asChild?: boolean;
}

const BAND =
  "relative isolate overflow-hidden [--shine-button-color:color-mix(in_oklch,currentColor_40%,transparent)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:skew-x-[-20deg] before:bg-[linear-gradient(90deg,transparent_25%,var(--shine-button-color)_50%,transparent_75%)] before:opacity-0 before:content-[''] motion-safe:before:opacity-100 motion-reduce:before:translate-x-0 motion-reduce:before:transition-opacity motion-reduce:before:duration-300 rtl:before:translate-x-full rtl:before:skew-x-[20deg] rtl:before:[animation-direction:reverse] motion-reduce:rtl:before:translate-x-0";

const SWEEPS =
  "hover:before:opacity-100 focus-visible:before:opacity-100 active:before:opacity-100 data-pressed:before:opacity-100 motion-safe:hover:before:animate-shine-button motion-safe:focus-visible:before:animate-shine-button motion-safe:active:before:animate-shine-button motion-safe:data-pressed:before:animate-shine-button";

export const ShineButton = (props: ShineButtonProps) => {
  const { duration, shineColor, className, ...rest } = props;
  return (
    <Button
      className={cn(BAND, SWEEPS, className)}
      style={
        {
          "--shine-button-color": shineColor,
          "--shine-button-duration":
            duration === undefined ? undefined : `${duration}ms`,
        } as CSSProperties
      }
      {...rest}
    />
  );
};
