import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

function SectionFooter({
  description,
  btnText,
  urlType,
  navPage,
  navLink,
  slugPage,
}: {
  description: string;
  btnText?: string;
  urlType?: string;
  navPage?: { page: { language: string; slug: { current: string } } };
  navLink?: string;
  slugPage?: string;
}) {
  let href;
  switch (urlType) {
    case "internal":
      href = `/${navPage?.page?.language}/${navPage?.page?.slug?.current}`;
      break;
    case "external":
      href = navLink;
      break;
    case "slug":
      href = slugPage;
      break;
  }

  return (
    <div className="flex justify-between items-center container mx-auto lg:py-12 md:py-8 py-6 border-t max-w-[85rem] border-muted-foreground/30 lg:mt-24 md:mt-16">
      <p className="text-sm leading-normal font-sans max-w-md text-current">
        {description}
      </p>

      <Link
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "border-accent !text-accent hover:!text-foreground",
        })}
        href={href || "/invalid-url"}
      >
        {btnText}
      </Link>
    </div>
  );
}

export default SectionFooter;
