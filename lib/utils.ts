import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const purifyString = (str: string): string => {
  // if (typeof str !== "string") return str;
  // Use regular expressions to remove unwanted characters

  return str
    ?.trim() // Remove leading and trailing spaces
    ?.replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width spaces (ZWSP, ZWNJ, ZWJ, FEFF)
    ?.replace(/[^\x20-\x7E]/g, ""); // Remove non-printable ASCII characters (except common spaces)
};

export const framerMotionDraw = ({
  duration = 1.5,
}: {
  duration?: number;
}) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: duration, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
});

export const joinSlugs = (slugArr: any) => {
  const joinedStr = slugArr.join("/");
  return joinedStr;
};

export const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const seperateLangDocs = (first: Array<any>, second: Array<any>) => {
  const firstSlugs = first.map((doc) => doc.slug);
  const secondSlugs = second.map((doc) => doc.slug);
  const commonLangDocs = first.filter(({ slug }) => secondSlugs.includes(slug));
  const firstLangDocs = first.filter(({ slug }) => !secondSlugs.includes(slug));
  const secondLangDocs = second.filter(
    ({ slug }) => !firstSlugs.includes(slug)
  );

  return { commonLangDocs, firstLangDocs, secondLangDocs };
};

export const convertToSitemap = (arr: Array<any>) => {
  return arr.map(({ slug, _updatedAt, priority, changeFrequency }: any) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/${slug.current}`,
      lastModified: _updatedAt,
      priority,
      changeFrequency,
    };
  });
};
