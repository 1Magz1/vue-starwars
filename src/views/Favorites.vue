<template>
  <div class="favorite wrap">
      <button
          @click="clearFavorites"
          class="btn favorite__btn">Clear Favorites</button>
      <div class="favorite__content">
          <CharacterCard
              v-for="person in favorites"
              :key="person.id"
              :name="person.name"
              :id="person.id"
          />
      </div>

  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'

export default {
    name: "Home",
    data() {
        return {
            favorites: JSON.parse(localStorage.getItem("favorited")),
        }
    },
    components: {
        CharacterCard
    },
    methods: {
        clearFavorites() {
            window.localStorage.clear();
            this.favorites = []
        },
    },
};
</script>

<style lang="scss" scoped>
.favorite {
    &__content {
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;

        justify-content: space-between;
        .character-card {
            flex-basis: 32%;
            margin-right: 20px;
            &:nth-child(3n) {
                margin-right: 0;
            }
        }
     }
    &__btn {
        display: flex;
        margin: 25px auto 0 auto;
        padding: 5px 23px;
        background: #000;
        border: 2px solid #000;
        transition: background-color .3s;
        color: #fff;
        &:hover {
            background: #FFEE58;
            border-color: #000;
            color: #000;

        }
    }
}
</style>
