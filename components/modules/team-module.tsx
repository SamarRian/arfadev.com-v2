import React from "react";
import Section from "../section";
import { Grid3 } from "../grid";
import TeamCard from "../team-card";
import { buttonVariants } from "../ui/new-component/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ALL_TEAM_QUERY } from "@/sanity/data/queries";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

const getAllTeam = async ({ searchParams = { page: 1 } }) => {
  const items = searchParams?.page * 6;
  const data: any = await client.fetch<SanityDocument[]>(
    ALL_TEAM_QUERY,
    { items, ...searchParams },
    { perspective: "published" }
  );

  return data;
};

async function TeamModule({ module }: any) {
  const data = await getAllTeam({ searchParams: { page: 1 } });
  const filterData = data.map(({ content, slug }: any) => {
    return { ...content.member, slug };
  });

  const { metaData, team } = module;
  const mainLink = metaData?.mainLink || {
    title: "Explore All",
    page: { slug: { current: "/" } },
  };
  return (
    <Section {...metaData}>
      <Grid3 className={"!gap-y-11"}>
        {filterData.map((item: any, i: number) => {
          return <TeamCard {...item} key={i} />;
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
          href={mainLink.page?.slug?.current}
        >
          {mainLink.title}
        </Link>
      </div>
    </Section>
  );
}

export default TeamModule;
