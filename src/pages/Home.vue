<script>

import TheHeader from "../components/TheHeader.vue"
export default {

    components: {

        TheHeader,
    },

    data() {
        return {


        };
    },

    methods: {


    },

    mounted() {


    }


}
</script>

<template>
    <body>


        <header>
            <TheHeader />
        </header>
        <main>

            <router-view></router-view>
        </main>
    </body>
</template>

<style scoped lang="scss"></style>
