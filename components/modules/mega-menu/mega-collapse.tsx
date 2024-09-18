import DropDownMenu from "@/components/menu/drop-down-menu";
import MenuLink from "@/components/menu/menu-link";
import { Button, buttonVariants } from "@/components/ui/new-component/button";
import Link from "next/link";

function Collapse({ items = [] }: any) {
  return (
    <div
      id="hs-header-base"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
      aria-labelledby="hs-header-base-collapse"
    >
      <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-secondary-foreground [&::-webkit-scrollbar-thumb]:bg-primary-foreground">
        <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
          <div className="grow flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
            {items.map((item: any, i: number) => {
              if (item._type === "navPage") {
                return <MenuLink {...item} key={i} />;
              }
              if (item._type === "navDropdown") {
                return <DropDownMenu {...item} key={i} />;
              }
              return null;
            })}
          </div>

          <div className="my-2 md:my-0 md:mx-2">
            <div className="w-full h-px md:w-px md:h-4 bg-primary-foreground/30 md:bg-primary-foreground/30"></div>
          </div>

          <div className=" flex flex-wrap items-center gap-x-1.5">
            <Link
              href={"/studio"}
              className={buttonVariants({
                variant: "secondary",
                className:
                  "!text-primary active:!text-secondary hover:!bg-primary hover:!text-secondary ",
              })}
            >
              Login
            </Link>
            <Button variant={"default"}>Let&apos;s Talk</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
