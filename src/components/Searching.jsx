import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

export function Searching() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Fade bottom delay={1000}>
      <p className="text-lg text-white text-center relative">
        Searching <strong className="absolute"> {dots}</strong>
      </p>

      <p className="text-lg text-gray-400 text-center">
        This can take several seconds
      </p>
    </Fade>
  );
}
