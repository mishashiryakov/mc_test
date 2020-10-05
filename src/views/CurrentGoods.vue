<template>
  <div class="current-goods-wrapper">

    <div class="current-goods-block">
      <div class="img-block">
        <div class="img-previews">
          <img
            class="img-preview"
            v-for="(img, index) in currentGoods.images"
            :key="img"
            :src="img"
            :id="index"
            v-on:click="setValue($event)"
          />
        </div>
        <div class="main-img-block">
          <Carousel
            v-model="value1"
            loop
            arrow="always"

          >
            <CarouselItem
              v-for="img in currentGoods.images"
              :key="img"

            >
              <img
                class="main-img"
                :src="img"

              />
            </CarouselItem>

          </Carousel>

        </div>
      </div>
      <div class="current-goods-info">
        <div class="current-goods-name">
          <p class="current-goods-headline">
            {{currentGoods.name}}
          </p>
          <p class="current-goods-price">
            {{currentGoods.price}}
          </p>
        </div>
        <div class="current-goods-size">
          <p>
            Размер:
          </p>
          <div class="current-goods-size-buttons">
            <div
              class="current-goods-size-button"
              v-for="size in currentGoods.sizes"
              :key="size"
              v-on:click="selectSize($event)"
            >
                {{size}}
            </div>
          </div>
           <p>
              Цвет:
            </p>
            <div class="current-goods-color-buttons">
              <div
                class="current-goods-color-button"
                v-for="color in currentGoods.colors"
                :key="color"
                v-on:click="selectColor($event)"
              >
                {{color}}
              </div>
            </div>
            <div class="add-to-cart-block">
              <div class="quantity-to-cart">
                <img
                  id="minus"
                  src="../assets/icons/minus.png"
                  v-on:click="setCounter($event)"
                />
                <div class="quantity-button">{{this.counter}}</div>
                <img src="../assets/icons/plus.png" />
              </div>

            </div>
        </div>
      </div>
    </div>

    <div class="catalog">

    </div>

    <div class="history-views">

    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'view-design'
export default {
  name: 'CurrentGoods',
  components: {
    Carousel, CarouselItem
  },
  data () {
    return {
      counter: 1,
      value1: 0,
      size: 'S',
      color: '',
      counter: 1
    }
  },
  computed: {
    currentGoods () {
      return this.$store.getters.getCurrentGoods
    }
  },
  mounted () {
    console.log('mounted')
    document.querySelector('.img-preview').classList.add('active-img');

    const MAIN_IMG = document.querySelectorAll('.main-img');
    document.querySelector('.ivu-carousel-list').addEventListener('mousemove', e => {
        const x = e.clientX - document.querySelector('.ivu-carousel-list').getBoundingClientRect().left;
        const y = e.clientY - document.querySelector('.ivu-carousel-list').getBoundingClientRect().top;
        MAIN_IMG[this.value1].style.transformOrigin = `${x}px ${y}px`;
        MAIN_IMG[this.value1].style.transform = "scale(2)";
    })

    document.querySelector('.ivu-carousel-list').addEventListener('mouseleave', () => {
        MAIN_IMG[this.value1].style.transformOrigin = "center center";
        MAIN_IMG[this.value1].style.transform = "scale(1)";
    })

    document.querySelector('.current-goods-size-button').classList.add('active');
    document.querySelector('.current-goods-color-button').classList.add('active');


  },
  updated () {
    console.log('update', this.value1);
    document.querySelectorAll('.img-preview').forEach(
      (el) => el.classList.remove('active-img')
    )
    document.querySelectorAll('.img-preview')[this.value1].classList.add('active-img')
  },
  methods: {
    setValue (event) {
      this.value1 = +event.target.id;
    },
    selectSize (event) {
      this.size = `${event.currentTarget.innerHTML}`;
      document.querySelectorAll('.current-goods-size-button').forEach((el) => {
        el.classList.remove('active')
      })
      event.currentTarget.classList.add('active')
    },
    selectColor (event) {
      this.color = `${event.currentTarget.innerHTML}`;
      document.querySelectorAll('.current-goods-color-button').forEach((el) => {
        el.classList.remove('active')
      })
      event.currentTarget.classList.add('active')
    },
    setCounter (event) {
      this.counter += 1;
      
    }
  }
}
</script>
