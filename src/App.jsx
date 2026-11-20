import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/engagement.css';
import { weddingData } from './data/weddingData';
import MusicToggle from './components/MusicToggle';

const eventDate = new Date('2026-12-13T10:00:00+05:30');

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return useMemo(() => {
    const distance = Math.max(0, eventDate.getTime() - now);
    return {
      days: Math.floor(distance / 86400000),
      hours: Math.floor((distance % 86400000) / 3600000),
      minutes: Math.floor((distance % 3600000) / 60000),
      seconds: Math.floor((distance % 60000) / 1000),
      passed: distance === 0,
    };
  }, [now]);
}

function InvitationCover({ onOpen, isOpening }) {
  return (
    <motion.main className="cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
      <div className="cover__grain" />
      <div className="petal petal--one" /><div className="petal petal--two" /><div className="petal petal--three" />
      <motion.div className="cover__halo" animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} />
      <motion.div className={`cover__frame${isOpening ? ' is-opening' : ''}`} animate={isOpening ? { scale: 0.985, y: 8 } : { scale: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <motion.div className="cover__flap" animate={{ rotateX: isOpening ? -178 : 0 }} transition={{ duration: 0.95, ease: [0.22, 0.75, 0.25, 1] }} />
        <div className="cover__content">
          <span className="eyebrow">A CELEBRATION OF LOVE</span>
          <div className="cover__monogram">R <span>&</span> E</div>
          <div className="hairline" />
          <p className="cover__invite">Together with our families</p>
          <p className="cover__date">13 DECEMBER 2026 <b>·</b> 10:00 AM</p>
          <button className="button button--pink" onClick={onOpen} disabled={isOpening}>{isOpening ? 'Opening…' : 'Open invitation'} <span>↗</span></button>
          <p className="cover__foot">PLEASE JOIN US FOR OUR ENGAGEMENT</p>
        </div>
      </motion.div>
    </motion.main>
  );
}

function Countdown() {
  const time = useCountdown();
  const units = [['days', 'Days'], ['hours', 'Hours'], ['minutes', 'Minutes'], ['seconds', 'Seconds']];
  return (
    <div className="countdown">
      {time.passed ? <p className="countdown__passed">Today is the day. We look forward to celebrating with you.</p> :
        units.map(([key, label]) => <div className="countdown__unit" key={key}><strong>{String(time[key]).padStart(2, '0')}</strong><span>{label}</span></div>)}
    </div>
  );
}

function Invitation() {
  const { venue } = weddingData;
  return (
    <motion.div className="site" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <header className="topbar"><a href="#top" className="wordmark">R <span>&</span> E</a><a href="#details" className="topbar__link">THE DETAILS <span>↘</span></a></header>
      <section className="hero" id="top">
        <div className="hero__copy">
          <span className="eyebrow">WITH JOY IN OUR HEARTS</span>
          <p className="hero__pretitle">Together with our families,</p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>Rishav <em>&</em> Eshani</motion.h1>
          <p className="hero__description">invite you to celebrate the beginning of a beautiful new chapter</p>
          <div className="hero__date"><span>13</span><div><b>DECEMBER</b><small>SUNDAY · 10:00 AM</small></div><span className="hero__year">2026</span></div>
          <a className="text-link" href="#details">EXPLORE THE INVITATION <span>↓</span></a>
        </div>
        <motion.div className="hero__art" aria-label="Abstract botanical line artwork" initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: "easeOut" }}>
          <div className="art-circle art-circle--one" /><div className="art-circle art-circle--two" />
          <div className="art-stem"><i/><i/><i/><i/><i/></div>
          <div className="art-caption">A DAY TO REMEMBER<br/>A MOMENT TO CHERISH</div>
          <span className="art-number">01 / 01</span>
        </motion.div>
      </section>
      <motion.section className="intro section-pad" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8 }}>
        <span className="eyebrow">A NOTE FROM US</span>
        <p className="intro__text">Some moments become even more special when shared with the people who mean the most. We would be delighted to have you with us as we celebrate our engagement.</p>
      </motion.section>
      <motion.section className="details section-pad" id="details" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .8 }}>
        <div className="section-heading"><span className="eyebrow">SAVE THE DATE</span><h2>The celebration</h2><p>One special morning. A lifetime of memories.</p></div>
        <div className="details-grid">
          <motion.article className="detail-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: .12 }}><span className="detail-index">01</span><span className="detail-label">WHEN</span><h3>Sunday<br/>13 December 2026</h3><p>At 10:00 in the morning</p></motion.article>
          <motion.article className="detail-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: .25 }}><span className="detail-index">02</span><span className="detail-label">WHERE</span><h3>{venue.name}</h3><p>{venue.address}</p><a className="text-link" href={venue.mapUrl} target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a></motion.article>
        </div>
      </motion.section>
      <motion.section className="countdown-section section-pad" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
        <span className="eyebrow">COUNTING THE MOMENTS</span><h2>Until we celebrate</h2><Countdown />
      </motion.section>
      <motion.section className="closing section-pad" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
        <span className="eyebrow">YOUR PRESENCE IS OUR PRESENT</span>
        <h2>We can't wait<br/><i>to see you.</i></h2>
        <p>With love and warm wishes,</p>
      </motion.section>
      <footer className="footer"><span>R <i>&</i> E</span><p>ENGAGEMENT CELEBRATION · 13.12.2026</p><a href={venue.mapUrl} target="_blank" rel="noreferrer">VENUE DIRECTIONS ↗</a></footer>
    </motion.div>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

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
    window.setTimeout(() => setOpened(true), 1050);
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
          <InvitationCover key="cover" onOpen={openInvitation} isOpening={isOpening} />
        )}
      </AnimatePresence>
    </>
  );
}
