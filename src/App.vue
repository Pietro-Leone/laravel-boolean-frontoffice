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
@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,700;1,400&display=swap');


main {
  font-family: 'Philosopher', sans-serif;
  h1, h4 {
    color: #ff8d30;

  }

  padding-top: 10rem;
  padding-bottom:2rem;
  flex-grow:1;
}
</style>
