import "./HomeContainer.css";
import ParticleEffect from "./subcomponentes/Animation/ParticleEffect";
import HomePresentation from "./subcomponentes/HomePresentation/HomePresentation";
import HomeExploration from "./subcomponentes/HomeExploration/HomeExploration";

export default function HomeContainer() {
  return (
    <div>
      <ParticleEffect>
        <HomePresentation />
      </ParticleEffect>
      <HomeExploration/>
    </div>
    
  );
}
