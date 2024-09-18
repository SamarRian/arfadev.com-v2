"use client";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import React from "react";

function CollapseButton({ setIsToggle }: any) {
  return (
    <button
      type="button"
      className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-primary-foreground/40 text-white hover:text-primary-foreground font-serif   focus:outline-none focus:text-primary-foreground disabled:opacity-50 disabled:pointer-events-none"
      id="hs-header-base-collapse"
      aria-expanded="false"
      aria-controls="hs-header-base"
      aria-label="Toggle navigation"
      data-hs-collapse="#hs-header-base"
    >
      <List className="hs-collapse-open:hidden size-4" />
      <X className="hs-collapse-open:block shrink-0 hidden size-4" />
      <span className="sr-only">Toggle navigation</span>
    </button>
  );
}

export default CollapseButton;
