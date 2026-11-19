import { Canvas } from '@react-three/fiber';
import WeddingCard3D from './WeddingCard3D';
import FloatingParticles from './FloatingParticles';

// The complete lightweight 3D scene for the invitation cover.
// Kept deliberately minimal: one card + one particle field, no heavy textures.
export default function Scene({ isOpen, reduced = false }) {
  return (
    <Canvas
      dpr={[1, reduced ? 1 : 1.5]}
      camera={{ position: [0, 0, 4.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={2.6} />
      <directionalLight position={[2, 3, 3]} intensity={2.4} color="#fff3df" />
      <pointLight position={[-2, -1, 2]} intensity={1} color="#c79a3c" />
      <WeddingCard3D isOpen={isOpen} reduced={reduced} />
      {!reduced && <FloatingParticles count={45} />}
    </Canvas>
  );
}
