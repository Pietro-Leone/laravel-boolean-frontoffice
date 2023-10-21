<script>

export default {
}
</script>

<template>
  <div class="container body-padding-top">
    <div class="pt-4 pb-3 mb-5 rounded semitransparent-bg">
      <h1 class="text-center">Benvenuti nel nostro Cocktail Bar!</h1>
      <p class="pb-2 pt-2 text-center text-white">
        Se sei alla ricerca di un <span class="text-white fw-bold">drink gustoso</span> accompagnato da una
        <span class="text-white fw-bold">generosa quantità di stuzzichini</span>,
        <span class="text-white fw-bold">sei nel posto giusto!</span><br>
        Vieni a provare i nostri aperitivi che, dal 1933, soddisfano anche i più pretensiosi! Abbiamo prodotti scelti<br>
        e di qualità e che si adattano a tutte le fasce di età!
      </p>
    </div>
  </div>
  <!--Immagine-->
  <div class="pb-5">
    <img class="medium-img"
        src="https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/4dd33a5a-07e9-47a7-a811-4f2cf8178060/bartender-making-alcoholic-cocktail-summer-cocktail-bar.jpg"
        alt="Cocktail Bar">
  </div>
  <div class="container pb-5 ">
    <div class="pt-3 pg-5 mt-1 text-center rounded semitransparent-bg">
      <h2 class="mb-3">IL nostro Team!</h2>
      <p class="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo nisi id quod, ea maiores, molestiae
        architecto deleniti optio provident adipisci expedita, sunt dolorem obcaecati earum temporibus dolor? Doloribus,
        ullam?
      </p>
      <div class="row row-cols-1 row-cols-md-3 mb-5">
        <div class="col">
          <img class="rounded-img"
            src="https://us.123rf.com/450wm/fesenko/fesenko1703/fesenko170300005/74993243-bartender-en-camisa-blanca-est%C3%A1-haciendo-un-c%C3%B3ctel-en-la-barra-de-bar.jpg"
            alt="Team">
          <p class="text-white">Lorem Ipsum</p>
        </div>
        <div class="col">
          <img class="rounded-img"
            src="https://us.123rf.com/450wm/misterforeman/misterforeman2112/misterforeman211203828/179249648-il-barista-crea-un-cocktail-nella-birreria.jpg?ver=6"
            alt="Team">
          <p class="text-white">Lorem Ipsum</p>
        </div>
        <div class="col">
          <img class="rounded-img"
            src="https://us.123rf.com/450wm/misterforeman/misterforeman2011/misterforeman201101308/158957358-la-ragazza-del-barista-prepara-un-cocktail-nella-sala-dei-bar.jpg"
            alt="Team">
          <p class="text-white">Lorem Ipsum</p>
        </div>
      </div>
    </div>
    <div class="pb-4">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <h4>La nostra storia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo nisi id quod, ea maiores, molestiae
            architecto deleniti optio provident adipisci expedita, sunt dolorem obcaecati earum temporibus dolor?
            Doloribus,
            ullam?
          </p>
        </div>
        <div class="col">
          <h4>I nostri cocktail</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo nisi id quod, ea maiores, molestiae
            architecto deleniti optio provident adipisci expedita, sunt dolorem obcaecati earum temporibus dolor?
            Doloribus,
            ullam?
          </p>
        </div>
      </div>
    </div>
    <div class="row row-cols-2 row-cols-md-4 gy-3 pb-5">
      <div class="col">
        <img class="small-img"
          src="https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/4dd33a5a-07e9-47a7-a811-4f2cf8178060/bartender-making-alcoholic-cocktail-summer-cocktail-bar.jpg"
          alt="Cocktail Bar">
      </div>
      <div class="col">
        <img class="small-img"
          src="https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/4dd33a5a-07e9-47a7-a811-4f2cf8178060/bartender-making-alcoholic-cocktail-summer-cocktail-bar.jpg"
          alt="Cocktail Bar">
      </div>
      <div class="col">
        <img class="small-img"
          src="https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/4dd33a5a-07e9-47a7-a811-4f2cf8178060/bartender-making-alcoholic-cocktail-summer-cocktail-bar.jpg"
          alt="Cocktail Bar">
      </div>
      <div class="col">
        <img class="small-img"
          src="https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/4dd33a5a-07e9-47a7-a811-4f2cf8178060/bartender-making-alcoholic-cocktail-summer-cocktail-bar.jpg"
          alt="Cocktail Bar">
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
//Bisogna importare il file variabili se le si vuole usare
@import '/src/style/variables/_variables.scss';

h2 {
  color:$main-color;
}

.medium-img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}

.small-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  transition: all 0.2s;

  &:hover {
    filter: grayscale(var(--value, 100%));
  }
}

.rounded-img {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    filter: grayscale(var(--value, 100%));
  }
}

.semitransparent-bg{
  background: rgba(54, 54, 54, 0.093);
  background: linear-gradient(90deg, rgba(54,54,54, 0.5) 0%, rgba(36,36,36,0.5) 51%, rgba(54,54,54,0.5) 100%);
}



</style>