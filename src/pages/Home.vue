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
      search: {
        alcolFilter: 'All'
      }
    };
  },
  methods: {
    fetchDrinks(url) {
      axios.get(url).then((response) => {
        this.drinks = response.data;
      })
    },
    filterByAlcol() {
      axios.get('http://127.0.0.1:8000/api/drinks/', { params: this.search })
        .then((response) => {
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

    <div class="container-form">
      <form @submit.prevent="filterByAlcol()" class="d-flex gap-3 my-3">
        <select class="form-select w-auto" aria-label="Default select example" v-model="search.alcolFilter">
          <option value="All" selected>Tutti</option>
          <option value="Alcoholic">Alcolico</option>
          <option value="Non alcoholic">Analcolico</option>
        </select>
        <button class="btn btn-filtra" type="submit"><span class="btn-text">Filtra</span></button>
      </form>
    </div>

    <div class="cards-container">
      <div class="drink-card position-relative text-white" v-for="drink in drinks">
        <DrinkCard :drink="drink" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/style/variables/_variables.scss';

h1 {
  text-align: center;
  font-size: 72px;
  margin-bottom: 1.5rem;
  background: -webkit-linear-gradient(48deg, $secondary-drew 0%, rgb(255, 136, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.container-form{
  display: flex;
  justify-content: end;
  width: 100%;
  margin-bottom: 3rem;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  column-gap: 1rem;
  justify-content: space-evenly;

}

.form-select:focus {
  border-color: $main-color;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(156 39 176 / 28%);
}

.btn-filtra {
  background-color: $main-color;
  border: 1px solid $secondary-drew;


  .btn-text {

    background: -webkit-linear-gradient($secondary-drew, #000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }

  &:hover {
    border: 1px solid $main-color !important;
    transform: scale(1.05);
    transition: ease-in-out .3s;
    box-shadow: 3px 5px 20px 5px rgba(0, 0, 0, 0.39);

    .btn-text {

      background: -webkit-linear-gradient(48deg, $secondary-drew, $main-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:active {
      color: transparent !important;
      border: 1px solid $secondary-drew !important;
      background-color: $main-color !important;
      transform: scale(1);
      transition: ease-in-out .2s;


      .btn-text {
        background: -webkit-linear-gradient($secondary-drew, #000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

  }
}
</style>