import { cn } from "@/lib/utils";
import React from "react";

export const Header1 = (props: any) => (
  <h1
    style={{
      margin: "0",
      fontSize: "2rem",
      lineHeight: "1.5",
      fontWeight: 400,
    }}
  >
    {props.children}
  </h1>
);

export const Header2 = (props: any) => (
  <h2
    style={{
      margin: "0",
      fontSize: "1.75rem",
      lineHeight: "1.375",
      fontWeight: 400,
    }}
  >
    {props.children}
  </h2>
);

export const Header3 = (props: any) => (
  <h3
    style={{
      margin: "0",
      fontSize: "1.5rem",
      lineHeight: "1.25",
      fontWeight: 400,
    }}
  >
    {props.children}
  </h3>
);

export const Header4 = (props: any) => (
  <h4
    style={{
      margin: "0",
      fontSize: "1.25rem",
      lineHeight: "1.25",
      fontWeight: 400,
    }}
  >
    {props.children}
  </h4>
);

export const Header5 = (props: any) => (
  <h5
    style={{
      margin: "0",
      fontSize: "1rem",
      lineHeight: "1.25",
      fontWeight: 400,
    }}
  >
    {props.children}
  </h5>
);

export const Header6 = (props: any) => (
  <h6
    style={{
      margin: "0",
      fontSize: ".75rem",
      lineHeight: "1.25",
      fontWeight: 400,
    }}
  >
    {props.children}
  </h6>
);

export const Hightlight = (props: any) => {
  return (
    <span className="bg-primary text-primary-foreground">{props.children}</span>
  );
};

export const Divider = (props: any) => (
  <span>
    <hr className="border-white/40">{props.children}</hr>
  </span>
);

export const Button = ({ isButton, styles, children }: any) => {
  if (!isButton) return children;

  return (
    <span
      className={cn("btn", styles?.style, {
        "is-large": styles?.isLarge,
        "is-block": styles?.isBlock,
      })}
    >
      {children}
    </span>
  );
};
