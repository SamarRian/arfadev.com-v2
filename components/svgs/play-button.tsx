"use client";
import React from "react";
import { Button } from "../ui/button";

function PlayButton() {
  return (
    <Button
      variant={"svg"}
      onClick={() => alert("wokring")}
      className="z-20 cursor-pointer hover:cursor-pointer"
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="72" height="72" rx="36" fill="#D9B59F" />
        <path
          d="M53 35.5L26.75 50.6554L26.75 20.3446L53 35.5Z"
          fill="#031625"
        />
      </svg>
    </Button>
  );
}

export default PlayButton;
