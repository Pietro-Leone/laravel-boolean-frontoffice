<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<template>
  


    <TheHeader></TheHeader>
    <main>
      <router-view></router-view>
    </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss">
main {
  h1, h4 {
    color: #ff8d30;

  }

  padding-top: 8rem;
  padding-bottom:2rem;
  flex-grow:1;
}
</style>
