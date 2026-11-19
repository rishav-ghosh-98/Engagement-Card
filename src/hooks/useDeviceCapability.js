import { useState } from 'react';

function detectHeavyEffectsSupport() {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') return true;

  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const saveData = navigator.connection?.saveData;

  const lowPower = isSmallScreen && isCoarsePointer && cores <= 4 && memory <= 4;
  return !saveData && !lowPower;
}

// Rough heuristic to decide whether to enable the full 3D/WebGL experience.
export function useDeviceCapability() {
  const [canUseHeavyEffects] = useState(detectHeavyEffectsSupport);
  return canUseHeavyEffects;
}
