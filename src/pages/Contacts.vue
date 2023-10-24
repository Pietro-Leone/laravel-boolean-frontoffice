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
        <h1 class="text-center">Contattaci con una mail!</h1>

        <div class="form-container rounded m-auto">
            <div class="form-bg rounded">
                <!--Error-->
                <div class="alert alert-danger" v-if="errors">
                    Qualcosa è andato storto! {{ errors }}
                </div>
                <p class="text-center text-white">
                    Hai in mente un nuovo drink, una nuova ricetta o vuoi semplicemente sgridare il mixologo<br>
                    perchè è incapace di fare il tuo cocktail preferito PROPRIO come dici tu?<br>
                    <span class="fw-bold">Scrivici!</span>
                </p>
                <form @submit.prevent="onFormSubmit" v-if="!success">
                    <!--Nome ed Email-->
                    <div>
                        <div class="mb-3">
                            <label class="fw-bold text-white">Nome</label>
                            <input type="text" class="form-control" v-model="formData.name" />
                        </div>
                        <div class="mb-3">
                            <label class="fw-bold text-white">Email</label>
                            <input type="text" class="form-control" v-model="formData.email" />
                        </div>
                    </div>
                    <!--Messaggio-->
                    <div class="mb-3">
                        <label class="fw-bold text-white">Messaggio</label>
                        <textarea class="form-control" rows="5" v-model="formData.message"></textarea>
                    </div>
                    <!--Bottone d'invio-->
                    <div class="text-center"><button type="submit" class="custom-btn text-white">Invia</button></div>
                </form>

                <!--Success-->
                <div class="alert alert-success" v-else>
                    Grazie per avermi contattato, ti risponderò il prima possibile!
                </div>
                <!--ritorna alla home-->
                <div class="text-center mt-3"><router-link v-if="success" class="custom-btn text-white"
                        :to="{ name: 'home' }">Torna alla home</router-link></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
//Bisogna importare il file variabili se le si vuole usare
@import '/src/style/variables/_variables.scss';

.custom-btn {
    color: #070606;
    background-color: $main-color;
    border: 1px solid $main-color;
    padding: 5px 10px;
    margin: 5px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 50px;
}

.form-container {
    width:900px;
    background-image: url(https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/4dd33a5a-07e9-47a7-a811-4f2cf8178060/bartender-making-alcoholic-cocktail-summer-cocktail-bar.jpg);
    background-position: center;
    background-size: cover;

    .form-bg {
        padding: 20px;
        background-color: rgba(68, 68, 68, 0.623);
    }

    .form-control {
        border: 1px solid #808080;


        &:focus {
            border-color: $main-color;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgb(156 39 176 / 28%);
        }
    }
}

.main-colour-txt {
    color: $main-color;
}</style>
