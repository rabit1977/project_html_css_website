import React from 'react';

export default function MainSection() {
  return (
    <>
      <section className='flex min-h-[calc(100vh-74px)] overflow-hidden'>
        {' '}
        {/* hero */}
        <div className='flex-1 flex flex-col relative z-10'>
          {' '}
          {/* hero-image */}
          <img
            src='assets/sushi-1.png'
            alt='sushi'
            data-aos='fade-up'
            className='w-[120%] h-full object-contain'
          />
          <h2
            data-aos='fade-up'
            className='absolute bottom-0 p-5 font-sans font-bold text-[120px] leading-[138px] text-white'
          >
            日 <br />
            本 <br />食
          </h2>
          <div className='absolute inset-0 w-full bg-[--primary-color] -z-10'></div>{' '}
          {/* hero-image__overlay */}
        </div>
        <div class=' flex-[1.22] flex justify-between flex-col'>
          {' '}
          {/* hero-content */}
          <div
            class='p-16 flex flex-1 justify-center flex-col'
            data-aos='fade-left'
          >
            {' '}
            {/* hero-content-info */}
            <h1 className='text-[80px] font-semibold font-sans text-[--secondary-color]'>
              Feel the taste of Japanese food
            </h1>
            <p className='m-8 mr-0 mb-0 font-serif  text-[--secondary-color]text-lg font-normal'>
              Feel the taste of the most popular Japanese food from anywhere and
              anytime.
            </p>
            <div class='m-10 mr-0 mb-0 flex flex-wrap gap-9'>
              {' '}
              {/* hero-content__buttons */}
              <button class='p-5 rounded-full min-w-[212px] text-white outline-none border-0 bg-[--secondary-color] cursor-pointer  text-lg font-medium'>
                Order Now
              </button>{' '}
              {/* hero-content__order-button */}
              <button class='hero-content__play-button border-0 outline-none bg-transparent flex items-center text-base text-[--black-200] font-serif cursor-pointer'>
                <img
                  src='assets/play-circle.svg'
                  alt='play'
                  className='mr-3 w-11 h-11 object-contain'
                />
                How to Order
              </button>
            </div>
          </div>
          <div
            class=' py-8 px-16 flex flex-wrap gap-5' /* hero-content__testimonial */
            data-aos='fade-up'
          >
            <div className=' flex-1 flex gap-2.5 justify-center items-center'>
              {' '}
              {/* hero-content__customer */}
              <h4 class=' text-[62px] font-normal font-sans'>
                24<span>k+</span>
              </h4>
              <p className='text-base font-normal font-sans text-[--secondary-color] opacity-50'>
                Happy Customers
              </p>
            </div>

            <div class='flex flex-1 items-center gap-2.5 pl-5 border-l border-l-black/20 min-w-[200px]'>
              {' '}
              {/* hero-content__review */}
              <img
                src='assets/user.png'
                alt='user'
                className='w-11 h-11 object-contain'
              />
              <p className='text-xs/6 font-sans text-[--secondary-color] opacity-80'>
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
