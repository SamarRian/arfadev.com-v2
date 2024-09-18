import { cn } from "@/lib/utils";
import Link from "next/link";

import Collapse from "./mega-menu/mega-collapse";
import CollapseButton from "./mega-menu/mega-collapse-button";

function MegaMenu({ module }: { module: any }) {
  const { hasTransparentHeader, items } = module;

  return (
    <div
      className={cn(
        " top-0 flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full animate-slideDown",
        hasTransparentHeader
          ? "bg-secondary fixed"
          : "bg-secondary border-b border-primary-foreground/30 sticky"
      )}
    >
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 md:py-4 lg:py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <Link
            className="flex-none font-semibold text-xl text-primary-foreground focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            Chishti International
            <br />
            <span className="text-base">Immigration & Law Firm</span>
          </Link>

          {/* <!-- Collapse Button --> */}

          <CollapseButton />
          {/* <!-- End Collapse Button --> */}
        </div>

        {/* <!-- Collapse --> */}
        <Collapse items={items} />
        {/* <!-- End Collapse --> */}
      </nav>
    </div>
  );
}

export default MegaMenu;
