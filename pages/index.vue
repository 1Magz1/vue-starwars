<template>
  <div class="home wrap">
    <form class="home__form">
      <div class="form-group">
        <input
          id="search"
          type="text"
          class="form-control home__form-input"
          aria-describedby="search"
          placeholder="Enter character name"
          autocomplete="off"
          :value="characterName"
          @input="search"
        >
      </div>
    </form>
    <div
      v-if="characters.length"
      class="home__wrap"
    >
      <nav
        v-if="!characterName.length"
        class="home__nav"
        aria-label="page navigation"
      >
        <ul class="pagination home__pagination">
          <li
            :class="{'disabled': currentPage === 1}"
            class="page-item home__pagination-item"
          >
            <a
              class="page-link home__pagination-link"
              href="#"
              @click="decrement(), loadPage()"
            >Previous</a>
          </li>
          <li
            v-for="page in MaxPage"
            :key="page"
            :class="{active: currentPage === page}"
            class="page-item home__pagination-item"
            @click="setCurrentPage(page), loadPage()"
          >
            <a
              class="page-link home__pagination-link"
              href="#"
            >{{ page }}</a>
          </li>
          <li
            :class="{'disabled': currentPage === MaxPage}"
            class="page-item home__pagination-item"
          >
            <a
              class="page-link home__pagination-link"
              href="#"
              @click="increment(), loadPage()"
            >Next</a>
          </li>
        </ul>
      </nav>
      <div class="home__content">
        <CharacterCard
          v-for="person in characters"
          :id="+person.url.split('/')[5]"
          :key="person.name"
          :name="person.name"
          :local="update"
        />
      </div>
    </div>
    <div
      v-else
      class="loader"
    >
      <img
        src="@/assets/img/star-wars.jpg"
        alt="Loader"
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CharacterCard from '~/components/CharacterCard';

export default {
  components: {
    CharacterCard,
  },

  computed: {
    ...mapGetters({
      characters: 'home/getCharacters',
      count: 'home/getCount',
      currentPage: 'home/getCurrentPage',
      characterName: 'home/getCharacterName',
    }),
    MaxPage() {
      return Math.ceil(this.count / 10);
    },
  },
  async mounted() {
    await this.$store.dispatch('home/fetchCharacters', this.currentPage);
    await this.$store.dispatch('home/fetchCount');
  },
  methods: {
    async loadPage() {
      await this.$store.dispatch('home/fetchCharacters', this.currentPage);
    },
    increment() {
      this.$store.commit('home/incrementCurrentPage');
    },
    decrement() {
      this.$store.commit('home/decrementCurrentPage');
    },
    setCurrentPage(page) {
      this.$store.commit('home/setCurrentPage', page);
    },
    async search(e) {
      this.$store.commit('home/setCharacterName', e.target.value);
      await this.$store.dispatch('home/fetchCharacter', this.characterName);
    },
    update() {
      JSON.parse(localStorage.getItem('favorited'));
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .character-card {
      flex-basis: 17.67%;
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
  &__nav {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  &__pagination-link {
    border-color: #000;
    color: #000;
    &:hover {
      color: #FFEE58;
      border-color: #FFEE58;
      background-color: #000;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &__pagination-item {
    &.active {
      background: #000;
      a {
        color: #FFEE58;
        background-color: #000;
        border-color: #000;
      }
    }
  }
  &__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .form-group {
      flex-basis: 100%;
    }
  }
  &__form-input {
    border-radius: 0;
    border-color: #000;
    &:focus {
      border-color: #000;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(255,238,88, 0.25);
    }
  }
}
</style>
