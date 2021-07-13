<template>
    <div class="character-card">
        <div class="character-card__img">
            <img
                :src="`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`"
                alt="Character Image">
        </div>
        <h3 class="character-card__name">{{name}}</h3>
        <button
            @click="Favorited()"
            class="btn character-card__btn"
            :class="{
                'btn-primary': !isFavorite,
                'btn-danger': isFavorite
            }"
        >Favorite</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isFavorite: false
        }
    },
    props: ['name', 'id'],
    methods: {
        Favorited() {
            let data = JSON.parse(window.localStorage.getItem("favorited"));
            if (!data) {
                data = [];
            }
            this.isFavorite = !this.isFavorite

            if(this.isFavorite) {
                data.push({
                    name: this.name,
                    id: this.id
                })
                console.log('add')
            } else {
                let DeletePerson = data.findIndex((item) => item.name === this.name);
                data.splice(DeletePerson, 1);
            }
            localStorage.setItem("favorited", JSON.stringify(data));
        }
},
    mounted() {
        const FavoritePerson = JSON.parse(localStorage.getItem("favorited"));
        if (FavoritePerson) {
            this.isFavorite = FavoritePerson.find((person) => person.name === this.name);
        }
    },
};
</script>

<style lang="scss" scoped>
.character-card {
    &__img {
        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>
