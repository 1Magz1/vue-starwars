<template>
  <div class="base-modal__box">
    <div
      v-if="isHeader === true"
      class="base-modal__header"
    >
      <div class="base-modal__title">
        {{ title || options.title || 'Default' }}
      </div>
      <button
        v-if="!options.isUnclosable"
        class="base-modal__x"
        @click="close()"
      >
        <span class="icon-close_big" />
      </button>
    </div>
    <slot />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    isUnclosable: {
      type: Boolean,
      default: false,
    },
    isHeader: {
      type: Boolean,
      default: true,
    },
  },
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
  &__header {
    padding: 30px 14px 26px;
  }
  &__x {
    span::before {
      font-size: 36px;
    }
  }
  &__title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
  }
}
</style>
