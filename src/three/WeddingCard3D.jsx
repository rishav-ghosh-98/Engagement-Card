import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

// A stylised 3D invitation card: a gold-edged ivory cover that opens like a book
// over a deep-red inner base, with gentle idle floating + mouse parallax.
export default function WeddingCard3D({ isOpen, reduced = false }) {
  const groupRef = useRef(null);
  const coverPivotRef = useRef(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // idle float
      groupRef.current.position.y = reduced ? 0 : Math.sin(t * 0.8) * 0.06;

      if (!reduced) {
        const pointer = state.pointer;
        targetRotation.current.y = pointer.x * 0.25;
        targetRotation.current.x = -pointer.y * 0.15;
        groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.04;
        groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.04;
      }
    }

    if (coverPivotRef.current) {
      const targetAngle = isOpen ? -Math.PI * 0.78 : 0;
      coverPivotRef.current.rotation.y += (targetAngle - coverPivotRef.current.rotation.y) * 0.06;
    }
  });

  const cardWidth = Math.min(viewport.width * 0.55, 2.4);
  const cardHeight = cardWidth * 1.35;

  return (
    <group ref={groupRef}>
      {/* back base (deep red) */}
      <mesh position={[0, 0, -0.04]} receiveShadow>
        <planeGeometry args={[cardWidth, cardHeight]} />
        <meshStandardMaterial color="#4a0e18" roughness={0.6} metalness={0.1} toneMapped={false} />
      </mesh>

      {/* inner ivory letter, revealed when open */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[cardWidth * 0.86, cardHeight * 0.86]} />
        <meshStandardMaterial color="#fbf4e6" roughness={0.8} toneMapped={false} />
      </mesh>

      {/* hinge pivot at left edge, cover rotates around it */}
      <group ref={coverPivotRef} position={[-cardWidth / 2, 0, 0]}>
        <group position={[cardWidth / 2, 0, 0.02]}>
          {/* gold edge */}
          <mesh castShadow>
            <planeGeometry args={[cardWidth, cardHeight]} />
            <meshStandardMaterial color="#c79a3c" roughness={0.35} metalness={0.55} toneMapped={false} />
          </mesh>
          {/* ivory cover face, inset */}
          <mesh position={[0, 0, 0.005]}>
            <planeGeometry args={[cardWidth * 0.92, cardHeight * 0.92]} />
            <meshStandardMaterial color="#f6ead3" roughness={0.75} metalness={0.05} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
