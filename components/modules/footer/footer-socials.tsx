import {
  FacebookLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function getIcon(type: string) {
  const iconSettings: any = {
    weight: "bold",
    width: 24,
    height: 24,
  };
  switch (type) {
    case "facebook":
      return <FacebookLogo {...iconSettings} />;
    case "linkedin":
      return <LinkedinLogo {...iconSettings} />;
    case "twitter":
      return <XLogo {...iconSettings} />;
    default:
      return null;
  }
}

function FooterSocials({ links = [] }: any) {
  return (
    <div className="space-x-4">
      {links.map(
        ({ icon, url }: { icon: string; url: string }, key: number) => {
          return (
            <Link
              key={key}
              className="inline-block text-secondary hover:text-secondary-foreground focus:outline-none focus:text-secondary-foreground"
              href={url}
            >
              {getIcon(icon)}
            </Link>
          );
        }
      )}
    </div>
  );
}

export default FooterSocials;
