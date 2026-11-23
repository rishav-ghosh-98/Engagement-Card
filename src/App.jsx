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
          <p className="cover__date">13 DECEMBER 2026 <b>·</b> 10:00 AM</p>
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
          <div className="cover__seal" aria-hidden="true">R <i>&</i> E</div>
          <button className="button button--pink" onClick={onOpen} disabled={isOpening}>
            {isOpening ? 'Opening…' : 'Open invitation'} <span>↗</span>
          </button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

function Invitation() {
  const { venue } = weddingData;
  return (
    <motion.div className="site" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <header className="topbar"><a href="#top" className="wordmark">R <span>&</span> E</a><a href="#details" className="topbar__link"><span>↘</span></a></header>
      <section className="hero" id="top">
        <FloralMotif className="hero__motif hero__motif--top-left" />
        <FloralMotif className="hero__motif hero__motif--top-right" />
        <FloralMotif className="hero__motif hero__motif--bottom-left" />
        <FloralMotif className="hero__motif hero__motif--bottom-right" />
        <FloralMotif className="hero__motif hero__motif--side-left" />
        <FloralMotif className="hero__motif hero__motif--side-right" />
        <div className="hero__copy">
          <p className="hero__pretitle">Together with our families,</p>
          <motion.h1 className="hero__couple-names" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>
            <span>Rishav</span>
            <em>&amp;</em>
            <span>Eshani</span>
          </motion.h1>
          <FloralMotif className="hero__divider" />
          <p className="hero__description">invite you to celebrate the beginning of a beautiful new chapter</p>
        </div>
      </section>
      <motion.section className="details section-pad" id="details" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .8 }}>
        <div className="section-heading"><span className="eyebrow">SAVE THE DATE</span><h2>The celebration</h2><p>One special morning. A lifetime of memories.</p><FloralMotif className="section-heading__motif" /></div>
        <div className="details-grid">
          <motion.article className="detail-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: .12 }}><FloralMotif className="detail-card__motif detail-card__motif--top" /><FloralMotif className="detail-card__motif detail-card__motif--bottom" /><span className="detail-label">WHEN</span><h3>Sunday<br/>13 December 2026</h3><p>At 10:00 in the morning</p></motion.article>
          <motion.article className="detail-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: .25 }}><FloralMotif className="detail-card__motif detail-card__motif--top" /><FloralMotif className="detail-card__motif detail-card__motif--bottom" /><span className="detail-label">WHERE</span><h3>{venue.name}</h3><p>{venue.address}</p><a className="text-link" href={venue.mapUrl} target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a></motion.article>
        </div>
      </motion.section>
      <motion.section className="closing section-pad" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
        <FloralMotif className="closing__motif closing__motif--corner closing__motif--top-left" />
        <FloralMotif className="closing__motif closing__motif--corner closing__motif--top-right" />
        <FloralMotif className="closing__motif closing__motif--corner closing__motif--bottom-left" />
        <FloralMotif className="closing__motif closing__motif--corner closing__motif--bottom-right" />
        <FloralMotif className="closing__motif" />
        <span className="eyebrow">YOUR PRESENCE IS OUR PRESENT</span>
        <h2>We can't wait<br/><i>to see you.</i></h2>
        <p>With love and warm wishes,</p>
      </motion.section>
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
