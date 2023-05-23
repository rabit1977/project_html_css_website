import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav class='flex overflow-hidden sm:bg-[--primary-color] bg-[--primary-color] border-b'>
        {' '}
        {/* header__nav */}
        <div class='flex flex-[1] items-center pl-5 py-4 md:py-6 sm:bg[--primary-color]'>
          {' '}
          {/* header__logo  */}
          <h4
            data-aos='fade-down'
            className=' font-bold text-3xl uppercase font-sans xm:text-[--secondary-color] text-white opacity-80 cursor-pointer'
          >
            Sushiman
          </h4>
        </div>
        <ul
          className='py-3 md:py-6 pr-6 p md:flex flex-[1.2] items-center justify-end space-x-5 md:space-x-6 lg:space-x-10 hidden md:bg-[--color-creamson] bg-[--primary-color]' /* header__menu */
          data-aos='fade-down'
        >
          <li className='relative font-medium font-serif transition-all duration-300 ease-in-out text-[--secondary-color] text-base md:text-lg uppercase cursor-pointer hover:text-[--primary-color]  before:content-[""] before:w-3 before:h-3 before:bg-[--primary-color] before:absolute before:hidden hover:before:flex before:bottom-7 before:right-[45%] before:mx-auto before:rounded-full'>
            <a href='#menu'>Menu</a>
          </li>
          <li className='relative font-medium font-serif transition-all duration-300 ease-in-out text-[--secondary-color] text-base md:text-lg uppercase cursor-pointer hover:text-[--primary-color]  before:content-[""] before:w-3 before:h-3 before:bg-[--primary-color] before:absolute before:hidden hover:before:flex before:bottom-7 before:right-[45%] before:mx-auto before:rounded-full'>
            <a href='#food'>Food</a>
          </li>
          <li className='relative font-medium font-serif transition-all duration-300 ease-in-out text-[--secondary-color] text-base md:text-lg uppercase cursor-pointer hover:text-[--primary-color]  before:content-[""] before:w-3 before:h-3 before:bg-[--primary-color] before:absolute before:hidden hover:before:flex before:bottom-7 before:right-[45%] before:mx-auto before:rounded-full'>
            <a href='#services'>Services</a>
          </li>
          <li className='relative font-medium font-serif transition-all duration-300 ease-in-out text-[--secondary-color] text-base md:text-lg uppercase cursor-pointer hover:text-[--primary-color]  before:content-[""] before:w-3 before:h-3 before:bg-[--primary-color] before:absolute before:hidden hover:before:flex before:bottom-7 before:right-[45%] before:mx-auto before:rounded-full'>
            <a href='#about-us'>About Us</a>
          </li>
          <li className='font-medium  font-serif text-[--secondarycolor] text md:text-lg uppercase cursor-pointer'>
            <img
              src='assets/search.svg'
              alt='search'
              className='w-6 h-6 object-contain'
            />
          </li>
        </ul>
        <ul
          className='flex items-center justify-end mx-4 gap- list-none md:hidden  relative' /* header__menu-mobile */
          data-aos='fade-down'
        >
          <li>
            <img
              src='assets/menu.svg'
              alt='menu'
              className='w-12 h-12 object-contain'
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
