export default function City() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[-8, 2, -25 + i * 7]}
        >
          <boxGeometry args={[3, 4, 3]} />
          <meshStandardMaterial color="#6b7280" />
        </mesh>
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[8, 2, -25 + i * 7]}
        >
          <boxGeometry args={[3, 4, 3]} />
          <meshStandardMaterial color="#9ca3af" />
        </mesh>
      ))}
    </>
  );
}