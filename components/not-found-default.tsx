import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function NotFoundDefault() {
  return (
    <main className="w-full h-screen bg-secondary flex items-center flex-col justify-center">
      <h1 className="text-primary text-8xl font-serif font-bold lg:mb-6 md:mb-4 sm:mb-2 mb-1">
        404
      </h1>
      <p className="text-lg mb-8 font-sans">Seems like you got lost.</p>
      <Link className={buttonVariants({ variant: "outline" })} href={"/"}>
        Back To Homepage
      </Link>
    </main>
  );
}

export default NotFoundDefault;
