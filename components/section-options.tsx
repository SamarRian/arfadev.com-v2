import { cn } from "@/lib/utils";
import React from "react";

export interface IOptions {
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface ISectionHeader extends IOptions {
  miniTitle?: string;
  sectionFooter?: any;
}

function SectionHeader({
  title,
  subtitle,
  className,
  miniTitle,
}: ISectionHeader) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 max-w-[85rem] mx-auto lg:pb-24 md:pb-20 sm:pb-16 pb-14 z-20 relative",
        className
      )}
    >
      {miniTitle && (
        <p className="text-sm font-sans border-b inline-block self-start border-current pb-3 max-w-lg">
          {miniTitle}
        </p>
      )}
      <h2 className="lg:text-4xl md:text-3xl text-2xl leading-normal font-serif max-w-lg">
        {title}
      </h2>
      <p className="text-md text-sm sm:text-base font-sans max-w-lg text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}

export function PortfolioOptions({ title, subtitle, className }: IOptions) {
  return (
    <div
      className={cn(
        "flex flex-col lg:space-y-4 md:space-y-2 max-w-md lg:mb-8  md:mb-6 mb-4",
        className
      )}
    >
      <h3 className="lg:text-3xl md:text-2xl text-xl leading-loose font-serif text-primary">
        {title}
      </h3>
      <p className="text-md sm:text-base text-sm font-sans text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeader;
