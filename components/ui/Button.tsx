import Link from "next/link";
import React from "react";

type ButtonVariant =
  | "primary"
  | "primaryIconRight"
  | "primaryIconLeft"
  | "secondary";

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
  primary: "la-button-primary",
  primaryIconRight: "la-button-primary-icon-right",
  primaryIconLeft: "la-button-primary-icon-left",
  secondary: "la-button-secondary",
};

function buttonClassName(variant: ButtonVariant, className?: string) {
  return [variantClasses[variant], className].filter(Boolean).join(" ");
}

export default function Button(props: AnchorButtonProps | NativeButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
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
