import React from "react";
import Section from "../section";
import ServiceCard from "../service-card";
import { Button, buttonVariants } from "../ui/new-component/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Grid3 } from "../grid";

function ServicesModule({ module }: any) {
  const { content = [], metaData } = module;
  const href = metaData?.mainLink?.page?.slug?.current || "/";

  return (
    <Section {...metaData} className={"bg-primary/30"}>
      <Grid3>
        {content.map((service: any, i: number) => {
          return <ServiceCard data={service} key={i} />;
        })}
      </Grid3>
      <div className="flex items-center justify-center">
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "border-secondary/40 text-secondary font-bold",
            })
          )}
          href={href}
        >
          Explore More
        </Link>
      </div>
    </Section>
  );
}

export default ServicesModule;
