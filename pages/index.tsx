import { useEffect, useRef, useState, type ReactNode } from "react";
import Layout from "../src/components/Layout";
import Button from "../components/ui/Button";
import Accordion from "../components/ui/Accordion";
import heroImage1 from "../assets/images/hero-img-1.png";
import heroImage2 from "../assets/images/hero-img-2.png";
import heroImage3 from "../assets/images/hero-img-3.png";
import heroImage4 from "../assets/images/hero-img-4.png";
import heroImage5 from "../assets/images/hero-img-5.png";
import {
  ClipboardIcon,
  DocumentIcon,
  MailIcon,
  TargetIcon,
} from "../components/design-system/icons";

const LOGIN_URL =
  "https://hzb21crtlga4y8d2dror4g9us.js.wpenginepowered.com/login/";

function SectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={["eyebrow", className].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  centered = false,
  className,
}: {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={[
        "h2 text-black",
        centered ? "text-center" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </h2>
  );
}

function SectionLead({
  children,
  centered = false,
  className,
}: {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <p
      className={[
        "body-base-400 max-w-lg text-gray-500",
        centered ? "mx-auto text-center" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}

function SectionAnchor({ id }: { id: string }) {
  return <span id={id} className="block scroll-mt-4" aria-hidden="true" />;
}

const ABOUT_FEATURE_CARDS = [
  {
    title: "Research Objective",
    description:
      "Develop and validate an AI-powered screening tool that identifies aged care residents with unmet palliative care needs earlier and more accurately than current practice.",
    icon: <TargetIcon size={24} />,
  },
  {
    title: "Target Population",
    description:
      "Residents of Australian residential aged care facilities, with a focus on those with complex chronic conditions, dementia, and advanced frailty.",
    icon: <UsersIcon />,
  },
  {
    title: "Methodology",
    description:
      "Mixed-methods approach combining clinical data analysis, machine learning model development, and co-design with aged care staff, residents, and families.",
    icon: <MicroscopeIcon />,
  },
  {
    title: "Expected Outcome",
    description:
      "An AI first evidence based prototype for aged care providers to support policy recommendations for palliative care identification in residential and community settings.",
    icon: <ClipboardIcon size={24} />,
  },
];

const HOW_IT_WORKS_FEATURE_CARDS = [
  {
    title: "Research-Validated Assessments",
    description:
      "Complete structured palliative care assessments built on peer-reviewed methodology. Forms are standardised, auto-timestamped, and designed so no critical clinical indicator is ever overlooked.",
    icon: <ClipboardIcon size={24} />,
  },
  {
    title: "Risk Flagging & Escalation",
    description:
      "Assessment responses automatically surface risk indicators and suggest appropriate clinical actions. Senior nurses and administrators can filter all patients by risk level, ensuring priority cases are always visible.",
    icon: <AlertTriangleIcon />,
  },
  {
    title: "AI-First Design",
    description:
      "PCAT is architected from the ground up to integrate AI capabilities - enabling future features like predictive risk scoring, clinical trend analysis, and intelligent decision support.",
    icon: <SparkIcon />,
  },
  {
    title: "Trend Monitoring",
    description:
      "Visualise a patient's assessment score history and a model-generated 48-hour forecast - giving nurses an early signal of deterioration before it becomes critical.",
    icon: <TrendUpIcon />,
  },
  {
    title: "Multi-Centre Support",
    description:
      "PCAT supports multiple aged care centres under the same programme. Each nurse sees only the patients assigned to their facility, while coordinators retain a cross-centre overview.",
    icon: <DocumentIcon size={24} />,
  },
  {
    title: "Secure Access",
    description:
      "Nurses and administrators operate within tailored permission sets. Full audit logging ensures accountability, and all patient data is protected behind authenticated, encrypted access.",
    icon: <ShieldIcon />,
  },
];

function UsersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H7C5.93913 15 4.92172 15.4214 4.17157 16.1716C3.42143 16.9217 3 17.9391 3 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11C11.7091 11 13.5 9.20914 13.5 7C13.5 4.79086 11.7091 3 9.5 3C7.29086 3 5.5 4.79086 5.5 7C5.5 9.20914 7.29086 11 9.5 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21V19C20.9993 18.1137 20.7044 17.2528 20.1614 16.5523C19.6184 15.8519 18.8581 15.3516 18 15.13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 3.13C16.3608 3.3503 17.1235 3.8507 17.6689 4.5523C18.2142 5.25391 18.5102 6.11683 18.5102 7.005C18.5102 7.89317 18.2142 8.75609 17.6689 9.4577C17.1235 10.1593 16.3608 10.6597 15.5 10.88"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MicroscopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 18H14"
        stroke="#E2231B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 22H21"
        stroke="#E2231B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 22C15.8565 22 17.637 21.2625 18.9497 19.9497C20.2625 18.637 21 16.8565 21 15C21 13.1435 20.2625 11.363 18.9497 10.0503C17.637 8.7375 15.8565 8 14 8H13"
        stroke="#E2231B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 14H11"
        stroke="#E2231B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12C8.46957 12 7.96086 11.7893 7.58579 11.4142C7.21071 11.0391 7 10.5304 7 10V6H13V10C13 10.5304 12.7893 11.0391 12.4142 11.4142C12.0391 11.7893 11.5304 12 11 12H9Z"
        stroke="#E2231B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 6V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H9C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3V6"
        stroke="#E2231B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function AlertTriangleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10.29 3.86002L1.82 18C1.64538 18.3024 1.55301 18.6453 1.55212 18.9945C1.55123 19.3437 1.64186 19.6871 1.81494 19.9904C1.98803 20.2937 2.2376 20.5464 2.53879 20.7231C2.83999 20.8998 3.18249 20.9943 3.532 20.997H20.468C20.8175 20.9943 21.16 20.8998 21.4612 20.7231C21.7624 20.5464 22.012 20.2937 22.1851 19.9904C22.3581 19.6871 22.4488 19.3437 22.4479 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86002C13.5328 3.56613 13.2828 3.32289 12.9842 3.15402C12.6856 2.98515 12.3484 2.89648 12.0055 2.89648C11.6625 2.89648 11.3254 2.98515 11.0268 3.15402C10.7282 3.32289 10.4782 3.56613 10.301 3.86002H10.29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L13.9 8.1L19 10L13.9 11.9L12 17L10.1 11.9L5 10L10.1 8.1L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 3V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendUpIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 17L9 11L13 15L21 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7H21V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AboutFeatureTile({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <article className="la-card-type-2 h-full">
      <div className="la-feature-icon mb-4">{icon}</div>
      <h3 className="body-base-600 text-black">{title}</h3>
      <p className="body-base-400 mt-2 text-gray-500">{description}</p>
    </article>
  );
}

function HomeHeroSection() {
  const heroImages = [
    heroImage1.src,
    heroImage2.src,
    heroImage3.src,
    heroImage4.src,
    heroImage5.src,
  ];
  const heroHighlights = [
    {
      title: "Real-time",
      description: "Assessment documentation",
      icon: <ClipboardIcon size={20} />,
    },
    {
      title: "Secure",
      description: "Role-based nurse access",
      icon: <MailIcon size={20} />,
    },
    {
      title: "Analytics",
      description: "Patient outcome tracking",
      icon: <TargetIcon size={20} />,
    },
    {
      title: "AI-First",
      description: "Built for intelligent care",
      icon: <DocumentIcon size={20} />,
    },
  ];
  const [heroImageSrc, setHeroImageSrc] = useState(heroImages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setHeroImageSrc(heroImages[randomIndex]);
  }, []);

  return (
    <section id="top" className="scroll-mt-24">
      <div className="relative overflow-hidden border border-gray-800 bg-black text-white shadow-soft">
        <img
          src={heroImageSrc}
          alt="Nurse assisting an elderly patient"
          className="absolute inset-x-0 bottom-[285px] h-[270px] w-full object-cover sm:inset-0 sm:h-full"
        />
        <div className="absolute inset-0 bg-black/10 sm:bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050814] to-black/10 sm:bg-gradient-to-r sm:from-black sm:via-black/90 sm:to-black/20" />
        <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-black via-[#040816]/95 to-transparent sm:block" />

        <div className="relative px-6 pt-10 pb-78.75 sm:px-12 sm:pt-12 sm:pb-24 lg:pl-37.5 lg:pr-10 lg:pt-44.25 lg:pb-44.25">
          <div className="max-w-155 lg:max-w-154">
            <p className="body-base-500 inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-white shadow-sm">
              <span className="la-hero-status-dot h-2.5 w-2.5 rounded-full bg-green-500" />
              La Trobe Palliative Care Research Programme
            </p>

            <div className="mt-3 space-y-3 sm:mt-3 sm:space-y-3 lg:mt-12 lg:space-y-0">
              <h1 className="h1 text-white">
                <span className="block">Palliative Care</span>
                <span className="mt-1 block text-brand-1 lg:mt-0">
                  Assessment Tool
                </span>
              </h1>

              <p className="body-base-400 max-w-160 pt-2 text-gray-100 lg:pt-6">
                PCAT is a research-backed digital platform developed at La Trobe
                University to help nursing teams in aged care identify patients
                who need palliative care earlier, more consistently, and with
                confidence. Structured assessments, predictive trend analysis,
                and clear escalation pathways, all in one secure portal.
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-3 sm:mt-3 sm:gap-4 lg:mt-12 lg:gap-4">
              <a
                href={LOGIN_URL}
                className="la-button la-button-primary justify-center shadow-la-shadow-2"
              >
                Access PCAT Tool
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Button
                href="#about"
                variant="secondary"
                className="justify-center border-gray-200 bg-gray-50 shadow-sm"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-black to-gray-900 px-6 py-10 sm:px-10 sm:py-10 lg:px-7 lg:py-7">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {heroHighlights.map((item) => (
              <article key={item.title} className="la-card-type-1">
                <div className="la-feature-icon">{item.icon}</div>
                <div>
                  <p className="body-base-600 text-black">{item.title}</p>
                  <p className="body-base-400 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  function StatRow({
    label,
    value,
    valueClassName,
  }: {
    label: string;
    value: string;
    valueClassName?: string;
  }) {
    return (
      <div className="grid grid-cols-1 gap-3 border-b border-gray-200 px-6 py-8 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)] md:items-center md:gap-6 md:px-8 md:py-10">
        <p className="body-base-600 text-gray-600 md:text-xl md:uppercase md:leading-8 md:tracking-[-0.8px]">
          {label}
        </p>
        <p
          className={[
            "body-base-400 text-black md:justify-self-end md:text-right md:text-xl md:leading-8",
            valueClassName ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {value}
        </p>
      </div>
    );
  }

  return (
    <section className="la-container pt-20 pb-20">
      <SectionAnchor id="about" />
      <div className="space-y-12">
        <div className="max-w-[695px] space-y-0">
          <SectionEyebrow className="text-red-600">
            About the project
          </SectionEyebrow>
          <SectionTitle className="mt-2 max-w-[695px] text-black">
            Identifying palliative care needs - earlier, and with confidence
          </SectionTitle>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <SectionLead className="max-w-[695px] text-gray-600">
              PCAT was developed under Professor Hanan Khalil's initiative at La
              Trobe University to close a critical gap in aged care nursing: the
              timely identification of patients who would benefit from
              palliative care. Where nurses once relied on fragmented paper
              forms and disconnected processes, PCAT brings everything into one
              structured, evidence-based digital workflow.
            </SectionLead>

            <div className="rounded-xl border-4 border-brand-1 bg-white px-4 py-4 shadow-none sm:px-6 sm:py-5 lg:px-6 lg:py-6">
              <p className="font-display text-lg font-semibold leading-6 tracking-normal text-black lg:text-xl lg:leading-7">
                PCAT is an evidence based palliative care assessment toolkit
                that is designed to flag palliative care needs. Nurses can
                complete assessments, monitor patient health trends over time,
                review full care histories, and ensure no at-risk patient goes
                unnoticed — all from a single secure portal, on any device.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-gray-300 bg-white/[0.42] shadow-none backdrop-blur-[2px]">
            <StatRow label="Project title" value="PCAT for Aged Care" />
            <StatRow
              label="Funding"
              value="The Aged Care Research and Industry Innovation Australia fund (ARIIA)"
              valueClassName="md:max-w-[420px]"
            />
            <StatRow label="Institution" value="La Trobe University" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFeatureCardsSection() {
  return (
    <section className="la-container pb-20">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {ABOUT_FEATURE_CARDS.map((item) => (
          <AboutFeatureTile key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function CoreFeaturesSection() {
  const cards = [
    {
      id: "card-3",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/69a02c8ce316d2d52fb84c99_Pigment%20interface%20with%20agents.avif",
      alt: "Pigment interface with agents",
      className:
        "left-[50%] top-3 h-[260px] w-[246px] -translate-x-1/2 sm:h-[306px] sm:w-[292px] lg:h-[380px] lg:w-[350px]",
    },
    {
      id: "card-1",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/69a02c8c2f60c5e135054b8a_Exec%20summary%20dashboard%20built%20in%20Pigment%20with%20multiple%20avatars.avif",
      alt: "Pigment executive summary dashboard",
      className:
        "left-3 top-4 h-[170px] w-[220px] sm:left-4 sm:top-5 sm:h-[194px] sm:w-[248px] lg:left-5 lg:top-6 lg:h-[206px] lg:w-[264px]",
    },
    {
      id: "card-2",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/68b9466ba40047ddced91d36_The%20Planner.png",
      alt: "The Planner",
      className:
        "left-4 bottom-10 h-[220px] w-[150px] sm:left-5 sm:bottom-11 sm:h-[252px] sm:w-[164px] lg:left-6 lg:bottom-12",
    },
    {
      id: "card-4",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/69a02c8c406f542c573c94d0_Sales%20performance%20dashboard%20with%20dimensions%20widget%20in%20Pigment.avif",
      alt: "Sales performance dashboard in Pigment",
      className:
        "right-3 top-5 h-[174px] w-[260px] sm:right-4 sm:top-6 sm:h-[198px] sm:w-[286px] lg:right-5 lg:top-7 lg:h-[210px] lg:w-[304px]",
    },
    {
      id: "card-7",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/69a02c8c2f60c5e135054b8a_Exec%20summary%20dashboard%20built%20in%20Pigment%20with%20multiple%20avatars.avif",
      alt: "Pigment executive summary dashboard duplicate",
      className:
        "left-[2%] top-[340px] h-[174px] w-[174px] sm:left-[3%] sm:top-[360px] sm:h-[190px] sm:w-[190px] lg:left-[20%] lg:top-[82px] lg:h-[380px] lg:w-[350px]",
    },
    {
      id: "card-8",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/69a02c8ce316d2d52fb84c99_Pigment%20interface%20with%20agents.avif",
      alt: "Pigment interface with agents duplicate",
      className:
        "right-2 bottom-12 h-[178px] w-[214px] sm:right-3 sm:bottom-14 sm:h-[204px] sm:w-[238px] lg:right-5%] lg:bottom-16 lg:h-[380px] lg:w-[350px]",
    },
    {
      id: "card-5",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/69a02f12aeeb5a41944bdddc_Planner%20agent%20in%20Pigment.avif",
      alt: "Planner agent in Pigment",
      className:
        "left-[42%] bottom-16 h-[156px] w-[166px] sm:left-[43%] sm:bottom-18 sm:h-[176px] sm:w-[186px] lg:left-[44%] lg:bottom-20",
    },
    {
      id: "card-6",
      src: "https://cdn.prod.website-files.com/6605b12132f6a8b5d23896bd/69171b5361f899e57b107f20_Anthropic.jpg",
      alt: "Anthropic planning visual",
      className:
        "right-3 top-[82px] h-[172px] w-[140px] sm:right-4 sm:top-[92px] sm:h-[190px] sm:w-[156px] lg:right-5 lg:top-[100px]",
    },
  ];

  const phases = [
    {
      overlay: "rgba(255, 233, 233, 0.94)",
      shadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 9px 122px 22px rgba(226, 35, 27, 0.42)",
    },
    {
      overlay: "rgba(236, 247, 255, 0.94)",
      shadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 9px 122px 22px rgba(59, 130, 246, 0.30)",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [cycleStep, setCycleStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);

    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive || reduceMotion) {
      return;
    }

    let intervalId = 0;
    let timeoutId = 0;
    const revealIntervalMs = 180;
    const holdMs = 2200;
    const stageDurationMs = revealIntervalMs * Math.max(0, cards.length - 1);

    if (cycleStep === 0) {
      setVisibleCount(1);
      intervalId = window.setInterval(() => {
        setVisibleCount((current) => Math.min(cards.length, current + 1));
      }, revealIntervalMs);
      timeoutId = window.setTimeout(() => {
        window.clearInterval(intervalId);
        setVisibleCount(cards.length);
        setCycleStep(1);
      }, stageDurationMs + holdMs);
    } else if (cycleStep === 1) {
      setVisibleCount(cards.length);
      timeoutId = window.setTimeout(() => {
        setCycleStep(2);
      }, holdMs);
    } else if (cycleStep === 2) {
      setVisibleCount(cards.length);
      intervalId = window.setInterval(() => {
        setVisibleCount((current) => Math.max(1, current - 1));
      }, revealIntervalMs);
      timeoutId = window.setTimeout(() => {
        window.clearInterval(intervalId);
        setVisibleCount(1);
        setCycleStep(3);
      }, stageDurationMs);
    } else {
      setVisibleCount(1);
      timeoutId = window.setTimeout(() => {
        setCycleStep(0);
      }, holdMs);
    }

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [cycleStep, isActive, reduceMotion]);

  const activePhase = phases[cycleStep < 2 ? 0 : 1];

  return (
    <section ref={sectionRef} className="pt-20 pb-12">
      <SectionAnchor id="features" />
      <div className="la-container">
        <div className="space-y-12">
          <div className="max-w-215 space-y-2">
            <p className="eyebrow text-red-600">Core Features</p>
            <h2 className="h2 text-black lg:max-w-lg">
              Everything nurses need, nothing they don&apos;t
            </h2>
          </div>

          <div
            className="relative mx-auto h-44.5 w-full max-w-323.75 overflow-hidden rounded-lg border border-[#F1D7D7] shadow-[0_16px_48px_rgba(226,35,27,0.08)] sm:h-[420px] lg:h-[690px]"
            style={{
              background:
                "url('/assets/images/Container.png') lightgray 0% 0% / 100px 100px repeat, #FFF",
            }}
          >
            <img
              src="/assets/images/Container.png"
              alt="PCAT product screens and aged care imagery"
              className="absolute inset-0 h-full w-full object-cover sm:hidden"
            />
            <div
              className="absolute inset-0 hidden transition-all duration-700 ease-out sm:block"
              style={{
                background: activePhase.overlay,
              }}
            />

            <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_52%)] sm:block" />

            <div className="relative h-full overflow-hidden px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
              {cards.map((card, index) => {
                const isPrimary = card.id === "card-3";
                const isVisible =
                  cycleStep === 3 ? isPrimary : index < visibleCount;
                const enterDelay = `${index * 110}ms`;
                const exitDelay = `${(cards.length - index) * 90}ms`;
                const transitionDelay =
                  cycleStep === 0
                    ? enterDelay
                    : cycleStep === 2
                      ? exitDelay
                      : "0ms";

                return (
                  <article
                    key={card.id}
                    aria-label={card.alt}
                    className={[
                      "absolute hidden overflow-hidden rounded-sm border-[5px] border-white bg-white transition-all duration-700 ease-out sm:block",
                      card.className,
                      isVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95",
                    ].join(" ")}
                    style={{
                      backgroundColor: "#D3D3D3",
                      backgroundImage: `url('${card.src}')`,
                      backgroundPosition: "50%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      boxShadow: activePhase.shadow,
                      transitionDelay,
                      zIndex: isPrimary ? 4 : index + 1,
                    }}
                  ></article>
                );
              })}

              <div className="absolute inset-0 rounded-lg ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksFeatureCardsSection() {
  return (
    <section className="la-container pb-20">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {HOW_IT_WORKS_FEATURE_CARDS.map((item) => (
          <article key={item.title} className="la-card-type-3 h-full">
            <div className="la-feature-icon mb-6">{item.icon}</div>
            <h3 className="body-base-600 text-black">{item.title}</h3>
            <p className="body-base-400 mt-4 text-gray-500">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  type Step = {
    id: string;
    number: string;
    title: string;
    description: string;
    side: "left" | "right";
    icon: ReactNode;
  };

  function IconLock() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20.3572 11.7854H5.35715C4.17368 11.7854 3.21429 12.7448 3.21429 13.9283V21.4283C3.21429 22.6117 4.17368 23.5711 5.35715 23.5711H20.3572C21.5406 23.5711 22.5 22.6117 22.5 21.4283V13.9283C22.5 12.7448 21.5406 11.7854 20.3572 11.7854Z"
          stroke="currentColor"
          strokeWidth="2.14286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.50006 11.7854V7.49972C7.50006 6.07892 8.06447 4.71631 9.06913 3.71165C10.0738 2.70699 11.4364 2.14258 12.8572 2.14258C14.278 2.14258 15.6406 2.70699 16.6453 3.71165C17.6499 4.71631 18.2143 6.07892 18.2143 7.49972V11.7854"
          stroke="currentColor"
          strokeWidth="2.14286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function IconSearch() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M11.7837 20.3539C16.5168 20.3539 20.3537 16.5169 20.3537 11.7839C20.3537 7.05079 16.5168 3.21387 11.7837 3.21387C7.05066 3.21387 3.21375 7.05079 3.21375 11.7839C3.21375 16.5169 7.05066 20.3539 11.7837 20.3539Z"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.4962 22.4965L17.8898 17.8901"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function IconChecklist() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.21375 18.2113L5.35625 20.3538L9.64124 16.0688"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.21375 7.49895L5.35625 9.64145L9.64124 5.35645"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9262 6.42725H22.4962"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9262 12.855H22.4962"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9262 19.2827H22.4962"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function IconBell() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10.9996 22.4961C11.1877 22.8218 11.4581 23.0922 11.7838 23.2802C12.1095 23.4683 12.479 23.5672 12.855 23.5672C13.2311 23.5672 13.6006 23.4683 13.9262 23.2802C14.2519 23.0922 14.5224 22.8218 14.7104 22.4961"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5675 8.57008C23.5675 6.1062 22.7105 3.9637 21.425 2.14258"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.49442 16.4181C3.35448 16.5714 3.26213 16.7622 3.2286 16.9671C3.19507 17.172 3.22181 17.3822 3.30557 17.5722C3.38933 17.7622 3.52649 17.9238 3.70038 18.0372C3.87426 18.1507 4.07737 18.2112 4.28501 18.2113H21.425C21.6326 18.2114 21.8358 18.1512 22.0098 18.0379C22.1838 17.9246 22.3211 17.7633 22.4051 17.5734C22.4891 17.3836 22.5161 17.1734 22.4828 16.9685C22.4495 16.7635 22.3574 16.5727 22.2177 16.4191C20.793 14.9504 19.2825 13.3896 19.2825 8.57008C19.2825 6.8654 18.6053 5.23054 17.3999 4.02515C16.1945 2.81976 14.5597 2.14258 12.855 2.14258C11.1503 2.14258 9.51547 2.81976 8.31008 4.02515C7.10469 5.23054 6.42751 6.8654 6.42751 8.57008C6.42751 13.3896 4.91597 14.9504 3.49442 16.4181Z"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.28496 2.14258C2.99946 3.9637 2.14246 6.1062 2.14246 8.57008"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function IconTrend() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M23.5675 7.49854L14.4618 16.6042L9.10558 11.2479L2.14246 18.211"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.14 7.49854H23.5675V13.926"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function IconNode() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21.425 14.9976H17.14C15.9567 14.9976 14.9975 15.9568 14.9975 17.1401V21.4251C14.9975 22.6083 15.9567 23.5676 17.14 23.5676H21.425C22.6083 23.5676 23.5675 22.6083 23.5675 21.4251V17.1401C23.5675 15.9568 22.6083 14.9976 21.425 14.9976Z"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.56996 2.14258H4.28496C3.10169 2.14258 2.14246 3.10181 2.14246 4.28508V8.57008C2.14246 9.75335 3.10169 10.7126 4.28496 10.7126H8.56996C9.75323 10.7126 10.7125 9.75335 10.7125 8.57008V4.28508C10.7125 3.10181 9.75323 2.14258 8.56996 2.14258Z"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.49872 14.9976V16.0688C7.49872 16.637 7.72445 17.182 8.12624 17.5838C8.52804 17.9856 9.07299 18.2113 9.64122 18.2113H10.7125"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9975 7.49854H16.0687C16.637 7.49854 17.1819 7.72426 17.5837 8.12606C17.9855 8.52786 18.2112 9.07281 18.2112 9.64104V10.7123"
          stroke="currentColor"
          strokeWidth="2.1425"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  const steps: Step[] = [
    {
      id: "s1",
      number: "01",
      title: "Log in securely",
      description:
        "Use your PCAT credentials to access the portal. Your assigned facility and patient list load automatically upon sign-in.",
      side: "left",
      icon: <IconLock />,
    },
    {
      id: "s2",
      number: "02",
      title: "Select your patient",
      description:
        "Browse your patient list filtered by risk level, recent activity, or name. High-priority patients are surfaced immediately.",
      side: "right",
      icon: <IconSearch />,
    },
    {
      id: "s3",
      number: "03",
      title: "Complete the assessment",
      description:
        "Work through the structured, research-validated assessment form. Guided prompts ensure every clinical indicator is captured.",
      side: "left",
      icon: <IconChecklist />,
    },
    {
      id: "s4",
      number: "04",
      title: "Review suggested actions",
      description:
        "Based on the assessment responses, PCAT surfaces recommended clinical actions and flags risk indicators.",
      side: "right",
      icon: <IconBell />,
    },
    {
      id: "s5",
      number: "05",
      title: "View Trends & Predictive Analysis",
      description:
        "Examine an interactive chart showing the patient's assessment score history over the past 7 days, alongside a model-generated trend forecast.",
      side: "left",
      icon: <IconTrend />,
    },
    {
      id: "s6",
      number: "06",
      title: "Hand over seamlessly",
      description:
        "At the end of each shift, PCAT compiles an up-to-date summary of each patient's status, recent assessments, and outstanding actions.",
      side: "right",
      icon: <IconNode />,
    },
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [lineFillHeight, setLineFillHeight] = useState(0);
  const [filledSteps, setFilledSteps] = useState<boolean[]>(() =>
    steps.map(() => false),
  );

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const nextFillHeight = Math.min(
        trackRect.height,
        Math.max(0, window.innerHeight * 0.72 - trackRect.top),
      );

      setLineFillHeight(nextFillHeight);
      setFilledSteps(
        stepRefs.current.map((stepElement) => {
          if (!stepElement) {
            return false;
          }

          const rect = stepElement.getBoundingClientRect();
          const stepCenterWithinTrack =
            rect.top - trackRect.top + rect.height / 2;

          return stepCenterWithinTrack <= nextFillHeight;
        }),
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section>
      <SectionAnchor id="how-it-works" />
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 sm:p-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(226,35,27,0.045) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="relative z-10 mb-5 text-left sm:mb-7 lg:mb-10 lg:text-center">
          <p className="eyebrow text-brand-1">How It Works</p>
          <h2 className="h2 mt-5 text-black sm:mt-7 lg:mt-2">
            From login to care record in minutes
          </h2>
        </div>

        <div className="relative z-10">
          <div
            ref={trackRef}
            className="absolute bottom-6 top-6 left-5 w-0.5 rounded-full bg-red-100 lg:left-1/2 lg:w-1 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <div
              className="w-full rounded-full bg-brand-1 transition-all duration-200 ease-out"
              style={{ height: `${lineFillHeight}px` }}
            />
          </div>

          <div className="space-y-10 lg:space-y-16">
            {steps.map((step, stepIndex) => {
              const isLeft = step.side === "left";
              const isStepFilled = filledSteps[stepIndex] ?? false;

              return (
                <div
                  key={step.id}
                  className="relative grid grid-cols-[auto_1fr] items-start gap-x-4 py-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-5"
                >
                  <div
                    ref={(element) => {
                      stepRefs.current[stepIndex] = element;
                    }}
                    className={[
                      "z-20 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-200 ease-out lg:absolute lg:left-1/2 lg:top-1/2 lg:h-14 lg:w-14 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:border-[3px]",
                      isStepFilled
                        ? "border-red-100 bg-brand-1 text-white"
                        : "border-brand-1 bg-white text-brand-1",
                    ].join(" ")}
                  >
                    {step.icon}
                  </div>

                  <article
                    className={[
                      "col-start-2 row-start-1 min-w-0 w-full rounded-lg px-1 py-0.5 text-left transition-transform duration-200 ease-out lg:px-2 lg:py-1",
                      isLeft
                        ? "origin-right hover:-translate-x-2"
                        : "origin-left hover:translate-x-2",
                      isLeft
                        ? "lg:col-start-1 lg:ml-auto lg:max-w-xl lg:pr-16 lg:text-right"
                        : "lg:col-start-2 lg:max-w-xl lg:pl-16 lg:text-left",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "flex items-baseline gap-1.5 font-display text-black",
                        isLeft
                          ? "justify-start lg:justify-end"
                          : "justify-start",
                      ].join(" ")}
                    >
                      <span className="font-display text-xl font-light leading-7 tracking-[-0.8px] text-gray-500">
                        {step.number}
                      </span>
                      <h3 className="wrap-break-word font-display text-xl font-bold leading-7 tracking-[-0.8px] text-black">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2 font-display text-lg font-normal leading-6 tracking-normal text-gray-500 lg:mt-3">
                      {step.description}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-16 sm:h-20" aria-hidden="true" />
      </div>
    </section>
  );
}

function TeamSection() {
  const teamMembers = [
    {
      eyebrow: "Principal Investigator",
      title: "Prof. Hanan Khalil",
      description:
        "Lead researcher and grant recipient. Professor in the School of Psychology and Public Health, with expertise in evidence synthesis, aged care, and health services research.",
      footer: "La Trobe University - School of Psychology and Public Health",
    },
    {
      eyebrow: "Project Lead",
      title: "Dr. Urooj Raza Khan",
      description:
        "Leading the project management, ensuring seamless execution, cross-functional collaboration, and alignment with grant requirements across all stakeholders.",
      footer: "La Trobe University",
    },
    {
      eyebrow: "Business Analysis",
      title: "Pasindu Galgomuwa",
      description:
        "Bridging the gap between clinical requirements and technical implementation, translating research needs into the platform's digital architecture.",
      footer: "La Trobe University",
    },
    {
      eyebrow: "Co-Investigators",
      title: "Research Team",
      description:
        "A multidisciplinary team spanning clinical informatics, palliative medicine, aged care nursing, and health technology design.",
      footer: "La Trobe University - ARIIA",
    },
    {
      eyebrow: "Clinical Advisors",
      title: "Advisory Committee",
      description:
        "Aged care providers, specialists, consumer representatives, and family advocates who co-design and validate PCAT.",
      footer: "Partner Organisations",
    },
    {
      eyebrow: "Platform Engineering",
      title: "ODDLY Global",
      description:
        "Technical partner responsible for the end-to-end platform design, UI/UX architecture, and software engineering of the PCAT application.",
      footer: "Technology Partner",
    },
  ];

  return (
    <section className="la-container py-10 lg:pt-20 pb">
      <SectionAnchor id="team" />
      <div className="space-y-10 sm:space-y-7 lg:space-y-10">
        <div className="max-w-2xl space-y-5 sm:space-y-7 lg:space-y-3">
          <SectionEyebrow className="text-brand-1">
            Research team
          </SectionEyebrow>
          <SectionTitle className="text-black">
            The people behind PCAT
          </SectionTitle>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.title} className="la-team-card">
              <div className="la-team-header">
                <p className="eyebrow text-brand-1">{member.eyebrow}</p>
                <p className="body-base-600 text-black">{member.title}</p>
              </div>
              <p className="body-base-400 mt-3 text-gray-500">
                {member.description}
              </p>
              <p className="body-sm-400 mt-4 border-l-2 border-brand-1 pl-4 text-gray-500">
                {member.footer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  const supportCards = [
    {
      title: "La Trobe University",
      label: "Host institution",
      logo: "/assets/images/la-trobe-university-1.svg",
      logoAlt: "La Trobe University logo",
      logoClassName: "w-auto",
    },
    {
      title: "ARIIA",
      label: "Funding partner",
      logo: "/assets/images/ariia-logo-1.svg",
      logoAlt: "ARIIA logo",
      logoClassName: "w-auto",
    },
    {
      title: "Monash Health",
      label: "Healthcare partner",
      logo: "/assets/images/monash-health-logo_dark-1.svg",
      logoAlt: "Monash Health logo",
      logoClassName: "w-auto",
    },
  ];

  return (
    <section className="border-t border-slate-200 bg-white py-20">
      <div className="la-container">
        <div className="mx-auto max-w-5xl space-y-4 text-center">
          <p className="eyebrow text-red-600">Funding & Governance</p>
          <h2 className="h2 text-center text-black">Supported by</h2>
          <p className="body-base-400 mx-auto max-w-4xl text-center text-gray-500">
            PCAT is supported by La Trobe University, Aged Care Research and
            Industry Innovation Australia (ARIIA) and Monash Health.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {supportCards.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white/70 px-6 py-[47px] text-center"
            >
              <div className="flex h-20 items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className={[
                    item.logoClassName,
                    "transition-transform duration-300 ease-out group-hover:scale-105",
                  ].join(" ")}
                />
              </div>
              <p className="body-base-500 text-center uppercase text-gray-500">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqItems = [
    {
      id: "faq-1",
      title: "Who can access PCAT?",
      content:
        "Access is restricted to registered nursing staff, charge nurses, and authorised administrators at aged care facilities enrolled in the PCAT programme. Each user is issued a unique credential during onboarding. If you have not yet received your login details, please contact your facility manager.",
    },
    {
      id: "faq-2",
      title: "What devices can I use PCAT on?",
      content:
        "PCAT is fully responsive and works on desktop computers, tablets, and smartphones. We recommend using Chrome or Safari for the best experience. No app installation is required.",
    },
    {
      id: "faq-3",
      title: "Is patient data secure in PCAT?",
      content:
        "Yes. PCAT uses end-to-end encryption, role-based access controls, and full audit logging. All data is stored in compliance with relevant healthcare data protection standards. No patient information is accessible without authenticated login.",
    },
    {
      id: "faq-4",
      title: "What if I forget my password?",
      content:
        'Use the "Forgot Password" link on the login page to reset your credentials via your registered work email. If you continue to experience issues, contact your facility manager or the PCAT support team.',
    },
    {
      id: "faq-5",
      title: "Can I access PCAT outside of the facility network?",
      content:
        "Yes, PCAT is accessible via any internet connection. When logging in from outside your facility's network, you may be prompted for an additional verification step to protect patient data.",
    },
  ];

  return (
    <section className="la-container py-20">
      <SectionAnchor id="faq" />
      <div className="space-y-12">
        <div className="mx-auto max-w-5xl space-y-4 text-center">
          <p className="eyebrow text-red-600">FAQ</p>
          <h2 className="h2 text-center text-black">Common Questions</h2>
          <SectionLead centered className="mx-auto max-w-4xl">
            Everything you need to know before logging in.
          </SectionLead>
        </div>

        <div className="mx-auto max-w-5xl">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}

function LoginCtaSection() {
  return (
    <section
      className="border-t border-black/8 py-20 text-white"
      style={{
        backgroundImage:
          "url('/assets/images/black-section-bg.png'), linear-gradient(90deg, #000 0%, #111827 50%, #000 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "0 0, center",
      }}
    >
      <div className="la-container text-center">
        <div className="space-y-5">
          <h2 className="h2 text-center text-white">Ready to get started?</h2>
          <p className="body-base-400 text-center text-gray-400">
            Log in to PCAT and take the next step in delivering better
            palliative care.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            className="la-button la-button-primary shadow-la-shadow-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M11 7V4.5C11 2.84315 9.65685 1.5 8 1.5C6.34315 1.5 5 2.84315 5 4.5V7M4.5 14.5H11.5C12.3284 14.5 13 13.8284 13 13V8.5C13 7.67157 12.3284 7 11.5 7H4.5C3.67157 7 3 7.67157 3 8.5V13C3 13.8284 3.67157 14.5 4.5 14.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Log in to PCAT
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  function EmailContactIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16.6667 3.3335H3.33334C2.41286 3.3335 1.66667 4.07969 1.66667 5.00016V15.0002C1.66667 15.9206 2.41286 16.6668 3.33334 16.6668H16.6667C17.5871 16.6668 18.3333 15.9206 18.3333 15.0002V5.00016C18.3333 4.07969 17.5871 3.3335 16.6667 3.3335Z"
          stroke="#E2231B"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 5.8335L10.8583 10.5835C10.6011 10.7447 10.3036 10.8302 10 10.8302C9.69641 10.8302 9.39895 10.7447 9.14167 10.5835L1.66667 5.8335"
          stroke="#E2231B"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function InstitutionContactIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 18.3332C14.6024 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 10 1.6665C5.39763 1.6665 1.66667 5.39746 1.66667 9.99984C1.66667 14.6022 5.39763 18.3332 10 18.3332Z"
          stroke="#E2231B"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 1.6665C7.8602 3.9133 6.66667 6.89712 6.66667 9.99984C6.66667 13.1026 7.8602 16.0864 10 18.3332C12.1398 16.0864 13.3333 13.1026 13.3333 9.99984C13.3333 6.89712 12.1398 3.9133 10 1.6665Z"
          stroke="#E2231B"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66667 10H18.3333"
          stroke="#E2231B"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function LocationContactIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16.6667 8.33317C16.6667 12.494 12.0508 16.8273 10.5008 18.1657C10.3564 18.2742 10.1807 18.333 9.99999 18.333C9.81933 18.333 9.64356 18.2742 9.49916 18.1657C7.94916 16.8273 3.33333 12.494 3.33333 8.33317C3.33333 6.56506 4.03571 4.86937 5.28595 3.61913C6.53619 2.36888 8.23188 1.6665 9.99999 1.6665C11.7681 1.6665 13.4638 2.36888 14.714 3.61913C15.9643 4.86937 16.6667 6.56506 16.6667 8.33317Z"
          stroke="#E2231B"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z"
          stroke="#E2231B"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  const contactItems = [
    {
      label: "Email",
      value: "pcat@latrobe.edu.au",
      icon: <EmailContactIcon />,
    },
    {
      label: "Institution",
      value: "latrobe.edu.au",
      icon: <InstitutionContactIcon />,
    },
    {
      label: "Location",
      value: "Melbourne, Victoria",
      icon: <LocationContactIcon />,
    },
  ];

  function EthicsIcon() {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5157 2.1698C12.2265 1.89587 11.7735 1.89587 11.4843 2.1698C9.46752 4.07977 6.74624 5.25011 3.75 5.25011C3.70233 5.25011 3.65473 5.24981 3.60721 5.24922C3.27984 5.24515 2.98767 5.4539 2.88541 5.76491C2.47287 7.01968 2.25 8.35963 2.25 9.75015C2.25 15.6922 6.31406 20.6831 11.8131 22.0984C11.9357 22.13 12.0643 22.13 12.1869 22.0984C17.6859 20.6831 21.75 15.6922 21.75 9.75015C21.75 8.35963 21.5271 7.01968 21.1146 5.76491C21.0123 5.4539 20.7202 5.24515 20.3928 5.24922C20.3453 5.24981 20.2977 5.25011 20.25 5.25011C17.2538 5.25011 14.5325 4.07977 12.5157 2.1698ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z"
          fill="#E2231B"
        />
      </svg>
    );
  }

  return (
    <section className="la-container py-20">
      <SectionAnchor id="contact" />
      <div className="space-y-12">
        <div className="max-w-[695px] space-y-2 text-left">
          <SectionEyebrow className="text-red-600">Get in touch</SectionEyebrow>
          <SectionTitle className="text-black">
            Collaborate or Learn More
          </SectionTitle>
          <SectionLead className="pt-10 text-gray-500">
            We welcome enquiries from aged care providers, clinicians,
            researchers, consumer advocates, and organisations interested in
            partnering with the PCAT project.
          </SectionLead>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start lg:gap-12">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <article key={item.label} className="la-contact-item">
                <div className="la-contact-item-icon">{item.icon}</div>
                <div>
                  <p className="eyebrow text-gray-500">{item.label}</p>
                  {item.value.includes("@") ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="body-base-500 text-black underline-offset-2 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="body-base-500 text-black">{item.value}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <article className="la-contact-ethics self-start">
            <div className="flex items-center gap-3">
              <div className="la-contact-ethics-icon">
                <EthicsIcon />
              </div>
              <h3 className="la-contact-ethics-title">Ethics & Governance</h3>
            </div>
            <p className="la-contact-ethics-body">
              This research is conducted in accordance with La Trobe
              University&apos;s Human Research Ethics framework and relevant
              aged care legislation. All data collection and use is subject to
              participant consent and institutional ethics approval. For ethics
              enquiries, contact the La Trobe University Research Ethics team.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Home">
      <main className="overflow-hidden bg-white">
        <HomeHeroSection />
        <AboutSection />
        <AboutFeatureCardsSection />
        <CoreFeaturesSection />
        <section className="pb-20">
          <div className="la-container">
            <HowItWorksSection />
          </div>
        </section>
        <HowItWorksFeatureCardsSection />
        <TeamSection />
        <SupportSection />
        <FaqSection />
        <LoginCtaSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
