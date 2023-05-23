import React from 'react';

export default function MainSection() {
  return (
    <>
      <section className='relative flex md:flex-row flex-col min-h-[calc(100vh-74px)] overflow-hidden'>
        {' '}
        {/* hero */}
        <div className='relative flex flex-1 min-h-[calc(100vh-74px)] z-10'>
          {' '}
          {/* hero-image */}
          <div className='absolute md:w-[120%] w-full h-full'>
            <img
              src='assets/sushi-1.png'
              alt='sushi'
              data-aos='fade-up'
              className='object-contain h-full'
            />
          </div>
          <h2
            data-aos='fade-up'
            className='absolute space-y-4 md:space-y-6 xl:space-y-8 bottom-3 p-6 flex flex-col font-sans font-bold xl:text-7xl md:text-6l text-5xl text-white'
          >
            <span>日</span>
            <span>本</span>
            <span>食</span>{' '}
          </h2>
          <div className='absolute inset-0 w-full bg-[--primary-color] -z-10'></div>{' '}
          {/* hero-image__overlay */}
        </div>
        <div class=' md:flex-[1.2] flex flex-col justify-between '>
          {' '}
          {/* hero-content */}
          <div
            class='p-6 md:p-14 md:my-8 sm:my-4 my-2 flex flex-1 justify-center flex-col'
            data-aos='fade-left'
          >
            {' '}
            {/* hero-content-info */}
            <h1 className='md:text-7xl sm:text-6xl text-5xl font-semibold font-sans text-[--secondary-color]'>
              Feel the taste of Japanese food
            </h1>
            <p className='md:my-8 my-2 sm:my-4 font-serif  text-[--secondary-color] md:text-lg sm:text-base text-sm font-normal'>
              Feel the taste of the most popular Japanese food from anywhere and
              anytime.
            </p>
            <div class='md:my-6 my-2 sm:my-4 flex lg:flex-row  flex-col md:gap-4 gap-2'>
              {' '}
              {/* hero-content__buttons */}
              <button class='px-2 py-2 sm:py-4 sm:px-4 md:px-3 md:py-3 lg:px-4 rounded-full flex-1 text-white outline-none border-0 bg-[--secondary-color] hover:opacity-90 cursor-pointer  text-lg font-medium'>
                Order Now
              </button>{' '}
              {/* hero-content__order-button */}
              <button class='px-2 py-2 sm:py-2 sm:px-4 md:px-3 md:py-3 lg:px-4 border outline-none bg-transparent flex items-center text-base text-[--black-200] flex-1 font-serif cursor-pointer hover:border hover:border-black/10 border-transparent rounded-full hover:bg-slate-50/20h hover:shadow-sm justify-center'>
                <img
                  src='assets/play-circle.svg'
                  alt='play'
                  className='mr-2 w-11 h-11 object-contain'
                />
                How to Order
              </button>
            </div>
          </div>
          <div
            class='p-6 py-8 mt-4 flex gap-5 bg-[--color-white]' /* hero-content__testimonial */
            data-aos='fade-up'
          >
            <div className=' flex-1 flex gap-4 justify-center items-center'>
              {' '}
              {/* hero-content__customer */}
              <h4 class=' text-4xl md:text-7xl font-normal font-sans'>
                24<span>k+</span>
              </h4>
              <p className='text-base font-normal font-sans text-[--secondary-color] opacity-50'>
                Happy Customers
              </p>
            </div>

            <div class='flex flex-1 items-center gap-2.5 pl-5 border-l border-l-black/20'>
              {' '}
              {/* hero-content__review */}
              <img
                src='assets/user.png'
                alt='user'
                className='w-11 h-11 object-contain'
              />
              <p className='text-xs md:text-sm font-sans text-[--secondary-color] opacity-80'>
                "This is the best Japanese food delivery service that ever
                existed."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
