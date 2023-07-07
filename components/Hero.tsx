'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Phantom from './Phantom';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0.5 ? 'relative' : 'fixed';
  });

  return (
    <motion.div
      ref={targetRef}
      style={{
        opacity,
      }}
      className='relative mb-0 h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_calc(300px)_calc(300px),_var(--color-secondary)_0%,_transparent_100%)]
        '
    >
      <motion.div
        style={{
          scale,
          x: '-50%',
        }}
        className='fixed left-1/2 z-10 flex flex-col items-center '
      >
        <p className='text-center text-sm font-light'>
          The crypto wallet that takes you places
        </p>
        <h1 className='text-center text-6xl text-white items-center flex justify-center'>
          <span className='inline-block'>Your </span>
          <span className=''>
            <Phantom />
          </span>
          <span className='inline-block'>Trusted</span>
        </h1>
        <br />
        <h1 className='text-6xl mt-[-10] '>Companion</h1>
      </motion.div>
    </motion.div>
  );
}
