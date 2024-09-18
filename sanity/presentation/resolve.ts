import {
  defineDocuments,
  defineLocations,
  PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  mainDocuments: defineDocuments([
    {
      route: "/:slug",
      filter: `_type == "page" && slug.current == $slug`,
    },
  ]),
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => {
        return {
          locations: [
            {
              title: doc?.title || "Untitled",
              href: `/posts/${doc?.slug}`,
            },
          ],
        };
      },
    }),
  },
};
