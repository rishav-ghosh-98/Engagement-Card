import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import './LoadingScreen.css';

const LOADING_DURATION_MS = 1600;

export default function LoadingScreen({ onDone }) {
  const { groom, bride } = weddingData.couple;

  useEffect(() => {
    const timer = window.setTimeout(onDone, LOADING_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      role="status"
      aria-live="polite"
    >
      <motion.p
        className="loading-screen__eyebrow"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        শুভ বাগদান
      </motion.p>
      <motion.h1
        className="loading-screen__names"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {groom.name} <span>×</span> {bride.name}
      </motion.h1>
      <motion.p
        className="loading-screen__status"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        নিমন্ত্রণ প্রস্তুত হচ্ছে...
      </motion.p>
      <motion.div
        className="loading-screen__thread"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
