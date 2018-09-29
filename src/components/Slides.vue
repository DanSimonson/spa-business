<template>
    <div id="slides">
        <!--<h1>slider</h1>-->
        {{image.url}}
        <!--<div class="slideImage">-->

    </div>
    </div>

</template>
<script>

    export default {
        name: 'Slides',
        props: ["image"],
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    #slides {}

    .slideImage {
        /*background-color: springgreen;
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("https://res.cloudinary.com/dmglopmul/image/upload/v1538207585/projectPhotos/spa-business/bowlsSpa.jpg")
    */
    }
</style>