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
      alcolFilter: 'Tutti',
    };
  },
  methods: {
    fetchDrinks(url) {
      axios.get(url).then((response) => {
        this.drinks = response.data;
        console.log(this.drinks);
      })
    },
    filterByAlcol() {
      axios.get('http://127.0.0.1:8000/api/drinks/', { params: this.search })
        .then((response) => {
          if (this.alcolFilter == 'Tutti') {
            this.drinks = response.data;
          } else if (this.alcolFilter == 'Alcolico') {
            this.drinks = response.data.filter(drink => drink.alcoholic === 'Alcoholic');
          } else if (this.alcolFilter == 'Analcolico') {
            this.drinks = response.data.filter(drink => drink.alcoholic === 'Non alcoholic');
          }

          console.log(this.drinks);
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

    <form @submit.prevent="filterByAlcol()" class="d-flex gap-3 my-3">
      <select class="form-select w-auto" aria-label="Default select example" v-model="alcolFilter">
        <option value="Tutti" selected>Tutti</option>
        <option value="Alcolico">Alcolico</option>
        <option value="Analcolico">Analcolico</option>
      </select>
      <button class="btn btn-primary" type="submit">Filtra</button>
    </form>

    <div class="cards-container d-flex gap-3 flex-wrap">
      <div class="drink-card position-relative text-white" v-for="drink in drinks">
        <DrinkCard :drink="drink" />
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