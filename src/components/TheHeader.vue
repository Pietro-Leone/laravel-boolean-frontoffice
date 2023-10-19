<script>
import { router } from '../router';
</script>

<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Always expand</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02"
                aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav me-auto gap-3">
                    <li class="nav-item">
                        <a href="#">Home</a>
                        <!-- <router-link :to="{name: '/'}">Home</router-link> -->
                    </li>
                    <li class="nav-item">
                        <a href="#">Contatti</a>
                        <!-- <router-link :to="{name: '/contatti'}">Contatti</router-link> -->
                    </li>
                    <li class="nav-item">
                        <a href="#">Chi Siamo</a>
                        <!-- <router-link :to="{name: '/chi_siamo'}">Chi Siamo</router-link> -->
                    </li>
                </ul>
                <form role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
    </nav>
</template>
