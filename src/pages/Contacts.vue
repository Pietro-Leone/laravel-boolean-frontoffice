<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: "",
            },
            errors: null,
            success: null,

        };
    },
    methods: {
        onFormSubmit() {
            axios.post("http://localhost:8000/api/contacts", this.formData)
                .then(resp => {
                    this.success = true;
                    this.errors = null;
                })
                .catch(e => {
                    this.errors = e.message;

                })
        },
    },
};
</script>

<template>
    <div class="container">
        <h1>Contattaci con una mail!</h1>

        <div class="alert alert-danger" v-if="errors">
            Qualcosa è andato storto! {{ errors }}
        </div>

        <form @submit.prevent="onFormSubmit" v-if="!success">
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

        <div class="alert alert-success" v-else>
            Grazie per avermi contattato, ti risponderò il prima possibile!
        </div>

        <router-link v-if="success" class="custom-btn" :to="{ name: 'home' }">Torna Indietro</router-link>
    </div>
</template>

<style scoped lang="scss">
//Bisogna importare il file variabili se le si vuole usare
@import '/src/style/variables/_variables.scss';

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
