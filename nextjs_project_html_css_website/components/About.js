import React from 'react';

export default function About() {
  return (
    <>
      <section
        className='flex md:flex-row flex-col border border-t md:border-0 min-h-[720px] overflow-hidden'
        id='about-us'
      >
        {' '}
        {/* about us */}
        <div className='flex flex-1 flex-col justify-center bg-white relative py-8 px-16'>
          {' '}
          {/* About us image */}
          <div className='flex flex-1 items-center bg-center bg-no-repeat bg-contain border-b-2 border-[--color-creamson] bg-[url("../assets/about_bg1.png")]'>
            {' '}
            {/* about-us__image-sushi3 */}
            <img
              src='assets/sushi-3.png'
              alt='sushi'
              data-aos='fade-right'
              className='w-56 h-48 mb-8'
            />
          </div>
          <button className='absolute right-0 py-3 px-8 max-h-16 bg-[--secondary-color] rounded-s-full ltr border-0 outline-none text-white font-serif font-medium text-lg cursor-pointer hover:opacity-90'>
            {/* about-us__button */}
            Learn More
            <img
              src='assets/arrow-up-right.svg'
              alt='learn more'
              className='object-contain ml-8 inline '
            />
          </button>
          <div className='flex flex-1 items-center bg-center bg-no-repeat bg-contain border-b-2 border-[--color-creamson] bg-[url("../assets/about_bg2.png")]'>
            {' '}
            {/* about-us__image-sushi2 */}
            <img
              src='assets/sushi-2.png'
              alt='sushi'
              data-aos='fade-right'
              className='w-56 h-48 mt-8'
            />
          </div>
        </div>
        <div
          className='p-16 flex flex-[1.25] justify-center flex-col' /* about-us__content */
          data-aos='fade-left'
        >
          <p className='text-lg font-normal font-serif text-[--primary-color] -tracking-wide opacity-80'>
            About Us / 私たちに関しては
          </p>{' '}
          {/* sushi__subtitle */}
          <h3 className='text-6xl font-semibold font-sans text-[--secondary-color] mt-4'>
            {/* sushi__title */}
            Our mission is to bring true Japanese flavours to you.
          </h3>
          <p className='text-lg font-normal font-serif leading-9 -tracking-wide opacity-80 my-8'>
            {' '}
            {/* sushi__description */}
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customers.
          </p>
        </div>
      </section>
    </>
  );
}
