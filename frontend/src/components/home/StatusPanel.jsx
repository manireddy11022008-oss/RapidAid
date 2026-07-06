export default function Patient({ sos }) {
  if (!sos) return null;

  return (
    <mesh position={[0, 0.6, -20]}>
      <sphereGeometry args={[0.35]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}