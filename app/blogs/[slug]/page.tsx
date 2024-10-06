import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getPost } from "@/sanity/data";

import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { purifyString } from "@/lib/utils";

import { MegaMenu } from "@/components/modules/mega-menu";
import FooterModule from "@/components/modules/footer.module";
import CustomImage from "@/components/custom-image";
import { portableComplex } from "@/components/portable-stucture/portable-complex";

import ArticleBreadCrumbs from "@/components/article-breadcrumb";
import ShareButtons from "@/components/social-media-share";
import { Badge } from "@/components/ui/badge";
import RelatedBlogCard from "@/components/related-blog-card";
import Author from "@/components/author";

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

  const {
    title,
    cover,
    tags,
    content,
    description,
    author,
    body,
    relatedPosts = [],
  } = page;

  console.log(relatedPosts);

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
      <div className="grid grid-cols-12 max-w-[85rem] mx-auto auto-rows-auto">
        <ArticleBreadCrumbs
          className="col-start-1 col-span-8 pt-8"
          slug={slug}
        />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-left z-10 col-start-1 col-span-8 pt-8 pb-10">
          {title}
        </h1>

        <Author author={author} />

        <p className="text-lg font-light font-sans col-start-1 col-span-8 text-primary">
          Posted on August 24, 2023
        </p>

        <article className="prose prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 col-span-8">
          <p className="py-10">{purifyString(description)}</p>
          <PortableText value={body} components={portableComplex} />
        </article>

        <div className="col-start-1 col-span-8 flex gap-4 py-6">
          {tags &&
            tags.map((tag: string, key: number) => {
              return <Badge key={key}>{tag}</Badge>;
            })}
        </div>
        <ShareButtons className="col-start-1 col-span-8 py-6" />

        <div className="col-span-3 col-start-10 self-start">
          <h3>Related Posts</h3>
          {relatedPosts?.length &&
            relatedPosts.map((blog: any, key: number) => {
              return <RelatedBlogCard {...blog} key={key} />;
            })}
        </div>
      </div>

      {footer && <FooterModule module={footer} />}
    </main>
  );
}
