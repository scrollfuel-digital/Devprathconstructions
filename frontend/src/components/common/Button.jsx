import React from 'react';

/**
 * Reusable Luxury Button Component
 * Matches exact styles: Primary Gold Gradient Pill & Secondary White Border Pill.
 */
export default function Button({
  children,
  href,
  download,
  variant = 'primary',
  onClick,
  className = '',
  ...props
}) {
  const baseClasses =
    'rounded-full transition-all duration-300 text-[10px] sm:text-xs font-semibold uppercase flex items-center justify-center cursor-pointer active:scale-95 text-center shadow-md whitespace-nowrap shrink-0';

  const variants = {
    primary:
      'bg-[#B9935A] py-2.5 sm:py-3.5 px-3.5 sm:px-8 tracking-[1px] sm:tracking-[2px] text-white hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent',
    secondary:
      'bg-white text-[#B9935A] border border-[#B9935A] py-2.5 sm:py-3.5 px-3.5 sm:px-8 tracking-[0.5px] sm:tracking-[1px] hover:bg-[#B9935A] hover:text-white shadow-sm',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} download={download} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
