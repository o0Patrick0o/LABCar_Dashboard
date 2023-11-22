<template>
  <transition name="md-overlay">
    <div class="md-overlay" :class="{'md-fixed': this.fixed}" v-if="activ"></div>
  </transition>
</template>



<script>

  export default {

    components: {},

    props: {
      activ: Boolean,
      fixed: Boolean
    },

    computed: {}
  }

</script>

<style lang="scss" scoped>

  @import "../../../styles/base/Base-Variables";

  .md-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    overflow: hidden;
    background: rgba(#000, .6);
    transition: .35s $md-transition-default-timing;
    transition-property: opacity;
    will-change: opacity;

    body > &,
    &.md-fixed {
      position: fixed;
    }
  }

  .md-overlay-enter,
  .md-overlay-leave-active {
    opacity: 0;
  }
</style>
