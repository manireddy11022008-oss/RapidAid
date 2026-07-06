import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function EmergencyLights({ sos }) {
  const redLight = useRef();
  const blueLight = useRef();

  useFrame(({ clock }) => {
    if (!sos) return;

    const t = clock.getElapsedTime() * 8;

    if (redLight.current) {
      redLight.current.intensity = Math.sin(t) > 0 ? 6 : 0;
    }

    if (blueLight.current) {
      blueLight.current.intensity = Math.cos(t) > 0 ? 6 : 0;
    }
  });

  return (
    <>
      <pointLight
        ref={redLight}
        color="red"
        position={[-0.3, 1.2, 0]}
        intensity={0}
        distance={8}
      />

      <pointLight
        ref={blueLight}
        color="blue"
        position={[0.3, 1.2, 0]}
        intensity={0}
        distance={8}
      />
    </>
  );
}