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
      console.log({scrollTop, documentHeight, progress: Math.round(progress)});
    };
    // whenever scroll event is detected, we run the function and take a look and check our posiion
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // only once when component first mounts, not everytime it re-renders
  }, []);


  return (
    /* Top left, spans the entire width, 16px (h-4) so easy to see z-50 so on top of everything*/
    <div className="fixed top-0 left-0 w-full h-4 bg-red-500 z-50">
      <p className="text-white text-xs">Check console for scroll math</p>
    </div>
  );
};

export default ScrollProgressBar;