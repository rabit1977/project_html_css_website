import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav class='flex overflow-hidden '>
        {' '}
        {/* header__nav */}
        <div class='flex-1 flex relative p-5'>
          {' '}
          {/* header__logo  */}
          <h4
            data-aos='fade-down'
            className='pl-7 font-bold text-2xl uppercase font-sans text-white opacity-80'
          >
            Sushiman
          </h4>
          <div class=' absolute inset-0 w-full -z-10 bg-[--primary-color]'></div>
          {/* header__logo-overlay */}
        </div>
        <ul
          className='p-5 flex flex-[1.236] items-center justify-end gap-4 md:gap-8 lg:gap-12 xl:gap-16 ' /* header__menu */
          data-aos='fade-down'
        >
          <li className='font-medium font-serif text-[--secondary-color] text-base uppercase cursor-pointer'>
            <a href='#menu'>Menu</a>
          </li>
          <li className='font-medium  font-serif text-[--secondary-color] text-base uppercase cursor-pointer'>
            <a href='#food'>Food</a>
          </li>
          <li className='font-medium  font-serif text-[--secondary-color] text-base uppercase cursor-pointer'>
            <a href='#services'>Services</a>
          </li>
          <li className='font-medium  font-serif text-[--secondarycolor] text-base uppercase cursor-pointer'>
            <a href='#about-us'>About Us</a>
          </li>
          <li className='font-medium  font-serif text-[--secondarycolor] text-base uppercase cursor-pointer'>
            <img
              src='assets/search.svg'
              alt='search'
              className='w-6 h-6 object-contain'
            />
          </li>
        </ul>
        <ul
          class=' p-5 flex items-center justify-end gap-16 list-none sm:hidden sm:gap-20 relative' /* header__menu-mobile */
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
