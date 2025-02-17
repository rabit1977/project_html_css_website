import React from 'react';

export default function TrendingFood() {
  return (
    <>
      <section class='trending' id='food'>
        <section class='trending-sushi'>
          <div class='trending__content' data-aos='fade-right'>
            <p class='sushi__subtitle'>What’s Trending / トレンド</p>

            <h3 class='sushi__title'>Japanese Sushi</h3>
            <p class='sushi__description'>
              Feel the taste of the most delicious Sushi here.
            </p>

            <ul class='trending__list flex-between'>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Make Sushi</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Oshizushi</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Uramaki Sushi</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Nigiri Sushi</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Temaki Sushi</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Inari Sushi</p>
              </li>
            </ul>
          </div>

          <div class='trending__image flex-center'>
            <img src='assets/sushi-5.png' alt='sushi-5' data-aos='fade-left' />

            <div class='trending__arrow trending__arrow-left'>
              <img src='assets/arrow-vertical.svg' alt='arrow vertical' />
            </div>

            <div class='trending__arrow trending__arrow-bottom'>
              <img src='assets/arrow-horizontal.svg' alt='arrow horizontal' />
            </div>
          </div>
        </section>

        <div class='trending__discover' data-aos='zoom-in'>
          <p>Discover</p>
        </div>

        <section class='trending-drinks'>
          <div class='trending__image flex-center'>
            <img src='assets/sushi-4.png' alt='sushi-4' data-aos='fade-right' />

            <div class='trending__arrow trending__arrow-top'>
              <img src='assets/arrow-horizontal.svg' alt='arrow horizontal' />
            </div>

            <div class='trending__arrow trending__arrow-right'>
              <img src='assets/arrow-vertical.svg' alt='arrow vertical' />
            </div>
          </div>

          <div class='trending__content' data-aos='fade-left'>
            <p class='sushi__subtitle'>What’s Trending / トレンド</p>

            <h3 class='sushi__title'>Japanese Drinks</h3>
            <p class='sushi__description'>
              Feel the taste of the most delicious Japense drinks here.
            </p>

            <ul class='trending__list flex-between'>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Oruncha</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Sakura Tea</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Aojiru</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Ofukucha</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Kombu-cha</p>
              </li>
              <li>
                <div class='trending__icon flex-center'>
                  <img src='assets/check.svg' alt='check' />
                </div>
                <p>Mugicha</p>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}
