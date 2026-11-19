import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, ParkingCircle, Landmark, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import AlpanaDivider from './AlpanaDivider';
import './VenueSection.css';

export default function VenueSection() {
  const { venue } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${venue.name}, ${venue.address}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section venue-section" id="venue" aria-label="বাগদানের স্থান">
      <div className="section-inner venue-section__inner">
        <motion.p
          className="venue-section__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          📍 বাগদানের স্থান
        </motion.p>

        <motion.h2
          className="venue-section__name"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          {venue.name}
        </motion.h2>

        <p className="venue-section__address">{venue.address}</p>

        <AlpanaDivider />

        <div className="venue-section__details">
          <p>
            <ParkingCircle size={16} aria-hidden="true" /> {venue.parkingInfo}
          </p>
          <p>
            <Landmark size={16} aria-hidden="true" /> {venue.nearbyLandmark}
          </p>
        </div>

        <div className="venue-section__actions">

          <a className="btn btn--ghost" href={venue.mapUrl} target="_blank" rel="noreferrer">
            <MapPin size={16} aria-hidden="true" /> Google Maps-এ দেখুন
          </a>
          <button type="button" className="btn btn--ghost" onClick={handleCopy}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? 'ঠিকানা কপি হয়েছে' : 'ঠিকানা কপি করুন'}
          </button>
        </div>
      </div>
    </section>
  );
}
