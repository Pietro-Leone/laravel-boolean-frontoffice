<script>
export default {

}
</script>

<template>
  <div class="w-100">
    <img class="w-100 h-100" src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" alt="">

    <h6 class="text-center my-2">Nome Drink</h6>
  </div>

  <div class="drink-details w-100 h-100 p-3 position-absolute top-0 bg-black">
    <h3>Nome drink</h3>

    <h5>
      Alcolico:
      <span class="fw-normal">Si/No</span>
    </h5>

    <h5>
      Ingredienti:
      <span class="fw-normal">Vodka, Lime, ecc.</span>
    </h5>

    <h5>
      Categoria:
      <span class="fw-normal">Soft Drink/ Liquore</span>
    </h5>
    <h5>
      Prezzo:
      <span class="fw-normal">00.00€</span>
    </h5>

  </div>
</template>

<style lang="scss" scoped>
.drink-details {
  display: none;
}

.drink-card:hover .drink-details {
  display: block;
}
</style>