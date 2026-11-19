import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Precomputed once at module load so render stays pure; sliced per `count` at use-time.
const PARTICLE_POOL = Array.from({ length: 120 }, () => ({
  x: (Math.random() - 0.5) * 6,
  y: (Math.random() - 0.5) * 4,
  z: (Math.random() - 0.5) * 2,
  speed: 0.05 + Math.random() * 0.08,
}));

// Soft ambient warm particles drifting upward behind the invitation card.
export default function FloatingParticles({ count = 60 }) {
  const pointsRef = useRef(null);

  const { positions, speeds } = useMemo(() => {
    const pool = PARTICLE_POOL.slice(0, count);
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    pool.forEach((particle, i) => {
      positions[i * 3] = particle.x;
      positions[i * 3 + 1] = particle.y;
      positions[i * 3 + 2] = particle.z;
      speeds[i] = particle.speed;
    });
    return { positions, speeds };
  }, [count]);

  useFrame(() => {
    const geometry = pointsRef.current?.geometry;
    if (!geometry) return;
    const array = geometry.attributes.position.array;
    for (let i = 0; i < count; i += 1) {
      array[i * 3 + 1] += speeds[i] * 0.01;
      if (array[i * 3 + 1] > 2.2) array[i * 3 + 1] = -2.2;
    }
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#e8c879" size={0.03} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}
