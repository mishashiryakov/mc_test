import nigeriaFront from './assets/clothes/tShirts/nigeria/nigeria-front.jpg';
import nigeriaFrontNear from './assets/clothes/tShirts/nigeria/nigeria-front-near.jpg';
import nigeriaBackNear from './assets/clothes/tShirts/nigeria/nigeria-back-near.jpg';
import nigeriaBack from './assets/clothes/tShirts/nigeria/nigeria-back.jpg';



import nikeFront from './assets/clothes/tShirts/nike/nike-front.jpg';
import nikeBack from './assets/clothes/tShirts/nike/nike-back.jpg';
import nikeFrontNear from './assets/clothes/tShirts/nike/nike-front-near.jpg';


import nikeproFront from './assets/clothes/tShirts/nike-pro/nikepro-front.jpg';

import nikesunFront from './assets/clothes/tShirts/nike-sun/nikesun-front.jpg';

const TShirtCare = 'Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.';


export const clothesData = {
  tshirt: {
    nigeria: {
      name: 'Футболка Nigeria',
      price: '2900 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Черный', 'Синий', 'Красный'],
      description: 'Чёрная майка.',
      composition: 'Состав: 80% хлопок, 20% полиэстер.',
      care: TShirtCare,
      images: [
        nigeriaFront,
        nigeriaFrontNear,
        nigeriaBack,
        nigeriaBackNear,
      ]
    },
    nike: {
      name: 'Футболка Nike',
      price: '3900 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Черный', 'Синий', 'Красный'],
      description: 'Чёрная майка с оранжевым значком.',
      composition: 'Состав: 20% хлопок, 80% полиэстер.',
      care: TShirtCare,
      images: [
        nikeFront,
        nikeBack,
        nikeFrontNear ,
        './assets/clothes/t-shirts/nike/nike-common.jpg'
      ]
    },
    nikePro: {
      name: 'Футболка Nike Pro',
      price: '9999 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Белый', 'Синий', 'Красный'],
      description: 'Белая майка с чёрным значком.',
      composition: 'Состав: 100% хлопок.',
      care: TShirtCare,
      images: [
        nikeproFront,
        './assets/clothes/t-shirts/nike-pro/nikepro-back.jpg',
        './assets/clothes/t-shirts/nike-pro/nikepro-front-near.jpg',
        './assets/clothes/t-shirts/nike-pro/nikepro-back-near.jpg'
      ]
    },
    nikeSun: {
      name: 'Футболка Nike Sun',
      price: '6000 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Кремовый', 'Синий', 'Красный'],
      description: 'Яркая кремовая майка с желтым принтом.',
      composition: 'Состав: 99% хлопок, 1% полиэстер.',
      care: TShirtCare,
      images: [
        nikesunFront,
        './assets/clothes/t-shirts/nike-sun/nikesun-back.jpg',
        './assets/clothes/t-shirts/nike-sun/nikesun-front-near.jpg',
        './assets/clothes/t-shirts/nike-sun/nikesun-common.jpg'
      ]
    }
  },
  hoodie: {

  },
  short: {

  },
  cap: {

  },
  bag: {

  },
  airmax: {

  },
  dryfit: {

  },
  zoom: {

  },
}


