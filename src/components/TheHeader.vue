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
        <div class="container" style="min-height: 80px;">
            <a class="navbar-brand" href="#">
                <img src="/logodrink.svg" alt="Logo" style="width: 80px;">
            </a>
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
@import '/src/style/variables/_variables.scss';

.navbar {
    background-color: rgb(77, 82, 96);
}

.nav-link {
    text-decoration: none;
    color: white;
    transition: transform 0.2s;

    &:hover {
        color: rgb(255, 141, 48);
        transform: scale(1.05);
    }
}

.form-control:focus {
    border-color: $main-color;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(156 39 176 / 28%);
}


.navbar-nav .nav-link.active,
.navbar-nav .nav-link.show {
    // color: var(--bs-navbar-active-color);
    color: rgb(255, 141, 48);
    font-weight: bold;
}
</style>


