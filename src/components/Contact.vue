<template>
    <div class='contact'>
        <navbar></navbar>
        <slider></slider>
        <!--<div class="spacer"></div>-->
        <div class='myBox'>
            <transition appear appear-name="custom-classes-transition" appear-active-class="animated flipInX">
                <div v-if="showBox" id='box'>
                    <p>Call Us at 09267633149, or come to our address at 123 Roxas Blvd. manila 4112</p>
                </div>
            </transition>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                showBox: true,
                show: true
            }
        }
    }
</script>
<style scoped>
    .contact {}

    #box {
        display: flex;
        text-align: center;
        font-size: 1.2em;
        background: linear-gradient(rgba(20, 20, 20, .5),
            rgba(20, 20, 20, .5));
        border: 5px solid #FF9100;
        padding: 50px;
        width: 250px;
        height: 250px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 150px auto;
        animation-delay: .2s;
        animation-duration: 15s;
        /*animation-iteration-count: infinite;*/
        color: #fff;
        vertical-align: center;
        border-radius: 16%;



    }
</style>