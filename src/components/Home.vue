<template>
  <div>
    <navbar></navbar>
    <h1>{{ home }}</h1>

  </div>

</template>

<script>
  import Navbar from '@/components/Navbar';
  export default {
    name: 'Home',
    components: {
      Navbar,
    },
    data() {
      return {
        home: 'Home Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>