import React, { ElementType, ComponentPropsWithoutRef } from "react";

interface TextProps<T extends ElementType = TextKinds> {
  as?: T; // The "as" prop determines the element type
  children?: React.ReactNode; // Children to render inside the component
  // Allow all native props for the specified element type
  props?: ComponentPropsWithoutRef<T>;
  className?: string;
  id?: string;
}

type TextKinds = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Text({ as = "span", id, children, ...props }: TextProps) {
  const Component = as;
  return <Component id={id} {...props}>{children}</Component>;
}
