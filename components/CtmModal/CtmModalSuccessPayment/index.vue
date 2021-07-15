<template>
  <base-modal-box
    :is-header="false"
    is-unclosable
  >
    <div class="base-modal__content">
      <div
        class="base-modal__x"
        @click="close()"
      >
        <span class="icon-close_big" />
      </div>
      <div class="base-modal__img" />
      <div class="base-modal__info info">
        <div class="info__title">
          {{ options.title }}
        </div>
        <div class="info__order">
          <div class="info__bg" />
          <div class="info__block">
            <span class="info__msg">Your order id</span>
            <span class="info__id">{{ options.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </base-modal-box>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SuccessModal',
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
  },
  methods: {
    close() {
      this.$store.dispatch('modals/hide');
    },
  },
};
</script>

<style lang="scss" scoped>
.base-modal {
  @include modalKit;
  .base-modal__box {
    min-width: 720px;
  }
  &__x {
    position: absolute;
    top: 0;
    right: 0;
    span::before {
      font-size: 48px;
    }
    height: 48px;
    cursor: pointer;
  }
  .base-modal__content {
    padding: 25px 25px 25px 300px;
    position: relative;
  }
  .base-modal__img {
    position: absolute;
    top: -140px;
    left: -161px;
  }
}

@media only screen and (max-width: 1100px) {
  .base-modal {
    .base-modal__content {
      padding: 25px;
      position: relative;
    }
    .base-modal__img {
      display: none;
    }
  }
}
@media only screen and (max-width: 750px) {
  .base-modal {
    .base-modal__box {
      min-width: 100%;
    }
    .info {
      &__title {
        font-size: 64px;
        line-height: 70px;
      }
    }
  }
}

@media only screen and (max-width: 575px) {
  .base-modal {
    .info {
      &__bg {
        width: 60px;
        height: 60px;
      }
      &__id {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .base-modal {
    .base-modal__box {
      height: 100%;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  &__title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 106px;
    line-height: 128px;
    text-transform: uppercase;
  }
  &__order {
    padding: 20px 30px;
    display: flex;
    grid-gap: 25px;
    box-shadow: 0 4px 134px rgba(0, 0, 0, 0.14);
  }
  &__bg {
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__msg {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
  }
  &__id {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
}
</style>
