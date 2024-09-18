import React from "react";
import CustomImage from "../custom-image";
import { urlFor } from "@/sanity/lib/image";
import { buttonVariants } from "../ui/new-component/button";
import { BlogStucture } from "../portable-stucture";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Envelope, Mailbox } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { SectionPaddings } from "../section";

function OneMember({ module }: any) {
  const { member } = module;
  return (
    <div className="w-full grid-cols-2 grid bg-secondary ">
      <div className="w-full grid col-span-2 lg:col-span-1 h-[50vh] relative lg:h-[90vh] lg:sticky lg:top-[10vh] ">
        <CustomImage
          fill
          imageOBJ={member?.photo}
          src={urlFor(member?.photo).url()}
          alt={member?.photo?.alt}
          className="object-cover"
        />
      </div>
      <section
        className={cn(
          "grid col-span-2 lg:col-span-1 col-start-1 lg:col-start-2 w-full lg:p-24 justify-start border border-primary/40",
          SectionPaddings
        )}
      >
        <div className="flex flex-col gap-y-4 items-start justify-start">
          <h1 className="lg:text-4xl text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary ">
            {member.name}
          </h1>
          <h2 className="lg:text-xl font-sans text-primary">
            {member.professions.join(", ")}
          </h2>
          <Link
            href={"mailto:" + member.email}
            className=" text-primary text-xl lg:text-2xl underline flex items-center gap-2"
          >
            <Envelope />
            {member.email}
          </Link>
          {/* <Link
            href={"phone:" + member.phone}
            className=" text-primary text-2xl"
          >
            {member.phone}
          </Link> */}
          <Link
            className={buttonVariants({
              variant: "default",
              className: "lg:my-4",
            })}
            href={member?.contactLink?.url}
          >
            {member?.contactLink.title}
          </Link>

          <PortableText value={member.bio} components={BlogStucture} />
        </div>
      </section>
    </div>
  );
}

export default OneMember;
