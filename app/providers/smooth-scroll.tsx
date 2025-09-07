"use client";
import ReactLenis from "lenis/react";
import React from "react";

function SmoothScrollProvider({ children }: { children: any }) {
  return (
    <ReactLenis options={{ duration: 1 }} root>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollProvider;
