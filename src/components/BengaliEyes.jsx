// Abstract ornamental "eyes" motif inspired by traditional Bengali auspicious art —
// intentionally non-figurative, used purely as decoration behind headings.
export default function BengaliEyes({ className = '', size = 220 }) {
  return (
    <svg
      className={`bengali-eyes ${className}`}
      width={size}
      height={size * 0.45}
      viewBox="0 0 220 100"
      role="presentation"
      aria-hidden="true"
    >
      <g fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
        <path d="M10 50 C 45 10, 85 10, 110 50 C 85 90, 45 90, 10 50 Z" />
        <path d="M110 50 C 135 10, 175 10, 210 50 C 175 90, 135 90, 110 50 Z" />
      </g>
      <circle cx="60" cy="50" r="9" fill="var(--color-deep-red)" opacity="0.85" />
      <circle cx="160" cy="50" r="9" fill="var(--color-deep-red)" opacity="0.85" />
      <circle cx="60" cy="50" r="3" fill="var(--color-gold-light)" />
      <circle cx="160" cy="50" r="3" fill="var(--color-gold-light)" />
      <path
        d="M60 50 C 85 35, 135 35, 160 50"
        stroke="var(--color-gold)"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
