import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

function NaviationMenuLink({ url, title }: { url: string; title: string }) {
  return (
    <NavigationMenuItem>
      <Link href={url} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title || "Untitle"}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default NaviationMenuLink;
