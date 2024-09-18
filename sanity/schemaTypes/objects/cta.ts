import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "cta",
  title: "Call To Action",
  fields: [
    {
      title: "Text",
      name: "title",
      type: "string",
      validation: (Rule: any) => Rule.required().max(150),
    },
    { type: "navPage", name: "action" },
  ],
});
