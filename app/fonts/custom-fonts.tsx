import LocalFontLoader from "next/font/local";

// export const playfairFont = LocalFontLoader({
//   src: [
//     { path: "/assets/PlayfairDisplay-VariableFont_wght.ttf" },
//     {
//       path: "./assets/PlayfairDisplay-Italic-VariableFont_wght.ttf",
//       style: "italic",
//     },
//   ],
//   variable: "--font-playfair",
//   display: "swap",
// });
export const poppinFonts = LocalFontLoader({
  src: [
    { path: "./poppins/Poppins-Regular.ttf", weight: "400" },
    { path: "./poppins/Poppins-Medium.ttf", weight: "500" },
    { path: "./poppins/Poppins-SemiBold.ttf", weight: "600" },
    { path: "./poppins/Poppins-Bold.ttf", weight: "700" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

// export const classesImport = [playfairFont.className].join(" ");
