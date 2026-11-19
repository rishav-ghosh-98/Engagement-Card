import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import FloatingFlowers from './FloatingFlowers';
import './Blessings.css';

const SECRET_TAP_COUNT = 3;
const SECRET_TAP_WINDOW_MS = 1200;

// The blessing message, plus one hidden delight: tap the central motif 3 times quickly.
export default function Blessings() {
  const { blessing } = weddingData;
  const tapCountRef = useRef(0);
  const tapTimerRef = useRef(null);
  const [secretActive, setSecretActive] = useState(false);

  const handleMotifTap = () => {
    tapCountRef.current += 1;

    if (tapTimerRef.current) window.clearTimeout(tapTimerRef.current);
    tapTimerRef.current = window.setTimeout(() => {
      tapCountRef.current = 0;
    }, SECRET_TAP_WINDOW_MS);

    if (tapCountRef.current >= SECRET_TAP_COUNT) {
      tapCountRef.current = 0;
      setSecretActive(true);
      window.setTimeout(() => setSecretActive(false), 3200);
    }
  };

  return (
    <section className="section blessings-section" id="blessings" aria-label="আশীর্বাদ">
      <div className="section-inner blessings-section__inner">
        <motion.button
          type="button"
          className="blessings-section__motif"
          onClick={handleMotifTap}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          aria-label="বাগদানের চিহ্ন"
        >
          ✦
        </motion.button>

        <motion.p
          className="blessings-section__body"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {blessing.body.split('\n').map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>

        <motion.a
          href="#venue"
          className="blessings-section__cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          অনুষ্ঠানের স্থান দেখুন
        </motion.a>
      </div>

      <AnimatePresence>
        {secretActive && (
          <motion.div
            className="blessings-section__secret"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="status"
            aria-live="polite"
          >
            <FloatingFlowers count={16} />
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
            >
              শুভ হোক
              <br />
              নতুন পথচলা ❤️
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
