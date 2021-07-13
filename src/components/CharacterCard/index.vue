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
        >
            <img
                :class="{active: !isFavorite}"
                class="character-card__icon"
                src="@/assets/svg/heart-black.svg" alt="Favorite person">
            <img
                :class="{active: isFavorite}"
                class="character-card__icon"
                src="@/assets/svg/heart-red.svg" alt="Favorite person">
            </button>
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
    border: 2px solid #000;
    border-radius: 15px;
    padding: 10px;
    &__name {
        font-size: 22px;
        margin-bottom: 5px;
    }
    &__btn {
        display: flex;
        margin: 0 auto;
        &:hover {
            box-shadow: 0 0 0 0.2rem #000;
        }
        &:focus {
            box-shadow: none;
        }
    }
    &__img {
        margin-bottom: 5px;
        img {
            width: 100%;
            height: auto;
        }
    }
    &__icon {
        width: 25px;
        display: none;
        &.active {
            display: block;
        }
    }
}
</style>
