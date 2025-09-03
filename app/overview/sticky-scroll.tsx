"use client";
import React, { useEffect, useRef } from "react";

const StickyScroll = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const stockContentRef = useRef<HTMLDivElement>(null);
  const scrollableHeadingsRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (
        !stockContentRef.current ||
        !headerRef.current ||
        !scrollableHeadingsRef.current
      )
        return;

      if (isScrollingDown) {
        // When scrolling up, Stock Content sticks to top-0
        stockContentRef.current.classList.add("top-0");
        stockContentRef.current.classList.remove("top-10");
        headerRef.current.classList.add("-top-10");
        headerRef.current.classList.remove("top-0");
        scrollableHeadingsRef.current.classList.add("top-[96px]");
        scrollableHeadingsRef.current.classList.remove("top-[136px]");
      } else {
        // When scrolling down, Header sticks to top-0, Stock Content below it
        headerRef.current.classList.add("top-0");
        headerRef.current.classList.remove("-top-10");
        stockContentRef.current.classList.add("top-10");
        stockContentRef.current.classList.remove("top-0");
        scrollableHeadingsRef.current.classList.add("top-[136px]");
        scrollableHeadingsRef.current.classList.remove("top-10");
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
        <div
          ref={scrollableHeadingsRef}
          className="w-full bg-gray-100 h-24 sticky top-[136px] transition-all duration-200 z-0"
        >
          Scrollable headings
        </div>
        <div className="w-full bg-gray-400 h-[1000px]">Content</div>
      </div>
    </div>
  );
};

export default StickyScroll;
