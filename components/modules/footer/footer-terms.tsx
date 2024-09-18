import Link from "next/link";
import React from "react";

function FooterTerms({ policies }: any) {
  return (
    <div className="space-x-4 text-sm">
      {policies.map(({ title, page, url }: any, i: number) => {
        const href = page?.slug?.current || url;
        const target = url ? "_blank" : undefined;
        return (
          <Link
            className="inline-flex gap-x-2 text-secondary-foreground/70 text-base font-sans font-thin hover:text-secondary-foreground focus:outline-none focus:text-secondary-foreground"
            href={href}
            key={i}
            target={target}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}

export default FooterTerms;
