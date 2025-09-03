"use client";
import React, { useEffect, useRef } from "react";

const StickyScroll = () => {
  const headerRef = useRef(null);
  const stockContentRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (isScrollingDown) {
        // When scrolling up, Stock Content sticks to top-0
        stockContentRef.current.classList.add("top-0");
        stockContentRef.current.classList.remove("top-10");
        headerRef.current.classList.add("-top-10");
        headerRef.current.classList.remove("top-0");
      } else {
        // When scrolling down, Header sticks to top-0, Stock Content below it
        headerRef.current.classList.add("top-0");
        headerRef.current.classList.remove("-top-10");
        stockContentRef.current.classList.add("top-10");
        stockContentRef.current.classList.remove("top-0");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <div>
        <div
          ref={headerRef}
          className="w-full bg-gray-200 h-10 sticky top-0 transition-all duration-200 z-20"
        >
          Header
        </div>
        <div className="w-full bg-gray-100 h-10">Breadcrumbs</div>
        <div
          ref={stockContentRef}
          className="w-full bg-gray-300 h-24 sticky top-10 transition-all duration-200 z-10"
        >
          Stock Content
        </div>
        <div className="w-full bg-gray-100 h-24 sticky top-34 transition-all duration-200 z-0">
          Scrollable headings
        </div>
        <div className="w-full bg-gray-400 h-[1000px]">Content</div>
      </div>
    </div>
  );
};

export default StickyScroll;
