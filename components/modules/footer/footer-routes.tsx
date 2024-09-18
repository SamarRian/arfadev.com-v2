import Link from "next/link";
import React from "react";

function FooterRoutes({ title, routes }: any) {
  return (
    <div>
      <h6 className="text-lg font-serif font-bold text-secondary  uppercase">
        {title}
      </h6>

      <div className="mt-3 grid space-y-3 text-sm">
        {routes.map(({ title, page, url }: any, i: number) => {
          const href = page?.slug?.current || url;
          return (
            <Link
              key={i}
              className="inline-flex gap-x-2 text-secondary-foreground/70 text-base font-sans font-thin hover:text-secondary-foreground focus:outline-none focus:text-secondary-foreground underline"
              href={href}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FooterRoutes;
