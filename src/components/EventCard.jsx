import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import FloatingFlowers from './FloatingFlowers';
import AlpanaDivider from './AlpanaDivider';
import GhotDecoration from './GhotDecoration';
import BananaLeaf from './BananaLeaf';
import { formatEventDate, formatEventTime } from '../utils/date';
import './EventCard.css';

const THEME_MOTIF = {
  engagement: '💐',
  yellow: '🌼',
  wedding: '💍',
  reception: '🌿',
};

// A single wedding-journey moment: themed, richly decorated for the ceremony itself.
export default function EventCard({ event, align = 'left' }) {
  const isWedding = event.theme === 'wedding';

  return (
    <motion.article
      className={`event-card event-card--${event.theme} event-card--${align}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {event.theme === 'yellow' && <FloatingFlowers count={4} className="event-card__petals" />}
      {isWedding && (
        <>
          <BananaLeaf className="event-card__leaf event-card__leaf--left" size={70} />
          <BananaLeaf className="event-card__leaf event-card__leaf--right" flip size={70} />
        </>
      )}

      <div className="event-card__motif" aria-hidden="true">
        {isWedding ? <GhotDecoration size={48} /> : <span>{THEME_MOTIF[event.theme] ?? '✦'}</span>}
      </div>

      <p className="event-card__subtitle">{event.subtitle}</p>
      <h3 className="event-card__title">{event.title}</h3>

      {isWedding && <AlpanaDivider className="event-card__alpana" />}

      <p className="event-card__description">{event.description}</p>

      <dl className="event-card__meta">
        <div>
          <dt className="visually-hidden">তারিখ</dt>
          <dd>
            <Clock size={14} aria-hidden="true" /> {formatEventDate(event.date)} · {formatEventTime(event.time)}
          </dd>
        </div>
        <div>
          <dt className="visually-hidden">স্থান</dt>
          <dd>
            <MapPin size={14} aria-hidden="true" /> {event.venue}
          </dd>
        </div>
      </dl>
      <p className="event-card__address">{event.address}</p>
    </motion.article>
  );
}
