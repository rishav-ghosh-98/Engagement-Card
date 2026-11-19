import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flower2, HandHeart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { submitRsvp } from '../services/rsvp';
import AlpanaDivider from './AlpanaDivider';
import './RSVPSection.css';

const ICONS = { heart: Heart, flower: Flower2, pray: HandHeart };

export default function RSVPSection() {
  const { rsvp } = weddingData;
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState('idle');

  if (!rsvp.enabled) return null;

  const handleSelect = async (optionId) => {
    setSelected(optionId);
    setStatus('submitting');
    await submitRsvp({ optionId });
    setStatus('done');
  };

  return (
    <section className="section rsvp-section" id="rsvp" aria-label="RSVP">
      <div className="section-inner rsvp-section__inner">
        <motion.h2
          className="rsvp-section__heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          আপনারা আসছেন তো?
        </motion.h2>

        <p className="rsvp-section__question">আপনি কি আমাদের অনুষ্ঠানে উপস্থিত থাকবেন?</p>

        <div className="rsvp-section__options" role="radiogroup" aria-label="উপস্থিতি নিশ্চিত করুন">
          {rsvp.options.map((option) => {
            const Icon = ICONS[option.icon] ?? Heart;
            const isActive = selected === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                className={`rsvp-section__option ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelect(option.id)}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {status === 'done' && (
            <motion.p
              className="rsvp-section__thanks"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              আপনার উত্তরের জন্য ধন্যবাদ 🙏
            </motion.p>
          )}
        </AnimatePresence>

        <AlpanaDivider />
      </div>
    </section>
  );
}
