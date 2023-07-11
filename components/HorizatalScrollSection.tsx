'use client';
import Image from 'next/image';
import img1 from '../public/s1.png';
import img2 from '../public/s2.png';
import img3 from '../public/s3.png';
import img4 from '../public/s4.png';
import img5 from '../public/s5.png';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const images = [img1, img2, img3, img4, img5];
const cardWidth = 200; // Set this value to your actual card width

const HorizatalScrollSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Change it to true if you want to animate only once
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        x: (i - (images.length - 1) / 2) * cardWidth,
        transition: { delay: 0.4 },
      }));
    }
  }, [controls, inView]);

  return (
    <div className='flex flex-col items-center'>
      <div className='relative'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className='absolute top-0 left-0 transform -translate-x-1/2 w-[20rem] h-[20rem]'
            custom={index}
            ref={ref}
            animate={controls}
            initial={{ x: 0 }}
          >
            <Image
              alt='image'
              className='h-[20rem] w-[20rem] object-contain'
              src={image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HorizatalScrollSection;
