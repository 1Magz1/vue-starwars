<template>
  <div class="favorite">
        <h1>This is favorite page</h1>
      <button
          @click="clearFavorites"
          class="btn">Clear Favorites</button>
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

        justify-content: space-between;
        .character-card {
            flex-basis: 32%;
            margin-right: 20px;
            &:nth-child(3n) {
                margin-right: 0;
            }
        }
     }
}
</style>
