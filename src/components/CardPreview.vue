<template>
    <div id="preview">
        {{id}}{{name}}
        {{flavorText}}
        <img :src="imageUrl" :alt="name">
    </div>
</template>
<script>
    export default {
        name: 'CardPreview',
        props: {
            flavorText: {},
            id: {},
            imageUrl: {},
            name: {}
        }
    }
</script>
