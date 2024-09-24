import LocalFontLoader from "next/font/local";

export const ebGaramond = LocalFontLoader({
  src: [
    { path: "./eb/EBGaramond-VariableFont_wght.ttf" },
    {
      path: "./eb/EBGaramond-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-ebgaramond",
  display: "swap",
});
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
