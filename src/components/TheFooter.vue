<script>

export default {
    data() {
        return {
            footerLinks: [
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
    <footer class="text-white bg-dark">
        <div class="container p-3">
            <div class="row row-cols-1 row-cols-sm-3">
                <div class="col" v-for="link in footerLinks">
                    <ul class="navbar-nav me-auto align-items-center">
                        <li class="nav-item footer-link">
                            <router-link class="nav-link p-1" :class="{ 'active': $route.name === link.route }"
                                :to="{ name: link.route }">{{ link.title }}</router-link>
                        </li>
                    </ul>
                </div>



                <!-- <div class="col">
                    <ul class="navbar-nav me-auto align-items-center">
                        <li class="nav-item footer-link" v-for="link in store.menuLinks">
                            <router-link class="nav-link p-1" :class="{ 'active': $route.name === link.route }"
                                :to="{ name: link.route }">{{ link.title }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <p>Contattaci</p>
                    <ul class="navbar-nav me-auto align-items-center">
                        <li class="nav-item">
                            drink@email.com
                        </li>
                        <li class="nav-item">
                            348 2505200
                        </li>
                        <li class="nav-item">
                            drink@email.com
                        </li>
                    </ul>
                </div> -->





                <!-- <div class="col">
                    <h5>Contattaci:</h5>
                    <ul>
                        <li>999999999</li>
                        <li>348 2505200</li>
                        <li>1515121321</li>
                    </ul>
                </div>
                <div class="col">
                    <h5>API Utilizzata:</h5>
                    <a href="#"></a>
                </div>
                <div class="col">
                    <h5>Chi Siamo</h5>


                </div>
                <div class="col">

                </div> -->
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    box-shadow: 5px 5px 10px 0px #212529;
}

.footer-link {
    text-decoration: none;
    color: white;
    transition: transform 0.2s;

    &:hover {
        color: #FE652F;
        transform: scale(1.05);
    }
}

.active {
    color: #FE652F;
    font-weight: bold;
}
</style>