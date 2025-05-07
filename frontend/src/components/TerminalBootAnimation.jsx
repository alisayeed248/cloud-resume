import React from "react";

function TerminalBootAnimation({ onComplete }) {
  // when the last line finishes typing, parent component knows animation is done
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [bootSequenceDone, setBootSequenceDone] = useState(false);

  const bootSequence = [
    "$ Starting system initialization...",
    "$ Loading developer profile: Sayeed Ali",
    "$ Compiling resume modules...",
    "$ Optimizing project showcase...",
    "$ Connecting to LinkedIn node...",
    "$ Whoops, something weng wrong.",
    "$ ...",
    "$ Never mind, we roll with it.",
    "$ Welcome to Sayeed Ali's portfolio.",
    "$ Press Enter to continue!",
  ];

  // Adds lines with a delay
  useEffect(() => {
    if (currentIndex < bootSequence.length) {
      // currentIndex is 0, if we haven't gone through all elements in the bootSequence array
      const timer = setTimeout(() => {
        // let's add a delay per line
        setLines((prev) => [...prev, bootSequence[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 800);
      return () => clearTimeout(timer); // cleanup
    } else if (!bootSequenceDone) {
      setBootSequenceDone(true); // when iterated through each line, set bootSequence to done
    }
  }, [currentIndex, bootSequence, bootSequenceDone]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Response to Enter key only after boot sequence state is set as True)
      if (event.key === "Enter" && bootSequenceDone) {
        if (onComplete) {
          onComplete();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [bootSequenceDone, onComplete]);

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
          <div className="bg-black p-4 rounded-b-md h-80 font-mono text-green-400">
            {/* Map through our lines array and render each line */}
            {lines.map((line, index) => (
              <div key={index} className="mb-2">
                {line}
              </div>
            ))}
            {/* Blinking cursor */}
            <span className="inline-block">
              {showCursor && "█"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalBootAnimation;
