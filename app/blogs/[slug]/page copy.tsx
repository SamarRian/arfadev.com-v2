import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/blog-card";
import ArticleBreadCrumbs from "@/components/article-breadcrumb";
import { getPost } from "@/sanity/data";
import { draftMode } from "next/headers";
import ShareButtons from "@/components/social-media-share";
import { notFound } from "next/navigation";
import { MegaMenu } from "@/components/modules/mega-menu";
import FooterModule from "@/components/modules/footer.module";
import { urlFor } from "@/sanity/lib/image";
import CustomImage from "@/components/custom-image";
import ArticleLayout from "@/components/article-layout";

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

  const { title, cover, tags, content, description, author } = page;

  return (
    <>
      {menu && <MegaMenu module={menu} />}

      <div className="relative h-[50vh] min-h-[400px] w-full px-2">
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
        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {title}
        </h1> */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"></div>
      </div>
      {/* <div className="grid grid-cols-6">
        <article className="w-full mx-auto col-start-1 col-span-4">
          <div className="max-w-4xl mx-auto px-4 py-8 ">
            <ArticleBreadCrumbs slug={slug} />
            <div className="flex items-center space-x-4 mb-6">
              <Avatar>
                {author?.photo && (
                  <AvatarImage
                    alt={author?.photo?.alt}
                    src={urlFor(author?.photo?.asset)
                      .width(70)
                      .height(70)
                      .url()}
                  />
                )}
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">
                  {author && author?.name}
                </p>
                <p className="text-sm text-gray-500">
                  Posted on August 24, 2023
                </p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p>
                As we approach 2024, the landscape of web development continues
                to evolve at a rapid pace. From new frameworks to innovative
                design paradigms, developers must stay ahead of the curve to
                create cutting-edge web experiences. In this post, we'll explore
                the key trends that are shaping the future of web development.
              </p>
              <h2>1. The Rise of AI-Powered Development Tools</h2>
              <p>
                Artificial Intelligence is no longer just a buzzword in web
                development. It's becoming an integral part of the development
                process, with AI-powered tools assisting in code generation, bug
                detection, and even design creation. These tools are not
                replacing developers but rather augmenting their capabilities,
                allowing for faster and more efficient development cycles.
              </p>
              <h2>2. Web Assembly: Breaking Performance Barriers</h2>
              <p>
                Web Assembly (Wasm) is gaining traction as a way to run
                high-performance applications in the browser. This technology
                allows developers to write code in languages like C++ or Rust
                and run it alongside JavaScript, opening up new possibilities
                for web-based applications that require near-native speed.
              </p>
              <h2>3. The Continued Evolution of JavaScript Frameworks</h2>
              <p>
                While React, Vue, and Angular continue to dominate the
                landscape, we're seeing the emergence of new frameworks and
                meta-frameworks that promise even greater performance and
                developer experience. Keep an eye on frameworks like Svelte and
                Solid, as well as full-stack solutions like Next.js and Remix.
              </p>
            </div>
            <div className="mt-8 flex space-x-4">
              {tags &&
                tags.map((tag: string, key: number) => {
                  return <Badge key={key}>{tag}</Badge>;
                })}
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <ShareButtons />
            </div>
          </div>
        </article>
      </div> */}
      <ArticleLayout page={page} />
      <div className="bg-background py-24">
        <div className="max-w-[85rem] mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {[1, 2, 3].map((i, key) => (
              <BlogCard key={key} />
            ))}
          </div>
        </div>
      </div>
      {footer && <FooterModule module={footer} />}
    </>
  );
}
