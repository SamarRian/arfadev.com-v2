import React from "react";
import TeamModule from "./team-module";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Section from "../section";
import { Grid3 } from "../grid";
import TeamCard from "../team-card";
import { ALL_TEAM_QUERY } from "@/sanity/data/queries";

const getAllTeam = async ({ searchParams = { page: 1 } }) => {
  const items = searchParams?.page * 1;
  const data: any = await client.fetch<SanityDocument[]>(
    ALL_TEAM_QUERY,
    { items, ...searchParams },
    { perspective: "published" }
  );

  return data;
};

async function AllTeamModule({ searchParams, module }: any) {
  const data = await getAllTeam({ searchParams });
  const filterData = data.map(({ content, slug }: any) => {
    return { ...content.member, slug };
  });

  return (
    <Section {...module}>
      <Grid3 className={"!gap-y-11"}>
        {filterData.map((item: any, i: number) => {
          return <TeamCard {...item} key={i} />;
        })}
      </Grid3>
    </Section>
  );
}

export default AllTeamModule;
