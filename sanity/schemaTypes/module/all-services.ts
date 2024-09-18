import { Briefcase } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  title: "All Services",
  name: "all-services",
  type: "object",
  icon: Briefcase,
  fields: [{ title: "Title", type: "string", name: "title" }],
  preview: {
    prepare() {
      return { title: "Team" };
    },
  },
});
