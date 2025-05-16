import React, { useState, useEffect } from "react";

function TerminalBootAnimation({ onComplete }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);

  const bootSequence = [
    "Welcome to Sayeed Ali's Portfolio",
    "Preparing developer showcase...",
    "Optimizing project gallery...",
    "Connecting to LinkedIn profile...",
    "Almost ready...",
    "Portfolio ready to explore!",
    "Press Enter or click to continue.",
  ];

  useEffect(() => {
    if (currentLineIndex >= bootSequence.length) {
      console.log("All lines displayed");
      setBootComplete(true);

      const completeTimeout = setTimeout(() => {
        if (onComplete) {
          console.log("Auto-completing");
          onComplete();
        }
      }, 3000);

      return () => clearTimeout(completeTimeout);
    }

    const currentLineText = bootSequence[currentLineIndex];

    if (currentCharIndex < currentLineText.length) {
      const charTimeout = setTimeout(() => {
        setCurrentLine(
          (prev) => prev + currentLineText.charAt(currentCharIndex)
        );
        setCurrentCharIndex((prev) => prev + 1);
      }, 15);

      return () => clearTimeout(charTimeout);
    } else {
      const nextLineTimeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLine("");
        setCurrentCharIndex(0);
        setCurrentLineIndex((prev) => prev + 1);
      }, 300);

      return () => clearTimeout(nextLineTimeout);
    }
  }, [
    currentLineIndex,
    currentCharIndex,
    currentLine,
    bootSequence,
    bootComplete,
    onComplete,
  ]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && bootComplete) {
        console.log("Enter pressed, completing");
        if (onComplete) {
          onComplete();
        }
      }
    };

    const handleClick = () => {
      if (bootComplete) {
        console.log("Click/tap detected, completing");
        if (onComplete) {
          onComplete();
        }
      } else {
        console.log("Click/tap detected, skipping animation.")
        setDisplayedLines(bootSequence.slice(0, bootSequence.length));
        setCurrentLine("");
        setCurrentLineIndex(bootSequence.length);
        setBootComplete(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, [bootComplete, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-full max-w-4xl p-4">
        <div className="terminal-window">
          <div className="bg-gray-800 p-2 rounded-t-md">
            <div className="flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-300 font-medium">
                Portfolio Loader
              </div>
            </div>
          </div>

          <div className="bg-black p-6 rounded-b-md h-96 font-mono text-green-400">
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-3">
                {line}
              </div>
            ))}

            {!bootComplete && (
              <div className="mb-3 flex">
                <span>{currentLine}</span>
                <span className="inline-block ml-1">{showCursor && "█"}</span>
              </div>
            )}

            {bootComplete && (
              <>
                <div className="mb-3">
                  <span className="inline-block ml-1">{showCursor && "█"}</span>
                </div>
                <div className="mt-2 text-blue-300 animate-pulse">
                  Press Enter or tap to explore the portfolio...
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalBootAnimation;
