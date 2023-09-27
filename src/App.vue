<template>
  <div id="app">
    <headerComponemt></headerComponemt>
    <transition name="animate" mode="out-in">
      <router-view/>
    </transition> 
    <footerComponemt></footerComponemt> 
  </div>
</template>
<script>
import headerComponemt from '@/components/header-component.vue';
import footerComponemt from '@/components/footer-component.vue';
export default {
  components:{
    headerComponemt,footerComponemt
  }
}



</script>
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.animate-enter,.animate-leave-to{
  opacity: 0;
}

.animate-enter-active,.animate-leave-active{
  transition: opacity 1.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
