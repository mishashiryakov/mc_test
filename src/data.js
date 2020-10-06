import nigeriaFront from './assets/clothes/tShirts/nigeria/nigeria-front.jpg';
import nigeriaFrontNear from './assets/clothes/tShirts/nigeria/nigeria-front-near.jpg';
import nigeriaBackNear from './assets/clothes/tShirts/nigeria/nigeria-back-near.jpg';
import nigeriaBack from './assets/clothes/tShirts/nigeria/nigeria-back.jpg';



import nikeFront from './assets/clothes/tShirts/nike/nike-front.jpg';
import nikeBack from './assets/clothes/tShirts/nike/nike-back.jpg';
import nikeFrontNear from './assets/clothes/tShirts/nike/nike-front-near.jpg';
import nikeCommon from './assets/clothes/tShirts/nike/nike-common.jpg';


import nikeproFront from './assets/clothes/tShirts/nike-pro/nikepro-front.jpg';
import nikeproBack from './assets/clothes/tShirts/nike-pro/nikepro-back.jpg';
import nikeproFrontNear from  './assets/clothes/tShirts/nike-pro/nikepro-front-near.jpg';
import nikeproBackNear from './assets/clothes/tShirts/nike-pro/nikepro-back-near.jpg';

import nikesunFront from './assets/clothes/tShirts/nike-sun/nikesun-front.jpg';
import nikesunBack from './assets/clothes/tShirts/nike-sun/nikesun-back.jpg';
import nikesunFrontNear from './assets/clothes/tShirts/nike-sun/nikesun-front-near.jpg';
import nikesunCommon from './assets/clothes/tShirts/nike-sun/nikesun-common.jpg';

import hoodieCasual from './assets/clothes/hoodie/nike-casual/casual-front.jpg';
import hoodieCasual2 from './assets/clothes/hoodie/nike-casual/casual-back.jpg';
import hoodieCasual3 from './assets/clothes/hoodie/nike-casual/casual-common.jpg';

import hoodieSportswear from './assets/clothes/hoodie/nike-sportswear/sportswear-front.jpg';
import hoodieSportswear2 from './assets/clothes/hoodie/nike-sportswear/sportswear-back.jpg';
import hoodieSportswear3 from './assets/clothes/hoodie/nike-sportswear/sportswear-back-near.jpg';
import hoodieSportswear4 from './assets/clothes/hoodie/nike-sportswear/sportswear-front-near.jpg';

import pegasus from './assets/clothes/shoes/pegasus/pegasus.jpg';
import pegasus2 from './assets/clothes/shoes/pegasus/pegasus2.jpg';
import pegasus3 from './assets/clothes/shoes/pegasus/pegasus3.jpg';

import tempo from './assets/clothes/shoes/tempo/tempo.jpg';
import tempo2 from './assets/clothes/shoes/tempo/tempo2.jpg';
import tempo3 from './assets/clothes/shoes/tempo/tempo3.jpg';

import flyknit from './assets/clothes/shoes/flyknit/flyknit.jpg';
import flyknit2 from './assets/clothes/shoes/flyknit/flyknit2.jpg';
import flyknit3 from './assets/clothes/shoes/flyknit/flyknit3.jpg';




const TShirtCare = 'Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.';


export const clothesData = {
  tshirt: {
    nigeria: {
      name: 'Футболка Nigeria',
      nameObj: 'nigeria',
      category: 'tshirt',
      price: '2900 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Черный', 'Синий', 'Красный'],
      description: 'Чёрная майка.',
      composition: '80% хлопок, 20% полиэстер.',
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
      nameObj: 'nike',
      category: 'tshirt',
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
        nikeCommon
      ]
    },
    nikePro: {
      name: 'Футболка Nike Pro',
      nameObj: 'nikePro',
      category: 'tshirt',
      price: '9999 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Белый', 'Синий', 'Красный'],
      description: 'Белая майка с чёрным значком.',
      composition: 'Состав: 100% хлопок.',
      care: TShirtCare,
      images: [
        nikeproFront,
        nikeproBack,
        nikeproFrontNear,
        nikeproBackNear
      ]
    },
    nikeSun: {
      name: 'Футболка Nike Sun',
      nameObj: 'nikeSun',
      category: 'tshirt',
      price: '6000 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Кремовый', 'Синий', 'Красный'],
      description: 'Яркая кремовая майка с желтым принтом.',
      composition: 'Состав: 99% хлопок, 1% полиэстер.',
      care: TShirtCare,
      images: [
        nikesunFront,
        nikesunBack,
        nikesunFrontNear,
        nikesunCommon
      ]
    }
  },
  hoodie: {
    casual: {
      name: 'Худи Nike Casual',
      nameObj: 'casual',
      category: 'hoodie',
      price: '6500 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Чёрный', 'Синий', 'Красный'],
      description: 'Черный повседневный худи',
      composition: 'Состав: 99% хлопок, 1% полиэстер.',
      care: TShirtCare,
      images: [
        hoodieCasual,
        hoodieCasual2,
        hoodieCasual3
      ]
    },
    sportswear: {
      name: 'Худи Nike Sportswear',
      nameObj: 'sportswear',
      category: 'hoodie',
      price: '9500 ₽',
      sizes: ['S', 'M', 'XL', 'XXL'],
      colors: ['Чёрный', 'Синий', 'Красный'],
      description: 'Черный повседневный худи',
      composition: 'Состав: 99% хлопок, 1% полиэстер.',
      care: TShirtCare,
      images: [
        hoodieSportswear,
        hoodieSportswear2,
        hoodieSportswear3,
        hoodieSportswear4
      ]
    }
  },
  short: {

  },
  cap: {

  },
  bag: {

  },
  airzoom: {
    pegasus: {
      name: 'Кроссовки Nike Pegasus',
      nameObj: 'pegasus',
      category: 'airzoom',
      price: '15000 ₽',
      sizes: ['8', '8.5', '10', '12'],
      colors: ['Чёрный', 'Синий', 'Красный'],
      description: 'Беговые кроссовки',
      composition: 'Состав: 50% хлопок, 50% полиэстер.',
      care: TShirtCare,
      images: [
        pegasus,
        pegasus2,
        pegasus3
      ]
    },
    tempo: {
      name: 'Кроссовки Nike Tempo',
      nameObj: 'tempo',
      category: 'airzoom',
      price: '10000 ₽',
      sizes: ['8', '8.5', '10', '12'],
      colors: ['Чёрный', 'Синий', 'Красный'],
      description: 'Беговые кроссовки',
      composition: 'Состав: 50% хлопок, 50% полиэстер.',
      care: TShirtCare,
      images: [
        tempo,
        tempo2,
        tempo3
      ]
    },
    flyknit: {
      name: 'Кроссовки Nike Flyknit',
      nameObj: 'flyknit',
      category: 'airzoom',
      price: '20000 ₽',
      sizes: ['8', '8.5', '10', '12'],
      colors: ['Чёрный', 'Синий', 'Красный'],
      description: 'Беговые кроссовки',
      composition: 'Состав: 50% хлопок, 50% полиэстер.',
      care: TShirtCare,
      images: [
        flyknit,
        flyknit2,
        flyknit3
      ]
    }
  },
  dryfit: {

  },
  zoom: {

  },
}


