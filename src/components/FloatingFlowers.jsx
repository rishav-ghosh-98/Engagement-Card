import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Precomputed once at module load so render stays pure; sliced per `count` at use-time.
const PETAL_POOL = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 10 + Math.random() * 8,
  scale: 0.7 + Math.random() * 0.8,
  color: index % 2 === 0 ? 'var(--color-gold-light)' : '#e0962e',
}));

function Petal({ left, delay, duration, scale, color }) {
  return (
    <motion.svg
      className="floating-flowers__petal"
      viewBox="0 0 20 20"
      style={{ left: `${left}%`, width: 14 * scale, height: 14 * scale }}
      initial={{ y: -40, opacity: 0, rotate: 0 }}
      animate={{ y: '110vh', opacity: [0, 1, 1, 0], rotate: 180 }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill={color} opacity="0.85" />
      <circle cx="10" cy="10" r="3.5" fill="var(--color-maroon)" opacity="0.5" />
    </motion.svg>
  );
}

// Slow drifting marigold petals — purely decorative, auto-disabled with reduced motion.
export default function FloatingFlowers({ count = 10, className = '' }) {
  const prefersReduced = useReducedMotion();
  const petals = useMemo(() => PETAL_POOL.slice(0, count), [count]);

  if (prefersReduced) return null;

  return (
    <div className={`floating-flowers ${className}`} aria-hidden="true">
      {petals.map((petal) => (
        <Petal key={petal.id} {...petal} />
      ))}
    </div>
  );
}
