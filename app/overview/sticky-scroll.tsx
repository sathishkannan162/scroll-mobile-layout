"use client";
import React, { useRef, useState, useEffect } from "react";
import { useStickyScroll } from "./useStickyScroll";

const StickyScroll = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const stockContentRef = useRef<HTMLDivElement>(null);
  const scrollableHeadingsRef = useRef<HTMLDivElement>(null);
  const refs = [headerRef, stockContentRef, scrollableHeadingsRef];
  const downTops = ["-top-10", "top-0", "top-[96px]"];
  const upTops = ["top-0", "top-10", "top-[136px]"];
  const sections = [
    "section 1",
    "section 2",
    "section 3",
    "section 4",
    "section 5",
    "section 6",
    "section 7",
    "section 8",
  ];
  const sectionRefs = useRef<Array<HTMLDivElement | null>>(
    sections.map(() => null)
  );
  const [activeSection, setActiveSection] = useState<string>("");

  useStickyScroll(refs, downTops, upTops);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setActiveSection(sections[index]);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-150px 0px -150px 0px",
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          className="w-full bg-gray-100 sticky top-[136px] transition-all duration-200 z-0 flex overflow-x-auto gap-4 py-2 px-3"
        >
          {sections.map((section) => (
            <div
              key={section}
              className={`shrink-0 cursor-pointer px-2 py-1 rounded ${
                section === activeSection ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-400">
          {sections.map((section, index) => {
            return (
              <div
                className="h-80 odd:bg-gray-200 even:bg-gray-400"
                id={section}
                key={section}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
              >
                {section}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
