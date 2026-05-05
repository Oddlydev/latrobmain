import Link from "next/link";
import React from "react";

type ButtonVariant =
  | "primary-light"
  | "primary-light-icon-right"
  | "primary-light-icon-left"
  | "secondary-light"
  | "primary-dark"
  | "primary-dark-icon-right"
  | "primary-dark-icon-left"
  | "secondary-dark";

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type AnchorButtonProps = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: never;
  };

const variantClasses: Record<ButtonVariant, string> = {
  "primary-light": "la-button-primary-light",
  "primary-light-icon-right": "la-button-primary-light-icon-right",
  "primary-light-icon-left": "la-button-primary-light-icon-left",
  "secondary-light": "la-button-secondary-light",
  "primary-dark": "la-button-primary-dark",
  "primary-dark-icon-right": "la-button-primary-dark-icon-right",
  "primary-dark-icon-left": "la-button-primary-dark-icon-left",
  "secondary-dark": "la-button-secondary-dark",
};

function buttonClassName(variant: ButtonVariant, className?: string) {
  return [variantClasses[variant], className].filter(Boolean).join(" ");
}

export default function Button(props: AnchorButtonProps | NativeButtonProps) {
  const { variant = "primary-light", className, children, ...rest } = props;
  const classes = buttonClassName(variant, className);

  if ("href" in props) {
    const { href, ...anchorProps } = rest as Omit<
      AnchorButtonProps,
      keyof SharedProps | "href"
    > & {
      href: string;
    };
    const isExternalHref =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");
    const isHashHref = href.startsWith("#");

    if (isExternalHref || isHashHref) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<NativeButtonProps, keyof SharedProps>;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
