import React, { type ReactNode } from "react";

type CardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

type CardVariantProps = {
  className?: string;
  icon?: ReactNode;
  title: string;
  description?: string;
};

type TeamCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  footer: string;
  className?: string;
};

type ContactCardProps = {
  label: string;
  value: string;
  icon: ReactNode;
  href?: string;
  className?: string;
};

type CardType4Props = {
  icon: ReactNode;
  eyebrow: string;
  value: string;
  className?: string;
};

function joinClassNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

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

export function CardType1({
  icon,
  title,
  description,
  className,
}: CardVariantProps) {
  return (
    <article className={joinClassNames("la-card-type-1", className)}>
      {icon ? <div className="la-feature-icon">{icon}</div> : null}
      <div>
        <p className="body-base-600 text-black">{title}</p>
        {description ? (
          <p className="body-base-400 text-gray-500">{description}</p>
        ) : null}
      </div>
    </article>
  );
}

export function CardType2({
  icon,
  title,
  description,
  className,
}: CardVariantProps) {
  return (
    <article className={joinClassNames("la-card-type-2", className)}>
      {icon ? <div className="la-feature-icon mb-4">{icon}</div> : null}
      <h3 className="body-base-600 text-black">{title}</h3>
      {description ? (
        <p className="body-base-400 mt-2 text-gray-500 leading-[26px] md:leading-6">
          {description}
        </p>
      ) : null}
    </article>
  );
}

export function CardType3({
  icon,
  title,
  description,
  className,
}: CardVariantProps) {
  return (
    <article className={joinClassNames("la-card-type-3 group", className)}>
      {icon ? <div className="la-feature-icon mb-3.5">{icon}</div> : null}
      <h3 className="body-base-600 text-black group-hover:underline group-hover:decoration-brand-1 group-hover:[text-decoration-thickness:13.5%] group-hover:[text-underline-offset:25%]">
        {title}
      </h3>
      {description ? (
        <p className="body-base-400 mt-3.5 text-gray-500 leading-[26px] md:text-lg md:leading-6 lg:text-base lg:leading-6">
          {description}
        </p>
      ) : null}
    </article>
  );
}

export function TeamCard({
  eyebrow,
  title,
  description,
  footer,
  className,
}: TeamCardProps) {
  return (
    <article className={joinClassNames("la-team-card", className)}>
      <div className="la-team-header">
        <p className="eyebrow text-brand-1">{eyebrow}</p>
        <p className="la-team-card-name">{title}</p>
      </div>
      <p className="body-base-400 mt-3 text-gray-500">{description}</p>
      <p className="body-sm-400 mt-4 border-l-2 border-brand-1 pl-4 text-base leading-6 text-gray-500 md:text-base md:leading-6 lg:text-sm lg:leading-5">
        {footer}
      </p>
    </article>
  );
}

export function CardType4({
  icon,
  eyebrow,
  value,
  className,
}: CardType4Props) {
  return (
    <article className={joinClassNames("la-card-type-4", className)}>
      <div className="la-feature-icon h-10 w-10">{icon}</div>
      <div className="space-y-1">
        <p className="eyebrow text-gray-500 font-semibold uppercase">{eyebrow}</p>
        <p className="la-card-type-4-email font-medium">{value}</p>
      </div>
    </article>
  );
}

export function ContactCard({
  label,
  value,
  icon,
  href,
  className,
}: ContactCardProps) {
  const content = href ? (
    <a
      href={href}
      className="body-base-500 text-black underline-offset-2 hover:underline"
    >
      {value}
    </a>
  ) : (
    <p className="body-base-500 text-black">{value}</p>
  );

  return (
    <article className={joinClassNames("la-contact-item", className)}>
      <div className="la-contact-item-icon">{icon}</div>
      <div>
        <p className="eyebrow text-gray-500 font-semibold uppercase">{label}</p>
        {content}
      </div>
    </article>
  );
}
