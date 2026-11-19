import { motion } from 'framer-motion';

function HandShape({ flip }) {
  return (
    <svg viewBox="0 0 80 140" width="72" style={{ transform: flip ? 'scaleX(-1)' : undefined }} aria-hidden="true">
      <path
        d="M40 138 C 20 130, 10 108, 12 84 C 13 70, 10 55, 8 40 C 7 32, 14 28, 18 35 C 22 44, 24 54, 25 48 C 24 34, 21 22, 20 14 C 19 6, 28 4, 31 12 C 34 22, 35 34, 37 42 C 37 30, 36 18, 37 10 C 38 2, 48 2, 48 11 C 48 20, 49 32, 50 42 C 51 32, 52 22, 54 14 C 56 6, 65 8, 64 17 C 63 27, 60 38, 58 48 C 61 42, 64 34, 68 28 C 72 22, 79 27, 76 35 C 71 48, 64 62, 63 78 C 62 98, 64 118, 52 132 C 48 136, 44 138, 40 138 Z"
        fill="var(--color-terracotta)"
        opacity="0.9"
      />
      <path d="M22 60 q 18 -10 36 0" stroke="var(--color-gold)" strokeWidth="2.5" fill="none" opacity="0.85" />
      <path d="M20 72 q 20 -10 40 0" stroke="var(--color-gold)" strokeWidth="2" fill="none" opacity="0.7" />
    </svg>
  );
}

// A pair of decorative, stylised hands that frame the couple's names when they enter view.
export default function WeddingHands({ className = '' }) {
  return (
    <div className={`wedding-hands ${className}`} aria-hidden="true">
      <motion.div
        className="wedding-hands__left"
        initial={{ x: -60, opacity: 0, rotate: -8 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <HandShape />
      </motion.div>
      <motion.div
        className="wedding-hands__right"
        initial={{ x: 60, opacity: 0, rotate: 8 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
      >
        <HandShape flip />
      </motion.div>
    </div>
  );
}
