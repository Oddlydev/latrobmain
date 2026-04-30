import React, { useEffect, useRef, useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  defaultOpenId?: string | null;
};

export default function Accordion({
  items,
  className,
  defaultOpenId = null,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const root = rootRef.current;
      if (root && !root.contains(event.target as Node)) {
        setOpenId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div
      ref={rootRef}
      className={[
        "overflow-hidden rounded-2xl border border-gray-200 bg-surface-card",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        const iconPath = isOpen
          ? "M11.7803 9.78033C11.4874 10.0732 11.0126 10.0732 10.7197 9.78033L8 7.06066L5.28033 9.78033C4.98744 10.0732 4.51256 10.0732 4.21967 9.78033C3.92678 9.48744 3.92678 9.01256 4.21967 8.71967L7.46967 5.46967C7.76256 5.17678 8.23744 5.17678 8.53033 5.46967L11.7803 8.71967C12.0732 9.01256 12.0732 9.48744 11.7803 9.78033Z"
          : "M4.21967 6.21967C4.51256 5.92678 4.98744 5.92678 5.28033 6.21967L8 8.93934L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L4.21967 7.28033C3.92678 6.98744 3.92678 6.51256 4.21967 6.21967Z";

        return (
          <div
            key={item.id}
            className="border-b border-gray-50 last:border-b-0"
          >
            <button
              type="button"
              className="la-accordion-trigger group relative flex w-full items-center justify-start px-6 py-5 text-left md:px-5 md:py-5 lg:px-6 lg:py-5"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <span className="body-base-500 text-left text-black group-hover:underline md:font-bold lg:font-medium">
                {item.title}
              </span>
              {isOpen ? (
                <>
                  <svg
                    className="la-accordion-icon absolute right-6 top-1/2 hidden -translate-y-1/2 shrink-0 text-black transition-all duration-200 md:hidden lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d={iconPath}
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="absolute top-1/2 hidden h-[5px] w-2 -translate-y-1/2 shrink-0 text-black md:right-5 md:block lg:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.78033 4.53033C7.48744 4.82322 7.01256 4.82322 6.71967 4.53033L4 1.81066L1.28033 4.53033C0.987437 4.82322 0.512563 4.82322 0.21967 4.53033C-0.0732232 4.23744 -0.0732232 3.76256 0.21967 3.46967L3.46967 0.21967C3.76256 -0.0732232 4.23744 -0.0732232 4.53033 0.21967L7.78033 3.46967C8.07322 3.76256 8.07322 4.23744 7.78033 4.53033Z"
                      fill="currentColor"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    className="la-accordion-icon absolute right-6 top-1/2 -translate-y-1/2 shrink-0 text-black transition-all duration-200 md:hidden lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d={iconPath}
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 shrink-0 text-black md:right-5 md:block lg:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.21967 6.21967C4.51256 5.92678 4.98744 5.92678 5.28033 6.21967L8 8.93934L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L4.21967 7.28033C3.92678 6.98744 3.92678 6.51256 4.21967 6.21967Z"
                      fill="currentColor"
                    />
                  </svg>
                </>
              )}
            </button>
            <div
              aria-hidden={openId !== item.id}
              className={[
                "grid transition-all duration-300 ease-in-out",
                openId === item.id
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="overflow-hidden">
                <div className="body-base-400 pl-6 pr-10 pb-5 text-left text-gray-600 md:pl-5 md:pr-10 md:pb-5 lg:pl-6 lg:pr-10 lg:pb-5">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
