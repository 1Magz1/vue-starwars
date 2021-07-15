<template>
  <header class="header wrap">
    <div class="header__inner">
      <span class="header__logo">
        <NuxtLink to="/">
          Vue StarWars
        </NuxtLink>
      </span>
    </div>
    <div class="header__inner">
      <ul class="list header__list">
        <li class="list__item header__list-item">
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li class="list__item header__list-item">
          <NuxtLink to="/favorite">
            Favorites
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  background: #FFEE58;
  padding-top: 25px;
  padding-bottom: 25px;
  justify-content: space-between;
  align-items: center;
  &__logo {
    font-size: 41px;
    font-weight: 500;
    a {
      color: #000;
      &:hover {
        color: #000;
        text-decoration: none;
      }
    }
  }
  &__inner {
    flex-basis: 50%;
    &:last-child {
      flex-basis: 20%;
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__list-item {
    a  {
      padding: 5px 23px;
      background: #000;
      border: 2px solid #FFEE58;
      transition: background-color .3s, color .3s;
      color: #fff;
      text-transform: uppercase;
      &:hover {
        background: #FFEE58;
        border-color: #000;
        text-decoration: none;
        color: #000;
      }
    }
  }
}
</style>
