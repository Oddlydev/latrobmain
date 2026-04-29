import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark";
type ButtonVisualState = "default" | "hover" | "focus" | "active";

type SharedProps = {
  variant?: ButtonVariant;
  visualState?: ButtonVisualState;
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
  secondary: "la-button-secondary",
  outline: "la-button-outline",
  dark: "la-button-dark",
};

const primaryStateClasses: Record<ButtonVisualState, string> = {
  default: "la-button-primary-state-default",
  hover: "la-button-primary-state-hover",
  focus: "la-button-primary-state-focus",
  active: "la-button-primary-state-active",
};

const secondaryStateClasses: Record<ButtonVisualState, string> = {
  default: "la-button-secondary-state-default",
  hover: "la-button-secondary-state-hover",
  focus: "la-button-secondary-state-focus",
  active: "la-button-secondary-state-active",
};

function buttonClassName(
  variant: ButtonVariant,
  visualState: ButtonVisualState | undefined,
  className?: string,
) {
  const stateClass =
    visualState && variant === "secondary"
      ? secondaryStateClasses[visualState]
      : visualState
        ? primaryStateClasses[visualState]
        : undefined;

  return ["la-button", variantClasses[variant], stateClass, className]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: AnchorButtonProps | NativeButtonProps) {
  const {
    variant = "primary",
    visualState,
    className,
    children,
    ...rest
  } = props;
  const classes = buttonClassName(variant, visualState, className);

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
