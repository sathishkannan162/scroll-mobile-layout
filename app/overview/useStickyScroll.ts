import { useEffect, useRef, RefObject } from "react";

export function useStickyScroll(
  refs: RefObject<HTMLElement | null>[],
  downTops: string[],
  upTops: string[]
) {
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    // Set initial scroll position from window if available
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
    }

    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Ensure all refs are present
      if (!refs.every((ref) => ref.current)) return;

      refs.forEach((ref, index) => {
        if (isScrollingDown) {
          // Scrolling down: apply down classes
          ref.current!.classList.add(downTops[index]);
          ref.current!.classList.remove(upTops[index]);
        } else {
          // Scrolling up: apply up classes
          ref.current!.classList.add(upTops[index]);
          ref.current!.classList.remove(downTops[index]);
        }
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs, downTops, upTops]);
}
