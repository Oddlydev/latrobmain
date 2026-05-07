type SiteBrandProps = {
  title?: string;
  theme?: "dark" | "light";
  showSubtitle?: boolean;
  subtitle?: string;
  subtitleUppercase?: boolean;
  showDivider?: boolean;
  logoWidthClass?: string;
  useDisplayFont?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function SiteBrand({
  title = "PCAT",
  theme = "dark",
  showSubtitle = true,
  subtitle = "PCAT Research Programme",
  subtitleUppercase = true,
  showDivider = true,
  logoWidthClass = "w-[51px]",
  useDisplayFont = true,
  titleClassName = "",
  subtitleClassName = "",
}: SiteBrandProps) {
  const textColor = theme === "dark" ? "text-zinc-50" : "text-white";
  const subtitleColor = theme === "dark" ? "text-gray-400" : "text-white/60";
  const borderColor = theme === "dark" ? "border-gray-200" : "border-white/20";
  const subtitleCaseClass = subtitleUppercase
    ? "uppercase tracking-wide"
    : "tracking-normal";
  const titleFontClass = useDisplayFont ? "font-display" : "";
  const subtitleFontClass = useDisplayFont ? "font-display" : "";

  return (
    <div className="flex items-center gap-4 lg:gap-3">
      <img
        src="/assets/images/logo-light.svg"
        alt="La Trobe University"
        className={`h-auto shrink-0 ${logoWidthClass}`}
      />
      <div
        className={[
          "flex flex-col",
          showDivider ? `border-l pl-4 ${borderColor}` : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <p
          className={`${titleFontClass} text-base font-semibold leading-4 ${textColor} ${titleClassName}`}
        >
          {title}
        </p>
        {showSubtitle ? (
          <p
            className={`${subtitleFontClass} text-xs font-medium leading-4 mt-1 ${subtitleCaseClass} ${subtitleColor} ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
