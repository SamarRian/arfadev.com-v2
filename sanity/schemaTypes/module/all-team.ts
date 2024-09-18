import { Users } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  title: "All Team",
  name: "all-team",
  type: "object",
  icon: Users,
  fields: [{ title: "Title", type: "string", name: "title" }],
  preview: {
    prepare() {
      return { title: "Team" };
    },
  },
});
