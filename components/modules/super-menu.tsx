import Link from "next/link";
import React from "react";
import MenuLink from "../menu/menu-link";
import { Button, buttonVariants } from "../ui/new-component/button";
import DropDownMenu from "../menu/drop-down-menu";

function SuperMenu({ module }: { module: any }) {
  const { hasTransparentHeader, items } = module;
  return (
    <header className="w-full py-6 bg-secondary border-b border-primary/40">
      <div className="container mx-auto  flex justify-between items-center">
        <Link href={"/"} className="font-serif text-xl font-bold text-primary">
          Chishti Law Firm
        </Link>

        <nav className="div flex items-center">
          <ul className="flex items-center">
            {items.map((item: any, i: number) => {
              if (item._type === "navPage") {
                return <MenuLink {...item} key={i} />;
              }
              if (item._type === "navDropdown") {
                return <DropDownMenu {...item} key={i} />;
              }
              return null;
            })}
          </ul>

          <div className="flex flex-wrap items-center gap-x-4 pl-4 ml-4 border-l border-primary/40">
            <Link
              href={"/studio"}
              className={buttonVariants({
                variant: "outline",
                className:
                  "!text-primary active:!text-secondary hover:!bg-primary hover:!text-secondary",
              })}
            >
              Login
            </Link>
            <Button variant={"default"}>Let&apos;s Talk</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default SuperMenu;
