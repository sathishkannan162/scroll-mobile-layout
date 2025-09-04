import { useEffect, useRef } from "react";

export function useStickyScroll(
  elementIds: string[],
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

      // Get elements by ID and ensure they exist
      const elements = elementIds.map((id) => document.getElementById(id));
      if (!elements.every((element) => element)) return;

      elements.forEach((element, index) => {
        if (element) {
          if (isScrollingDown) {
            // Scrolling down: apply down classes
            element.classList.add(downTops[index]);
            element.classList.remove(upTops[index]);
          } else {
            // Scrolling up: apply up classes
            element.classList.add(upTops[index]);
            element.classList.remove(downTops[index]);
          }
        }
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementIds, downTops, upTops]);
}
