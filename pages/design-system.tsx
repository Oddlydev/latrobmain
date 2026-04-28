import AccordionSection from "../components/design-system/AccordionSection";
import ButtonsSection from "../components/design-system/ButtonsSection";
import CardsSection from "../components/design-system/CardsSection";
import FooterSection from "../components/design-system/FooterSection";
import IconographySection from "../components/design-system/IconographySection";
import ShadowsSection from "../components/design-system/ShadowsSection";
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
    sample: "Page Title",
    className: "h1 text-black",
  },
  {
    token: "H2",
    font: "DM Sans",
    weight: "Bold",
    tailwind: "text-4xl",
    lineHeight: "110%",
    letterSpacing: "tracking-normal",
    usage: "Page Titles",
    sample: "Page Title",
    className: "h2 text-black",
  },
  {
    token: "H3",
    font: "DM Sans",
    weight: "Black",
    tailwind: "text-3xl",
    lineHeight: "leading-9",
    letterSpacing: "tracking-tighter",
    usage: "Page Titles",
    sample: "Section Heading",
    className: "h3 text-black",
  },
  {
    token: "H4",
    font: "DM Sans",
    weight: "Bold",
    tailwind: "text-2xl",
    lineHeight: "leading-8",
    letterSpacing: "tracking-tighter",
    usage: "Page Titles",
    sample: "Subsection Heading",
    className: "h4 text-black",
  },
  {
    token: "Eyebrow",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-wider",
    usage: "A Gentle Reminder That You Still Have A Map",
    sample: "Section Label",
    className: "eyebrow",
  },
  {
    token: "Body - Base - 600",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - L",
    sample: "Body emphasis large",
    className: "body-base-600 text-black",
  },
  {
    token: "Body - Base - 500",
    font: "DM Sans",
    weight: "Medium",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - M",
    sample: "Body emphasis medium",
    className: "body-base-500 text-black",
  },
  {
    token: "Body - Base - 400",
    font: "DM Sans",
    weight: "Normal",
    tailwind: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-normal",
    usage: "Main Paragraphs, Tags, Notes, Buttons, Small Elements",
    sample: "Main paragraph text",
    className: "body-base-400 text-gray-500",
  },
  {
    token: "Body - Sm - 600",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - L",
    sample: "Small emphasis large",
    className: "body-sm-600 text-black",
  },
  {
    token: "Body - Sm - 500",
    font: "DM Sans",
    weight: "Medium",
    tailwind: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - M",
    sample: "Small emphasis medium",
    className: "body-sm-500 text-black",
  },
  {
    token: "Body - Sm - 400",
    font: "DM Sans",
    weight: "Normal",
    tailwind: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-normal",
    usage: "Main Paragraphs, Tags, Notes, Buttons, Small Elements",
    sample: "Small paragraph text",
    className: "body-sm-400 text-gray-500",
  },
  {
    token: "Body - Xs - 600",
    font: "DM Sans",
    weight: "Semibold",
    tailwind: "text-xs",
    lineHeight: "leading-4",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - L",
    sample: "Extra small emphasis",
    className: "body-xs-600 text-black",
  },
  {
    token: "Body - Xs - 500",
    font: "DM Sans",
    weight: "Medium",
    tailwind: "text-xs",
    lineHeight: "leading-4",
    letterSpacing: "tracking-normal",
    usage: "Text Emphasize - M",
    sample: "Extra small medium",
    className: "body-xs-500 text-black",
  },
  {
    token: "Body - Xs - 400",
    font: "DM Sans",
    weight: "Normal",
    tailwind: "text-xs",
    lineHeight: "leading-4",
    letterSpacing: "tracking-normal",
    usage: "Main Paragraphs, Tags, Notes, Buttons, Small Elements",
    sample: "Extra small paragraph",
    className: "body-xs-400 text-gray-500",
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
  sample,
  className,
}: {
  token: string;
  font: string;
  weight: string;
  tailwind: string;
  lineHeight: string;
  letterSpacing: string;
  usage: string;
  sample: string;
  className: string;
}) {
  return (
    <tr className="border-b border-slate-200 last:border-b-0">
      <td className="body-sm-500 px-4 py-5 text-center text-black">{token}</td>
      <td className="body-sm-400 px-4 py-5 text-center text-gray-500">
        {font}
      </td>
      <td className="body-sm-400 px-4 py-5 text-center text-gray-500">
        {weight}
      </td>
      <td className="px-4 py-5 text-center font-mono text-xs font-semibold text-gray-500">
        {tailwind}
      </td>
      <td className="px-4 py-5 text-center font-mono text-xs font-semibold text-gray-500">
        {lineHeight}
      </td>
      <td className="px-4 py-5 text-center font-mono text-xs font-semibold text-gray-500">
        {letterSpacing}
      </td>
      <td className="body-sm-400 px-4 py-5 text-center text-black">{usage}</td>
      <td className="min-w-[220px] px-4 py-5">
        <p className={className}>{sample}</p>
      </td>
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
          <h2 className="h2 text-black">Typography System</h2>
          <div className="la-purple-wrap overflow-hidden bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] border-collapse">
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
                      "Sample",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="body-xs-600 border-b border-slate-200 px-4 py-4 text-center text-gray-400"
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
