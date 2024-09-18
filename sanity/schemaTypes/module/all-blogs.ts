import { MicrosoftWordLogo } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  title: "All Blogs",
  name: "all-blogs",
  type: "object",
  icon: MicrosoftWordLogo,
  fields: [{ title: "Title", type: "string", name: "title" }],
  preview: {
    prepare() {
      return { title: "Blogs" };
    },
  },
});
