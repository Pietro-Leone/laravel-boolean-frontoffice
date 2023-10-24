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
      return JSON.parse(this.drink.ingredients).join(", ");
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
    <div class="drink-details">
      <h3>{{ drink.drink_name }}</h3>
      <div>
        <h6>Ingredienti:</h6>
        <span>{{ getIngredients() + "." }}</span>
      </div>
      <div>
        <h6>Categoria:</h6>
        <span>{{ drink.category }}</span>
      </div>

    </div>


    <!-- Thumb Card -->
    <div class="cover">
      <img class="thumb-card" :src="drink.thumbnail" alt="drink">
      <div class="description-cover py-3">
        <h5 class="text-center">{{ drink.drink_name }}</h5>
        <p>{{ drink.alcoholic === "Alcoholic" ? "Alcolico" : "Analcolico" }}</p>
        <small class="fw-bold mb-0">{{ drink.price }}€</small>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/style/variables/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,700;1,400&display=swap');

.book {
  text-align: end;
  position: relative;
  border-radius: 10px;
  width: 255px;
  min-height: 430px;
  height: 100%;
  background: rgb(106, 130, 152);
  background: linear-gradient(48deg, $secondary-giug 8%, $main-color 100%);
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

  .drink-details {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      background: -webkit-linear-gradient($secondary-drew, #000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h4,
    h6 {
      color: whitesmoke;
      margin: 1rem 0.5rem;
      font-size: larger;
      font-weight: bold;

    }

    span {
      font-size: 1.2rem;
      background: -webkit-linear-gradient($secondary-drew, #1d1d1d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  }

  small {
    font-size: larger;
  }



  .cover {

    top: 0;
    position: absolute;
    background-color: #4d5260;
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
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;

    border-top-right-radius: 25%;

    .thumb-card {
      border-top-left-radius: 4%;
      border-top-right-radius: 25%;
      width: 100%;
    }

    .description-cover {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      h5 {
        color: rgb(255, 141, 48);
        padding: 0 .5rem;
      }

      small,
      p {
        margin-bottom: .5rem;
        color: lightgray;
      }

    }

  }

  &:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-85deg);
  }
}



// .pers-position {
//   position: absolute;
//   right: 20px;
// }
</style>