<script>

export default {
    data() {
        return {
            navLinks: [
                {
                    title: "Home",
                    route: "home",
                },
                {
                    title: "Contatti",
                    route: "contatti",
                },
                {
                    title: "Chi Siamo",
                    route: "chi-siamo",
                }
            ],
        }
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top shadow" aria-label="Second navbar example">
        <div class="container" style="min-height: 60px;">
            <a class="navbar-brand" href="#">Drinks</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02"
                aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav me-auto mb-2 mb-sm-0 align-items-center">
                    <li class="nav-item" v-for="link in navLinks">
                        <router-link class="nav-link" :class="{ 'active': $route.name === link.route }"
                            :to="{ name: link.route }">{{ link.title }}</router-link>
                    </li>
                </ul>
                <form role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav-link {
    text-decoration: none;
    color: white;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
}

.navbar {
    background-color: #4d5260;
}

.navbar-nav .nav-link.active,
.navbar-nav .nav-link.show {
    color: var(--bs-navbar-active-color);
    font-weight: bold;
}
</style>


