<template>
    <div>
        <navbar></navbar>
        <v-container>
            <v-layout row wrap class="mt-2">
                <v-flex xs12>
                    <!--<div class='spacer'></div>-->
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
                                    </v-btn>-->
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-jumbotron>

                    <!--<div class='parent'>
                        <div class='niceTxt' @click='show = !show' v-bind:class="[show? blurClass : '', backClass]">
                            <h1>{{title}}</h1>
                        </div>
                    </div>-->

                    <transition>
                        <div class='niceTxt' v-if="show">
                            <h2>{{msg}}</h2>
                        </div>
                    </transition>
                    <div class='foot-space'></div>
                    <div id='footer'>
                        <app-footer></app-footer>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>


</template>
<script>
    export default {
        data() {
            return {
                title: 'Claim your promo deal!',
                msg: 'As a member you get one free massage every month. Come in and claim your massage.',
                show: false,
                backClass: 'bk',
                blurClass: 'blur'
            }
        }
    }
</script>
<style>
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