import { MetadataRoute } from "next";
import { SanityDocument } from "next-sanity";

import { SITEMAP_QUERY } from "@/sanity/data/queries";
import { sanityFetch } from "@/sanity/lib/client";

const fetchPosts = async () => {
  const data = await sanityFetch<SanityDocument[]>({
    query: SITEMAP_QUERY,
    params: { page: "page" },
  });

  return data;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: any = await fetchPosts();

  const postEntries = posts.map(
    ({ slug, _updatedAt, priority, changeFrequency }: any) => {
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/${slug.current}`,
        lastModified: _updatedAt,
        priority,
        changeFrequency,
        alternates: {
          languages: {
            de: `${process.env.NEXT_PUBLIC_BASE_URL}/de/${slug.current}`,
          },
        },
      };
    }
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/sitemap.xml` },
    ...postEntries,
  ];
}

export const revalidate = 60;
