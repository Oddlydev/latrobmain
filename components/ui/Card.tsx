import React from "react";

type CardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export default function Card({
  eyebrow,
  title,
  description,
  footer,
  className,
  children,
}: CardProps) {
  return (
    <article className={["la-card", className].filter(Boolean).join(" ")}>
      {(eyebrow || title || description) && (
        <header className="space-y-2">
          {eyebrow ? <p className="la-badge">{eyebrow}</p> : null}
          {title ? <h3 className="body-base-600 text-black">{title}</h3> : null}
          {description ? (
            <p className="body-base-400 text-gray-500">{description}</p>
          ) : null}
        </header>
      )}

      {children ? <div className="mt-5 space-y-4">{children}</div> : null}

      {footer ? (
        <footer className="mt-5 border-t border-slate-200 pt-4">
          {footer}
        </footer>
      ) : null}
    </article>
  );
}
