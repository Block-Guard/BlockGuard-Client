import { useEffect } from "react";

export const useScrollHeader = (onScrollChange:(scroll:boolean)=>void) => {
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.outerHeight / 5;
      onScrollChange(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScrollChange]);
};