export default function Hospital() {
  return (
    <group position={[10, 1.5, -20]}>
      {/* Building */}
      <mesh>
        <boxGeometry args={[4, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Red Cross */}
      <mesh position={[0, 2, 2.05]}>
        <boxGeometry args={[1.2, 0.3, 0.1]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position={[0, 2, 2.05]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1.2, 0.3, 0.1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}