import Link from "next/link";
import React, { ReactNode } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface IServiceCard {
  index: number;
  className?: string;
  SVGComponent?: any;
  src: any;
}

function ServiceCard({
  index = 0,
  className,
  SVGComponent,
  src,
}: IServiceCard) {
  return (
    <figure
      className={cn(
        index % 2 === 0 ? "bg-secondary" : "bg-muted-foreground",
        "h-auto flex flex-col p-6 items-start space-y-4",
        className
      )}
    >
      {/* {SVGComponent && (
        <SVGComponent className="mt-32 mb-4 h-[10rem] overflow-hidden" />
      )} */}
      <div className="mt-32 mb-4 h-[6rem] w-[6rem] overflow-hidden relative">
        <Image src={src} fill alt="SVG" className="object-contain" />
      </div>
      <h3 className="text-2xl font-serif text-brand-black">1. Web Designing</h3>
      <p className="text-sm font-sans text-brand-black">
        We Provide elegant web design service to law firm to increase your user
        experience.
      </p>
      <Link className={buttonVariants({ variant: "link" })} href={"/"}>
        Learn More
      </Link>
    </figure>
  );
}

export default ServiceCard;
