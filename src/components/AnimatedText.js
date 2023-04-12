import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = '', delay = 0 }) => {
  const [animateText, setAnimateText] = useState(false);

  const startAnimation = () => {
    setAnimateText(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
    className="w-full mx-auto py-2 flex items-center justify-center
     text-center overflow-hidden  sm:p-0"
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl 
      dark:text-light
      ${className} `}
        variants={quote}
        initial="initial"
        animate={animateText ? 'animate' : 'initial'}
      >
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letter === ' ' ? {} : singleWord}
            onClick={startAnimation}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};



const quote = {
    initial:{
      opacity:1,
    },
    animate:{
      opacity:1,
      transition:{
        delay:0.5,
        staggerChildren: 0.08,
      }
    }
}

const singleWord = {
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren: 0.04,
      delayChildren: 0.5,
    }
  },
  tween:{
    opacity: 0,
    y: -50,
  }
}

export default AnimatedText