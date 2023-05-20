import React from 'react';

export default function PopularFoods() {
  return (
    <>
      <section class='popular-foods' id='menu'>
        <h2 class='popular-foods__title' data-aos='flip-up'>
          Popular Food / 人気
        </h2>

        <div
          class='popular-foods__filters sushi__hide-scrollbar'
          data-aos='fade-up'
        >
          <button class='popular-foods__filter-btn active'>All</button>
          <button class='popular-foods__filter-btn'>
            <img src='/assets/sushi-9.png' alt='sushi 9' />
            Sushi
          </button>
          <button class='popular-foods__filter-btn'>
            <img src='/assets/sushi-8.png' alt='sushi 8' />
            Ramen
          </button>
          <button class='popular-foods__filter-btn'>
            <img src='/assets/sushi-7.png' alt='sushi 7' />
            Udon
          </button>
          <button class='popular-foods__filter-btn'>
            <img src='/assets/sushi-6.png' alt='sushi 6' />
            Danggo
          </button>
          <button class='popular-foods__filter-btn'>All</button>
        </div>

        <div class='popular-foods__catalogue' data-aos='fade-up'>
          <article class='popular-foods__card'>
            <img
              class='popular-foods__card-image'
              src='assets/sushi-12.png'
              alt='sushi-12'
            />
            <h4 class='popular-foods__card-title'>Chezu Sushi</h4>

            <div class='popular-foods__card-details flex-between'>
              <div class='popular-foods__card-rating'>
                <img src='assets/star.svg' alt='star' />
                <p>4.9</p>
              </div>

              <p class='popular-foods__card-price'>$21.00</p>
            </div>
          </article>

          <article class='popular-foods__card active-card'>
            <img
              class='popular-foods__card-image'
              src='assets/sushi-11.png'
              alt='sushi-11'
            />
            <h4 class='popular-foods__card-title'>Original Sushi</h4>

            <div class='popular-foods__card-details flex-between'>
              <div class='popular-foods__card-rating'>
                <img src='assets/star.svg' alt='star' />
                <p>5.0</p>
              </div>

              <p class='popular-foods__card-price'>$19.00</p>
            </div>
          </article>

          <article class='popular-foods__card'>
            <img
              class='popular-foods__card-image'
              src='assets/sushi-10.png'
              alt='sushi-10'
            />
            <h4 class='popular-foods__card-title'>Ramen Legendo</h4>

            <div class='popular-foods__card-details flex-between'>
              <div class='popular-foods__card-rating'>
                <img src='assets/star.svg' alt='star' />
                <p>4.7</p>
              </div>

              <p class='popular-foods__card-price'>$13.00</p>
            </div>
          </article>
        </div>

        <button class='popular-foods__button'>
          Explore Food
          <img src='assets/arrow-right.svg' alt='arrow-right' />
        </button>
      </section>
    </>
  );
}
