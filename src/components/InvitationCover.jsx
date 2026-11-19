import { lazy, Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDeviceCapability } from '../hooks/useDeviceCapability';
import { useReducedMotion } from '../hooks/useReducedMotion';
import BengaliEyes from './BengaliEyes';
import FloatingFlowers from './FloatingFlowers';
import AlpanaDivider from './AlpanaDivider';
import './InvitationCover.css';

const Scene = lazy(() => import('../three/Scene'));

const OPEN_TRANSITION_MS = 1700;

function CardFace2D({ isOpen }) {
  return (
    <div className={`invitation-card ${isOpen ? 'is-open' : ''}`}>
      <div className="invitation-card__back">
        <p className="invitation-card__back-line">শ্রী শ্রী গণেশায় নমঃ</p>
        <p className="invitation-card__back-heading">শুভ বাগদান</p>
      </div>
      <div className="invitation-card__cover">
        <div className="invitation-card__cover-face">
          <span className="invitation-card__motif">✦</span>
          <p className="invitation-card__label">নিমন্ত্রণ</p>
          <span className="invitation-card__flower">✿</span>
        </div>
      </div>
    </div>
  );
}

// The hero interaction: a closed Bengali wedding invitation that physically opens on tap.
export default function InvitationCover({ onOpen, onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const canUseHeavyEffects = useDeviceCapability();
  const prefersReducedMotion = useReducedMotion();
  const use3D = canUseHeavyEffects && !prefersReducedMotion;

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen?.();
    window.setTimeout(() => onOpenComplete(), OPEN_TRANSITION_MS);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <motion.section
      className="invitation-cover"
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
      aria-label="বাগদানের নিমন্ত্রণ কভার"
    >
      <div className="invitation-cover__ambient">
        <FloatingFlowers count={prefersReducedMotion ? 0 : 7} />
      </div>

      <motion.p
        className="invitation-cover__eyebrow"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        ✦ আমাদের শুভ বাগদানের নিমন্ত্রণ ✦
      </motion.p>

      <div className="invitation-cover__stage-wrap">
        <BengaliEyes className="invitation-cover__eyes" size={260} />
        <div
          className="invitation-cover__stage"
          role="button"
          tabIndex={0}
          aria-pressed={isOpen}
          aria-label="নিমন্ত্রণ খুলতে স্পর্শ করুন"
          onClick={handleOpen}
          onKeyDown={handleKeyDown}
        >
          {use3D ? (
            <Suspense fallback={<CardFace2D isOpen={isOpen} />}>
              <div className="invitation-cover__canvas">
                <Scene isOpen={isOpen} reduced={false} />
              </div>
            </Suspense>
          ) : (
            <CardFace2D isOpen={isOpen} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {!isOpen && (
          <motion.p
            className="invitation-cover__hint"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.4 } }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            স্পর্শ করুন
            <br />
            নিমন্ত্রণ খুলতে
          </motion.p>
        )}
      </AnimatePresence>

      <AlpanaDivider className="invitation-cover__divider" />
    </motion.section>
  );
}
