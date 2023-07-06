'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
export default function HeroImg() {
  const targetRef = useRef<HTMLImageElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.95], [1, 2.5, 2.5]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ['0%', '-55%', '-60%', '-1000%']
  );
  return (
    <section className='mt-[-30vh]'>
      <div className='h-[300vh] w-full' ref={targetRef}>
        <div className='sticky top-[10vh]'>
          <div className='flex justify-center'>
            <div className='origin-top'>
              <motion.img
                src='/highlight.png'
                className='h-[75vh] w-[85vw]'
                style={{
                  scale,
                  x,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
