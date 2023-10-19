<script>


export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: "",
            },


        };
    },
    methods: {

    },
};
</script>

<template>
    <div class="container">
        <h1>Inviami una Mail!</h1>



        <form @submit.prevent="onFormSubmit">
            <div class="mb-3">
                <label>Nome</label>
                <input type="text" class="form-control" v-model="formData.name" />
            </div>

            <div class="mb-3">
                <label>Email</label>
                <input type="text" class="form-control" v-model="formData.email" />
            </div>

            <div class="mb-3">
                <label>Messaggio</label>
                <textarea class="form-control" v-model="formData.message"></textarea>
            </div>

            <button type="submit" class="custom-btn">Invia</button>
        </form>

        <router-link class="custom-btn" :to="{ name: 'Home' }">Torna Indietro</router-link>
    </div>
</template>
  


  

  
<style scoped lang="scss">
.custom-btn {
    color: #070606;

    background-color: #f3f3f3;

    border: 1px solid #ccc;

    padding: 5px 10px;

    margin: 5px;

    text-decoration: none;

    cursor: pointer;
    border-radius: 50px;

}
</style>
  