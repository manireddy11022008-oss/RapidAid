export default function Road() {
  return (
    <>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#3d8b3d" />
      </mesh>

      {/* Road */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 60]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {/* Road divider */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[0, 0.02, -28 + i * 3]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.3, 1.5]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      ))}
    </>
  );
}