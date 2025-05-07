import React, { useState, useEffect } from "react";

function TerminalBootAnimation({ onComplete }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);

  const bootSequence = [
    "$ Starting system initialization...",
    "$ Loading developer profile: Sayeed Ali",
    "$ Compiling resume modules...",
    "$ Optimizing project showcase...",
    "$ Connecting to LinkedIn node...",
    "$ Whoops, something went wrong.",
    "$ ...",
    "$ Never mind, we roll with it.",
    "$ Welcome to Sayeed Ali's portfolio.",
    "$ Press Enter to continue!",
  ];

  // Run the animation sequence once on mount
  useEffect(() => {
    let timeouts = [];
    let isMounted = true;

    const displayLineWithDelay = (index, delay) => {
      const timeout = setTimeout(() => {
        if (isMounted) {
          console.log(`Displaying line ${index}: ${bootSequence[index]}`);
          setDisplayedLines(prev => [...prev, bootSequence[index]]);
          
          // Schedule next line
          if (index < bootSequence.length - 1) {
            displayLineWithDelay(index + 1, 800);
          } else {
            // Boot sequence complete
            console.log("Boot sequence complete");
            setBootComplete(true);
            
            // Auto-complete after delay
            const finalTimeout = setTimeout(() => {
              if (isMounted && onComplete) {
                console.log("Auto-completing");
                onComplete();
              }
            }, 3000);
            timeouts.push(finalTimeout);
          }
        }
      }, delay);
      
      timeouts.push(timeout);
    };

    // Start the animation sequence with a small initial delay
    console.log("Starting animation sequence");
    displayLineWithDelay(0, 300);

    // Cleanup function to clear all timeouts
    return () => {
      console.log("Cleaning up all timeouts");
      isMounted = false;
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []); // Empty dependency array = run once on mount

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Key press handler for Enter key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && bootComplete) {
        console.log("Enter pressed, completing");
        if (onComplete) {
          onComplete();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [bootComplete, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-full max-w-2xl p-4">
        <div className="terminal-window">
          {/* Terminal header */}
          <div className="bg-gray-800 p-2 rounded-t-md">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-2 text-xs text-gray-400">terminal@sayeedali.com</div>
            </div>
          </div>
          {/* Terminal content */}
          <div className="bg-black p-4 rounded-b-md h-80 font-mono text-green-400 overflow-y-auto">
            {/* Display all lines that have been added so far */}
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-2">
                {line}
              </div>
            ))}
            
            {/* Blinking cursor at the end */}
            <span className="inline-block">
              {showCursor && "█"}
            </span>
            
            {/* Final message when boot sequence is done */}
            {bootComplete && (
              <div className="mt-4 text-yellow-300 animate-pulse">
                Press Enter to continue...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalBootAnimation;