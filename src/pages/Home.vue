<script>
import axios from "axios";
import DrinkCard from '../components/DrinkCard.vue';

export default {
  components: {
    DrinkCard
  },
  data() {
    return {
      drinks: [],
    };
  },
  methods: {
    fetchDrinks(url){
      axios.get(url).then((response) => {
        this.drinks = response.data;
    })
    }
  },
  mounted() {
    this.fetchDrinks('http://127.0.0.1:8000/api/drinks/');
  }
}
</script>

<template>
  <div class="container body-padding-top">
    <h1>Home</h1>

    <div class="cards-container d-flex gap-3 flex-wrap">
      <div class="drink-card position-relative text-white" v-for="drink in drinks">
        <DrinkCard :drink="drink"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drink-card {
  background-color: black;
  width: calc((100% / 4) - .75rem);
  aspect-ratio: 1/1;
}
</style>