<script>

export default {
}
</script>

<template>
  <div class="container body-padding-top">
    <div class="pt-4 pb-3 mb-5  semitransparent-bg">
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
  <div class="container pb-2 ">
    <div class="pt-3 pb-3 mt-1 mb-5 text-center rounded semitransparent-bg">
      <h2 class="mb-3 primary-color">Drink Team</h2>
      <p class="text-white mb-5">
        Il "Drink Team" è un gruppo di amici che condivide una <span class="fw-bold">passione per le bevande e la
          convivialità.</span><br>
        Ogni membro porta un tocco unico al team, creando <span class="fw-bold">un'atmosfera vivace e
          accogliente.</span><br>
        <span class="fw-bold">Ecco una breve presentazione dei membri:</span>
      </p>

      <!-- THE DRINK TEAM -->
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5 mb-5">
        <div class="col">
          <a href="https://github.com/Pietro-Leone" target="_blank" class="text-decoration-none">
            <img class="rounded-img" src="/public/images/Fratello1.jpg" alt="Team">
            <div class="fw-bold primary-color">Pietro Åååååh</div>
            <small class="text-white">Cuoco del gruppo</small>
          </a>
        </div>
        <div class="col">
          <a href="https://github.com/GabrielePazi" target="_blank" class="text-decoration-none">
            <img class="rounded-img" src="/public/images/Fratello2.jpg" alt="Team">
            <div class="fw-bold primary-color">Gabriele Leone</div>
            <small class="text-white">Intenditore di birre artigianali</small>
          </a>
        </div>
        <div class="col">
          <a href="https://github.com/AndreaLinza" target="_blank" class="text-decoration-none">
            <img class="rounded-img" src="/public/images/Genitore1.jpg" alt="Team">
            <div class="fw-bold primary-color">Andrea Mazara</div>
            <small class="text-white">Il "gourmet" del gruppo</small>
          </a>
        </div>
        <div class="col">
          <a href="https://github.com/IvanoPisaniello" target="_blank" class="text-decoration-none">
            <img class="rounded-img" src="/public/images/Genitore2.png" alt="Team">
            <div class="fw-bold primary-color">Ivano Formattato</div>
            <small class="text-white">Responsabile musica e atmosfera</small>
          </a>
        </div>
        <div class="col">
          <a href="https://github.com/giuliacrr" target="_blank" class="text-decoration-none">
            <img class="rounded-img" src="/public/images/Sorella1.jpg" alt="Team">
            <div class="fw-bold primary-color">Giulia Non Ho Capito </div>
            <small class="text-white">L'appassionata di vini</small>
          </a>
        </div>
        <div class="col">
          <a href="https://github.com/ElyPoli" target="_blank" class="text-decoration-none">
            <img class="rounded-img" src="/public/images/Sorella2.jpg" alt="Team">
            <div class="fw-bold primary-color">Elisa di Rivombrosa</div>
            <small class="text-white">Creativa del gruppo</small>
          </a>
        </div>
      </div>
    </div>
    <div class="pb-4 pt-4 semitransparent-bg">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <h4 class="primary-color">La nostra storia</h4>
          <p class="text-white">
            In realtà, noi volevamo fare i programmatori... ma ci siam resi conto
            che non avevam la stoffa. Quindi...perchè non diventare un gruppo appassionato di cucina e bevande?
            Come se poi non ce ne fossero già abbastanza. Bhe che dire, questi siamo noi.
          </p>
        </div>
        <div class="col">
          <h4 class="primary-color">I nostri cocktail</h4>
          <p class="text-white">
            Dolci, salati, lisci, frizzanti, alcolici, analcolici... che dire, sicuramente non che la varietà manchi!
            I nostri cocktail sono unici e realizzati dal nostro gruppo con bevande selezionate e pregiate, anche
            provenienti
            dalle parti più remote del mondo!
          </p>
        </div>
      </div>
    </div>

    <!-- Carousel -->
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div data-bs-interval="3000" data-bs-pause="false" class="carousel-item active">
          <div class="d-flex">
            <img class="small-img"
              src="https://www.repstatic.it/content/localirep/img/rep-genova/2021/02/15/161024037-778ffc51-8191-44e3-a2c5-a4a0b88c42d5.jpg"
              alt="Cocktail Bar">
            <img class="small-img"
              src="https://magazine.fortevillageresort.com/wp-content/uploads/2019/06/cucina-gourmet-forte-village-resort-sardegna.jpg"
              alt="Cocktail Bar">
          </div>
        </div>
        <div data-bs-interval="3000" data-bs-pause="false" class="carousel-item">
          <div class="d-flex">
            <img class="small-img"
              src="https://www.instacart.com/company/wp-content/uploads/2023/01/birthday-cocktails-hero.jpg"
              alt="Cocktail Bar">
            <img class="small-img"
              src="https://kungfood.info/wp-content/uploads/2023/06/I-5-cocktail-piu-buoni-al-mondo.jpg">
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//Bisogna importare il file variabili se le si vuole usare
@import '/src/style/variables/_variables.scss';


.primary-color {
  color: $main-color;
}

.medium-img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}

.small-img {
  height: 350px;
  width: 50%;
  object-fit: cover;
  transition: all 0.2s;
  padding: 0 .75rem;

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

.semitransparent-bg {
  background: rgba(54, 54, 54, 0.093);
  background: linear-gradient(90deg, rgba(54, 54, 54, 0) 0%, rgba(36, 36, 36, 0.5) 51%, rgba(54, 54, 54, 0) 100%);
}
</style>