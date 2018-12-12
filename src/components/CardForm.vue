<template>
    <div class="cardForm">
        <div class="grid">
            <form class="card-form">
                <div class="labels">
                    <label for="userCardId">Card ID <input id="userCardId" v-model="userCardId" required></label>
                    <label for="name">Card Name <input id="name" v-model="name" required></label>
                    <label for="image">Image URL <input id="image" v-model="imageUrl"></label>
                    <label for="fas">Font Awesome Symbol <input id="fas" v-model="fas"></label>
                    <label for="flavorText">Descriptive Text <input id="flavorText" v-model="flavorText"></label>
                    <label for="color">Card Color <input id="color" v-model="color"></label>
                </div>
                <button @click.prevent="saveClicked">Save</button>
            </form>
            <CardPreview :flavor-text="flavorText" :userCardId="userCardId" :image-url="imageUrl" :name="name" :fas="fas"
                         :color="color"/>
        </div>
    </div>
</template>

<script>
    import CardPreview from "./CardPreview";

    export default {
        name: "CardForm",
        components: {CardPreview},
        data: function () {
            return {
                userCardId: '0123456789XYZ',
                imageUrl: 'https://preview.ibb.co/fMkie9/card1.png',
                name: 'Pink Duck',
                fas: 'fas fa-cookie',
                flavorText: 'A very cool pink duck.',
                color: 'pink',
            }
        },
        methods: {
            saveClicked: function () {
                if (!this.name) {
                    alert('Please enter a card name.');
                } else if (!this.userCardId) {
                    alert('Please enter a card ID.');
                } else {
                    this.$emit('save-card',
                        {
                            userCardId: this.userCardId,
                            name: this.name,
                            fas: this.fas,
                            flavorText: this.flavorText,
                            color: this.color,
                            imageUrl: this.imageUrl,
                        });
                    /**
                     this.inventory.push({
                        id: this.id,
                        name: this.name,
                        fas: this.fas,
                        flavorText: this.flavorText,
                        color: this.color,
                        imageUrl: this.imageUrl
                    });
                     */
                    this.userCardId = "";
                    this.name = "";
                    this.imageUrl = "";
                    this.fas = "";
                    this.flavorText = "";
                    this.color = "";
                }
            }
        }
    }
</script>

<style>

    .grid {
        height: 93vh;
        display: grid;
        grid-template-rows: .4fr 1fr;
        grid-template-columns: 1fr;
        background-color: aliceblue;
    }

    .labels {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #fas {
        max-width: 6rem;
    }

    .card-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: .5rem;
        background-color: aliceblue;
    }

    @media screen and (min-width: 768px) {
        .grid {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            height: 90vh;
        }

        .card-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 1rem;
            padding: 0;
        }

        .labels {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: 2rem;
            margin: 0;
        }
    }

    input:required:invalid {
        background-color: crimson;
    }
</style>