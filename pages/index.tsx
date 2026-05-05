import { useEffect, useRef, useState, type ReactNode } from "react";
import Layout from "../src/components/Layout";
import Button from "../components/ui/Button";
import Accordion from "../components/ui/Accordion";
import {
  CardType1,
  CardType2,
  CardType3,
  ContactCard,
  TeamCard,
} from "../components/ui/Card";
import heroImage1 from "../assets/images/hero-images/hero-light-1.png";
import heroImage2 from "../assets/images/hero-images/hero-light-2.png";
import heroImage3 from "../assets/images/hero-images/hero-light-3.png";
import heroImage4 from "../assets/images/hero-images/hero-light-4.png";
import heroImage5 from "../assets/images/hero-images/hero-light-5.png";
import heroImageMobile1 from "../assets/images/hero-images/mobile/hero-light-1.png";
import heroImageMobile2 from "../assets/images/hero-images/mobile/hero-light-2.png";
import heroImageMobile3 from "../assets/images/hero-images/mobile/hero-light-3.png";
import heroImageMobile4 from "../assets/images/hero-images/mobile/hero-light-4.png";
import heroImageMobile5 from "../assets/images/hero-images/mobile/hero-light-5.png";
import heroImageTab1 from "../assets/images/hero-images/tablet/hero-ligh-tab-1.png";
import heroImageTab2 from "../assets/images/hero-images/tablet/hero-ligh-tab-2.png";
import heroImageTab3 from "../assets/images/hero-images/tablet/hero-ligh-tab-3.png";
import heroImageTab4 from "../assets/images/hero-images/tablet/hero-ligh-tab-4.png";
import heroImageTab5 from "../assets/images/hero-images/tablet/hero-ligh-tab-5.png";
import coreFeatureDashboard1 from "../assets/images/core-features/1.svg";
import coreFeatureDashboard2 from "../assets/images/core-features/2.svg";
import coreFeatureDashboard3 from "../assets/images/core-features/3.svg";
import coreFeaturePhotoHug from "../assets/images/core-features/4.png";
import coreFeaturePhotoPortrait from "../assets/images/core-features/5.png";
import coreFeaturePhotoExam from "../assets/images/core-features/6.png";
import coreFeaturePhotoBench from "../assets/images/core-features/7.png";
import coreFeaturePhotoWheelchair from "../assets/images/core-features/8.png";
import coreFeaturePhotoSmile from "../assets/images/core-features/9.png";
import coreFeaturePhotoHands from "../assets/images/core-features/10.png";
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
    <p className={["eyebrow", "m-0", className].filter(Boolean).join(" ")}>
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
        "mt-2 mb-0 text-black",
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
        "body-base-400 text-gray-500",
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
    icon: <AssessmentDocumentIcon />,
  },
  {
    title: "Risk Flagging & Escalation",
    description:
      "Assessment responses automatically surface risk indicators and suggest appropriate clinical actions. Senior nurses and administrators can filter all patients by risk level, ensuring priority cases are always visible.",
    icon: <RiskFlagIcon />,
  },
  {
    title: "AI-First Design",
    description:
      "PCAT is architected from the ground up to integrate AI capabilities - enabling future features like predictive risk scoring, clinical trend analysis, and intelligent decision support.",
    icon: <AiFirstDesignIcon />,
  },
  {
    title: "Trend Monitoring",
    description:
      "Visualise a patient's assessment score history and a model-generated 48-hour forecast - giving nurses an early signal of deterioration before it becomes critical.",
    icon: <TrendMonitoringIcon />,
  },
  {
    title: "Multi-Centre Support",
    description:
      "PCAT supports multiple aged care centres under the same programme. Each nurse sees only the patients assigned to their facility, while coordinators retain a cross-centre overview.",
    icon: <MultiCentreSupportIcon />,
  },
  {
    title: "Secure Access",
    description:
      "Nurses and administrators operate within tailored permission sets. Full audit logging ensures accountability, and all patient data is protected behind authenticated, encrypted access.",
    icon: <SecureAccessIcon />,
  },
];

