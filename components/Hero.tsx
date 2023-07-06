'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

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
        ref={containerRef}
        style={{
          scale,
          x: '-50%',
        }}
        className='fixed left-1/2 z-10 flex flex-col items-center mt-[20rem]'
      >
        <p>
          <span className='text-6xl text-center items-center flex font-light'>
            Onchain creativity,
            <br /> unchained
          </span>
        </p>
        <p className='text-center text-2xl mt-4'>
          <span className='text-center items-center flex font-light'>
            The first NFT marketplace for
            <br /> <span className='text-[#FFC700]'>3D</span> and{'  '}
            <span className='text-[#FFC700]'>AR</span> creators
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
