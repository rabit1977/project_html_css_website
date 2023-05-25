import React from 'react';

export default function PopularFoods() {
  return (
    <>
      <section
        className='p-16 flex flex-col bg-[--primary-color]  bg-[url("../assets/popular_bg.png)] bg-no-repeat bg-contain overflow-hidden sm:p-16 sm:px-8'
        id='menu'
      >
        {/* popular-foods */}
        <h2
          className=' text-2xl sm:text-5xl md:text-7xl font-serif font-semibold text-white text-center'
          data-aos='flip-up'
        >
          {/* popular-foods__title */}
          Popular Food / 人気
        </h2>

        <div
          className='mt-12 max-w-full overflow-x-auto flex justify-center gap-6 sushi__hide-scrollbar flex-wrap'
          data-aos='fade-up' /* popular-foods__filters */
        >
          <button className='py-2.5 px-7 flex items-center gap-2.5 bg-white text-[--primary-color] rounded-[46px] text-base font-light leading-6 cursor-pointer'>
            All
          </button>{' '}
          {/* popular-foods__filter-btn */}
          <button className='py-2.5 px-7 flex items-center gap-2.5 bg-white/20 rounded-[46px] text-base font-light leading-6 text-white cursor-pointer  hover:bg-white hover:text-[--primary-color] min-w-fit'>
            {' '}
            {/* popular-foods__filter-btn */}
            <img
              src='/assets/sushi-9.png'
              alt='sushi 9'
              className='w-9 h-9 object-contain'
            />
            Sushi
          </button>
          <button className='py-2.5 px-7 flex items-center gap-2.5 bg-white/20 rounded-[46px] text-base font-light leading-6 text-white cursor-pointer  hover:bg-white hover:text-[--primary-color] min-w-fit'>
            <img
              src='/assets/sushi-8.png'
              alt='sushi 8'
              className='w-9 h-9 object-contain'
            />
            Ramen
          </button>
          <button className='popular-foods__filter-btn py-2.5 px-7 flex items-center gap-2.5 bg-white/20 rounded-[46px] text-base font-light leading-6 text-white cursor-pointer  hover:bg-white hover:text-[--primary-color] min-w-fit'>
            <img
              src='/assets/sushi-7.png'
              alt='sushi 7'
              className='w-9 h-9 object-contain'
            />
            Udon
          </button>
          <button className='popular-foods__filter-btn py-2.5 px-7 flex items-center gap-2.5 bg-white/20 rounded-[46px] text-base font-light leading-6 text-white cursor-pointer  hover:bg-white hover:text-[--primary-color] min-w-fit'>
            <img
              src='/assets/sushi-6.png'
              alt='sushi 6'
              className='w-9 h-9 object-contain'
            />
            Danggo
          </button>
        </div>

        <div
          className='flex md:flex-row flex-col mx-auto mt-16 gap-14'
          data-aos='fade-up'
        >
          {/* popular-foods__catalogue */}
          <article className='p-10 mt-auto min-w-[260px] h-fit flex items-center flex-col rounded-[36px] bg-white/5 border border-white/20'>
            {/* popular-foods__card */}
            <img
              className='w-28 h-20 object-contain' /* popular-foods__card-image */
              src='assets/sushi-12.png'
              alt='sushi-12'
            />
            <h4 className='mt-12 font-semibold leading-8 text-white text-center'>
              Chezu Sushi
            </h4>
            {/* popular-foods__card-title */}

            <div className='flex justify-between items-center w-full mt-8'>
              {/* popular-foods__card-details */}
              <div className='flex gap-1 w-6 h6 object-contain'>
                {/* popular-foods__card-rating */}
                <img src='assets/star.svg' alt='star' />
                <p className='text-xl font-light fon-serif text-white'>4.9</p>
              </div>

              <p className='text-xl font-medium font-serif text-white'>
                $21.00
              </p>
              {/* popular-foods__card-price */}
            </div>
          </article>

          <article className='bg-white min-w-[340px] w-44 flex flex-col items-center  justify-center p-14 rounded-[48px]'>
            {/* popular-foods__card active-card */}
            <img
              className='w- h-30 object-contain '
              src='assets/sushi-11.png'
              alt='sushi-11'
            />{' '}
            {/* popular-foods__card-image */}
            <h4 className='text-[--black-500] mt-12 font-semibold text-3xl leading-8 font-serif items-center'>
              Original Sushi
            </h4>
            {/* popular-foods__card-title */}
            <div className='flex justify-between items-center w-full mt-8'>
              {/* popular-foods__card-details */}
              <div className='flex items-center gap-2'>
                {/* popular-foods__card-rating */}
                <img
                  src='assets/star.svg'
                  alt='star'
                  className='w-8 h-8'
                  object-contain
                />
                <p className='text-xl text-[--gray-100]'>5.0</p>
              </div>

              <p className='text-xl text-[--seconary-color] font-medium font-serif '>
                $19.00
              </p>
              {/* popular-foods__card-price */}
            </div>
          </article>

          <article className='p-10 mt-auto min-w-[260px] h-fit flex items-center flex-col rounded-[36px] bg-white/5 border border-white/20'>
            <img
              className='w-28 h-20 object-contain'
              src='assets/sushi-10.png'
              alt='sushi-10'
            />
            <h4 className='mt-12 font-semibold leading-8 text-white text-center'>
              Ramen Legendo
            </h4>

            <div className='flex justify-between items-center w-full mt-8'>
              <div className='flex gap-1 w-6 h6 object-contain'>
                {/* popular-foods__card-rating */}
                <img src='assets/star.svg' alt='star' />
                <p className='text-xl font-light fon-serif text-white'> 4.7</p>
              </div>

              <p className='text-xl font-medium font-serif text-white'>
                $13.00
              </p>
              {/* popular-foods__card-price */}
            </div>
          </article>
        </div>

        <button className='flex items-center text-xl rounded-full w-fit py-5 px-8 mt-20 mx-auto font-medium leading-6 font-serif text-white outline-none bg-[--secondary-color] cursor-pointer hover:opacity-90'>
          {/* popular-foods__button */}
          Explore Food
          <img
            src='assets/arrow-right.svg'
            alt='arrow-right'
            className='w-3.5 h-3.5 object-contain ml-5'
          />
        </button>
      </section>
    </>
  );
}
