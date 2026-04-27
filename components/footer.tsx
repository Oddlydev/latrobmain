import SiteBrand from "./site-brand";

export default function Footer() {
  const links = ["Privacy Policy", "Terms of Use", "IT Support", "Contact"];

  return (
    <footer className="la-footer">
      <div className="lg:px-12 lg:py-12 px-6 py-12">
        <div className="flex flex-col lg:gap-8 md:gap-8 gap-8">
          <div className="flex flex-col items-center lg:gap-5 md:gap-12 gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
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
                  className="la-footer-link w-full py-0 text-center md:w-auto"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col lg:gap-3 gap-4 border-t border-white/10 lg:pt-8 pt-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p className="la-footer-bottom">
              &copy; {new Date().getFullYear()} La Trobe University - PCAT -
              Palliative Care Assessment Tool
            </p>

            <p className="la-footer-built">
              Built by{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
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
