<template>
  <div class="character-card">
    <div class="character-card__img">
      <img
        :src="`https://starwars-visualguide.com/assets/img/characters/${ id }.jpg`"
        alt="Character Image"
      >
    </div>
    <h3 class="character-card__name">
      {{ name }}
    </h3>
    <button
      class="btn character-card__btn"
      @click="favorited(), local()"
    >
      <img
        :class="{active: !isFavorite}"
        class="character-card__icon"
        src="@/assets/svg/heart-black.svg"
        alt="Favorite person"
      >
      <img
        :class="{active: isFavorite}"
        class="character-card__icon"
        src="@/assets/svg/heart-red.svg"
        alt="Favorite person"
      >
    </button>
    <div
      :class="{active: isFavorite}"
      class="character-card__message"
    >
      <span class="character-card__message-text">{{ name }}</span>
      <span class="character-card__message-text">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Luke',
    },
    id: {
      type: Number,
      default: 1,
    },
    local: Function,
  },
  data() {
    return {
      isFavorite: false,
      message: 'add to favorite character',
    };
  },
  mounted() {
    const FavoritePerson = JSON.parse(localStorage.getItem('favorited'));
    if (FavoritePerson) {
      this.isFavorite = FavoritePerson.find((person) => person.name === this.name);
    }
  },
  methods: {
    favorited() {
      let data = JSON.parse(window.localStorage.getItem('favorited'));
      if (!data) {
        data = [];
      }
      this.isFavorite = !this.isFavorite;

      if (this.isFavorite) {
        data.push({
          name: this.name,
          id: this.id,
        });
        this.message = 'add to favorite character';
      } else {
        const DeletePerson = data.findIndex((item) => item.name === this.name);
        data.splice(DeletePerson, 1);
        this.message = 'remove to favorite character';
      }
      localStorage.setItem('favorited', JSON.stringify(data));
    },
  },
};
</script>

<style lang="scss" scoped>
.character-card {
  border: 2px solid #000;
  border-radius: 15px;
  padding: 10px;
  position: relative;
  overflow: hidden;
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
  &__message {
    transform: translateY(-100%);
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border: 2px solid #FFEE58;
    transition-timing-function: cubic-bezier(.29, 1.01, 1, -0.68);
    transition: transform 3s;
    &.active {
      transform: translateY(100%);
    }
  }
  &__message-text {
    color: #FFEE58;
    font-size: 25px;
  }
}
</style>
