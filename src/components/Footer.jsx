import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import AlpanaDivider from './AlpanaDivider';
import './Footer.css';

export default function Footer() {
  const { couple, blessing } = weddingData;

  return (
    <footer className="footer" aria-label="সমাপ্তি">
      <div className="section-inner footer__inner">
        <motion.p
          className="footer__closing"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9 }}
        >
          {blessing.closing}
        </motion.p>

        <motion.p
          className="footer__names"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {couple.groom.name} <span>❤</span> {couple.bride.name}
        </motion.p>

        <p className="footer__names-bn">
          {couple.groom.nameBn} • {couple.bride.nameBn}
        </p>

        <p className="footer__thanks">
          আপনাদের ভালোবাসা ও আশীর্বাদে
          <br />
          শুরু হোক আমাদের নতুন পথচলা।
        </p>

        <div className="footer__ornament">
          <span>✦</span>
          <span className="footer__ornament-label">আলপনা</span>
          <span>✦</span>
        </div>

        <AlpanaDivider />

        <p className="footer__credit">এই নিমন্ত্রণটি ভালোবাসা দিয়ে তৈরি।</p>
      </div>
    </footer>
  );
}
