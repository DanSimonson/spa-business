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
    <div id="content1">
      <div class="one">
        <p>Welcome to Body Essence Spa</p>

      </div>
      <div class="two">
        <p class="pHead"><i class="material-icons md-48">
            spa
          </i>Spa Accomodations</p>
        <p class="pBody">Enjoy your stay with us at Body Essence Spa with a range of massage options to suite your
          style and budget</p>
      </div>
      <div class="three">
        <p class="pHead"><i class="material-icons md-48">
            favorite_border
          </i>Resort Day Spa</p>
        <p class="pBody">Relax, unwind and indulge with our day spa therapy that can be tailored to create your own
          unique experience.</p>
      </div>
      <div class="four">
        <p class="pHead"><i class="material-icons md-48">
            local_dining
          </i>Spa Dining</p>
        <p class="pBody">Feast on great food and enjoy the relaxing ambience of our own in-house restaurant
          specializing in recipes from the Philippines.</p>
      </div>
      <div class="five">
        <p class="pHead"><i class="material-icons md-48">
            sentiment_very_satisfied
          </i>Spa Activities</p>
        <p class="pBody">Whether you're here for a while or just passing through there's always plenty of activities
          happening throughout the year.</p>
      </div>
      <!--<div class="six">6</div>
        <div class="seven">4</div>
        <div class="eight">5</div>
        <div class="nine">6</div>-->
    </div>
    <div id="content2">
      <div class="cOne"></div>
      <div class="cTwo">
        <p class="cHead">Body Essence Spa</p>
        <p class="cTitle">Live the life</p>
        <p class="cBody">Body Essence Spa offers a variety of massage options for individuals, couples and groups. The
          spa features a
          VIP room, Roman bathouse with sauna and a Restaurant. Body Essence Spa provides both comfort and luxory with
          a choice of accommodations to suit any budget.</p>
      </div>
      <div class="cThree">
        <p class="cHead">Body Essence Spa</p>
        <p class="cTitle">More than just food!</p>
        <p class="cBody">Body Essence Spa Restaurant offers top quality fresh ingredients that are not only healthy but
          very tasty and refined. come and experience sumptuous Philippine cuisine and a great atmosphere.</p>

      </div>
      <div class="cFour"></div>
      <!--<div class="five">5</div>
        <div class="six">6</div>-->
    </div>
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
  @import url('https://fonts.googleapis.com/css?family=Scope+One');

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

  .material-icons.md-48 {
    font-size: 48px;
  }

  #content1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /*grid-template-rows: repeat(1, minmax(300px, auto));
    grid-gap: 1px;
    max-width: 960px;*/
    margin: 0 auto;
  }

  #content1 div {
    background: #fff;
    padding: 30px;
    margin-top: 1px;
  }

  .one {
    font-family: 'Scope One', serif;
    grid-column-start: 1;
    grid-column-end: 3;
    font-size: 3.5em;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .two {}

  .three {}

  .four {}

  .five {}

  .pHead {
    font-size: 1.7em;
    font-weight: bolder;
    text-align: center;
  }

  .pBody {
    font-size: 1.4em;
    text-align: justify;
  }

  #content1 div:nth-child(even) {
    /*background: #777;
    padding: 30px;
    margin-top: 1px;*/
  }

  #content2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, minmax(300px, auto));
    grid-gap: 1px;
    /*max-width: 960px;*/
    margin: 0 auto;

  }

  #content2 div {
    /*display: flex;
    /*flex-direction: column-reverse;
        height: 100vh;
        width: 100%;*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px;
    margin-top: 1px;
    font-family: 'Scope One', serif;
  }

  #content2 div:nth-child(even) {
    /*background: #777;
    padding: 30px;
    margin-top: 1px;*/
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .cOne {
    opacity: 0.8;
    background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538207585/projectPhotos/spa-business/bowlsSpa.jpg');
  }

  .cTwo {
    text-align: center;
    color: #fff;
    background: linear-gradient(rgba(20, 20, 20, .5),
      rgba(20, 20, 20, .5)),
      url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237541/projectPhotos/spa-business/rocksSpa.jpg');
    /*background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237541/projectPhotos/spa-business/rocksSpa.jpg');*/
  }

  .cThree {
    text-align: center;
    color: #fff;
    background: linear-gradient(rgba(20, 20, 20, .5),
      rgba(20, 20, 20, .5)),
      url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237713/projectPhotos/spa-business/flowerSpa.jpg');
    /*background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237713/projectPhotos/spa-business/flowerSpa.jpg');*/

  }

  .cFour {
    opacity: 0.8;
    background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237369/projectPhotos/spa-business/candlesSpa.jpg');

  }

  .cHead {
    font-size: 2.5em;
  }

  .cTitle {
    font-size: 1.5em;
  }

  .cBody {
    font-size: 1.2em;
  }
</style>