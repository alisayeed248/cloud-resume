import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // after rendering, check for scroll throttling?
  useEffect(() => {
    // add throttling to make it smoother

    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      const finalProgress = Math.min(Math.max(progress, 0), 100);

      setScrollProgress(finalProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };
    // whenever scroll event is detected, we run the function and take a look and check our posiion
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress(); // we call it to set its initial state
    return () => window.removeEventListener("scroll", handleScroll);
    // only once when component first mounts, not everytime it re-renders
  }, []);

  return (
    /* Top left, spans the entire width, 16px (h-4) so easy to see z-50 so on top of everything*/
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-900 to-blue-400 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