const CORE_FEATURE_CARDS = [
  {
    id: "dashboard-primary",
    src: coreFeatureDashboard1.src,
    alt: "PCAT overview dashboard",
    kind: "dashboard",
    motionDelayMs: 0,
    className: "left-[42.6%] top-[3.1%] z-[8] h-[54.8%] w-[28.2%]",
  },
  {
    id: "dashboard-secondary",
    src: coreFeatureDashboard2.src,
    alt: "PCAT patient list dashboard",
    kind: "dashboard",
    motionDelayMs: 620,
    className: "left-[11.4%] top-[36.5%] z-[4] h-[61.4%] w-[29.2%]",
  },
  {
    id: "dashboard-tertiary",
    src: coreFeatureDashboard3.src,
    alt: "PCAT patient profile dashboard",
    kind: "dashboard",
    motionDelayMs: 1180,
    className: "left-[72.1%] top-[35.8%] z-[4] h-[61.4%] w-[27.3%]",
  },
  {
    id: "photo-hug",
    src: coreFeaturePhotoHug.src,
    alt: "Nurse comforting an older patient",
    kind: "photo",
    motionDelayMs: 180,
    className: "left-[1.5%] top-[3.2%] z-[6] h-[31.8%] w-[21.6%]",
  },
  {
    id: "photo-portrait",
    src: coreFeaturePhotoPortrait.src,
    alt: "Portrait of an older patient",
    kind: "photo",
    motionDelayMs: 1040,
    className: "left-[0.8%] top-[37.2%] z-[5] h-[55.6%] w-[9.6%]",
  },
  {
    id: "photo-exam",
    src: coreFeaturePhotoExam.src,
    alt: "Nurse checking an older patient",
    kind: "photo",
    motionDelayMs: 320,
    className: "left-[24.8%] top-[4.6%] z-[6] h-[29.8%] w-[16.2%]",
  },
  {
    id: "photo-bench",
    src: coreFeaturePhotoBench.src,
    alt: "Nurse sitting with an older patient outdoors",
    kind: "photo",
    motionDelayMs: 740,
    className: "left-[41.6%] top-[63.8%] z-[6] h-[30.8%] w-[14.8%]",
  },
  {
    id: "photo-wheelchair",
    src: coreFeaturePhotoWheelchair.src,
    alt: "Care team supporting an older patient in a wheelchair",
    kind: "photo",
    motionDelayMs: 1360,
    className: "left-[58.3%] top-[63.8%] z-[6] h-[27.0%] w-[12.9%]",
  },
  {
    id: "photo-smile",
    src: coreFeaturePhotoSmile.src,
    alt: "Nurse smiling with an older patient",
    kind: "photo",
    motionDelayMs: 920,
    className: "left-[73.4%] top-[6.4%] z-[6] h-[28.2%] w-[18.9%]",
  },
  {
    id: "photo-hands",
    src: coreFeaturePhotoHands.src,
    alt: "Close-up of hands in care support",
    kind: "photo",
    motionDelayMs: 1500,
    className: "left-[94.2%] top-[2.6%] z-[7] h-[25.4%] w-[5.6%]",
  },
] as const;

const CORE_FEATURE_REVEAL_ORDER = [
  "photo-hug",
  "photo-exam",
  "photo-smile",
  "photo-hands",
  "photo-portrait",
  "dashboard-secondary",
  "dashboard-tertiary",
  "photo-bench",
  "photo-wheelchair",
] as const;

const CORE_FEATURE_REVEAL_INDEX = new Map(
  CORE_FEATURE_REVEAL_ORDER.map((id, index) => [id, index]),
);

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

function AssessmentDocumentIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RiskFlagIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21.73 18L13.73 3.99998C13.5556 3.69218 13.3026 3.43617 12.9969 3.25805C12.6912 3.07993 12.3438 2.98608 11.99 2.98608C11.6362 2.98608 11.2887 3.07993 10.9831 3.25805C10.6774 3.43617 10.4244 3.69218 10.25 3.99998L2.24999 18C2.07367 18.3053 1.98122 18.6519 1.982 19.0045C1.98278 19.3571 2.07677 19.7032 2.25444 20.0078C2.43211 20.3124 2.68714 20.5646 2.99369 20.7388C3.30023 20.9131 3.6474 21.0032 3.99999 21H20C20.3509 20.9996 20.6955 20.9069 20.9993 20.7313C21.303 20.5556 21.5552 20.3031 21.7305 19.9991C21.9058 19.6951 21.998 19.3504 21.9979 18.9995C21.9978 18.6486 21.9054 18.3039 21.73 18Z"
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

function AiFirstDesignIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5.00005C12.0011 4.60008 11.9223 4.20391 11.7681 3.83485C11.614 3.46579 11.3876 3.13128 11.1022 2.851C10.8169 2.57072 10.4784 2.35032 10.1066 2.20278C9.73485 2.05524 9.33733 1.98353 8.93745 1.99186C8.53756 2.0002 8.14338 2.08841 7.77809 2.25132C7.4128 2.41422 7.08377 2.64853 6.81035 2.94045C6.53694 3.23238 6.32466 3.57604 6.186 3.9512C6.04735 4.32637 5.98511 4.72548 6.00295 5.12505C5.41515 5.27619 4.86945 5.5591 4.40718 5.95236C3.94491 6.34562 3.57819 6.83892 3.3348 7.3949C3.0914 7.95087 2.97771 8.55494 3.00234 9.16136C3.02697 9.76778 3.18927 10.3606 3.47695 10.8951C2.97113 11.306 2.57338 11.8343 2.31829 12.434C2.0632 13.0337 1.95851 13.6866 2.01332 14.336C2.06812 14.9854 2.28077 15.6116 2.63276 16.1601C2.98475 16.7085 3.46542 17.1627 4.03295 17.4831C3.96287 18.0253 4.00469 18.5761 4.15584 19.1016C4.30699 19.627 4.56425 20.1159 4.91174 20.538C5.25923 20.9601 5.68956 21.3065 6.17617 21.5558C6.66278 21.8051 7.19533 21.952 7.74093 21.9874C8.28653 22.0228 8.83359 21.946 9.34834 21.7617C9.86309 21.5774 10.3346 21.2895 10.7337 20.9158C11.1328 20.5421 11.4511 20.0906 11.6689 19.5891C11.8867 19.0876 11.9994 18.5468 12 18V5.00005Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13C9.83956 12.7047 10.5727 12.167 11.1067 11.455C11.6407 10.743 11.9515 9.88867 12 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00305 5.125C6.02283 5.60873 6.15938 6.0805 6.40105 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.47705 10.896C3.65999 10.747 3.85575 10.6145 4.06205 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99996 17.9999C5.31079 18.0002 4.63323 17.8225 4.03296 17.4839"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H18C18.5304 18 19.0391 18.2107 19.4142 18.5858C19.7893 18.9609 20 19.4696 20 20V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8V5C16 4.46957 16.2107 3.96086 16.5858 3.58579C16.9609 3.21071 17.4696 3 18 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13.5C16.2761 13.5 16.5 13.2761 16.5 13C16.5 12.7239 16.2761 12.5 16 12.5C15.7239 12.5 15.5 12.7239 15.5 13C15.5 13.2761 15.7239 13.5 16 13.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 3.5C18.2761 3.5 18.5 3.27614 18.5 3C18.5 2.72386 18.2761 2.5 18 2.5C17.7239 2.5 17.5 2.72386 17.5 3C17.5 3.27614 17.7239 3.5 18 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 21.5C20.2761 21.5 20.5 21.2761 20.5 21C20.5 20.7239 20.2761 20.5 20 20.5C19.7239 20.5 19.5 20.7239 19.5 21C19.5 21.2761 19.7239 21.5 20 21.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8.5C20.2761 8.5 20.5 8.27614 20.5 8C20.5 7.72386 20.2761 7.5 20 7.5C19.7239 7.5 19.5 7.72386 19.5 8C19.5 8.27614 19.7239 8.5 20 8.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendMonitoringIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 7L13.5 15.5L8.5 10.5L2 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7H22V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MultiCentreSupportIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 22V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V22H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18H14"
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

function SecureAccessIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
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
    <CardType2
      icon={icon}
      title={title}
      description={description}
      className="h-full"
    />
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
  const heroTabletImages = [
    heroImageTab1.src,
    heroImageTab2.src,
    heroImageTab3.src,
    heroImageTab4.src,
    heroImageTab5.src,
  ];
  const heroMobileImages = [
    heroImageMobile1.src,
    heroImageMobile2.src,
    heroImageMobile3.src,
    heroImageMobile4.src,
    heroImageMobile5.src,
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
  const [heroTabletImageSrc, setHeroTabletImageSrc] = useState(
    heroTabletImages[0],
  );
  const [heroMobileImageSrc, setHeroMobileImageSrc] = useState(
    heroMobileImages[0],
  );
  const heroTabletBackground =
    "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.8) 12%, rgba(255, 255, 255, 0.34) 24%, rgba(255, 255, 255, 0) 36%)";

  useEffect(() => {
    const pickRefreshImageIndex = (storageKey: string, total: number) => {
      if (total <= 1) {
        return 0;
      }

      try {
        const savedValue = window.sessionStorage.getItem(storageKey);
        const previousIndex =
          savedValue === null ? -1 : Number.parseInt(savedValue, 10);

        let nextIndex = Math.floor(Math.random() * total);
        while (nextIndex === previousIndex) {
          nextIndex = Math.floor(Math.random() * total);
        }

        window.sessionStorage.setItem(storageKey, String(nextIndex));
        return nextIndex;
      } catch {
        return Math.floor(Math.random() * total);
      }
    };

    const desktopIndex = pickRefreshImageIndex(
      "la-hero-image-desktop",
      heroImages.length,
    );
    const tabletIndex = pickRefreshImageIndex(
      "la-hero-image-tablet",
      heroTabletImages.length,
    );
    const mobileIndex = pickRefreshImageIndex(
      "la-hero-image-mobile",
      heroMobileImages.length,
    );

    setHeroImageSrc(heroImages[desktopIndex]);
    setHeroTabletImageSrc(heroTabletImages[tabletIndex]);
    setHeroMobileImageSrc(heroMobileImages[mobileIndex]);
  }, []);

  return (
    <section id="top" className="scroll-mt-24">
      <div className="relative overflow-hidden border border-gray-200 bg-white text-black shadow-soft">
        <img
          src={heroImageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover object-[78%_center] lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[78%] w-[52%] -translate-y-1/2 rounded-[33554400px] lg:block"
          style={{
            background: "rgba(233, 34, 60, 0.05)",
            filter: "blur(64px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8%] top-[18%] hidden h-[44%] w-[42%] rounded-[33554400px] lg:block"
          style={{
            background: "rgba(233, 34, 60, 0.03)",
            filter: "blur(64px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-full lg:block lg:w-[66%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,247,247,0.99) 0%, rgba(247,247,247,0.97) 40%, rgba(247,247,247,0.9) 56%, rgba(247,247,247,0.62) 72%, rgba(247,247,247,0) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/35 to-transparent md:hidden lg:hidden"
        />

        <div className="relative z-10 px-2.5 pt-2.5 pb-0 md:px-8 md:pt-10 md:pb-0 lg:pl-37.5 lg:pr-10 lg:pt-44.25 lg:pb-44.25">
          <div className="w-full">
            <p className="body-base-500 inline-flex max-w-full items-center gap-2 whitespace-normal rounded-full border border-gray-300 bg-white px-4 py-2 text-black shadow-sm">
              <span className="la-hero-status-dot h-2.5 w-2.5 rounded-full bg-green-500" />
              La Trobe Palliative Care Research Programme
            </p>

            <div className="mt-5 space-y-5 md:mt-5 md:space-y-5 lg:mt-12 lg:space-y-0">
              <h1 className="text-black">
                <span className="block">Palliative Care</span>
                <span className="mt-1 block text-brand-1 lg:mt-0">
                  Assessment Tool
                </span>
              </h1>

              <p className="body-base-400 max-w-full pt-0 text-gray-600 lg:max-w-[616px] md:max-w-full md:pt-0 lg:pt-6">
                PCAT is a research-backed digital platform developed at La Trobe
                University to help nursing teams in aged care identify patients
                who need palliative care earlier, more consistently, and with
                confidence. Structured assessments, predictive trend analysis,
                and clear escalation pathways, all in one secure portal.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 pb-5 md:mt-5 md:gap-4 md:pb-7 lg:mt-12 lg:gap-4 lg:pb-0">
              <Button href={LOGIN_URL} variant="primaryIconRight">
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
              </Button>
              <Button href="#about" variant="secondary">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden md:hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.35) 18%, rgba(255, 255, 255, 0) 34%)",
            }}
          />
          <img
            src={heroMobileImageSrc}
            alt=""
            aria-hidden="true"
            className="block h-auto w-full object-cover object-center"
          />
        </div>

        <div className="relative hidden overflow-hidden md:block lg:hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ background: heroTabletBackground }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-0"
            style={{
              left: "17%",
              right: "9%",
              top: "6%",
              height: "44%",
              borderRadius: "16009193px",
              background: "rgba(233, 34, 60, 0.05)",
              filter: "blur(30.535140991210938px)",
            }}
          />
          <img
            src={heroTabletImageSrc}
            alt=""
            aria-hidden="true"
            className="relative z-0 block h-[24rem] w-full object-cover object-[center_10%]"
          />
        </div>

        <div
          className="relative p-3.5 md:p-5 lg:p-7"
          style={{ background: "var(--Brand---3, #000)" }}
        >
          <div className="grid gap-3 lg:gap-5 md:inline-grid md:w-full md:grid-cols-2 md:grid-rows-2 md:gap-3 xl:grid-cols-4 xl:grid-rows-1">
            {heroHighlights.map((item) => (
              <CardType1
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
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
      <div className="grid grid-cols-[132px_minmax(0,1fr)] items-center gap-5 border-b border-gray-200 px-6 py-6 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6 md:px-6 md:py-6 lg:px-8 lg:py-10">
        <p className="body-base-600 text-lg uppercase leading-7 tracking-[-0.8px] text-gray-600 md:text-xl md:leading-8">
          {label}
        </p>
        <p
          className={[
            "body-base-400 w-full justify-self-end text-right text-black md:justify-self-end md:text-right md:text-xl md:leading-8",
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
    <section className="la-container pt-10 md:pt-10 lg:pt-20">
      <SectionAnchor id="about" />
      <div className="max-w-[695px]">
        <SectionEyebrow className="text-red-600">
          About the project
        </SectionEyebrow>
        <h2 className="mt-2 mb-5 block max-w-[695px] text-black md:mb-7 lg:mb-12">
          Identifying palliative care needs - earlier, and with confidence
        </h2>
      </div>

      <div className="grid gap-5 md:gap-5 lg:grid-cols-2 lg:gap-12">
        <div className="la-about-copy-stack">
          <SectionLead className="max-w-[695px]">
            PCAT was developed under Professor Hanan Khalil's initiative at La
            Trobe University to close a critical gap in aged care nursing: the
            timely identification of patients who would benefit from palliative
            care. Where nurses once relied on fragmented paper forms and
            disconnected processes, PCAT brings everything into one structured,
            evidence-based digital workflow.
          </SectionLead>

          <div className="rounded-xl border border-red-200 bg-white p-6">
            <p className="body-base-600 text-lg text-black lg:text-xl lg:leading-7">
              PCAT is an evidence based palliative care assessment toolkit that
              is designed to flag palliative care needs. Nurses can complete
              assessments, monitor patient health trends over time, review full
              care histories, and ensure no at-risk patient goes unnoticed — all
              from a single secure portal, on any device.
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
    </section>
  );
}

function AboutFeatureCardsSection() {
  return (
    <section className="border-b border-black/8 pt-5 pb-10 md:pt-7 md:pb-10 lg:pt-12 lg:pb-20">
      <div className="la-container">
        <div className="grid gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-5 lg:grid-cols-4 lg:gap-6">
          {ABOUT_FEATURE_CARDS.map((item) => (
            <AboutFeatureTile key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreFeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(0);

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
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCardCount(CORE_FEATURE_REVEAL_ORDER.length);
      return;
    }

    if (!hasStarted) {
      setVisibleCardCount(0);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const revealStepMs = 180;
    const heroOnlyMs = 950;
    const holdMs = 3400;

    const queueTimeout = (callback: () => void, delay: number) => {
      const timerId = window.setTimeout(() => {
        if (!cancelled) {
          callback();
        }
      }, delay);

      timers.push(timerId);
    };

    const runCycle = () => {
      if (cancelled) {
        return;
      }

      setVisibleCardCount(0);

      queueTimeout(() => {
        for (
          let index = 0;
          index < CORE_FEATURE_REVEAL_ORDER.length;
          index += 1
        ) {
          queueTimeout(() => {
            setVisibleCardCount(index + 1);
          }, index * revealStepMs);
        }

        const revealDuration = CORE_FEATURE_REVEAL_ORDER.length * revealStepMs;
        queueTimeout(() => {
          runCycle();
        }, revealDuration + holdMs);
      }, heroOnlyMs);
    };

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, [hasStarted, reduceMotion]);

  return (
    <section ref={sectionRef} className="pt-10 pb-10 md:pt-20 md:pb-12">
      <SectionAnchor id="features" />
      <div className="la-container">
        <div className="space-y-12">
          <div className="space-y-2">
            <p className="eyebrow text-red-600">Core Features</p>
            <h2 className="text-black lg:max-w-xl">
              Everything nurses need, nothing they don&apos;t
            </h2>
          </div>

          <div
            className={[
              "la-core-feature-stage la-gallery-stage relative mx-auto w-full max-w-[1089px] overflow-hidden rounded-lg border la-core-feature-stage--warm",
              "aspect-[4/3] sm:aspect-[1089/590]",
              reduceMotion ? "la-core-feature-stage--reduced" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              background:
                "url('/assets/images/Container.png') lightgray 0% 0% / 100px 100px repeat, #FFF",
            }}
          >
            <div
              aria-hidden="true"
              className="la-core-feature-overlay la-core-feature-overlay--warm"
            />
            <div
              aria-hidden="true"
              className="la-core-feature-orb la-core-feature-orb--warm"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.32),transparent_60%)]"
            />

            <div className="relative h-full overflow-hidden p-[1.25%]">
              {CORE_FEATURE_CARDS.map((card) => {
                const isDashboard = card.kind === "dashboard";
                const isPrimary = card.id === "dashboard-primary";
                const revealIndex = isPrimary
                  ? -1
                  : (CORE_FEATURE_REVEAL_INDEX.get(
                      card.id as (typeof CORE_FEATURE_REVEAL_ORDER)[number],
                    ) ?? -1);
                const isVisible =
                  isPrimary ||
                  reduceMotion ||
                  (hasStarted && revealIndex < visibleCardCount);

                const clipShapeClass = isPrimary
                  ? "rounded-[19px] la-core-feature-clip--r19"
                  : isDashboard
                    ? "rounded-[15px] la-core-feature-clip--r15"
                    : "rounded-[13px] la-core-feature-clip--r13";

                return (
                  <article
                    key={card.id}
                    className={["absolute", card.className].join(" ")}
                  >
                    <div
                      className={[
                        "la-core-feature-shell relative h-full w-full overflow-hidden border-[5px] border-white bg-transparent",
                        isVisible
                          ? "la-core-feature-shell--visible"
                          : "la-core-feature-shell--hidden",
                        isPrimary
                          ? "rounded-[24px]"
                          : isDashboard
                            ? "rounded-[20px]"
                            : "rounded-[18px]",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "la-core-feature-clip relative h-full min-h-0 w-full min-w-0 overflow-hidden",
                          clipShapeClass,
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "la-core-feature-motion relative h-full w-full",
                            isPrimary
                              ? "la-core-feature-motion--primary"
                              : "la-core-feature-motion--secondary",
                          ].join(" ")}
                          style={{ animationDelay: `${card.motionDelayMs}ms` }}
                        >
                          <img
                            src={card.src}
                            alt={card.alt}
                            loading={isPrimary ? "eager" : "lazy"}
                            className={[
                              "la-core-feature-img pointer-events-none absolute inset-0 z-0 box-border h-full max-h-none min-h-full w-full min-w-full max-w-none object-cover object-center select-none",
                              isDashboard
                                ? "la-core-feature-img--dashboard origin-center scale-[1.075]"
                                : "la-core-feature-img--photo",
                            ].join(" ")}
                            draggable={false}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksFeatureCardsSection() {
  return (
    <section className="border-b border-black/8 pb-10 md:pb-20">
      <div className="la-container">
        <div className="grid gap-5 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {HOW_IT_WORKS_FEATURE_CARDS.map((item) => (
            <CardType3
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="h-full"
            />
          ))}
        </div>
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
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);
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
      <div className="relative overflow-hidden">
        <div className="relative z-10 mb-5 text-left sm:mb-7 lg:mb-12 lg:text-center">
          <p className="eyebrow text-brand-1">How It Works</p>
          <h2 className="mt-5 text-black sm:mt-7 md:mt-2 lg:mt-2">
            From login to care record in minutes
          </h2>
        </div>

        <div className="relative z-10">
          <div
            ref={trackRef}
            className="absolute top-6 bottom-6 left-6 w-0.5 rounded-full bg-red-100 md:left-5 lg:left-1/2 lg:w-1 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <div
              className="w-full rounded-full bg-brand-1 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[height]"
              style={{ height: `${lineFillHeight}px` }}
            />
          </div>

          <div className="space-y-10 lg:space-y-4">
            {steps.map((step, stepIndex) => {
              const isLeft = step.side === "left";
              const isStepFilled = filledSteps[stepIndex] ?? false;
              const isStepHovered = hoveredStepIndex === stepIndex;
              const isStepHighlighted = isStepHovered || isStepFilled;

              return (
                <div
                  key={step.id}
                  className="relative grid grid-cols-[auto_1fr] items-start gap-x-5 lg:mx-auto lg:w-fit lg:grid-cols-[462px_168px_462px] lg:items-center lg:gap-0"
                >
                  <div
                    ref={(element) => {
                      stepRefs.current[stepIndex] = element;
                    }}
                    onMouseEnter={() => setHoveredStepIndex(stepIndex)}
                    onMouseLeave={() => setHoveredStepIndex(null)}
                    className={[
                      "z-20 col-start-1 row-start-1 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:h-6 [&_svg]:w-6 md:h-10 md:w-10 md:border-2 md:[&_svg]:h-5 md:[&_svg]:w-5 lg:absolute lg:left-1/2 lg:top-1/2 lg:h-14 lg:w-14 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:border-[3px] lg:[&_svg]:h-[26px] lg:[&_svg]:w-[26px]",
                      isStepHighlighted
                        ? "scale-100 rounded-full border-[3px] border-red-100 bg-brand-1 text-white shadow-none"
                        : "scale-100 border-brand-1 bg-white text-brand-1 shadow-none",
                    ].join(" ")}
                  >
                    {step.icon}
                  </div>

                  <article
                    onMouseEnter={() => setHoveredStepIndex(stepIndex)}
                    onMouseLeave={() => setHoveredStepIndex(null)}
                    className={[
                      "col-start-2 row-start-1 min-w-0 w-full rounded-lg px-0 py-0 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:px-0 md:py-0 lg:py-5",
                      isStepHovered
                        ? isLeft
                          ? "origin-right -translate-x-3 opacity-100"
                          : "origin-left translate-x-3 opacity-100"
                        : "translate-x-0 opacity-95",
                      isLeft
                        ? "lg:col-start-1 lg:pl-5 lg:pr-0 lg:text-right"
                        : "lg:col-start-3 lg:pl-0 lg:pr-5 lg:text-left",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "flex w-full items-baseline gap-3 font-display text-black lg:inline-grid lg:w-auto lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-x-3",
                        isLeft
                          ? "justify-start lg:ml-auto lg:text-right"
                          : "justify-start lg:text-left",
                      ].join(" ")}
                    >
                      <span className="shrink-0 text-right font-display text-xl font-light leading-7 tracking-[-0.8px] text-gray-500">
                        {step.number}
                      </span>
                      <h4 className="text-black">{step.title}</h4>
                    </div>

                    <p
                      className={[
                        "mt-3 font-display text-lg font-normal leading-6 tracking-normal text-gray-500 lg:mt-3 lg:w-full",
                        isLeft ? "lg:ml-auto" : "",
                      ].join(" ")}
                    >
                      {step.description}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
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
    <section className="la-container border-t border-gray-200 py-10 md:py-10 lg:py-20">
      <SectionAnchor id="team" />
      <div className="space-y-5 md:space-y-5 lg:space-y-3">
        <div className="max-w-2xl">
          <SectionEyebrow className="text-brand-1">
            Research team
          </SectionEyebrow>
          <SectionTitle className="max-w-[600px]">
            The people behind PCAT
          </SectionTitle>
        </div>

        <div className="mt-5 grid gap-5 md:mt-7 lg:mt-12 md:grid-cols-2 md:gap-x-5 md:gap-y-5 lg:gap-6 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.title} {...member} />
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
    <section className="border-t border-slate-200 border-b py-10 md:py-10 lg:py-20">
      <div className="la-container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-red-600">Funding & Governance</p>
          <h2 className="mt-2 text-center text-black">Supported by</h2>
          <p className="body-base-400 mx-auto mt-4 max-w-[550px] text-center text-gray-500 md:mt-4">
            PCAT is supported by La Trobe University, Aged Care Research and
            Industry Innovation Australia (ARIIA) and Monash Health.
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:gap-6 md:mt-7 lg:mt-12 md:grid-cols-2 md:gap-x-5 md:gap-y-5 xl:grid-cols-3">
          {supportCards.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white/70 py-[47px] text-center md:gap-0"
            >
              <div className="flex h-20 items-center justify-center md:pb-[30px]">
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
    <section className="la-container py-10 md:py-10 lg:py-20">
      <SectionAnchor id="faq" />
      <div className="space-y-5 md:space-y-5 lg:space-y-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-red-600">FAQ</p>
          <h2 className="mt-2 text-center text-black">Common Questions</h2>
          <SectionLead centered className="mx-auto mt-4 max-w-4xl">
            Everything you need to know before logging in.
          </SectionLead>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}

function LoginCtaSection() {
  return (
    <section
      className="border-t border-black/8 py-10 text-white md:py-10 lg:py-20"
      style={{
        backgroundImage:
          "url('/assets/images/black-section-bg.png'), linear-gradient(90deg, #000 0%, #111827 50%, #000 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "0 0, center",
      }}
    >
      <div className="la-container text-center">
        <div className="space-y-4">
          <h2 className="text-center text-white">Ready to get started?</h2>
          <p className="body-base-400 text-center text-gray-400">
            Log in to PCAT and take the next step in delivering better
            palliative care.
          </p>
        </div>

        <div className="mt-8 flex justify-center md:mt-7 lg:mt-8">
          <Button
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            variant="primaryIconLeft"
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
          </Button>
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
    <section className="la-container py-10 md:py-10 lg:py-20">
      <SectionAnchor id="contact" />
      <div className="space-y-5 md:space-y-5 lg:space-y-12">
        <div className="max-w-[695px] space-y-0 md:space-y-4 text-left">
          <SectionEyebrow className="text-red-600">Get in touch</SectionEyebrow>
          <SectionTitle>Collaborate or Learn More</SectionTitle>
          <SectionLead className="max-w-600 pt-4">
            We welcome enquiries from aged care providers, clinicians,
            researchers, consumer advocates, and organisations interested in
            partnering with the PCAT project.
          </SectionLead>
        </div>

        <div className="grid gap-5 md:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start lg:gap-12">
          <div className="space-y-5 md:space-y-5">
            {contactItems.map((item) => (
              <ContactCard
                key={item.label}
                label={item.label}
                value={item.value}
                icon={item.icon}
                href={
                  item.value.includes("@") ? `mailto:${item.value}` : undefined
                }
              />
            ))}
          </div>

          <article className="la-contact-ethics self-start rounded-xl border border-red-200">
            <div className="flex items-center gap-3">
              <div className="la-contact-ethics-icon">
                <EthicsIcon />
              </div>
              <h4 className="uppercase text-black">Ethics & Governance</h4>
            </div>
            <p className="body-base-500 mt-5 text-lg leading-7 text-black md:mt-8 lg:text-xl">
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
      <main className="overflow-hidden bg-gray-50 lg:bg-white">
        <HomeHeroSection />
        <AboutSection />
        <AboutFeatureCardsSection />
        <CoreFeaturesSection />
        <HowItWorksFeatureCardsSection />
        <section
          className="border-t border-gray-200 py-20"
          style={{
            background:
              "url('/assets/images/Container.png') lightgray 0% 0% / 100px 100px repeat",
          }}
        >
          <div className="la-container">
            <HowItWorksSection />
          </div>
        </section>
        <TeamSection />
        <SupportSection />
        <FaqSection />
        <LoginCtaSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
