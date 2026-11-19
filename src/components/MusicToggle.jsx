import { Volume2, VolumeX } from 'lucide-react';
import './MusicToggle.css';

export default function MusicToggle({ playing, onToggle }) {
  return (
    <div className="music-toggle">
      <button
        type="button"
        className="music-toggle__button"
        onClick={onToggle}
        aria-pressed={playing}
        aria-label={playing ? 'Turn background music off' : 'Turn background music on'}
        title={playing ? 'Turn music off' : 'Turn music on'}
      >
        {playing ? <Volume2 size={18} aria-hidden="true" /> : <VolumeX size={18} aria-hidden="true" />}
        <span>{playing ? 'Music on' : 'Music off'}</span>
      </button>
    </div>
  );
}
