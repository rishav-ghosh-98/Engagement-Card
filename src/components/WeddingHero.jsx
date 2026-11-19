import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import BengaliEyes from './BengaliEyes';
import AlpanaDivider from './AlpanaDivider';
import GhotDecoration from './GhotDecoration';
import './WeddingHero.css';

export default function WeddingHero() {
  const { couple, invitationMessage } = weddingData;

  return (
    <section className="section wedding-hero" id="invitation" aria-label="বাগদানের নিমন্ত্রণ">
      <div className="section-inner wedding-hero__inner">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <GhotDecoration size={64} />
        </motion.div>

        <motion.p
          className="wedding-hero__invocation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {invitationMessage.invocation}
        </motion.p>

        <motion.h2
          className="wedding-hero__heading"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {invitationMessage.heading}
        </motion.h2>

        <div className="wedding-hero__names-wrap">
          <BengaliEyes className="wedding-hero__eyes" size={260} />
          <motion.div
            className="wedding-hero__names"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <span className="wedding-hero__name-group">
              <span className="wedding-hero__name">{couple.groom.name}</span>
              <span className="wedding-hero__name-bn">{couple.groom.nameBn}</span>
            </span>
            <span className="wedding-hero__amp">&amp;</span>
            <span className="wedding-hero__name-group">
              <span className="wedding-hero__name">{couple.bride.name}</span>
              <span className="wedding-hero__name-bn">{couple.bride.nameBn}</span>
            </span>
          </motion.div>
        </div>

        <motion.p
          className="wedding-hero__intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          {invitationMessage.intro.split('\n').map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>

        <AlpanaDivider />

        <motion.p
          className="wedding-hero__invite-line"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {invitationMessage.inviteLine}
        </motion.p>
      </div>
    </section>
  );
}
