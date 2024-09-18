import { ArticleMedium } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "bodyContent",
  title: "Content",
  fields: [
    {
      name: "wide",
      type: "boolean",
      title: "Make article wide",
      description:
        "This will make the content wide, disable it if you're having an article.",
    },
    {
      type: "complexPortableText",
      name: "body",
    },
  ],
  initialValue: () => ({
    wide: true,
  }),
  icon: ArticleMedium,
});
