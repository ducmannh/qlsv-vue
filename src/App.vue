<template>
  <HeaderHome/>
  <!-- <ModalInput/> -->
  <router-view></router-view>
</template>

<script>
import './style.css'
import HeaderHome from './components/HeaderHome.vue';
// import ModalInput from './components/ModalInput.vue';
export default {
  name: 'App',
  components: {
    HeaderHome,
    // ModalInput,
  },
  data() {
    return {
      students: {

      }
    }
  },
}

</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
