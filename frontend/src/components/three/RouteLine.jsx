import { Line } from "@react-three/drei";

export default function RouteLine({ sos }) {
  if (!sos) return null;

 const points = [
  [0, 0.3, 15],
  [0, 0.3, -20],
];

  return (
    <Line
      points={points}
      color="#00ff88"
      lineWidth={4}
    />
  );
}