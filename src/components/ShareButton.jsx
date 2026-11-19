import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, MessageCircle, Link2, Check, X } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import './ShareButton.css';

export default function ShareButton() {
  const { share } = weddingData;
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `${share.message}\n${share.url}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: share.title, text: share.message, url: share.url });
      } catch {
        // user cancelled share — no action needed
      }
    } else {
      setOpen((prev) => !prev);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="share-button">
      <AnimatePresence>
        {open && (
          <motion.div
            className="share-button__menu"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <a
              className="share-button__item"
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" /> হোয়াটসঅ্যাপে পাঠান
            </a>
            <button type="button" className="share-button__item" onClick={handleCopy}>
              {copied ? <Check size={18} aria-hidden="true" /> : <Link2 size={18} aria-hidden="true" />}
              {copied ? 'লিংক কপি হয়েছে' : 'লিংক কপি করুন'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="share-button__fab"
        onClick={handleNativeShare}
        aria-label={open ? 'শেয়ার মেনু বন্ধ করুন' : 'নিমন্ত্রণ শেয়ার করুন'}
        aria-expanded={open}
        whileTap={{ scale: 0.92 }}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Share2 size={20} aria-hidden="true" />}
      </motion.button>
    </div>
  );
}
