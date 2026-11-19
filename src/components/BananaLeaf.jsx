// Stylised banana-leaf frame illustration (vector), used as mandap-inspired framing.
export default function BananaLeaf({ className = '', flip = false, size = 160 }) {
  return (
    <svg
      className={`banana-leaf ${className}`}
      width={size}
      height={size * 1.4}
      viewBox="0 0 120 170"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M110 10 C 60 20, 20 60, 14 120 C 10 145, 20 160, 20 160 C 40 150, 60 120, 72 90 C 90 60, 104 35, 110 10 Z"
        fill="var(--color-banana-green)"
      />
      <path
        d="M108 14 C 62 26, 26 62, 18 118"
        fill="none"
        stroke="var(--color-ivory)"
        strokeWidth="1.4"
        opacity="0.45"
      />
      {[20, 38, 56, 74, 92].map((offset, index) => (
        <path
          key={offset}
          d={`M${108 - offset * 0.55} ${18 + offset} C ${90 - offset * 0.4} ${28 + offset}, ${60 - offset * 0.2} ${
            40 + offset
          }, ${34 - offset * 0.1} ${60 + offset * 0.8}`}
          fill="none"
          stroke="var(--color-ivory)"
          strokeWidth="0.8"
          opacity={0.3 - index * 0.03}
        />
      ))}
    </svg>
  );
}
