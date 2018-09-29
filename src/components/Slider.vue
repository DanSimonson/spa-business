<template>
    <div id="slider" :style="{backgroundImage: 'url(' + images[index].url + ')'}">
        <!--<h1>slider</h1>
        <slides :image="images[1]" />
        <div class="slideImage" :style="{'background-image': 'url(' + require('../assets/bowlsSpa.jpg') + ')'}">

        </div>-->

        <!--<strong> {{images[2].url}}</strong>-->

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
            setImage() {
                //return { backgroundImage: "url(" + this.images(this.index).url + ")" };
            }
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
    /*setImage {
        /background-image: url("../assets/flowerSpa.jpg");
    }*/

    #slider {
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /*background-image: url("../assets/flowerSpa.jpg");
        background-image: url("../assets/bowlsSpa.jpg");
        url("https://res.cloudinary.com/dmglopmul/image/upload/v1538207585/projectPhotos/spa-business/bowlsSpa.jpg")*/
    }
</style>