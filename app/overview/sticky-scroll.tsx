"use client";
import React, { useRef } from "react";
import { useStickyScroll } from "./useStickyScroll";

const StickyScroll = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const stockContentRef = useRef<HTMLDivElement>(null);
  const scrollableHeadingsRef = useRef<HTMLDivElement>(null);
  const refs = [headerRef, stockContentRef, scrollableHeadingsRef];
  const downTops = ["-top-10", "top-0", "top-[96px]"];
  const upTops = ["top-0", "top-10", "top-[136px]"];

  useStickyScroll(refs, downTops, upTops);

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
