import Link from "next/link";

import { buttonVariants } from "./ui/button";
import CustomImage from "./custom-image";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

export interface IServiceCard {
  index: number;
  className?: string;
  icon: any;
  title: string;
  subtitle: string;
  page: { slug: any };
}

function ServiceCard({
  index = 0,
  className,
  icon,
  title,
  subtitle,
  page,
}: IServiceCard) {
  return (
    <figure
      className={cn(
        index % 2 === 0 ? "bg-secondary" : "bg-muted",
        "h-auto flex flex-col p-6 items-start space-y-4",
        className
      )}
    >
      {/* {SVGComponent && (
        <SVGComponent className="mt-32 mb-4 h-[10rem] overflow-hidden" />
      )} */}
      {icon && (
        <div className="lg:mt-32 md:mt-28 sm:mt-20 mt-16 mb-4 h-[6rem] w-[6rem] overflow-hidden relative">
          <CustomImage
            imageOBJ={icon}
            fill
            alt="SVG"
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-2xl font-serif text-secondary-foreground">{title}</h3>
      <p className="text-sm font-sans text-secondary-foreground">{subtitle}</p>
      {page?.slug && (
        <Link
          className={buttonVariants({
            variant: "link",
            className: "!text-base !mx-0 !px-0 !text-secondary-foreground",
          })}
          href={page?.slug?.current || "/"}
        >
          More About {title} <ArrowUpRight className="text-base scale-75" />
        </Link>
      )}
    </figure>
  );
}

export default ServiceCard;
