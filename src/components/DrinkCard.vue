<script>
export default {
  props: {
    drink: {
      type: Object,
      required: true,
    }
  },
methods:{
  getIngredients(){
    return JSON.parse(this.drink.ingredients);
  }
},
mounted(){
  this.drink.ingredients = this.getIngredients();
  console.log(this.drink.ingredients);
}
}
</script>

<template>
  <div class="w-100">
    <img class="w-100 h-100" :src="drink.thumbnail" alt="">

    <h6 class="text-center my-2">{{ drink.drink_name }}</h6>
  </div>

  <div class="drink-details w-100 h-100 p-3 position-absolute top-0">
    <h3>{{ drink.drink_name }}</h3>

    <h5>
      <span class="fw-normal">{{ drink.alcoholic === "Alcoholic" ? "Alcolico" : "Analcolico" }}</span>
    </h5>

    <h5>
      Ingredienti:
      <span class="fw-normal">
        <span v-for="(ingredient, i) in drink.ingredients">{{ drink.ingredients.length -1 === i ? ingredient + "." : ingredient + ", " }}</span>
      </span>
    </h5>

    <h5>
      Categoria:
      <span class="fw-normal">{{ drink.category}}</span>
    </h5>
    <h5>
      Prezzo:
      <span class="fw-normal">{{drink.price}}€</span>
    </h5>

  </div>
</template>

<style lang="scss" scoped>
.drink-details {
  display: none;
  background-color: rgba(0, 0, 0, 0.9);
}

.drink-card:hover .drink-details {
  display: block;
}
</style>