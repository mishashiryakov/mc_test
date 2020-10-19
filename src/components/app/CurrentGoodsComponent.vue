<template>
  <div class="current-goods-block">

      <div class="img-block">

        <div class="img-previews">
          <img
            class="img-preview"
            v-for="(img, index) in clothesData[currentGoods[0]][currentGoods[1]].images"
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
              v-for="img in clothesData[currentGoods[0]][currentGoods[1]].images"
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
          <Breadcrumb class="breadcrumb">
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/goods">{{currentGoods[0]}}</BreadcrumbItem>
            <BreadcrumbItem>{{clothesData[currentGoods[0]][currentGoods[1]].name}}</BreadcrumbItem>
          </Breadcrumb>
          <p class="current-goods-headline">
            {{clothesData[currentGoods[0]][currentGoods[1]].name}}
          </p>
          <p class="current-goods-price">
            {{clothesData[currentGoods[0]][currentGoods[1]].price + ' ₽'}}
          </p>
        </div>

        <div
          class="current-goods-size"
          v-if="clothesData[currentGoods[0]][currentGoods[1]].existence"
        >
          <p>
            Размер:
          </p>
          <div class="current-goods-size-buttons">
            <div
              class="current-goods-size-button"
              v-for="size in clothesData[currentGoods[0]][currentGoods[1]].sizes"
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
                v-for="color in clothesData[currentGoods[0]][currentGoods[1]].colors"
                :key="color"
                v-on:click="selectColor($event)"
              >
                {{color}}
              </div>
            </div>
            <div class="add-to-cart-block">
              <div class="quantity-to-cart">
                <div
                  id="minus"
                  class="quantity-icon"
                  v-on:click="setCounter($event)"
                >
                  <img src="@/assets/icons/minus.png" />
                </div>

                <div class="quantity-button">
                  {{this.counter}}
                </div>

                <div
                  class="quantity-icon"
                  v-on:click="setCounter($event)"
                >
                  <img src="@/assets/icons/plus.png" />
                </div>
              </div>

              <div
                v-on:click="addToCart(clothesData[currentGoods[0]][currentGoods[1]].category, clothesData[currentGoods[0]][currentGoods[1]].nameObj, counter, size, clothesData[currentGoods[0]][currentGoods[1]].price, clothesData[currentGoods[0]][currentGoods[1]].images[0])"
                class="add-to-cart-button"
              >
                В корзину
              </div>

            </div>
        </div>

        <div
          class="current-goods-size"
          v-if="!clothesData[currentGoods[0]][currentGoods[1]].existence"
        >
          <p class="no-available">Товар закончился</p>
        </div>

        <div class="current-goods-description-block">
          <p class="current-goods-description">
            {{clothesData[currentGoods[0]][currentGoods[1]].description}}
          </p>

          <div class="current-goods-composition">
            <span>Состав: </span>
            <p>
              {{clothesData[currentGoods[0]][currentGoods[1]].composition}}
            </p>
          </div>

          <p class="current-goods-care-title">
            Рекомендация по уходу:
          </p>

          <p class="current-goods-care">
            {{clothesData[currentGoods[0]][currentGoods[1]].care}}
          </p>

        </div>
      </div>
  </div>
</template>

<script>
import { clothesData } from '../../data'
import { Carousel, CarouselItem, Breadcrumb, BreadcrumbItem } from 'view-design'

export default {
  name: 'CurrentGoodsComponent',
  components: {
    Carousel, CarouselItem, Breadcrumb, BreadcrumbItem
  },
  data () {
    return {
      clothesData,
      value1: 0,
      size: 'S',
      color: '',
      counter: 1
    }
  },
  props: {
    currentGoods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.startComponent()
  },
  updated () {
    document.querySelectorAll('.img-preview').forEach(
      (el) => el.classList.remove('active-img')
    )
    document.querySelectorAll('.img-preview')[this.value1].classList.add('active-img')
  },
  methods: {
    startComponent () {
      document.querySelector('.img-preview').classList.add('active-img')

      const MAIN_IMG = document.querySelectorAll('.main-img')
      document.querySelector('.ivu-carousel-list').addEventListener('mousemove', e => {
        const x = e.clientX - document.querySelector('.ivu-carousel-list').getBoundingClientRect().left
        const y = e.clientY - document.querySelector('.ivu-carousel-list').getBoundingClientRect().top
        MAIN_IMG[this.value1].style.transformOrigin = `${x}px ${y}px`
        MAIN_IMG[this.value1].style.transform = 'scale(2)'
      })

      document.querySelector('.ivu-carousel-list').addEventListener('mouseleave', () => {
        MAIN_IMG[this.value1].style.transformOrigin = 'center center'
        MAIN_IMG[this.value1].style.transform = 'scale(1)'
      })

      if (clothesData[this.currentGoods[0]][this.currentGoods[1]].existence) {
        document.querySelector('.current-goods-size-button').classList.add('active')
        document.querySelector('.current-goods-color-button').classList.add('active')

        document.querySelector('.add-to-cart-button').addEventListener('mousedown', (el) => {
          el.currentTarget.classList.add('active')
        })

        document.querySelector('.add-to-cart-button').addEventListener('touchstart', (el) => {
          el.currentTarget.classList.add('active')
        })

        document.querySelector('.add-to-cart-button').addEventListener('mouseup', (el) => {
          el.currentTarget.classList.remove('active')
        })

        document.querySelector('.add-to-cart-button').addEventListener('touchend', (el) => {
          el.currentTarget.classList.remove('active')
        })
      }
    },
    setValue (event) {
      this.value1 = +event.target.id
    },
    selectSize (event) {
      this.size = `${event.currentTarget.innerHTML}`
      this.size = this.size.trim()
      document.querySelectorAll('.current-goods-size-button').forEach((el) => {
        el.classList.remove('active')
      })
      event.currentTarget.classList.add('active')
    },
    selectColor (event) {
      this.color = `${event.currentTarget.innerHTML}`
      document.querySelectorAll('.current-goods-color-button').forEach((el) => {
        el.classList.remove('active')
      })
      event.currentTarget.classList.add('active')
    },
    setCounter (event) {
      if (event.currentTarget.id) {
        if (this.counter !== 1) {
          this.counter -= 1
        }
      } else {
        this.counter += 1
      }
    },
    addToCart (category, item, quantity, size, price, image) {
      this.$store.commit('addNewItem', [category, item, quantity, size, price, image])
    }
  }
}
</script>
