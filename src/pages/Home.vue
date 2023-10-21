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
    fetchDrinks(url) {
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
  <div class="container">
    <h1>I Nostri Drink</h1>

    <div class="cards-container">
      <div class="drink-card position-relative text-white" v-for="drink in drinks">
        <DrinkCard :drink="drink" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

h1{
  text-align: center;
  font-size: 72px;
  margin-bottom: 1.5rem;
  //background: -webkit-linear-gradient(rgba(106, 130, 152, 1) 0%,  rgb(230, 138, 18) 100%);
  background: -webkit-linear-gradient(rgb(156 39 176) 0%, rgb(230, 138, 18) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  
  //background-color: black;
  //width: calc((100% / 4) - .75rem);
  //aspect-ratio: 1/1;

}
</style>