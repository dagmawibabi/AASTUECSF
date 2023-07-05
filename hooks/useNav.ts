import { useEffect, useState } from "react";

export default function useNav(breakpoint: number = 1063) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= breakpoint);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth <= breakpoint);
      });
    };
  }, []);

  return isMobile;
}
