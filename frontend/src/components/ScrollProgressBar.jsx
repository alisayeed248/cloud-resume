import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // after rendering, check for scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / documentHeight) * 100;
      const finalProgress = Math.min(Math.max(progress, 0), 100);
      setScrollProgress(finalProgress);

      console.log("Progress:", Math.round(finalProgress));
    };
    // whenever scroll event is detected, we run the function and take a look and check our posiion
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // we call it to set its initial state
    return () => window.removeEventListener("scroll", handleScroll);
    // only once when component first mounts, not everytime it re-renders
  }, []);

  return (
    /* Top left, spans the entire width, 16px (h-4) so easy to see z-50 so on top of everything*/
    <div className="fixed top-0 left-0 w-full h-8 bg-gray-300 z-50">
      <div
        className="h-full bg-red-500"
        style={{ width: `${scrollProgress}%` }}
      >
        <span className="text-white text-xs p-1">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
