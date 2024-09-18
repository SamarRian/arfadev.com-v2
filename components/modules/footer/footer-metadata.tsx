import Logo from "@/components/logo";
import Link from "next/link";
import React from "react";

function FooterMetaData({
  contactDetails = [],
  rights = `All rights are reserved. ${new Date().getFullYear()}`,
  logo,
}: any) {
  return (
    <div className="col-span-full hidden lg:col-span-1 lg:block">
      {/* <a
        className="flex-none font-semibold text-2xl text-secondary font-serif focus:outline-none focus:opacity-80"
        href="#"
        aria-label="Brand"
      >
        
      </a> */}
      <Logo imageAsset={logo} />
      <p className="mt-3 text-base sm:text-sm text-secondary-foreground/70">
        {rights}
      </p>
      <div className="mt-8 flex flex-col gap-2 ">
        {/* <h3 className="text-xl font-serif text-secondary font-semibold">
                Contact Details
              </h3> */}
        {contactDetails &&
          contactDetails.map(({ url, title }: any, i: number) => {
            return (
              <Link
                className="text-sm font-sans text-secondary"
                key={i}
                href={url}
                target="_blank"
              >
                {title}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default FooterMetaData;
