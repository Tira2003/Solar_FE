import React from 'react';
import { motion } from 'framer-motion';

const grad1 = {
  initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad3 = {
  initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad4 = {
  initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
  animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
};

const grad5 = {
  initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};

const grad6 = {
  initial: { x1: "50%", x2: "50%", y1: "50%", y2: "50%" },
  animate: {
    x1: ["50%", "50%", "100%"],
    x2: ["50%", "50%", "120%"],
    y1: ["50%", "30%", "0%"],
    y2: ["50%", "30%", "0%"],
  },
};

const grad7 = {
  initial: { x1: "50%", x2: "50%", y1: "50%", y2: "50%" },
  animate: {
    x1: ["50%", "30%", "0%"],
    x2: ["50%", "30%", "-20%"],
    y1: ["50%", "50%", "50%"],
    y2: ["50%", "50%", "50%"],
  },
};

const grad8 = {
  initial: { x1: "50%", x2: "50%", y1: "50%", y2: "50%" },
  animate: {
    x1: ["50%", "50%", "50%"],
    x2: ["50%", "50%", "50%"],
    y1: ["50%", "70%", "100%"],
    y2: ["50%", "80%", "120%"],
  },
};

const GradientColors = () => {
  return (
    <>
      <stop stopColor="#00FFFF" stopOpacity="0"></stop>
      <stop stopColor="#00FFFF"></stop>
      <stop offset="0.5" stopColor="#FFFFFF"></stop>
      <stop offset="1" stopColor="#60A5FA" stopOpacity="0"></stop>
    </>
  );
};

const SVGs = () => {
  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      {/* Base paths - lighter for blue background */}
      <path d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5" stroke="rgba(255,255,255,0.2)" />
      <path d="M568 200H841C846.523 200 851 195.523 851 190V40" stroke="rgba(255,255,255,0.2)" />
      <path d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5" stroke="rgba(255,255,255,0.2)" />
      <path d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427" stroke="rgba(255,255,255,0.2)" />
      <path d="M380 168V17C380 11.4772 384.477 7 390 7H414" stroke="rgba(255,255,255,0.2)" />
      
      {/* Radiating paths */}
      <path d="M430 168V7" stroke="rgba(255,255,255,0.2)" />
      <path d="M480 168L680 7" stroke="rgba(255,255,255,0.2)" />
      <path d="M568 220.5H851" stroke="rgba(255,255,255,0.2)" />
      <path d="M520 274L780 427" stroke="rgba(255,255,255,0.2)" />
      <path d="M430 274V427" stroke="rgba(255,255,255,0.2)" />
      <path d="M340 274L80 427" stroke="rgba(255,255,255,0.2)" />
      <path d="M269 220.5H7" stroke="rgba(255,255,255,0.2)" />
      <path d="M340 168L140 7" stroke="rgba(255,255,255,0.2)" />

      {/* Gradient Beams */}
      <path d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5" stroke="url(#grad1)" strokeWidth="2" />
      <path d="M568 200H841C846.523 200 851 195.523 851 190V40" stroke="url(#grad2)" strokeWidth="2" />
      <path d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5" stroke="url(#grad3)" strokeWidth="2" />
      <path d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427" stroke="url(#grad4)" strokeWidth="2" />
      <path d="M380 168V17C380 11.4772 384.477 7 390 7H414" stroke="url(#grad5)" strokeWidth="2" />
      
      {/* Radiating gradient beams */}
      <path d="M430 168V7" stroke="url(#grad6)" strokeWidth="2" />
      <path d="M480 168L680 7" stroke="url(#grad6)" strokeWidth="2" />
      <path d="M568 220.5H851" stroke="url(#grad7)" strokeWidth="2" />
      <path d="M520 274L780 427" stroke="url(#grad8)" strokeWidth="2" />
      <path d="M430 274V427" stroke="url(#grad8)" strokeWidth="2" />
      <path d="M340 274L80 427" stroke="url(#grad8)" strokeWidth="2" />
      <path d="M269 220.5H7" stroke="url(#grad7)" strokeWidth="2" />
      <path d="M340 168L140 7" stroke="url(#grad6)" strokeWidth="2" />

      <defs>
        {[grad1, grad2, grad3, grad4, grad5, grad6, grad7, grad8].map((gradVariant, idx) => (
          <motion.linearGradient
            key={`grad${idx + 1}`}
            variants={gradVariant}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 1.5,
              delay: Math.random() * 2,
            }}
            id={`grad${idx + 1}`}
          >
            <GradientColors />
          </motion.linearGradient>
        ))}
      </defs>

      {/* Endpoint circles - white/cyan for visibility */}
      {[
        [851, 34], [770, 427], [142, 427], [6.5, 398.5], [420.5, 6.5],
        [430, 7], [680, 7], [851, 220.5], [780, 427], [430, 427],
        [80, 427], [7, 220.5], [140, 7]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="rgba(0,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      ))}
    </svg>
  );
};

export default function PulseBeams() {
  return (
    <div className="flex h-full w-full relative items-center justify-center overflow-visible">
      <SVGs />
    </div>
  );
}