'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
export default function HeroImg() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [1, 1], [1, 1.5]);
  return (
    <motion.div
      style={{
        scale,
      }}
      className='flex items-center justify-center z-10 h-screen sticky'
    >
      <Image src='/highlight.png' alt='hero' width={900} height={900} />
    </motion.div>
  );
}
