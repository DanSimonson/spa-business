<template>
    <div>
        <transition name="fade" mode="out-in" tag="div">
            <div id="slider" :style="{backgroundImage: 'url(' + images[index].url + ')'}">
                <div id="content">
                    <div class="one"><i class="material-icons">
                            spa
                        </i>relax</div>
                    <div class="two"><i class="material-icons">
                            sentiment_very_satisfied
                        </i>play</div>
                    <div class="three"><i class="material-icons">
                            local_dining
                        </i>eat</div>
                    <div class="four"><i class="material-icons">
                            contact_mail
                        </i> book</div>
                    <!--<div class="five">5</div>
                                                        <div class="six">6</div>-->
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Slides from './Slides.vue'
    export default {
        name: 'Slider',
        components: {
            Slides
        },
        data() {
            return {
                images: [
                    {
                        id: 0,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1538207585/projectPhotos/spa-business/bowlsSpa.jpg'
                    },
                    {
                        id: 1,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1538237369/projectPhotos/spa-business/candlesSpa.jpg'
                    },
                    {
                        id: 2,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1538237713/projectPhotos/spa-business/flowerSpa.jpg'
                    },
                    {
                        id: 3,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1538237541/projectPhotos/spa-business/rocksSpa.jpg'
                    },
                    {
                        id: 4,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1538237481/projectPhotos/spa-business/bathtubSpa.jpg'
                    }
                ],
                index: 0

            }
        },
        created() {
            //set proxy so vue can see "this" object when using move() method
            let self = this;
            setInterval(() => {
                self.move();
            }, 6000)

        },
        computed: {

        },
        methods: {
            move() {
                let indexFlag = this.index;
                indexFlag++;
                if (indexFlag >= this.images.length) {
                    indexFlag = 0
                }
                this.index = indexFlag;
            }
        }
    }
</script>
<style scoped>
    #slider {
        display: flex;
        flex-direction: column-reverse;
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .fade-enter-active {
        animation-name: fadeEnter;
        animation-duration: 2s;
        animation-iteration-count: 1;
    }

    .fade-move {
        transition: all 1s;
    }

    .fade-leave-active {
        animation-name: fadeLeave;
        animation-duration: 2s;
        animation-iteration-count: 1;
        position: absolute;
    }

    @keyframes fadeEnter {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeLeave {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    #content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, minmax(100px, auto));
        grid-gap: 1px;
        /*max-width: 960px;
        margin: 0 auto;*/
        margin-top: 200px;
        opacity: .5;
        height: 75px;
        overflow: hidden;
        color: oldlace;
        text-align: center;
    }

    #content div {
        /*background: #3bbced;*/
        padding: 30px;
        margin-top: 1px;

    }

    #content div:nth-child(even) {
        /*background: #777;*/
        padding: 30px;
        margin-top: 1px;

    }

    .one {
        background: blue;
    }

    .two {
        background: indigo;
    }

    .three {
        background: green;
    }

    .four {
        background: red;
    }
</style>