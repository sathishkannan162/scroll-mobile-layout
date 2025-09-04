"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { useStickyScroll } from "./useStickyScroll";
import { cn } from "@/lib/utils";

const StickyScroll = () => {
  const elementIds = [
    "header-element",
    "stock-content-element",
    "scrollable-headings-element",
  ];
  const downTops = ["-top-10", "top-0", "top-[58px]"];
  const upTops = ["top-0", "top-10", "top-[100px]"];
  const [isSticky, setIsSticky] = useState(false);
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
  const [activeSection, setActiveSection] = useState<string>("");

  useStickyScroll(elementIds, downTops, upTops);

  // Monitor sticky state
  useEffect(() => {
    const handleScroll = () => {
      const stockContentElement = document.getElementById(
        "stock-content-element"
      );
      if (stockContentElement) {
        const rect = stockContentElement.getBoundingClientRect();
        const isCurrentlySticky = rect.top <= 40; // 40px is the header height (top-10)
        setIsSticky(isCurrentlySticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const index = sections.indexOf(activeSection);
    if (index !== -1) {
      const sectionHeadingElement = document.getElementById(
        `section-heading-${index}`
      );
      if (sectionHeadingElement) {
        sectionHeadingElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeSection, sections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const index = sections.indexOf(sectionId);
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

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    const headingsContainer = document.getElementById("headings-container");
    if (headingsContainer) {
      headingsContainer.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const headingsContainer = document.getElementById("headings-container");
    if (headingsContainer) {
      headingsContainer.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white">
      <div>
        <div
          id="header-element"
          className="w-full bg-gray-200 h-10 sticky top-0 transition-all duration-200 z-20"
        >
          Header
        </div>
        <div className="w-full bg-gray-100 h-10">Breadcrumbs</div>
        <div
          id="stock-content-element"
          className="w-full bg-white sticky top-10 transition-all duration-300 z-10 border-b border-gray-200"
        >
          {/* Adaptive Layout - Changes based on isSticky */}
          <div
            className={cn(
              "transition-all duration-300",
              isSticky ? "h-[50px]" : "h-[120px]"
            )}
          >
            <div
              className={cn(
                "flex bg-white transition-all duration-300",
                isSticky
                  ? "justify-start items-center gap-[75px] px-4 py-3"
                  : "flex-col justify-start items-start w-full gap-2.5 px-4 pt-2.5"
              )}
            >
              <div
                className={cn(
                  "flex relative transition-all duration-300",
                  isSticky
                    ? "justify-start items-center gap-3"
                    : "justify-start items-start w-full gap-[42px]"
                )}
              >
                <div
                  className={cn(
                    "flex justify-start items-start relative transition-all duration-300",
                    isSticky ? "gap-3" : "gap-[5px]"
                  )}
                >
                  {/* Logo */}
                  <div
                    className={cn(
                      "flex-shrink-0 transition-all duration-300",
                      isSticky ? "w-[30px] h-[28px]" : "w-[45px] h-[42px]"
                    )}
                  >
                    <div
                      className={cn(
                        "bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center transition-all duration-300",
                        isSticky
                          ? "w-[30px] h-[28px] rounded-[7px]"
                          : "w-[45px] h-[42px] rounded-[10px]"
                      )}
                    >
                      <span
                        className={cn(
                          "text-white font-bold transition-all duration-300",
                          isSticky ? "text-sm" : "text-lg"
                        )}
                      >
                        R
                      </span>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div
                    className={cn(
                      "flex flex-col justify-start items-start relative transition-all duration-300",
                      isSticky ? "w-[148px] gap-1" : "w-[158px] gap-2"
                    )}
                  >
                    <div
                      className={cn(
                        "flex justify-start items-center relative transition-all duration-300",
                        isSticky ? "gap-2" : "gap-[5px]"
                      )}
                    >
                      <p
                        className={cn(
                          "font-bold text-left capitalize text-[#565c5b] transition-all duration-300",
                          isSticky ? "text-xs" : "text-sm"
                        )}
                      >
                        RELIANCE
                      </p>
                      {isSticky ? (
                        <div className="w-[27px] h-[12px] rounded-[2px] bg-[#38b990]/30 border-[0.5px] border-[#38b990] flex items-center justify-center">
                          <p className="text-[6.5px] font-medium text-left capitalize text-[#38b990]">
                            NSE
                          </p>
                        </div>
                      ) : (
                        <TrendingUp className="w-[14px] h-[10px] text-[#38b990]" />
                      )}
                    </div>

                    {!isSticky && (
                      <>
                        <p className="text-xs font-medium text-left capitalize text-[#565c5b]">
                          RELIANCE INDUSTRIES LTD
                        </p>
                        <div className="flex justify-start items-center relative gap-1.5">
                          <ExternalLink className="w-[11px] h-[11px] text-[#38b990]" />
                          <p className="text-[13px] font-medium text-left text-[#38b990]">
                            Reliance.com
                          </p>
                        </div>
                      </>
                    )}

                    {isSticky && (
                      <div className="w-[148px]">
                        <div className="flex justify-between items-center w-full">
                          <p className="text-xs font-bold text-left capitalize text-[#565c5b]">
                            1514.00
                          </p>
                          <div className="flex justify-start items-center relative gap-1.5">
                            <p className="text-xs font-medium text-left capitalize text-[#38b990]">
                              +20.10(1.34%)
                            </p>
                            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#38b990]"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Buy/Sell Buttons */}
                <div
                  className={cn(
                    "flex justify-start items-center transition-all duration-300",
                    isSticky ? "gap-3" : "gap-4"
                  )}
                >
                  <div
                    className={cn(
                      "flex flex-col justify-center items-center relative gap-2.5 bg-[#38b990] transition-all duration-300",
                      isSticky
                        ? "h-[26px] w-[25px] px-2 py-[5px] rounded-[2.6px]"
                        : "h-8 w-[30px] px-2.5 py-1.5 rounded-[3.2px]"
                    )}
                  >
                    <p
                      className={cn(
                        "font-medium text-left capitalize text-white transition-all duration-300",
                        isSticky ? "text-[13px]" : "text-base"
                      )}
                    >
                      B
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex flex-col justify-center items-center relative gap-2.5 bg-[#f85454] transition-all duration-300",
                      isSticky
                        ? "h-[26px] w-[25px] px-2 py-[5px] rounded-[2.6px]"
                        : "h-8 w-[30px] px-2.5 py-1.5 rounded-[3.2px]"
                    )}
                  >
                    <p
                      className={cn(
                        "font-medium text-left capitalize text-white transition-all duration-300",
                        isSticky ? "text-[13px]" : "text-base"
                      )}
                    >
                      S
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Section - Only shown in expanded view */}
              {!isSticky && (
                <div className="flex justify-start items-end w-full relative gap-[61px] px-0 pb-4">
                  <div className="flex-grow">
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base font-semibold text-left capitalize text-[#565c5b]">
                        1514.00
                      </p>
                      <div className="flex justify-start items-center relative gap-2">
                        <p className="text-sm font-semibold text-left capitalize text-[#38b990]">
                          +20.10(1.34%)
                        </p>
                        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-l-transparent border-r-transparent border-b-[#38b990]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[82px] h-5">
                    <div className="w-[82px] h-5 rounded bg-white border border-[#dfeae7] flex">
                      <div className="flex justify-center items-center w-[41px] h-[18px] gap-2.5 px-[11px] py-[3px] rounded-[3px] bg-[#38b990] m-[1px]">
                        <p className="text-[10px] font-medium text-left capitalize text-white">
                          NSE
                        </p>
                      </div>
                      <div className="flex justify-center items-center w-[41px] h-[18px] gap-2.5 px-[11px] py-[3px] m-[1px]">
                        <p className="text-[10px] font-medium text-left capitalize text-[#565c5b]">
                          BSE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          id="scrollable-headings-element"
          className="w-full bg-gray-100 sticky  transition-all duration-200 z-0 flex items-center"
        >
          <button
            onClick={scrollLeft}
            className="bg-white  p-1 ml-1 mr-3 shadow-md flex-shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div
            id="headings-container"
            className="flex-1 overflow-x-auto flex gap-4 py-2 px-3"
          >
            {sections.map((section, index) => (
              <div
                key={section}
                id={`section-heading-${index}`}
                className={`shrink-0 cursor-pointer px-2 py-1 rounded ${
                  section === activeSection ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="bg-white  p-1 ml-3 mr-1 shadow-md flex-shrink-0"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full bg-gray-400">
          {sections.map((section, index) => {
            return (
              <div
                className="h-80 odd:bg-gray-200 even:bg-gray-400"
                id={section}
                key={section}
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
