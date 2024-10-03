import { ArticleNyTimes } from "@phosphor-icons/react/dist/ssr";

// export default {
//   type: "document",
//   name: "post",
//   title: "Post",
//   icon: ArticleNyTimes,
//   fields: [
//     {
//       name: "cover",
//       title: "Cover image",
//       type: "image",
//       options: {
//         hotspot: true,
//         metadata: [
//           "blurHash", // Default: included
//           "lqip", // Default: included
//           "palette", // Default: included
//           "exif", // Default: not included
//           "location", // Default: not included
//         ],
//       },
//       fields: [
//         {
//           name: "alt",
//           type: "string",
//           title: "Alternative Text",
//         },
//       ],
//     },
//     {
//       type: "string",
//       name: "title",
//       Title: "Post Title",
//       validation: (Rule: any) => Rule.required().max(200),
//     },
//     {
//       type: "string",
//       name: "description",
//       title: "Description",
//       validation: (Rule: any) => Rule.required().max(400),
//     },
//     {
//       type: "slug",
//       title: "Slug",
//       name: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//       validation: (Rule: any) => Rule.required(),
//     },
//     { type: "body", name: "body" },
//     {
//       type: "seo",
//       name: "seo",
//       title: "SEO Settings",
//       // group: "settings",
//     },
//   ],
//   preview: {
//     select: {
//       title: "title",
//       media: "cover",
//     },
//     prepare(selection: any) {
//       const { title, media } = selection;
//       // return { ...selection, subtitle: author && `by ${author}` };
//       return {
//         title: title,
//         media: media,
//       };
//     },
//   },
// };

import { defineType } from "sanity";
export default defineType({
  title: "Post",
  name: "post",
  type: "document",
  icon: ArticleNyTimes,
  groups: [
    { title: "Content", name: "content", default: true },
    { title: "Settings", name: "settings" },
  ],
  fields: [
    {
      title: "URL Slug",
      name: "slug",
      type: "slug",
      description: "(required)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
      group: "settings",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      group: "content",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required().max(400),
      group: "content",
    },
    {
      name: "cover",
      type: "object",
      fields: [
        {
          name: "card",
          type: "customImage",
          description: "Cover Picture for cards.",
        },
        {
          name: "main",
          type: "customImage",
          description: "Cover Picture for article.",
        },
      ],
      validation: (Rule: any) => Rule.required(),
      group: "content",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "category", name: "tag", title: "Tag" }],
      validation: (Rule: any) => Rule.max(6),
      group: "settings",
    },

    {
      title: "Overlay header with transparency?",
      name: "hasTransparentHeader",
      type: "boolean",
      description:
        "When activated the header will overlay the first content module with a transparent background and white text until scrolling is engaged.",
      initialValue: false,
      group: "settings",
    },
    {
      title: "Menu",
      name: "menu",
      type: "reference",
      to: [{ type: "menu" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "bodyContent", name: "body" },
        { type: "services", name: "services" },
        { type: "testimonial", name: "testimonial" },
        { type: "all-team", name: "all-team" },
        { type: "all-services", name: "all-services" },
        { type: "process", name: "process" },
        { type: "contact", name: "contant" },
        { type: "gallery", name: "gallery" },
        { type: "grid", name: "grid" },
        { type: "awards", name: "awards" },
        {
          type: "reference",
          title: "Reusable Section",
          to: [{ type: "section" }],
        },
      ],
      group: "content",
    },
    {
      title: "Footer",
      name: "footer",
      type: "reference",
      to: [{ type: "footer" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Schema Markup",
      name: "schemaMarkup",
      type: "schemaMarkup",
      group: "settings",
    },
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "settings",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title = "Untitled", slug = {} }: { title: string; slug: any }) {
      const path = `/${slug?.current}`;
      return {
        title,
        subtitle: slug.current ? path : "(missing slug)",
      };
    },
  },
});
