<script>
export default {
  props: {
    drink: {
      type: Object,
      required: true,
    }
  },
  methods: {
    getIngredients() {
      return JSON.parse(this.drink.ingredients);
    }
  },
  mounted() {
    this.drink.ingredients = this.getIngredients();
  }
}
</script>

<template>
  
  <!-- Details Card -->
  <div class="book">
    <div class="drink-details w-100 h-100 p-3 position-absolute top-0">
      <h4>{{ drink.drink_name }}</h4>

      <h6>
        Ingredienti:
      </h6>
      <span class="fw-normal">
        <span v-for="(ingredient, i) in drink.ingredients">{{ drink.ingredients.length - 1 === i ? ingredient + "." :
          ingredient + ", " }}</span>
      </span>

      <h6>
        Categoria:
      </h6>
      <span class="fw-normal">{{ drink.category }}</span>

    </div>


    <!-- Thumb Card -->
    <div class="cover">
      <div>
        <div>
          <div class="w-100">
            <img class="w-100 h-100 pers-border" :src="drink.thumbnail" alt="">

            <h5 class="text-center my-2">{{ drink.drink_name }}</h5>
          </div>
        </div>

        <div class="p-2 position-relative">
          <small>{{ drink.alcoholic === "Alcoholic" ? "Alcolico" : "Analcolico" }}</small>
          <small class="fw-bold pers-position">{{ drink.price }}€</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

h4{
  color: #000;
}
h6{
  font-weight: bold;
}
// .drink-details {
//   display: none;
//   //background-color: rgba(0, 0, 0, 0.9);
// }

// .drink-card:hover .drink-details {
//   display: block;
// }



///////////////// PROVE CARD ////////////////


.book {
  position: relative;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: rgb(255, 141, 48);
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
}

.cover {
  top: 0;
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;


  border-top-right-radius: 25%;


  .pers-position {
    position: absolute;
    right: 10px;
  }

  .pers-border {
    border-top-left-radius: 4%;
    border-top-right-radius: 25%;
  }
}

.book:hover .cover {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: rotatey(-80deg);
  -ms-transform: rotatey(-80deg);
  transform: rotatey(-85deg);
}
</style>