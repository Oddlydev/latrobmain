import SiteBrand from "./site-brand";

export default function Footer() {
  const links = ["Privacy Policy", "Terms of Use", "IT Support", "Contact"];

  return (
    <footer className="la-footer">
      <div className="px-6 py-12 lg:px-12 lg:py-12">
        <div className="flex flex-col gap-8 md:gap-8 lg:gap-8">
          <div className="flex flex-col items-center gap-10 text-center md:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:text-left">
            <SiteBrand
              title="La Trobe University"
              subtitle="PCAT Research Programme"
              showDivider={false}
              logoWidthClass="w-[69px]"
            />

            <nav className="flex w-full flex-col items-center gap-y-4 md:w-auto md:flex-row md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-3 lg:justify-end lg:gap-x-6">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="la-footer-link w-full py-0 text-center md:w-auto lg:body-base-500 lg:text-zinc-200"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:pt-8 lg:text-left">
            <p className="la-footer-bottom lg:body-base-500 lg:text-zinc-200">
              &copy; {new Date().getFullYear()} La Trobe University - PCAT -
              Palliative Care Assessment Tool
            </p>

            <p className="la-footer-built lg:body-base-500 lg:text-zinc-200">
              Built by{" "}
              <a
                href="https://oddly.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="la-footer-oddly"
              >
                ODDLY
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
