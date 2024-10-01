import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function FooterSocials({ socialLinks }: any) {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ icon, url }: any, key: number) => {
        return (
          <Link href={url}>
            <InstagramLogo className="fill-secondary hover:fill-muted-foreground transition-all duration-300 h-8 w-8" />
          </Link>
        );
      })}
    </div>
  );
}

export default FooterSocials;
