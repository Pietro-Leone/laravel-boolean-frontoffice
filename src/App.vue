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

main{
  padding: 8rem 0;
}


</style>
