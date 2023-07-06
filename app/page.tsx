import Hero from '@/components/Hero';
import HeroImg from '@/components/HeroImg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <HeroImg />
    </div>
  );
}
