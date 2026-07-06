import { Canvas } from "@react-three/fiber";
import Road from "./Road";
import Ambulance from "./Ambulance";
import City from "./City";
import Hospital from "./Hospital";
import Trees from "./Trees";
import { OrbitControls, Grid, Sky } from "@react-three/drei";
import Patient from "./Patient";
import RouteLine from "./RouteLine";
import CameraFollow from "./CameraFollow";

export default function AmbulanceScene({ sos }) {
  return (
    <div className="w-full h-[600px] border-2 border-red-500">
      <Canvas camera={{ position: [0, 8, 18], fov: 50 }}>
        <Sky
  distance={450000}
  sunPosition={[5, 8, 5]}
  inclination={0.49}
  azimuth={0.25}

/>
<fog attach="fog" args={["#dbeafe", 25, 80]} />
       <ambientLight intensity={1.2} />

<directionalLight
  position={[8, 12, 5]}
  intensity={2.5}
  castShadow
/>
        <Grid args={[20, 20]} />

        <Road />
<City />
<Trees />
<Hospital />

<RouteLine sos={sos} />

<Patient sos={sos} />
<Ambulance sos={sos} />
<CameraFollow sos={sos} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}