import { useTheme } from "../../context/ThemeContext";
import { useEffect } from "react";
import "./HomeContainer.css";

export default function HomeContainer() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.setProperty(
      "--background-color",
      theme.token.backgroundColor
    );
    document.body.style.setProperty(
      "--itemSelectedColor",
      theme.token.itemSelectedColor
    );
    document.body.style.setProperty(
      "--colorTextBase",
      theme.token.colorTextBase
    );
  }, [theme]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold">Home</h1>
    </div>
  );
}
