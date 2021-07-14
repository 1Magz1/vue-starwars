<template>
  <div class="favorite wrap">
      <div
          v-if="favorites?.length"
          class="favorite__wrap">
          <button
              @click="clearFavorites"
              class="btn favorite__btn">Clear Favorites</button>
          <div class="favorite__content">
              <CharacterCard
                  v-for="person in favorites"
                  :key="person.name"
                  :name="person.name"
                  :id="person.id"
                  :local="update"
              />
          </div>
      </div>
      <h1
          v-else
          class="favorite__title"
      >Add your favorite character</h1>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'

export default {
    name: "Favorites",
    data() {
        return {
            favorites: [],
        }
    },
    mounted() {
        const data = JSON.parse(localStorage.getItem("favorited"))
        if(data) {
            data.forEach(el => this.favorites.push(el))
        } else {
            this.favorites =[]
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
        update() {
            this.favorites = JSON.parse(localStorage.getItem("favorited"));
        }
    },
};
</script>

<style lang="scss" scoped>
.favorite {
    &__content {
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;

        .character-card {
            flex-basis: calc(25% - 15px);
            margin-right: 20px;
            margin-bottom: 20px;
            &:nth-child(4n) {
                margin-right: 0;
            }
        }
        .character-card__message {
            font-size: 35px;
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
    &__title {
        display: flex;
        justify-content: center;
        margin-top: 25px;
    }
}
</style>
