import * as THREE from "three";

const HeroLights = ({ isMobile }) => (
  <>
    {/* Desktop: keep your dramatic multi-spot setup */}
    {!isMobile && (
      <>
        {/* Lamp key light */}
        <spotLight
          position={[2, 5, 6]}
          angle={0.15}
          penumbra={0.2}
          intensity={100}
          color="white"
        />

        {/* Bluish overhead lamp */}
        <spotLight
          position={[4, 5, 4]}
          angle={0.3}
          penumbra={0.5}
          intensity={40}
          color="#4cc9f0"
        />

        {/* Purple fill */}
        <spotLight
          position={[-3, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={60}
          color="#9d4edd"
        />
      </>
    )}

    {/* Mobile-friendly simplified lighting */}
    <ambientLight intensity={0.3} color="#ffffff" />
    <pointLight position={[1, 2, 2]} intensity={10} color="#fff" />
  </>
);

export default HeroLights;