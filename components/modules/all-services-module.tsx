import React from "react";
import Section from "../section";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { ALL_SERVICES_QUERY } from "@/sanity/data/queries";
import { Grid3 } from "../grid";
import ServiceCard from "../service-card";

const getAllServices = async ({ searchParams = { page: 1 } }) => {
  const items = searchParams?.page * 1;
  const data: any = await client.fetch<SanityDocument[]>(
    ALL_SERVICES_QUERY,
    { items, ...searchParams },
    { perspective: "published" }
  );

  return data;
};

async function AllServicesModule({ searchParams, module }: any) {
  const data = await getAllServices({ searchParams });
  return (
    <Section {...module}>
      <Grid3>
        {data.map((service: any, i: number) => {
          return <ServiceCard data={service} key={i} />;
        })}
      </Grid3>
    </Section>
  );
}

export default AllServicesModule;
