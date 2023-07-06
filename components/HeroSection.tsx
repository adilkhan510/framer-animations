import Phantom from './Phantom';

const HeroSection = () => {
  return (
    <div className=' flex flex-col justify-center items-center max-w-[1200px] mx-auto'>
      <section className='h-[600px] w-[900px] flex flex-col items-center justify-center mx-auto will-change-auto'>
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
      </section>
    </div>
  );
};

export default HeroSection;
