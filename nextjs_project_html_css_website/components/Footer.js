import React from 'react';

export default function Footer() {
  return (
    <footer class='footer flex-between'>
      <h3 class='footer__logo'>
        <span>Sushi</span>man
      </h3>

      <ul class='footer__nav'>
        <li>
          <a href='#menu'>Menu</a>
        </li>
        <li>
          <a href='#food'>Food</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#about-us'>About Us</a>
        </li>
      </ul>

      <ul class='footer__social'>
        <li class='flex-center'>
          <img src='assets/facebook.svg' alt='facebook' />
        </li>
        <li class='flex-center'>
          <img src='assets/instagram.svg' alt='instagram' />
        </li>
        <li class='flex-center'>
          <img src='assets/twitter.svg' alt='twitter' />
        </li>
      </ul>
    </footer>
  );
}
