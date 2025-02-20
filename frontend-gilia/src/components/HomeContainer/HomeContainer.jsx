import { useTheme } from "../../context/ThemeContext";
import { useEffect } from "react";
import "./HomeContainer.css";
import ParticleEffect from "./subcomponentes/ParticleEffect";

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
    <div
      className="relative isolate bg-cover bg-fixed bg-center bg-opacity-50"
      style={{ backgroundImage: 'url("")' }}
    >
      <div className="mx-auto max-w-2xl sm:py-24 lg:py-34">
        <div className="text-center">
          <h1 className="custom-color text-7xl font-semibold tracking-tight text-balance sm:text-6xl">
            {" "}
            Data to enrich your online business{" "}
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md custom-color custom-back px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started
            </a>
            <a
              href="#"
              className=" custom-color text-sm/6 font-semibold text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <ParticleEffect />
    </div>
    
  );
}
