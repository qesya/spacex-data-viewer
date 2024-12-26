import React, { ElementType, ComponentPropsWithoutRef } from "react";

interface TextProps<T extends ElementType = TextKinds> {
  as?: T; // The "as" prop determines the element type
  children?: React.ReactNode; // Children to render inside the component
  // Allow all native props for the specified element type
  props?: ComponentPropsWithoutRef<T>;
  className?: string;
}

type TextKinds = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Text({ as = "span", children, ...props }: TextProps) {
  const Component = as;
  return <Component {...props}>{children}</Component>;
}
