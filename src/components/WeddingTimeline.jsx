import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import EventCard from './EventCard';
import './WeddingTimeline.css';

const NODE_ICON = { engagement: '💐', gayeHolud: '🌼', wedding: '💍', reception: '🌿' };

export default function WeddingTimeline() {
  return (
    <section className="section wedding-timeline" id="timeline" aria-label="বাগদানের অনুষ্ঠান">
      <div className="section-inner">
        <motion.h2
          className="wedding-timeline__heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          বাগদানের অনুষ্ঠানের বিবরণ
        </motion.h2>

        <div className="wedding-timeline__track">
          <span className="wedding-timeline__line" aria-hidden="true" />
          <span className="wedding-timeline__cap wedding-timeline__cap--top" aria-hidden="true">
            ✦
          </span>

          {weddingData.events.map((event, index) => (
            <div className="wedding-timeline__row" key={event.id}>
              <motion.div
                className="wedding-timeline__node"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: 'backOut' }}
                aria-hidden="true"
              >
                {NODE_ICON[event.type]}
              </motion.div>
              <EventCard event={event} align={index % 2 === 0 ? 'left' : 'right'} />
            </div>
          ))}

          <span className="wedding-timeline__cap wedding-timeline__cap--bottom" aria-hidden="true">
            ✦
          </span>
        </div>
      </div>
    </section>
  );
}
