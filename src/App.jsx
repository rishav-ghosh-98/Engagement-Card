import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './styles/engagement.css';
import { weddingData } from './data/weddingData';
import MusicToggle from './components/MusicToggle';

function FloralMotif({ className }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <path d="M13 84C29 70 28 57 43 45C56 35 63 23 61 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 67C17 68 11 61 11 52C21 50 29 56 27 67Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M43 48C34 45 31 37 35 29C44 32 48 40 43 48Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M56 32C48 28 45 21 49 14C57 17 60 24 56 32Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M46 46C52 40 60 41 65 47C59 54 52 54 46 46Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="62" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function RangoliMotif({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round">
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" />
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" transform="rotate(45 40 40)" />
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" transform="rotate(90 40 40)" />
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" transform="rotate(135 40 40)" />
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" transform="rotate(180 40 40)" />
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" transform="rotate(225 40 40)" />
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" transform="rotate(270 40 40)" />
        <path d="M40 7c7 8 8 15 0 22-8-7-7-14 0-22Z" transform="rotate(315 40 40)" />
        <circle cx="40" cy="40" r="13" />
        <circle cx="40" cy="40" r="5" fill="#bd996b" />
      </g>
      <circle cx="40" cy="3" r="1.4" fill="#7c8969" />
      <circle cx="77" cy="40" r="1.4" fill="#7c8969" />
      <circle cx="40" cy="77" r="1.4" fill="#7c8969" />
      <circle cx="3" cy="40" r="1.4" fill="#7c8969" />
    </svg>
  );
}

function PaisleyMotif({ className }) {
  return (
    <svg className={className} viewBox="0 0 96 120" fill="none" aria-hidden="true">
      <path d="M76 11C40 8 14 34 14 66c0 25 17 43 39 43 20 0 34-15 34-34 0-15-10-25-24-25-11 0-19 8-18 17 1 8 8 14 16 11 5-2 7-6 7-10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M69 18C47 22 29 40 29 63c0 15 9 27 23 30-10-8-13-19-9-31 4-13 16-22 31-23" stroke="#7c8969" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M47 38c-12-10-9-21 2-23 3 11 2 17-2 23Zm-12 20c-14-6-16-17-7-23 9 8 12 15 7 23Zm8 21c-13 4-21-3-18-14 12 1 18 5 18 14Zm17 10c-4 12-15 15-22 6 8-8 14-10 22-6Z" stroke="#7c8969" strokeWidth="1.25" strokeLinejoin="round" />
      <circle cx="75" cy="13" r="3" fill="#bd996b" />
    </svg>
  );
}

function LanternMotif({ className }) {
  return (
    <svg className={className} viewBox="0 0 56 160" fill="none" aria-hidden="true">
      <path d="M28 0v28" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 28h16l5 10v56l-5 10H20l-5-10V38l5-10Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M17 43h22M16 88h24M21 104v8h14v-8M28 112v8m-7 0h14" stroke="currentColor" strokeWidth="1.2" />
      <path d="M22 48v36m12-36v36" stroke="currentColor" strokeWidth="1" opacity=".65" />
      <path d="M28 48c-7 10-7 25 0 36 7-11 7-26 0-36Z" fill="currentColor" opacity=".16" />
    </svg>
  );
}

