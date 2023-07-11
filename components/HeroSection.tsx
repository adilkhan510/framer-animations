'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Phantom from './Phantom';
import { useRef } from 'react';

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);

  return (
    <div className='relative h-screen pt-[20rem]' ref={targetRef}>
      <div className='fixed top-0 left-1/2  flex flex-col justify-center items-center max-w-[1200px] mx-auto '>
        <motion.section
          className='h-[600px] w-[900px] flex flex-col items-center justify-center mx-auto will-change-auto mt-20'
          style={{
            opacity,
            x: '-50%',
            scale,
          }}
        >
          <p className='text-center text-sm font-light animate-fade-in [animation-delay:1000ms] text-white opacity-0'>
            The crypto wallet that takes you places
          </p>
          <h1
            className='text-center text-6xl text-white items-center flex
        justify-center'
          >
            <span className='animate-fade-up-and-bounce opacity-0 [animation-delay:400ms]'>
              Your{' '}
            </span>
            <span className='animate-fade-up [animation-delay:60ms] opacity-0'>
              <Phantom />
            </span>
            <span className='inline-block animate-fade-up-and-bounce opacity-0 [animation-delay:400ms]'>
              Trusted
            </span>
          </h1>
          <br />
          <h1 className='text-6xl text-white animate-fade-up-and-bounce [animation-delay:600ms] opacity-0'>
            Companion
          </h1>
          <div className='flex flex-col gap-5 mt-[5rem] animate-fade-in [animation-delay:1000ms] opacity-0 '>
            <button className='text-black rounded-full px-3 bg-white flex items-center py-5 justify-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt='Android application'
                src='https://cdn.sanity.io/images/3nm6d03a/production/9c25294a3e86b1ac7ac1b7279c534f3fe41c445e-270x270.svg'
                className='w-10 h-10'
              />
              <p className='pl-3'>
                Download for <span className='font-bold'>Android</span>
              </p>
            </button>
            <a href='#'>
              <p className='text-white flex flex-col items-center'>
                Also available on other devices
                <span className='underline'>Discover more</span>
              </p>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HeroSection;
