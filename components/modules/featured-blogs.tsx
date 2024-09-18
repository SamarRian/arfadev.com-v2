import React from "react";
import Section from "../section";
import Link from "next/link";
import { buttonVariants } from "../ui/new-component/button";
import { Grid3 } from "../grid";
import { BlogCardSmall } from "../blog-card";
import { cn } from "@/lib/utils";

function FeaturedBlogs({ module }: any) {
  const { metaData, posts = [] } = module;
  const href = metaData?.mainLink?.page?.slug?.current || "/";

  return (
    <Section {...metaData} className={"bg-primary/30"}>
      <Grid3>
        {posts.map((post: any, i: number) => {
          return <BlogCardSmall {...post} key={i} />;
        })}
      </Grid3>

      <div className="text-center">
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "border-secondary/40 text-secondary font-bold",
            })
          )}
          href={href}
        >
          {metaData?.mainLink?.title || "Read More"}
        </Link>
      </div>
      {/* <!-- End Card --> */}
    </Section>
  );
}

export default FeaturedBlogs;
