<script>

export default {
  data() {
    return {
    }
  },
}
</script>

<template>
  <footer class="text-white bg-dark py-5">
    <div class="container py-5">
      <div class="row row-cols-1 row-cols-sm-3">

        <div class="col-md-4">
          <h2 class="pb-2">Contatti</h2>
          <p><i class="fa-solid fa-location-dot"></i> <strong>Indirizzo:</strong> Via del Gusto, 123</p>
          <p><i class="fa-solid fa-city"></i> <strong>Città:</strong> Brindisi</p>
          <p><i class="fa-solid fa-phone"></i> <strong>Telefono:</strong> 0831 297 585</p>
          <p><i class="fa-solid fa-envelope"></i> <strong>Email:</strong> <a href="mailto:info@ristorantegusto.it"
              class="text-white">info@ristorantegusto.it</a></p>
        </div>
        <div class="col-md-4">
          <h2 class="pb-2">Orari di Apertura</h2>
          <p>Lunedì - Venerdì: 11:30 - 23:00</p>
          <p>Sabato - Domenica: 12:00 - 00:00</p>
        </div>
        <div class="col-md-4">
          <h2 class="pb-2">i nostri Social</h2>
          <div class="row social-row">
            <div class="col-4">
              <a href="#" class="github-links">
                <img src="/images/Fratello1.jpg" width="32" height="32" class="rounded-circle">
              </a>
            </div>
            <div class="col-4">
              <a href="#" class="github-links">
                <img src="/images/Fratello2.jpg" width="32" height="32" class="rounded-circle">
              </a>
            </div>
            <div class="col-4">
              <a href="#" class="github-links">
                <img src="/images/Genitore1.jpg" width="32" height="32" class="rounded-circle">
              </a>
            </div>
            <div class="col-4">
              <a href="#" class="github-links">
                <img src="/images/Genitore2.png" width="32" height="32" class="rounded-circle">
              </a>
            </div>
            <div class="col-4">
              <a href="#" class="github-links">
                <img src="/images/Sorella1.jpg" width="32" height="32" class="rounded-circle">
              </a>
            </div>
            <div class="col-4">
              <a href="#" class="github-links">
                <img src="/images/Sorella2.jpg" width="32" height="32" class="rounded-circle">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <p>&copy; 2023 Ristorante Gusto Italiano. Tutti i diritti riservati.</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  box-shadow: 5px 5px 10px 0px #212529;


  .footer-link {
    text-decoration: none;
    color: white;
    transition: transform 0.2s;

    &:hover {
      color: rgb(255, 141, 48);
      transform: scale(1.05);
    }

    &:active {
      color: rgb(255, 141, 48);
      font-weight: bold;
    }

  }

  .social-row{
    max-width: 200px;
  }

  .github-links {
    display: inline-block;
    padding: .5rem;
  }
}
</style>