import LightRays from "@/components/LightRays";

export default function Home() {
  return (
    <div className="background-black">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="rgba(255, 255, 255 , 0.5)"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
                
        <div className="absolute inset-0 flex items-center justify-center top-30">
          <div className="flex flex-col items-center text-center gap-3">
            <p className="text-white text-2xl">Hey there, welcome to my portfolio.</p>
            <p className="text-white text-4xl">I am <span className="font-bold">Saiprasad Rao</span>, a web developer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}