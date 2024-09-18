import { User } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "one-member",
  title: "Member",
  icon: User,
  fields: [
    {
      type: "reference",
      to: [{ type: "member" }],
      name: "member",
      options: {
        filter: "category == $type",
        filterParams: { type: "team" },
      },
    },
  ],
  validation: (Rule: any) => Rule.required(),
  preview: {
    select: {
      name: "member.name",
    },
    prepare({ name }) {
      return { title: name };
    },
  },
});
