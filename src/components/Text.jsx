import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const ScrollTextAnimation = () => {
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const [elementTop, setElementTop] = useState(0); // Store the top position of the section
  const [elementHeight, setElementHeight] = useState(0); // Store the height of the section

  useEffect(() => {
    const updatePosition = () => {
      const rect = ref.current.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY || window.pageYOffset);
      setElementHeight(rect.height);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Calculate horizontal movement based on scroll position
  const xLeft = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    ['-140%', '50%']
  );
  const xRight = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    ['140%', '-50%']
  );

  return (
    <section
      ref={ref}
      className="hidden md:flex relative h-[60vh] overflow-hidden bg-[#fbfbfb] items-center justify-center"
    >
      {/* Left-moving text */}
      <motion.div
        className="absolute top-1/3 text-[8rem] font-bold text-black"
        style={{
          x: xLeft,
        }}
      >
        <span className="hollow-text" data-text="BRANDING EDITING">
          <span className="text-[#181818]">BRANDING</span> EDITING
        </span>
      </motion.div>

      {/* Right-moving text */}
      <motion.div
        className="absolute top-1/2 text-[8rem] font-bold text-black"
        style={{
          x: xRight,
        }}
      >
        <div className="h-20"></div>
        <span className="hollow-text" data-text="EDITING BRANDING">
          EDITING <span className="text-[#181818]">BRANDING</span>
        </span>
      </motion.div>
    </section>
  );
};

export default ScrollTextAnimation;
