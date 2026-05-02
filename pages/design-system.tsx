import AccordionSection from "../components/design-system/AccordionSection";
import ButtonsSection from "../components/design-system/ButtonsSection";
import CardsSection from "../components/design-system/CardsSection";
import IconographySection from "../components/design-system/IconographySection";
import ShadowsSection from "../components/design-system/ShadowsSection";
import Image from "next/image";
import Layout from "../src/components/Layout";

const colorGroups = [
  {
    label: "Brand Colors",
    items: [
      { name: "Brand 1", value: "#E2231B", className: "bg-brand-1" },
      { name: "Brand 2", value: "#FFFFFF", className: "bg-brand-2" },
      { name: "Brand 3", value: "#000000", className: "bg-brand-3" },
    ],
  },
  {
    label: "Secondary Colors",
    items: [
      { name: "Brand 4", value: "#ECB95E", className: "bg-brand-4" },
      { name: "Brand 5", value: "#827842", className: "bg-brand-5" },
      { name: "Brand 6", value: "#9B6ABF", className: "bg-brand-6" },
      { name: "Brand 7", value: "#E5B6C7", className: "bg-brand-7" },
      { name: "Brand 8", value: "#ABBEC2", className: "bg-brand-8" },
      { name: "Brand 9", value: "#1C92CC", className: "bg-brand-9" },
    ],
  },
  {
    label: "Gradients",
    items: [
      {
        name: "BG Gradient - 1",
        value: "bg-gradient-1",
        className: "bg-gradient-1",
      },
    ],
  },
];

const typographyRows = [
  {
    token: "H1",
    font: "DM Sans",
    weight: "Black",
    tailwind: "text-6xl",
    lineHeight: "110%",
    letterSpacing: "tracking-normal",
    usage: "Page Titles",
  },
  {
    token: "H2",
    font: "DM Sans",
    weight: "Bold",
    tailwind: "text-4xl",
    lineHeight: "110%",
    letterSpacing: "tracking-normal",
    usage: "Page Titles",
  },
  {
    token: "H3",
    font: "DM Sans",
    weight: "Black",
    tailwind: "text-3xl",
    lineHeight: "leading-9",
    letterSpacing: "tracking-tighter",
    usage: "Page Titles",
  },
  {
    token: "H4",
    font: "DM Sans",
    weight: "Bold",
    tailwind: "text-2xl",
    lineHeight: "leading-8",
    letterSpacing: "tracking-tighter",
    usage: "Page Titles",
  },
  {
    token: "Eyebrow",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-wider",
    usage: "A Gentle Reminder That You Still Have A Map",
  },
  {
    token: "Body - Base - 600",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - L",
  },
  {
    token: "Body - Base - 500",
    font: "DM Sans",
    weight: "Medium",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - M",
  },
  {
    token: "Body - Base - 400",
    font: "DM Sans",
    weight: "Normal",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-normal",
    usage: "Main Paragraphs, Tags, Notes, Buttons, Small Elements",
  },
  {
    token: "Body - Sm - 600",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - L",
  },
  {
    token: "Body - Sm - 500",
    font: "DM Sans",
    weight: "Medium",
    tailwind: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - M",
  },
  {
    token: "Body - Sm - 400",
    font: "DM Sans",
    weight: "Normal",
    tailwind: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-normal",
    usage: "Main Paragraphs, Tags, Notes, Buttons, Small Elements",
  },
  {
    token: "Body - Xs - 600",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-xs",
    lineHeight: "leading-4",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - L",
  },
  {
    token: "Body - Xs - 500",
    font: "DM Sans",
    weight: "Medium",
    tailwind: "text-xs",
    lineHeight: "leading-4",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - M",
  },
  {
    token: "Body - Xs - 400",
    font: "DM Sans",
    weight: "Normal",
    tailwind: "text-xs",
    lineHeight: "leading-4",
    letterSpacing: "tracking-normal",
    usage: "Main Paragraphs, Tags, Notes, Buttons, Small Elements",
  },
];

function ColorSwatch({
  name,
  value,
  className,
}: {
  name: string;
  value: string;
  className: string;
}) {
  return (
    <div className="la-swatch">
      <div className={["la-swatch-chip", className].join(" ")} />
      <div className="flex items-center justify-between gap-3 p-4">
        <span className="font-semibold text-black">{name}</span>
        <span className="font-mono text-xs text-gray-400">{value}</span>
      </div>
    </div>
  );
}

function TypographicSpec({
  token,
  font,
  weight,
  tailwind,
  lineHeight,
  letterSpacing,
  usage,
}: {
  token: string;
  font: string;
  weight: string;
  tailwind: string;
  lineHeight: string;
  letterSpacing: string;
  usage: string;
}) {
  return (
    <tr className="border-b border-slate-200 last:border-b-0">
      <td className="body-sm-500 border-r border-slate-200 px-4 py-5 text-center text-black">
        {token}
      </td>
      <td className="body-sm-400 border-r border-slate-200 px-4 py-5 text-center text-black">
        {font}
      </td>
      <td className="body-sm-400 border-r border-slate-200 px-4 py-5 text-center text-black">
        {weight}
      </td>
      <td className="body-sm-400 border-r border-slate-200 px-4 py-5 text-center text-black">
        {tailwind}
      </td>
      <td className="body-sm-400 border-r border-slate-200 px-4 py-5 text-center text-black">
        {lineHeight}
      </td>
      <td className="body-sm-400 border-r border-slate-200 px-4 py-5 text-center text-black">
        {letterSpacing}
      </td>
      <td className="body-sm-400 px-4 py-5 text-center text-black">{usage}</td>
    </tr>
  );
}

export default function DesignSystemPage() {
  return (
    <Layout title="Design System">
      <main className="la-container la-shell">
        <section className="la-hero">
          <div className="la-hero-inner">
            <div className="space-y-3">
              <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider2 text-white/80">
                UI Kit
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-display-lg">
                Design System
              </h1>
            </div>
          </div>
        </section>

        <section className="la-section">
          <h2 className="h2 text-black">Colors</h2>
          <div className="la-purple-wrap space-y-6">
            {colorGroups.map((group) => (
              <div key={group.label} className="space-y-4">
                <h3 className="text-xl font-semibold text-black">
                  {group.label}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <ColorSwatch key={item.name} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="la-section">
          <div className="la-purple-wrap overflow-hidden bg-white shadow-card">
            <div className="flex items-start justify-between gap-6 bg-black px-6 py-5 text-white lg:px-8">
              <div className="space-y-1">
                <p className="text-xs font-medium leading-5 text-white/80">
                  UI KIT for La Trobe University Digital PCAT Web App &amp; Web
                </p>
                <h2 className="text-[28px] font-bold leading-9 text-white lg:text-[40px] lg:leading-[48px]">
                  Typography System for PCAT Web Page
                </h2>
              </div>
              <Image
                src="/assets/images/la-trobe-university-1.svg"
                alt="La Trobe University"
                width={85}
                height={54}
                className="h-auto w-[56px] shrink-0 lg:w-[85px]"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse">
                <thead className="bg-slate-50">
                  <tr>
                    {[
                      "Token",
                      "Font",
                      "Weight",
                      "Tailwind Classes",
                      "Line Height",
                      "Letter Spacing",
                      "Usage",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="body-xs-600 border-b border-r border-slate-200 px-4 py-4 text-center text-[#94A3B8] last:border-r-0"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {typographyRows.map((row) => (
                    <TypographicSpec key={row.token} {...row} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ShadowsSection />
        <IconographySection />
        <ButtonsSection />
        <CardsSection />
        <AccordionSection />
      </main>
    </Layout>
  );
}
