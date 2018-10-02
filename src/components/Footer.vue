<template>
    <footer>
        <p>{{ contact }}</p>
        <p>Site built with
            <i class="fa fa-heart" aria-hidden="true"></i>
            <span>
                <a href="https://mariposaweb.net/">@mariposaweb.net</a>
            </span>
        </p>
    </footer>
</template>
<script>
    export default {
        data() {
            return {
                contact: 'Contact: 09345677845 Address: 123 roxas blvd., Manila'
            }
        }
    }
</script>
<style scoped>
    .fa {
        color: red;
    }

    a {
        color: white;
    }

    a:hover {
        cursor: pointer;
    }

    footer {
        background: #222;
        padding: 6px;
    }

    p {
        color: #BDBDBD;
        text-align: center;
    }
</style>