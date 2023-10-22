<script>
import { router } from '../router';

export default {
}

</script>

<template>
    <nav class="navbar navbar-expand navbar-dark fixed-top bg-transparent shadow" aria-label="Second navbar example">
        <div class="container" style="height: 60px;">
            <a class="navbar-brand" href="#">Drinks</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02"
                aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav me-auto gap-3">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contatti' }" class="nav-link">Contatti</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'chi-siamo' }" class="nav-link">Chi Siamo</router-link>
                    </li>
                </ul>
                <form role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
    </nav>
</template>

<style>
.nav-link {
    text-decoration: none;
    color: white;
    transition: transform 0.2s;
}


.nav-link:hover {
    transform: scale(1.05);
}
</style>


