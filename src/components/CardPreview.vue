<template>
    <div class="preview">
        <h1>Preview</h1>
        <div class="card-preview" :style="{backgroundColor: color}">
            <img class="image" :src="imageUrl" :alt="name">
            <div class="under-image">
                <div class="heading">
                    <i :class="fas" :style="{color: color}" class="fas"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {{id}}
                </div>
                <div class="name">
                    {{name}}
                </div>
                <div class="description">
                    {{flavorText}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardPreview',
        props: {
            flavorText: {
                type: String
            },
            id: {
                type: String
            },
            imageUrl: {
                type: String
            },
            name: {
                type: String
            },
            fas: {
                type: String
            },
            color: {
                type: String
            },
        }
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Modak');
    @import url('https://fonts.googleapis.com/css?family=Capriola');
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

    h1 {
        color: gray;
        font-family: 'Josefin Sans', sans-serif;
        padding-bottom: .3rem;
    }

    .preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding-top: .5rem;
    }

    .card-preview {
        background-color: aliceblue;
        width: 20rem;
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

    @media screen and (min-width: 768px) {
        .card-preview {
            width: auto;
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