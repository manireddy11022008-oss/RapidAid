export default function Patient({ sos }) {
  if (!sos) return null;

  return (
    <group position={[0, 0, -20]}>
      {/* Patient */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

      {/* Location Pin */}
      <mesh position={[0, 1.3, 0]}>
        <coneGeometry args={[0.2, 0.5, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}