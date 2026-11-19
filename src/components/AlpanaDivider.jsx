// Reusable alpana-inspired SVG divider — rangoli-like dotted/petal motif.
// Pure vector, no raster assets, scales to any width.
export default function AlpanaDivider({ className = '', tone = 'gold' }) {
  const stroke = tone === 'gold' ? 'var(--color-gold)' : 'var(--color-deep-red)';

  return (
    <svg
      className={`alpana-divider ${className}`}
      viewBox="0 0 400 40"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
      aria-hidden="true"
    >
      <line x1="10" y1="20" x2="150" y2="20" stroke={stroke} strokeWidth="1.2" strokeDasharray="2 6" />
      <line x1="250" y1="20" x2="390" y2="20" stroke={stroke} strokeWidth="1.2" strokeDasharray="2 6" />

      <g stroke={stroke} strokeWidth="1.4" fill="none">
        <path d="M200 6 C 212 14, 212 26, 200 34 C 188 26, 188 14, 200 6 Z" />
        <path d="M200 6 C 188 14, 188 26, 200 34 C 212 26, 212 14, 200 6 Z" opacity="0.6" />
      </g>
      <circle cx="200" cy="20" r="3.2" fill={stroke} />

      {[160, 180, 220, 240].map((cx) => (
        <circle key={cx} cx={cx} cy="20" r="2" fill={stroke} opacity="0.8" />
      ))}

      <g stroke={stroke} strokeWidth="1" fill="none" opacity="0.75">
        <path d="M30 20 q 10 -10 20 0 q -10 10 -20 0 Z" />
        <path d="M350 20 q 10 -10 20 0 q -10 10 -20 0 Z" />
      </g>
    </svg>
  );
}
