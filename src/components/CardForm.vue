<template>
    <div class="cardForm">
        <div class="grid">
            <form class="card-form">
                <div class="labels">
                    <label for="id">ID <input id="id" v-model="id"></label>
                    <label for="name">name <input id="name" v-model="name"></label>
                    <label for="image">Image <input id="image" v-model="imageUrl"></label>
                    <label for="fas">Font Awesome Symbol <input id="fas" v-model="fas"></label>
                    <label for="flavorText">Descriptive Text <input id="flavorText" v-model="flavorText"></label>
                    <label for="color">Color <input id="color" v-model="color"></label>
                </div>
                <button @click.prevent="saveClicked">Save</button>
            </form>
            <CardPreview :flavor-text="flavorText" :id="id" :image-url="imageUrl" :name="name" :fas="fas" :color="color"/>
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
                id: '0123456789XYZ',
                imageUrl: 'https://preview.ibb.co/fMkie9/card1.png',
                name: 'Pink Duck',
                fas: 'fas fa-cookie',
                flavorText: 'A very cool pink duck.',
                color: 'pink',
            }
        },
        methods: {
            saveClicked: function () {
                if(!this.name) {
                    alert('Please enter a card name.');
                } else if(!this.id) {
                    alert('Please enter a card ID.');
                } else{
                    this.$emit('save-card',
                        {
                            id: this.id,
                            name: this.name,
                            fas: this.fas,
                            flavorText: this.flavorText,
                            color: this.color,
                            imageUrl: this.imageUrl
                        });
                    this.id = "";
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
    .card-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
        padding: 0;
    }
    .grid {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }
    .labels {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 2rem;
        margin: 0;
    }
</style>