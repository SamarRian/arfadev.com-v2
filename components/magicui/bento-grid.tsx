import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IPage } from "@/sanity/types/globals";
import CustomImage from "../custom-image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  className: string;
  background: ReactNode;
  icon: SanityImageSource;
  subtitle: string;
  page: IPage;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  title,
  subtitle,
  className,
  background,
  icon,

  page,
  ...props
}: BentoCardProps) => (
  <div
    key={title}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-sm border border-border",
      // light styles
      "bg-background",
      // dark styles
      "transform-gpu dark:bg-background",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <CustomImage
          imageOBJ={icon}
          height={78}
          width={78}
          alt="SVG"
          className="origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 object-contain"
        />
        <h3 className="text-xl font-serif text-neutral-700 dark:text-neutral-300">
          {title}
        </h3>
        <p className="max-w-lg text-neutral-400 font-sans">{subtitle}</p>
      </div>

      <div
        className={cn(
          "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      ></div>
    </div>

    <div
      className={cn(
        "hidden md:mt-4 lg:flex absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      {page?.slug && (
        <Button variant={"link"} className="capitalize z-20 px-0" asChild>
          <Link href={page?.slug?.current || "/"}>
            More about {title} <ArrowUpRight className="text-base scale-75" />
          </Link>
        </Button>
      )}
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
