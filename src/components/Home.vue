<template>
  <div>
    <navbar></navbar>
    <slider></slider>
    <!--<div class="carousel carousel-slider">
      <a class="carousel-item" href="#one!"><img src='https://res.cloudinary.com/dmglopmul/image/upload/v1530226328/rocksSpa.jpg'></a>
      <a class="carousel-item" href="#two!"><img src='https://res.cloudinary.com/dmglopmul/image/upload/v1530226800/candlesSpa.jpg'></a>
      <a class="carousel-item" href="#three!"><img src='https://res.cloudinary.com/dmglopmul/image/upload/v1530230422/bowlsSpa.jpg'></a>
      <a class="carousel-item" href="#four!"><img src='https://res.cloudinary.com/dmglopmul/image/upload/v1530230422/bowlsSpa.jpg'></a>
    </div>-->
    <!--<mobile-menu></mobile-menu>-->
    <!--<v-container>
      <v-layout row wrap class="mt-2">
        <v-flex xs12>
          <v-carousel style="width: 1200x;min-height: 100vh;">
            <v-carousel-item v-for="(spaPhoto,i) in spas" :src="spaPhoto.imageUrl" :key="spaPhoto.id">
              <div class='title text-center'>
                {{spaPhoto.title}}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <promo-list></promo-list>-->
    <app-footer></app-footer>
  </div>

</template>

<script>
  //import Navbar from '@/components/Navbar';
  //import Slider from '@/components/Slider';
  import MobileMenu from '@/components/MobileMenu';
  import ProductListOne from '@/components/ProductListOne.vue';
  import ProductListTwo from '@/components/ProductListTwo.vue';
  //import Promos from '@/components/Promos.vue'
  export default {
    name: 'Home',
    components: {
      'mobile-menu': MobileMenu,
      'product-list-one': ProductListOne,
      'product-list-two': ProductListTwo
      //'promo-list': Promos
    },
    data() {
      return {
        home: 'Home Page',
        /*products: [
          { name: 'Swedish Massage', price: 250 },
          { name: 'Shiatsu Massage', price: 300 },
          { name: 'Hot Stone Massage.', price: 350 },
          { name: 'Aromatherapy Massage', price: 350 }

        ],
        products2: [
          { name: 'Ear Candling', price: 400 },
          { name: 'foot reflexiology', price: 200 },
          { name: 'Chair Massage', price: 300 }
        ],*/
        spas: [
          { imageUrl: 'https://res.cloudinary.com/dmglopmul/image/upload/v1530226328/rocksSpa.jpg', id: 'aedrt4234', title: 'Relax your back' },
          { imageUrl: 'https://res.cloudinary.com/dmglopmul/image/upload/v1530226800/candlesSpa.jpg', id: 'reutw8694', title: 'Pamper your body' },
          { imageUrl: 'https://res.cloudinary.com/dmglopmul/image/upload/v1538172352/projectPhotos/spa-business/bowlsSpa1.jpg', id: 'reutw8695', title: 'Heal your soreness' }
        ]

      }

    },
    mounted() {
      $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });

      //var instance = M.Carousel.init({
      //fullWidth: true
      //});
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #inspire {
    height: 100vh;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>