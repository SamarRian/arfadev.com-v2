import { client } from "../lib/client";
import { modules, site } from "./queries";
import { token } from "../lib/token";
import { QueryOptions } from "next-sanity";

export async function getAllPageSlug() {
  const query = `*[_type == "page"]{ slug }`;

  const data = await client.fetch(query, {}, { perspective: "previewDrafts" });

  return data;
}

export async function getPage(
  slug: string,
  isDraftMode?: boolean,
  preview?: any
) {
  const slugs = JSON.stringify([slug, `/${slug}`, `/${slug}/`]);

  const queryOptions: QueryOptions = isDraftMode
    ? { perspective: "previewDrafts", token, stega: true, useCdn: false }
    : { perspective: "published", useCdn: true, cache: "force-cache" };

  const query = `
        {
          "page": *[_type == "page" && slug.current in ${slugs}] | order(_updatedAt desc)[0]{
            "id": _id,
            hasTransparentHeader,
            author->{name,photo},
           content[]{
            defined(_ref)=>{...@->content[0]{${modules}}},
            !defined(_ref)=>{${modules}}
            },
            
            title,
            seo
          },
           ${site}
        }
        `;

  const data = await client.fetch(query, {}, queryOptions);

  return data;
}

export async function getStaticPage(pageData: any, isDraftMode?: boolean) {
  const queryOptions: QueryOptions = isDraftMode
    ? { perspective: "previewDrafts", token, stega: true, useCdn: false }
    : { perspective: "published", useCdn: true };

  const query = `
    {
      "page": ${pageData},
      ${site}
    }
    `;

  const data = await client.fetch(query, {}, queryOptions);

  return data;
}
