import React from 'react';

export default function About() {
  return (
    <>
      <section class='about-us' id='about-us'>
        <div class='about-us__image'>
          <div class='about-us__image-sushi3'>
            <img src='assets/sushi-3.png' alt='sushi' data-aos='fade-right' />
          </div>

          <button class='about-us__button'>
            Learn More
            <img src='assets/arrow-up-right.svg' alt='learn more' />
          </button>

          <div class='about-us__image-sushi2'>
            <img src='assets/sushi-2.png' alt='sushi' data-aos='fade-right' />
          </div>
        </div>

        <div class='about-us__content' data-aos='fade-left'>
          <p class='sushi__subtitle'>About Us / 私たちに関しては</p>
          <h3 class='sushi__title'>
            Our mission is to bring true Japanese flavours to you.
          </h3>
          <p class='sushi__description'>
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customers.
          </p>
        </div>
      </section>
    </>
  );
}
