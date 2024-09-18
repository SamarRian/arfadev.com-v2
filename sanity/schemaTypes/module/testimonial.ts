import { HandPeace } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "testimonial",
  title: "Testimonial",
  fields: [
    { name: "metaData", type: "metaData" },
    {
      name: "paragraph",
      type: "text",
      title: "Testimonial",
      rows: 3,
      description: "Enter the testimonial of your client.",
      validation(rule) {
        return rule.required().max(300).error("Keep it short.");
      },
    },
    {
      type: "object",
      name: "client",
      fields: [
        {
          type: "string",
          name: "name",
          title: "Client's Name",
          validation(rule) {
            return rule.required().max(40);
          },
        },
        {
          type: "string",
          name: "profession",
          title: "Client's Profession",
          validation(rule) {
            return rule.required().max(150);
          },
        },
      ],
    },
  ],
  initialValue: () => ({
    wide: true,
  }),
  icon: HandPeace,
});
