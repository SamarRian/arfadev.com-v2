import Image from "next/image";
import React from "react";
import BlogCard from "../blog-card";
import Section from "../section";
import { Button } from "../ui/button";

function BlogsModule({ module }: any) {
  // const { metaData, posts = [] } = module;

  const metaData = module?.metaData || {
    miniTitle: "",
    title: "",
    subtitle: "",
  };
  const posts = module?.posts || [];
  const href = metaData?.mainLink?.page?.slug?.current || "/";
  return (
    <Section sectionHeader={metaData}>
      <div className="grid lg:grid-cols-2 gap-6">
        {posts.map((post: any, key: number) => {
          console.log(post);

          return <BlogCard key={key} {...post} />;
        })}
      </div>

      <div className="flex justify-between items-center mt-24 pt-24 border-t border-primary">
        <p className="text-sm leading-normal text-foreground font-sans max-w-md">
          Everything we do is focused on generating more qualified cases for
          your law firm.
        </p>
        <Button
          variant={"outline"}
          size={"lg"}
          className="text-foreground border-foreground hover:border-secondary"
        >
          Explore More
        </Button>
      </div>
    </Section>
  );
}

export default BlogsModule;
