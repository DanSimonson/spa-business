<template>
    <div id="promo-list" class="blue lighten-4">
        <h2>General Member Promos</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{ product.name }}</span>
                <span class="price">P{{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            /*products() {
                return this.$store.state.products
            },*/
            saleProducts() {
                return this.$store.getters.saleProducts
            }
        }
    }
</script>

<style scoped>
    #promo-list {
        color: darkolivegreen;
        background: #BBDEFB;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    #promo-list ul {
        padding: 0;
    }

    #promo-list li {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
    }

    .price {
        font-weight: bold;
        color: #E8800C;
    }
</style>