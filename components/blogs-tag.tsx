"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function BlogsTags({ posts }: any) {
  const tags = ["SEO", "Web Development", "Web Designing", "Branding"];

  const searchParams = useSearchParams();

  const [active, setActive] = useState<string[]>([]);

  const pathname = usePathname();
  const { replace } = useRouter();
  // const allTags = Array.from(new Set(posts.flatMap((post: any) => post.tags)));

  const toggleTag = (tag: string) => {
    setActive((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    // setTags(["stag"]);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (active.length !== 0) {
      params.set("tags", active.join(","));
    } else {
      params.delete("tags");
    }

    replace(`${pathname}?${params.toString()}`);
  }, [active]);

  useEffect(() => {
    const tagsQuery = searchParams.get("tags");

    if (tagsQuery) {
      setActive(tagsQuery.split(","));
    }
  }, []);

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {tags.map((tag: any, key: number) => (
        <Badge
          key={key}
          variant={active.includes(tag) ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}

export default BlogsTags;
