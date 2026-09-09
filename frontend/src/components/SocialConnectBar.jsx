import React, { memo } from "react";
import { SOCIAL_CONNECT_ITEMS } from "../constants/socialData";

/**
 * Shared SocialIcon Component
 * Single Source of Truth for social media icons across the site.
 * Employs the unified grow + golden twinkle micro-interaction (.social-icon-hover).
 */
export const SocialIcon = memo(({
  item,
  href,
  svgPath,
  title,
  ariaLabel,
  iconSizeClass = "w-7 h-7",
  className = "text-[#B9935A]",
}) => {
  const finalHref = href || item?.href;
  const finalPath = svgPath || item?.svgPath;
  const finalTitle = title || item?.title;
  const finalAriaLabel = ariaLabel || item?.id || "social-link";

  return (
    <a
      href={finalHref}
      target={finalHref?.startsWith("http") ? "_blank" : undefined}
      rel={finalHref?.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={finalAriaLabel}
      title={finalTitle}
      className={`social-icon-hover shrink-0 ${className}`}
    >
      <svg className={`${iconSizeClass} fill-current`} viewBox="0 0 24 24">
        <path d={finalPath} />
      </svg>
    </a>
  );
});

/**
 * Shared Reusable Social & Contact Channel Bar
 * Renders 5 brand channels using the project's signature luxury golden theme.
 */
export const SocialConnectBar = memo(({
  containerClassName = "flex items-center justify-between w-full px-6 sm:px-10",
  iconSizeClass = "w-7 h-7",
  iconColorClass = "text-[#B9935A]",
}) => {
  return (
    <div className={containerClassName}>
      {SOCIAL_CONNECT_ITEMS.map((item) => (
        <SocialIcon
          key={item.id}
          item={item}
          iconSizeClass={iconSizeClass}
          className={iconColorClass}
        />
      ))}
    </div>
  );
});

export default SocialConnectBar;
