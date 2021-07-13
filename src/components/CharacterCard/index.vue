<template>
    <div class="character-card">
        <div class="character-card__img">
            <img
                :src="`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`"
                alt="Character Image">
        </div>
        <h3 class="character-card__name">{{name}}</h3>
        <span>{{id}}</span>
        <button class="btn character-card__btn">Favorite</button>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        id: Number,
    },
};
</script>

<style></style>
