import { useTheme } from "../../context/ThemeContext";
import { useEffect } from "react";
import "./HomeContainer.css";
import ParticleEffect from "./subcomponentes/Animation/ParticleEffect";
import HomeInformation from "./subcomponentes/HomeInformation/HomeInformation";

export default function HomeContainer() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.setProperty(
      "--background-color",
      theme.token.backgroundColor
    );
    document.body.style.setProperty(
      "--cardBackgroundColor",
      theme.token.cardBackgroundColor
    );
    document.body.style.setProperty(
      "--colorTextBase",
      theme.token.colorTextBase
    );
  }, [theme]);

  return (
    <div>
      <ParticleEffect>
        <HomeInformation />
      </ParticleEffect>
    </div>
    
  );
}
