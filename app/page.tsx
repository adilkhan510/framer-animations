import Hero from '@/components/Hero';
import HeroImg from '@/components/HeroImg';
import HeroSection from '@/components/HeroSection';
import HorizatalScrollSection from '@/components/HorizatalScrollSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-[1000rem]'>
      <HeroSection />
      {/* <HorizatalScrollSection /> */}
    </div>
  );
}
