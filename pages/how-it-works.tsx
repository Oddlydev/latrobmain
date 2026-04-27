import { useEffect, useRef, useState, type ReactNode } from "react";
import Layout from "../src/components/Layout";

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

      const markerY = window.innerHeight * 0.5;
      const trackRect = track.getBoundingClientRect();
      const nextFillHeight = Math.min(
        trackRect.height,
        Math.max(0, markerY - trackRect.top),
      );

      setLineFillHeight(nextFillHeight);
      setFilledSteps(
        stepRefs.current.map((stepElement) => {
          if (!stepElement) {
            return false;
          }

          const rect = stepElement.getBoundingClientRect();
          const stepCenter = rect.top + rect.height / 2;
          return stepCenter <= markerY;
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
    <section className="py-20">
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(226,35,27,0.045) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="relative z-10 mb-10 text-center">
          <p className="eyebrow text-brand-1">How It Works</p>
          <h2 className="h2 mt-2 text-black">
            From login to care record in minutes
          </h2>
        </div>

        <div className="relative z-10">
          <div
            ref={trackRef}
            className="absolute bottom-6 top-6 left-5 w-[2px] rounded-full bg-red-100 lg:left-1/2 lg:w-1 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <div
              className="w-full rounded-full bg-brand-1 transition-all duration-200 ease-out"
              style={{ height: `${lineFillHeight}px` }}
            />
          </div>

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, stepIndex) => {
              const isLeft = step.side === "left";
              const isStepFilled = filledSteps[stepIndex] ?? false;

              return (
                <div
                  key={step.id}
                  className="relative grid grid-cols-[auto_1fr] items-start gap-x-4 lg:grid-cols-2 lg:items-center lg:gap-8"
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
                        ? "lg:col-start-1 lg:ml-auto lg:max-w-xl lg:pr-14 lg:text-right"
                        : "lg:col-start-2 lg:max-w-xl lg:pl-16 lg:text-left",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "flex items-baseline gap-3 font-display text-black",
                        isLeft
                          ? "justify-start lg:justify-end"
                          : "justify-start",
                      ].join(" ")}
                    >
                      <span className="text-base font-light leading-6 tracking-tighter2 text-gray-500 lg:text-xl lg:leading-7">
                        {step.number}
                      </span>
                      <h3 className="break-words text-2xl font-bold leading-8 tracking-tighter2 text-black">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-base font-normal leading-6 tracking-normal text-gray-500 lg:mt-3 lg:text-lg">
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

export default function HowItWorksPage() {
  return (
    <Layout title="How It Works">
      <main className="la-container py-14">
        <HowItWorksSection />
      </main>
    </Layout>
  );
}
