import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import BananaLeaf from './BananaLeaf';
import GhotDecoration from './GhotDecoration';
import AlpanaDivider from './AlpanaDivider';
import './FamilySection.css';

export default function FamilySection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="section family-section" id="family" aria-label="দুই পরিবার">
      <BananaLeaf className="family-section__leaf family-section__leaf--left" size={120} />
      <BananaLeaf className="family-section__leaf family-section__leaf--right" flip size={120} />

      <div className="section-inner family-section__inner">
        <motion.h2
          className="family-section__heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          দুই পরিবারের
          <br />
          আশীর্বাদে
        </motion.h2>

        <GhotDecoration size={70} />

        <div className="family-section__families">
          <motion.div
            className="family-section__family"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="family-section__name">{groom.name}</p>
            <p className="family-section__role">পুত্র</p>
            {groom.parents.map((parent) => (
              <p className="family-section__parent" key={parent}>
                {parent}
              </p>
            ))}
          </motion.div>

          <span className="family-section__divider" aria-hidden="true">
            +
          </span>

          <motion.div
            className="family-section__family"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="family-section__name">{bride.name}</p>
            <p className="family-section__role">কন্যা</p>
            {bride.parents.map((parent) => (
              <p className="family-section__parent" key={parent}>
                {parent}
              </p>
            ))}
          </motion.div>
        </div>

        <AlpanaDivider tone="red" />
      </div>
    </section>
  );
}
