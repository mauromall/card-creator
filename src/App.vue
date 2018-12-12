<template>
    <div id="app" class="container">
        <div v-show="!ok">
            <div class="button-header">
                <button @click="toSavedCards" class="saved-cards">Switch To Saved Cards</button>
            </div>
            <CardForm @save-card="saveCard"></CardForm>
        </div>
        <div v-show="ok">
            <div class="button-header">
                <button @click="toCardCreator" class="saved-cards">Switch To Card Creator</button>
            </div>

            <h1 class="card-save">Saved Cards</h1>

            <div class="saved-section">
                <div class="card-preview" v-for="card in inventory" :style="{backgroundColor: card.color}" :key="card.id">
                    <img class="image" :src="card.imageUrl" :alt="card.name">
                    <div class="under-image">
                        <div class="heading">
                            <i :class="card.fas" :style="{color: card.color}" class="fas"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {{card.id}}
                        </div>
                        <div class="name">
                            {{card.name}}
                        </div>
                        <div class="description">
                            {{card.flavorText}}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import CardForm from '@/components/CardForm';

    export default {
        name: 'app',
        data: function () {
                return {
                    ok: false,
                    inventory: [],
                    card: {
                        id: '',
                        imageUrl: '',
                        name: '',
                        fas: '',
                        flavorText: '',
                        color: '',
                    }
                }
            },
        components: {
            CardForm
        },
        methods: {
            saveCard: function (card) {
                this.inventory.push(card);
            },
            toCardCreator: function () {
                this.ok = false;
            },
            toSavedCards: function () {
                this.ok = true;
            }
        }
    }
</script>

<style>
    /* imports for fonts */
    @import url('https://fonts.googleapis.com/css?family=Modak');
    @import url('https://fonts.googleapis.com/css?family=Capriola');
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

    * {
        margin: 0;
        padding: 0;
    }

    /* styles for labels */
    label {
        font-family: 'Capriola', sans-serif;
        font-size: 1rem;
        text-shadow: .2rem .2rem snow;
        color: mediumpurple;
    }

    /* styles for input */
    input {
        border: .1rem solid lavenderblush;
        border-radius: .3rem;
        background-color: lavender;
    }

    /* styles for buttons */
    button {
        width: 10rem;
        border: none;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        text-align: center;
        color: white;
        background-color: pink;
        font-family: 'Capriola', sans-serif;
        font-size: 1.1rem;
    }

    .button-header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 3rem;
    }

    h1 {
        color: gray;
        font-family: 'Josefin Sans', sans-serif;
    }

    .card-save {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card-preview {
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    .saved-cards {
        width: 100vw;
        margin-bottom: 1rem;
        height: 3rem;
    }

    .image {
        width: 20rem;
        max-height: 50vh;
    }

    .fas {
        font-size: 2rem;
        text-shadow: .1rem .2rem slategray, 0 0 .9rem gray;
    }

    .under-image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .heading {
        font-family: 'Capriola', sans-serif;
        color: gray;
    }

    .name {
        font-family: 'Modak', cursive;
        font-size: 1.5rem;
        color: gray;
    }

    .description {
        font-family: 'Capriola', sans-serif;
        color: gray;
    }

    /*
    .image {
        height: 60vh;
        width: 30vw;
    }

    .fas {
        font-size: 3rem;
        text-shadow: .1rem .2rem slategray, 0 0 .9rem gray;
    }

    .under-image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 15vh;
    }

    .heading {
        font-family: 'Capriola', sans-serif;
        color: gray;
    }

    .name {
        font-family: 'Modak', cursive;
        font-size: 2rem;
        color: gray;
    }

    .description {
        font-family: 'Capriola', sans-serif;
        color: gray;
    }
    */

    .saved-section {
        display: grid;
        grid-gap: .5rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media screen and (min-width: 768px) {
        .saved-section {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
        }

        .container {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr;
            background-color: aliceblue;
            height: 100vh;
        }

        .button-header {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: .3rem;
            width: 100vw;
            height: auto;
        }

        .card-preview {
            background-color: aliceblue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            max-width: 30vw;
        }

        .image {
            height: 60vh;
            width: 30vw;
        }

        .fas {
            font-size: 3rem;
            text-shadow: .1rem .2rem slategray, 0 0 .9rem gray;
        }

        .under-image {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 8rem;
        }

        .heading {
            font-family: 'Capriola', sans-serif;
            color: gray;
        }

        .name {
            font-family: 'Modak', cursive;
            font-size: 2rem;
            color: gray;
        }

        .description {
            font-family: 'Capriola', sans-serif;
            color: gray;
        }

    }
</style>
