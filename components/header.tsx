import { gql } from "@apollo/client";
import Link from "next/link";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { useRouter } from "next/router";
import Button from "./ui/Button";
import SiteBrand from "./site-brand";

interface MenuItem {
  id: string;
  uri: string;
  label: string;
}

interface HeaderProps {
  siteTitle?: string;
  siteDescription?: string;
  menuItems?: MenuItem[];
}

const fallbackMenu = [
  { id: "about", uri: "/#about", label: "About" },
  { id: "features", uri: "/#features", label: "Features" },
  { id: "how-it-works", uri: "/#how-it-works", label: "How It Works" },
  { id: "team", uri: "/#team", label: "Team" },
  { id: "faq", uri: "/#faq", label: "FAQ" },
  { id: "contact", uri: "/#contact", label: "Contact" },
];

const homeSectionLinks: Record<string, string> = {
  about: "/#about",
  "about-us": "/#about",
  "about-the-project": "/#about",
  features: "/#features",
  "core-features": "/#features",
  "how-it-works": "/#how-it-works",
  team: "/#team",
  faq: "/#faq",
  contact: "/#contact",
};

function slugifyLabel(label: string) {
  return label
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getHomeSectionHref(item: MenuItem) {
  const labelHref = homeSectionLinks[slugifyLabel(item.label)];

  if (labelHref) {
    return labelHref;
  }

  if (item.uri?.startsWith("#")) {
    return `/${item.uri}`;
  }

  return item.uri || "/";
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.99902 11.9969H19.9949"
        stroke="#E4E4E7"
        stroke-width="1.99948"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.99902 5.99841H19.9949"
        stroke="#E4E4E7"
        stroke-width="1.99948"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.99902 17.9954H19.9949"
        stroke="#E4E4E7"
        stroke-width="1.99948"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17.9954 5.99841L5.99854 17.9953"
        stroke="#E4E4E7"
        strokeWidth="1.99948"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99854 5.99841L17.9954 17.9953"
        stroke="#E4E4E7"
        strokeWidth="1.99948"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header({
  siteTitle,
  siteDescription,
  menuItems,
}: HeaderProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () =>
      fallbackMenu.map((item) => ({
        ...item,
        uri: getHomeSectionHref(item),
      })),
    [],
  );

  useEffect(() => {
    void router.prefetch("/");
  }, [router]);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (typeof window === "undefined" || !href.startsWith("/#")) {
      return;
    }

    const targetId = href.slice(2);
    const target = document.getElementById(targetId);

    if (!target || window.location.pathname !== "/") {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();
    setMenuOpen(false);
    window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior: "auto", block: "start" });
  }

  useEffect(() => {
    if (!menuOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-gray-200 bg-gradient-1 text-white shadow-md">
      <div className="px-4 py-4 lg:px-12">
        <div className="flex items-center justify-between gap-4 lg:hidden">
          <Link
            href="/"
            className="min-w-0 outline-none focus:outline-none focus-visible:outline-none"
          >
            <SiteBrand subtitle="Palliative Care Assessment Tool" />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="hidden items-center justify-between gap-4 lg:flex">
          <Link
            href="/"
            className="min-w-0 outline-none focus:outline-none focus-visible:outline-none"
          >
            <SiteBrand subtitle="Palliative Care Assessment Tool" />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.uri}
                  className="body-base-500 border-b border-transparent text-zinc-200 transition-[border-color] hover:border-brand-1"
                  onClick={(event) => handleNavClick(event, item.uri)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <span className="h-6 w-px bg-gray-200/80" aria-hidden="true" />
            <Button href="/" className="la-button-compact whitespace-nowrap">
              Access Tool
            </Button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="la-mobile-menu lg:hidden">
          <div className="px-4 py-4">
            <div className="flex flex-col gap-5">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.uri}
                    className="la-mobile-menu-link"
                    onClick={(event) => {
                      handleNavClick(event, item.uri);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Button href="/" className="la-button-compact whitespace-nowrap">
                Access Tool
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
    }
  `,
};