function RingMotif({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 46" fill="none" role="img" aria-label="and">
      <circle cx="30" cy="27" r="13.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="27" r="13.5" stroke="#b99169" strokeWidth="2" />
      <path d="m50 6 4 5-4 5-4-5 4-5Z" fill="#b99169" />
      <path d="M47 11h6m-3 5v3" stroke="#b99169" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function LotusMotif({ className }) {
  return (
    <svg className={className} viewBox="0 0 180 120" fill="none" aria-hidden="true">
      <path d="M90 105c-5-27-3-48 0-72 12 13 22 31 21 51 12-18 25-26 44-27-8 22-23 38-48 42 17 2 28 8 37 17H36c9-9 20-15 37-17-25-4-40-20-48-42 19 1 32 9 44 27-1-20 9-38 21-51 3 24 5 45 0 72Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M33 115c16-9 30-12 57-10 27-2 41 1 57 10M90 105v12m-18 0c-10-9-20-13-34-14m70 14c10-9 20-13 34-14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="90" cy="33" r="3" fill="currentColor" />
    </svg>
  );
}

function FloralGarland({ className }) {
  return (
    <svg className={className} viewBox="0 0 600 110" fill="none" aria-hidden="true">
      <path d="M10 88c64-13 94-56 157-51 49 4 77 43 133 43s84-39 133-43c63-5 93 38 157 51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M62 75c-8-20 1-32 19-33 4 17-3 29-19 33Zm52-28c-1-20 10-29 28-24 0 17-10 27-28 24Zm73-1c8-18 22-21 35-8-8 15-21 18-35 8Zm70 30c2-20 14-27 31-19-3 17-15 24-31 19Zm86 0c-2-20-14-27-31-19 3 17 15 24 31 19Zm70-30c-8-18-22-21-35-8 8 15 21 18 35 8Zm73 1c1-20-10-29-28-24 0 17 10 27 28 24Zm52 28c8-20-1-32-19-33-4 17 3 29 19 33Z" stroke="#7c8969" strokeWidth="1.4" strokeLinejoin="round" />
      <g stroke="currentColor" strokeWidth="1.2">
        <path d="M167 35c-11-8-7-18 2-17 1-10 13-11 17-2 9-5 17 4 11 13 8 8 1 17-9 13-5 9-17 6-16-4-10 0-13-10-5-15Z" />
        <path d="M286 76c-11-8-7-18 2-17 1-10 13-11 17-2 9-5 17 4 11 13 8 8 1 17-9 13-5 9-17 6-16-4-10 0-13-10-5-15Z" />
        <path d="M419 35c-11-8-7-18 2-17 1-10 13-11 17-2 9-5 17 4 11 13 8 8 1 17-9 13-5 9-17 6-16-4-10 0-13-10-5-15Z" />
      </g>
      <g fill="#c08a7b">
        <circle cx="181" cy="27" r="3" />
        <circle cx="300" cy="68" r="3" />
        <circle cx="433" cy="27" r="3" />
      </g>
      <path d="M15 99h570" stroke="#bd996b" strokeWidth="1" opacity=".65" />
    </svg>
  );
}

function InvitationCover({ onOpen, isOpening, prefersReducedMotion }) {
  return (
    <motion.main className="cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: prefersReducedMotion ? 0.15 : 0.7 }}>
      <motion.div className={`cover__frame${isOpening ? ' is-opening' : ''}`} animate={isOpening && !prefersReducedMotion ? { scale: 0.985, y: 8 } : { scale: 1, y: 0 }} transition={{ duration: prefersReducedMotion ? 0.15 : 0.65 }}>
        <motion.div className="cover__flap" animate={{ rotateX: isOpening && !prefersReducedMotion ? -178 : 0 }} transition={{ duration: 1.05, ease: [0.22, 0.75, 0.25, 1] }} />
        <motion.div className="cover__content" initial={false} animate={isOpening ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }} transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, delay: isOpening && !prefersReducedMotion ? 0.35 : 0 }}>
          <span className="eyebrow">A CELEBRATION OF LOVE</span>
          <h1>Rishav <i>&</i> Eshani</h1>
          <div className="hairline" />
          <p className="cover__invite">Together with our families</p>
          <p className="cover__date">13 DECEMBER 2026</p>
        </motion.div>
        <motion.div
          className={`cover__front${isOpening ? ' is-opening' : ''}`}
          aria-hidden={isOpening}
          animate={isOpening ? (prefersReducedMotion ? { opacity: 0 } : { rotateX: -168 }) : { rotateX: 0, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 1.15, ease: [0.22, 0.75, 0.25, 1] }}
        >
          <FloralMotif className="cover__motif cover__motif--top-left" />
          <FloralMotif className="cover__motif cover__motif--top-right" />
          <FloralMotif className="cover__motif cover__motif--bottom-left" />
          <FloralMotif className="cover__motif cover__motif--bottom-right" />
          <RangoliMotif className="cover__rangoli" />
          <span className="cover__fold cover__fold--left" />
          <span className="cover__fold cover__fold--right" />
          <span className="cover__fold cover__fold--bottom" />
          <button className="cover__seal" type="button" onClick={onOpen} disabled={isOpening} aria-label={isOpening ? 'Unsealing invitation' : 'Unseal invitation'}>
            <span>R <i>&amp;</i> E</span>
            <span className="cover__seal-star" aria-hidden="true">✦</span>
          </button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

function Invitation() {
  const { venue } = weddingData;
  const eventDate = new Date(`${weddingData.wedding.date}T12:00:00`);
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(eventDate);
  const day = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(eventDate);
  const monthYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(eventDate);

  return (
    <motion.div className="site site--poster" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <main className="invitation-poster" id="top">
        <FloralGarland className="poster__garland poster__garland--top" />
        <PaisleyMotif className="poster__paisley poster__paisley--left" />
        <PaisleyMotif className="poster__paisley poster__paisley--right" />
        <FloralMotif className="poster__corner poster__corner--top-left" />
        <FloralMotif className="poster__corner poster__corner--top-right" />
        <FloralMotif className="poster__corner poster__corner--bottom-left" />
        <FloralMotif className="poster__corner poster__corner--bottom-right" />
        <LanternMotif className="poster__lantern poster__lantern--left" />
        <LanternMotif className="poster__lantern poster__lantern--right" />
        <div className="poster__content">
          <RangoliMotif className="poster__crest" />
          <p className="poster__eyebrow">Together with our families</p>
          <motion.h1 className="poster__names" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>
            <span>{weddingData.couple.groom.name}</span>
            <RingMotif className="poster__rings" />
            <span>{weddingData.couple.bride.name}</span>
          </motion.h1>
          <div className="poster__rule" aria-hidden="true"><span>♥</span></div>
          <p className="poster__invitation">invite you to celebrate the beginning of a beautiful new chapter</p>

          <div className="poster__date">
            <div className="poster__date-copy">
              <span className="poster__weekday">{weekday}</span>
              <strong className="poster__day">{day}</strong>
              <span className="poster__month-year">{monthYear}</span>
            </div>
          </div>

          <div className="poster__rule poster__rule--venue" aria-hidden="true"><span>♥</span></div>
          <section className="poster__venue" id="details">
            <span className="poster__venue-label">Venue</span>
            <h2>{venue.name}</h2>
            <p>{venue.address}</p>
            <a href={venue.mapUrl} target="_blank" rel="noreferrer">View directions <span>↗</span></a>
          </section>
          <div className="poster__rule poster__rule--blessing" aria-hidden="true"><span>♥</span></div>
          <p className="poster__blessing">Your presence will grace us with joy on this blessed day!</p>
          <div className="poster__rule poster__rule--signoff" aria-hidden="true"><span>♥</span></div>
          <p className="poster__signoff">With love and warm wishes</p>
          <p className="poster__signature">{weddingData.couple.groom.name} <i>&amp;</i> {weddingData.couple.bride.name}</p>
        </div>
        <LotusMotif className="poster__lotus" />
      </main>
    </motion.div>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const openInvitation = async () => {
    if (isOpening) return;
    setIsOpening(true);
    // Start audio directly from the guest's tap; browser policy may still block it.
    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
    window.setTimeout(() => setOpened(true), prefersReducedMotion ? 350 : 1550);
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music.src} loop preload="none" />
      <AnimatePresence mode="wait">
        {opened ? (
          <>
            <Invitation key="invitation" />
            <MusicToggle key="music-toggle" playing={playing} onToggle={toggleMusic} />
          </>
        ) : (
          <InvitationCover key="cover" onOpen={openInvitation} isOpening={isOpening} prefersReducedMotion={prefersReducedMotion} />
        )}
      </AnimatePresence>
    </>
  );
}
