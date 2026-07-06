import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Ambulance({ sos }) {
  const ambulanceRef = useRef();

  useFrame(() => {
    if (sos && ambulanceRef.current) {
      ambulanceRef.current.position.z -= 0.05;

      // Stop after reaching the patient
      if (ambulanceRef.current.position.z < -15) {
        ambulanceRef.current.position.z = -15;
      }
    }
  });

  return (
    <mesh ref={ambulanceRef} position={[0, 0.5, 15]}>
      <boxGeometry args={[1.5, 1, 3]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}