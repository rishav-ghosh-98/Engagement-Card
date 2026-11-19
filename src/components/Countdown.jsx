import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { weddingData } from '../data/weddingData';
import AlpanaDivider from './AlpanaDivider';
import './Countdown.css';

const UNITS = [
  { key: 'days', label: 'দিন' },
  { key: 'hours', label: 'ঘণ্টা' },
  { key: 'minutes', label: 'মিনিট' },
  { key: 'seconds', label: 'সেকেন্ড' },
];

export default function Countdown() {
  const { wedding } = weddingData;
  const timeLeft = useCountdown(wedding.date, wedding.time);

  return (
    <section className="section countdown-section" id="countdown" aria-label="বাগদানের কাউন্টডাউন">
      <div className="section-inner countdown-section__inner">
        {timeLeft.isPast ? (
          <motion.p
            className="countdown-section__arrived"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            আজ আমাদের বাগদানের দিন! ❤️
          </motion.p>
        ) : (
          <>
            <motion.p
              className="countdown-section__eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
            >
              আর মাত্র
            </motion.p>

            <div className="countdown-section__units" role="timer" aria-live="polite">
              {UNITS.map((unit) => (
                <div className="countdown-section__unit" key={unit.key}>
                  <span className="countdown-section__value">{String(timeLeft[unit.key]).padStart(2, '0')}</span>
                  <span className="countdown-section__label">{unit.label}</span>
                </div>
              ))}
            </div>

            <AlpanaDivider />

            <p className="countdown-section__footer">বাগদানের দিনের অপেক্ষায়...</p>
          </>
        )}
      </div>
    </section>
  );
}
