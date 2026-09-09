import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

/**
 * Reusable Architectural Button & CTA Component
 * Single Source of Truth for all Home & Site CTAs.
 * Supports:
 * - 'architectural': Minimal architectural text link with subtle expanding underline and arrow slide
 * - 'primary': Solid gold button with restrained styling (reserved for primary navigation & main CTAs)
 * - 'ghost': Transparent background, 1px solid --accent-gold-matte border, charcoal text, 0.3s hover transition
 * - 'secondary': Subtle bordered button on warm surface
 */
export default function Button({
  children,
  to,
  href,
  download,
  variant = 'architectural',
  onClick,
  className = '',
  target,
  rel,
  ...props
}) {
  const isHash = (to && to.includes('#')) || (href && href.includes('#'));
  const destination = to || href;

  if (variant === 'architectural') {
    const architecturalClasses = `group inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#1F1E1C] transition-colors duration-300 hover:text-[#B9935A] relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#B9935A] after:origin-left after:scale-x-40 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer ${className}`;

    const content = (
      <>
        <span>{children}</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 font-sans">
          &rarr;
        </span>
      </>
    );

    if (to) {
      if (isHash) {
        return (
          <HashLink smooth to={destination} className={architecturalClasses} {...props}>
            {content}
          </HashLink>
        );
      }
      return (
        <Link to={to} className={architecturalClasses} {...props}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a
          href={href}
          download={download}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={architecturalClasses}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <button type="button" onClick={onClick} className={architecturalClasses} {...props}>
        {content}
      </button>
    );
  }

  // Primary, Ghost & Secondary architectural rectangular buttons
  const baseClasses =
    'group font-body text-xs font-semibold uppercase tracking-[0.18em] px-7 py-3.5 transition-all duration-300 inline-flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 whitespace-nowrap text-center';

  const variants = {
    primary:
      'bg-[#B9935A] text-white hover:bg-[#8F6E3B] border border-[#B9935A] hover:border-[#8F6E3B] shadow-sm',
    ghost:
      'bg-transparent text-[#1F1E1C] border border-[#B9935A] hover:bg-[#B9935A] hover:text-[#FAF7F2] transition-all duration-300',
    secondary:
      'bg-transparent text-[#1F1E1C] border border-[#B9935A] hover:bg-[#B9935A] hover:text-[#FAF7F2] transition-all duration-300',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  const buttonContent = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 font-sans">
        &rarr;
      </span>
    </>
  );

  if (to) {
    if (isHash) {
      return (
        <HashLink smooth to={destination} className={combinedClasses} {...props}>
          {buttonContent}
        </HashLink>
      );
    }
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses} {...props}>
      {buttonContent}
    </button>
  );
}
