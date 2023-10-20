<script>
import DrinkCard from '../components/DrinkCard.vue';

export default {
    components: {
        DrinkCard
    }
    // data() {
    //     return {
    //     };
    // },
    // methods: {
    // },
    // mounted() {
    // }
}
</script>

<template>
    <div class="container body-padding-top">
        <h1>Home</h1>

        <div class="cards-container d-flex gap-3 flex-wrap">
            <div class="drink-card position-relative text-white">
                <DrinkCard />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.drink-card {
    background-color: black;
    width: calc((100% / 4) - .75rem);
    aspect-ratio: 1/1;
}
</style>