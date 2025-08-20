import { useEffect, type RefObject } from "react";

export const useScrollHeader = (onScrollChange: (scroll: boolean) => void, targetRef?: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const targetElement = targetRef?.current ?? window;
    const handleScroll = () => {
      let isScrolled = false;

      // 참조할 ref가 있으면, ref가 기준, 없으면 window가 기준
      if (targetRef?.current) {
        isScrolled = targetRef.current.scrollTop > 145;
      } else {
        const threshold = window.outerHeight / 5;
        isScrolled = window.scrollY > threshold;
      }
      onScrollChange(isScrolled);
    };

    targetElement.addEventListener("scroll", handleScroll);

    return () => {
      targetElement.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollChange, targetRef]);
};