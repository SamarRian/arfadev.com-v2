import { Path } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "array",
  name: "routes",
  title: "Routes",
  of: [{ type: "navPage" }, { type: "navLink" }],
  icon: Path,
});
