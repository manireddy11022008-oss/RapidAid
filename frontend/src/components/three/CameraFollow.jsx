import { useThree, useFrame } from "@react-three/fiber";

export default function CameraFollow({ sos }) {
  const { camera } = useThree();

  useFrame(() => {
    if (!sos) return;

    // Smoothly move the camera forward
    camera.position.z -= (camera.position.z - 8) * 0.02;
    camera.position.y += (6 - camera.position.y) * 0.02;

    // Keep looking toward the moving ambulance
    camera.lookAt(0, 0, 0);
  });

  return null;
}