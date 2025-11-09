import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/shared/lib/css";
import { Label } from "@/shared/ui/label";
import { type ComponentProps } from "react";

export function BaseLabel({
  className,
  id,
  error,
  ...props
}: { error: string; id: string } & ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={id}
      {...props}
    />
  );
}

export function BaseDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="form-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export function BaseMessage({
  className,
  error,
  ...props
}: { error: string } & ComponentProps<"p">) {
  const body = error ? String(error) : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}
