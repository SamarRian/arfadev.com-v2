import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ArticleBreadCrumbs from "@/components/article-breadcrumb";
import { getPost } from "@/sanity/data";
import { draftMode } from "next/headers";
import ShareButtons from "@/components/social-media-share";
import { notFound } from "next/navigation";
import { MegaMenu } from "@/components/modules/mega-menu";
import FooterModule from "@/components/modules/footer.module";
import { urlFor } from "@/sanity/lib/image";
import CustomImage from "@/components/custom-image";
import { PortableText } from "@portabletext/react";
import { portableComplexDarkText } from "@/components/portable-stucture/portable-complex-dark";
import Module from "@/components/modules/module";
import { purifyString } from "@/lib/utils";
import ContentBody from "@/components/modules/content-body";

export default async function Component({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { isEnabled: isDraftMode } = draftMode();
  const pageData = await getPost(slug, isDraftMode);

  const page = pageData?.page;

  if (!page) return notFound();

  const menu = pageData?.menu;
  const footer = pageData?.footer;

  const { title, cover, tags, content, description, author, body } = page;

  console.log(body, "this is page");

  return (
    <main>
      {menu && <MegaMenu module={menu} />}
      <div className="relative h-[70vh] min-h-[400px] w-full px-2">
        {cover && (
          <CustomImage
            alt={cover?.alt}
            className="object-cover"
            fill
            src={urlFor(cover?.asset).url()}
            imageOBJ={cover?.asset}
            objectFit={cover?.objectFit}
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"></div>
      </div>
      <div className="grid grid-cols-12 max-w-[85rem] mx-auto">
        <ArticleBreadCrumbs
          className="col-start-1 col-span-8 pt-8"
          slug={slug}
        />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-left z-10 col-start-1 col-span-8 pt-8 pb-10">
          {title}
        </h1>

        <div className="flex items-center space-x-4 mb-6 col-start-1 col-span-8">
          <Avatar>
            {author?.photo && (
              <AvatarImage
                alt={author?.photo?.alt}
                src={urlFor(author?.photo?.asset).width(70).height(70).url()}
              />
            )}
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-light font-sans ">
              {author && author?.name}
            </p>
          </div>
        </div>

        <p className="text-lg font-light font-sans col-start-1 col-span-8 text-primary">
          Posted on August 24, 2023
        </p>

        <article className="w-full col-start-1 col-span-8">
          <p className="text-base font-sans py-10">
            {purifyString(description)}
          </p>
          {<ContentBody module={body} />}
        </article>

        <div className="mt-8 flex space-x-4">
          {tags &&
            tags.map((tag: string, key: number) => {
              return <Badge key={key}>{tag}</Badge>;
            })}
        </div>
        <ShareButtons />
      </div>

      {footer && <FooterModule module={footer} />}
    </main>
  );
}
