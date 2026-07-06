export default function Trees() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <group key={i} position={[-12, 0, -25 + i * 5]}>
          <mesh position={[0, 1, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 2]} />
            <meshStandardMaterial color="#7a5230" />
          </mesh>

          <mesh position={[0, 2.5, 0]}>
            <sphereGeometry args={[0.8]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </group>
      ))}
    </>
  );
}