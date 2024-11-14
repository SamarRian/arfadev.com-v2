import { usePathname } from "next/navigation";

export const useSlugAndLang = () => {
  // const params = useParams();

  // const pathname = usePathname();

  // console.log(params, pathname);

  // let { slug = "" } = params;

  // // Ensure slug is a string or join if it's an array
  // slug = Array.isArray(slug) ? slug.join("/") : slug;

  // // Match and remove "en/" or "de/" if they are at the start of the slug
  // const match = slug.match(/^(en|de)\/?(.*)/);

  // console.log("match", match);

  // const lang = match ? match[1] : params?.lang;

  // const cleanedSlug = match ? match[2] : slug;

  const pathname = usePathname();

  const [_, lang, ...cleanedSlug] = pathname.split("/");

  return { lang, slug: cleanedSlug.join("/") };
};
