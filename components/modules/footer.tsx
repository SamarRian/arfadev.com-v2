import React from "react";
import FooterRoutes from "./footer/footer-routes";
import LanguageDropdown from "../language-dropdown";
import FooterTerms from "./footer/footer-terms";
import FooterSocials from "./footer/footer-socials";
import FooterMetaData from "./footer/footer-metadata";
import Link from "next/link";

function Footer({ module }: any) {
  const { footerRoutes, socialLinks, metaData, policies } = module;

  return (
    <footer className=" w-full bg-primary border-t-primary/30 border-t-2">
      {/* <!-- Grid --> */}
      <div className="mt-auto w-full container py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 items-end">
          <FooterMetaData {...metaData} />
          {/* <!-- End Col --> */}

          {footerRoutes.map((item: any, i: number) => {
            return <FooterRoutes {...item} key={i} />;
          })}
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="pt-5 mt-5 border-t border-secondary-foreground/30">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-col sm:flex-row items-start flex-wrap sm:items-center gap-3">
              {/* <!-- Language Dropdown --> */}
              <LanguageDropdown />
              {/* <!-- End Language Dropdown --> */}

              <FooterTerms policies={policies} />
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="mt-3 sm:hidden">
                <a
                  className="flex-none font-semibold text-xl text-secondary focus:outline-none focus:opacity-80"
                  href="#"
                  aria-label="Brand"
                >
                  Brand
                </a>
                <p className="mt-1 text-base sm:text-sm text-secondary-foreground/70">
                  © 2022 Preline.
                </p>
              </div>

              {/* <!-- Social Brands --> */}
              <FooterSocials links={socialLinks} />
              {/* <!-- End Social Brands --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary ">
        <div className="py-3 flex sm:justify-end font-sans text-xs justify-center sm:text-sm text-primary container mx-auto px-4 sm:px-6 lg:px-8">
          Website Designed & Developed by :{" "}
          <Link href={"https://www.arfadev.com"} className="underline">
            Arfa Developers
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
