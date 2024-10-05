import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CaretLeft, Heart } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { urlFor } from "@/sanity/lib/image";
import ShareButtons from "./social-media-share";

function ArticleLayout(page: any) {
  const { author, tags = [] } = page;
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline"
                href="blogs"
              >
                <CaretLeft />
                Back to Blog
              </Link>

              <h2 className="text-3xl font-bold lg:text-5xl">
                Announcing a free plan for small teams
              </h2>

              <div className="flex items-center gap-x-5">
                <a
                  className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  href="#"
                >
                  Company News
                </a>
                <time className="text-xs sm:text-sm text-gray-800">
                  January 18, 2023
                </time>
              </div>

              <article>testingi content</article>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                <div>
                  {tags.map((tag: string, key: number) => {
                    return (
                      <Link href={`blogs/${tag.toLowerCase()}`} key={tag}>
                        <Badge>{tag}</Badge>
                      </Link>
                    );
                  })}
                </div>

                <div className="flex justify-end items-center gap-x-1.5">
                  <div className="hs-tooltip inline-block">
                    <button
                      type="button"
                      className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                    >
                      <Heart />
                      875
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                        role="tooltip"
                      >
                        Like
                      </span>
                    </button>
                  </div>

                  <div className="block h-3 border-e border-gray-300 mx-3"></div>

                  <div className="block h-3 border-e border-gray-300 mx-3"></div>

                  <ShareButtons />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 lg:w-full lg:h-full bg-secondary">
          <div className="sticky top-0 start-0 py-8 lg:ps-8">
            <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8">
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

              <a className="group grow block focus:outline-none" href="">
                <p className="group-hover:text-gray-600 group-focus:text-gray-600 text-sm font-semibold text-gray-800">
                  Leyla Ludic
                </p>
                <p className="text-sm text-gray-500">UI/UX enthusiast</p>
              </a>

              {/* <div className="grow">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" x2="19" y1="8" y2="14" />
                      <line x1="22" x2="16" y1="11" y2="11" />
                    </svg>
                    Follow
                  </button>
                </div>
              </div> */}
            </div>

            <div className="space-y-6">
              <a
                className="group flex items-center gap-x-6 focus:outline-none"
                href="#"
              >
                <div className="grow">
                  <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                    5 Reasons to Not start a UX Designer Career in 2022/2023
                  </span>
                </div>

                <div className="shrink-0 relative rounded-lg overflow-hidden size-20">
                  <img
                    className="size-full absolute top-0 start-0 object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                    alt="Blog Image"
                  />
                </div>
              </a>

              <a
                className="group flex items-center gap-x-6 focus:outline-none"
                href="#"
              >
                <div className="grow">
                  <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                    If your UX Portfolio has this 20% Well Done, it Will Give
                    You an 80% Result
                  </span>
                </div>

                <div className="shrink-0 relative rounded-lg overflow-hidden size-20">
                  <img
                    className="size-full absolute top-0 start-0 object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                    alt="Blog Image"
                  />
                </div>
              </a>

              <a
                className="group flex items-center gap-x-6 focus:outline-none"
                href="#"
              >
                <div className="grow">
                  <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                    7 Principles of Icon Design
                  </span>
                </div>

                <div className="shrink-0 relative rounded-lg overflow-hidden size-20">
                  <img
                    className="size-full absolute top-0 start-0 object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                    alt="Blog Image"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLayout;
