export default {
  title: "SEO / Share Settings",
  name: "seo",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: "Change Frequency",
      name: "changeFrequency",
      type: "string",
      description: "How often you believe the content gonna update change?",
      options: {
        list: [
          { title: "Yearly", value: "yearly", default: true },
          { title: "Monthly", value: "monthly" },
          { title: "Weekly", value: "weekly" },
        ],
      },
    },
    {
      title: "Priority",
      name: "priority",
      type: "number",
      description:
        "Enter the prority no. 1 means highest priority 0 means lowest priority.",
      validation: (Rule: any) => Rule.required().max(1).min(0).positive(),
      initial: 0.5,
    },
    {
      title: "kewords",
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description: "Title used for search engines and browsers",
      validation: (Rule: any) =>
        Rule.required()
          .max(50)
          .warning("Longer titles may be truncated by search engines"),
    },
    {
      title: "Authors",
      name: "authors",
      type: "array",
      of: [
        // { type: "reference", to: [{ type: "member" }] },
        {
          type: "object",
          fields: [
            { type: "string", title: "Author Name", name: "name" },
            { type: "string", title: "Webpage URL", name: "url" },
          ],
        },
      ],
    },
    { title: "Creator", name: "creator", type: "string" },
    { title: "Publisher", name: "publisher", type: "string" },
    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description: "Description for search engines",
      validation: (Rule: any) =>
        Rule.required()
          .max(150)
          .warning("Longer descriptions may be truncated by search engines"),
    },
    {
      title: "Share Title",
      name: "shareTitle",
      type: "string",
      description: "Title used for social sharing cards",
      validation: (Rule: any) =>
        Rule.max(50).warning("Longer titles may be truncated by social sites"),
    },
    {
      title: "Share Description",
      name: "shareDesc",
      type: "text",
      rows: 3,
      description: "Description used for social sharing cards",
      validation: (Rule: any) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by social sites"
        ),
    },
    {
      title: "Share Graphic",
      name: "shareGraphic",
      type: "image",
      description: "Recommended size: 1200x630 (PNG or JPG)",
    },
  ],
};
