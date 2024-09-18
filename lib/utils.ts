import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const purifyString = (str: string): string => {
  // Use regular expressions to remove unwanted characters
  return str
    .trim() // Remove leading and trailing spaces
    .replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width spaces (ZWSP, ZWNJ, ZWJ, FEFF)
    .replace(/[^\x20-\x7E]/g, ""); // Remove non-printable ASCII characters (except common spaces)
};
