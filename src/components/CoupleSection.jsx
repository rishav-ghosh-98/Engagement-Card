import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import WeddingHands from './WeddingHands';
import './CoupleSection.css';

export default function CoupleSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="section couple-section" id="couple" aria-label="দম্পতির পরিচিতি">
      <div className="section-inner couple-section__inner">
        <motion.p
          className="couple-section__story"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          দুটি মানুষ
          <br />
          একটি গল্প
          <br />
          একটি নতুন শুরু
        </motion.p>

        <div className="couple-section__names">
          <motion.span
            className="couple-section__name couple-section__name--groom"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {groom.name}
            <span className="couple-section__name-bn">{groom.nameBn}</span>
          </motion.span>

          <motion.span
            className="couple-section__heart"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            aria-hidden="true"
          >
            ❖
          </motion.span>

          <motion.span
            className="couple-section__name couple-section__name--bride"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            {bride.name}
            <span className="couple-section__name-bn">{bride.nameBn}</span>
          </motion.span>
        </div>

        <WeddingHands />
      </div>
    </section>
  );
}
