import { useEffect } from 'react';

const useCardAnimation = () => {
  useEffect(() => {
    const setupObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1, 
          rootMargin: '0px 0px -10px 0px', 
        }
      );

      const cards = document.querySelectorAll('.card-float');
      cards.forEach((card) => observer.observe(card));

      return () => observer.disconnect();
    };

    // Wait a bit for DOM to be ready
    const timer = setTimeout(setupObserver, 100);
    
    return () => clearTimeout(timer);
  }, []);
};

export default useCardAnimation;