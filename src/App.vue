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
  <body>


    <TheHeader></TheHeader>
    <main>
      <router-view></router-view>
    </main>

    <TheFooter></TheFooter>
  </body>
</template>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #4e5362, #444444, #555555);
  background-repeat: no-repeat;
}
</style>
