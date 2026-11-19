import { motion } from 'framer-motion';

// Decorative পূর্ণঘট (ceremonial pot) illustration with mango-leaf crown and coconut.
export default function GhotDecoration({ className = '', size = 90, animate = true }) {
  const MotionG = animate ? motion.g : 'g';

  return (
    <svg
      className={`ghot-decoration ${className}`}
      width={size}
      height={size * 1.15}
      viewBox="0 0 100 115"
      role="presentation"
      aria-hidden="true"
    >
      {/* mango leaves */}
      <MotionG
        {...(animate && {
          animate: { rotate: [-2, 2, -2] },
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          style: { transformOrigin: '50px 38px' },
        })}
      >
        <path d="M50 38 C 36 22, 24 20, 14 10 C 22 24, 30 34, 50 38 Z" fill="var(--color-banana-green)" />
        <path d="M50 38 C 64 22, 76 20, 86 10 C 78 24, 70 34, 50 38 Z" fill="var(--color-banana-green)" />
        <path d="M50 38 C 46 18, 48 8, 50 0 C 52 8, 54 18, 50 38 Z" fill="var(--color-banana-green)" />
      </MotionG>

      {/* coconut */}
      <circle cx="50" cy="30" r="11" fill="var(--color-terracotta)" />
      <circle cx="50" cy="30" r="11" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.6" />

      {/* pot body */}
      <path
        d="M30 50 C 30 42, 70 42, 70 50 L 66 95 C 64 104, 36 104, 34 95 Z"
        fill="var(--color-sindoor)"
      />
      <ellipse cx="50" cy="50" rx="20" ry="6" fill="var(--color-maroon)" opacity="0.85" />

      {/* gold bands + motifs */}
      <rect x="31" y="62" width="38" height="2.4" fill="var(--color-gold)" opacity="0.85" />
      <rect x="32.5" y="82" width="35" height="2.4" fill="var(--color-gold)" opacity="0.85" />
      <circle cx="50" cy="72" r="4" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path d="M50 68 l2 4 l-2 4 l-2 -4 Z" fill="var(--color-gold)" />
    </svg>
  );
}
