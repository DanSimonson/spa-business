<template>
    <div>
        <navbar></navbar>
        <slider></slider>
        <div id="content2">
            <div class="cOne">
                <p class="cHead">Body Essence Spa</p>
                <p class="cTitle">Mid-Week Special</p>
                <p class="cBody">Midweek prices are 20% off with complimentary all you can drink tea.</p>
            </div>

            <div class="cTwo"></div>
            <div class="cThree"></div>
            <div class="cFour">
                <p class="cHead">Body Essence Spa</p>
                <p class="cTitle">Ultimate Escape Package</p>
                <p class="cBody"> Your choice of Pancit Canton, Bihon, or Sotanghon meal after an hour long Swedish
                    Massage for only P500.</p>
            </div>
            <!--<div class="five">5</div>
                  <div class="six">6</div>-->
        </div>
        <app-footer></app-footer>
    </div>
    <!--<v-container>
            <v-layout row wrap class="mt-2">
                <v-flex xs12>
                    <!--<div class='spacer'></div>
                    <v-jumbotron gradient ripple>
                        <v-container class='jumboTxt' fill-height>
                            <v-layout align-center>
                                <v-flex>

                                    <h3 style="text-decoration: underline;" class="display-3">Body Essence Spa Membership</h3>

                                    <span class="headline">Members receive special offers, lower prices and exceptional service.
                                    </span>

                                    <v-divider class="my-3"></v-divider>

                                    <div class="display-1 mb-3">Enjoy our holistic approach to healing and relaxation!</div>
                                    <div style="cursor:pointer;" class='niceTxt' @click='show = !show' v-bind:class="[show? blurClass : '', backClass]">
                                        <h1>{{title}}</h1>
                                    </div>


                                    <!-- <v-btn class="mx-0" color="primary" large>
                                        See more
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-jumbotron>

                    <!--<div class='parent'>
                        <div class='niceTxt' @click='show = !show' v-bind:class="[show? blurClass : '', backClass]">
                            <h1>{{title}}</h1>
                        </div>
                    </div>

                    <transition>
                        <div class='niceTxt' v-if="show">
                            <h2>{{msg}}</h2>
                        </div>
                    </transition>
                    <promo-list></promo-list>
                    <div class='foot-space'></div>
                    <div id='footer'>
                        <app-footer></app-footer>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>-->
    </div>


</template>
<script>
    import Promos from '@/components/Promos.vue'
    export default {
        components: {
            'promo-list': Promos
        },
        data() {
            return {
                title: 'Claim your special member promo deal!',
                msg: 'As a member you get one free massage every month. Come in and claim your massage.',
                show: false,
                backClass: 'bk',
                blurClass: 'blur'
            }
        }
    }
</script>
<style>
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

    /*.overlay {
        background-color: rgba(0, 0, 0, 0.7);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }*/

    .cOne {
        text-align: center;
        color: #fff;
        background: linear-gradient(rgba(20, 20, 20, .5),
            rgba(20, 20, 20, .5)),
            url('https://res.cloudinary.com/dmglopmul/image/upload/v1538292654/projectPhotos/spa-business/hand.jpg');

    }

    .cTwo {
        opacity: 0.8;
        background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538292751/projectPhotos/spa-business/whiteBath.jpg');

        /*background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237541/projectPhotos/spa-business/rocksSpa.jpg');*/
    }

    .cThree {
        opacity: 0.8;
        background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237369/projectPhotos/spa-business/candlesSpa.jpg');

        /*background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237713/projectPhotos/spa-business/flowerSpa.jpg');*/

    }

    .cFour {
        text-align: center;
        color: #fff;
        background: linear-gradient(rgba(20, 20, 20, .5),
            rgba(20, 20, 20, .5)),
            url('https://res.cloudinary.com/dmglopmul/image/upload/v1538237713/projectPhotos/spa-business/flowerSpa.jpg');


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

    .jumboTxt {
        color: #E57373;
        text-shadow: 2px 2px 4px #000000;
        font-weight: 900;
    }

    #footer {
        /*background-color: red;*/
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        /*
        height: 50px;
        margin-bottom: 15px;*/
    }

    .parent {
        position: relative;
        left: 0;
        top: 0;
        /*width: 100vw;
        height: 100vh;*/
    }

    .foot-space {
        height: 100px;
    }

    .spacer {
        height: 200px;
    }

    .niceTxt {
        text-align: center;
        background-color: #3aa7d9;
        color: #e0eff2;
        font: italic bold 100px Georgia, Serif;
        text-shadow: -4px 3px 0 #3a50d9, -14px 7px 0 #0a0e27;
    }

    @keyframes bounceIn {
        0% {
            transform: scale(0.1);
            opacity: 0;
        }

        60% {
            transform: scale(1.2);
            opacity: (1);
        }

        100% {
            transform: (1);
        }
    }

    .v-enter-active {
        animation: bounceIn 2s;
    }

    .v-leave-active {
        animation: bounceIn 2s reverse;
    }

    /*
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 2.5s ease-out;
    }


    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }*/

    .bk {
        transition: all 0.1s ease-out;
    }

    .blur {
        filter: blur(2px);
        opacity: 0.4;
    }
</style>