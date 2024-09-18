import React from "react";

import BlogCard from "../blog-card";
import { ALL_POSTS_QUERY } from "@/sanity/data/queries";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { cn } from "@/lib/utils";
import { SectionPaddings } from "../section";

const getAllBlogs = async ({ searchParams = { page: 1 } }) => {
  const items = searchParams?.page * 6;
  const data: any = await client.fetch<SanityDocument[]>(
    ALL_POSTS_QUERY,
    { items, ...searchParams },
    { perspective: "published" }
  );

  return data;
};

async function AllBlogsModule({ searchParams, module }: any) {
  const data = await getAllBlogs({ searchParams });

  return (
    // <!-- Card Blog -->
    // <AllBlogsWrapper>
    <section
      className={cn("w-full h-full bg-secondary-foreground", SectionPaddings)}
    >
      <div className="max-w-article-wide mx-auto">
        <h2 className="text-xl text-primary font-sans lg:mb-10">
          {module.title}
        </h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-span-12 lg:col-span-8 gap-y-14 grid">
            {data.map((blog: any, i: number) => {
              return <BlogCard {...blog} key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
    // </AllBlogsWrapper>
  );
}

export default AllBlogsModule;
