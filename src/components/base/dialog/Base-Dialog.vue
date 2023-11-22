<template>
  <transition name="md-dialog">
    <div class="md-dialog" :class="{'md-active': this.activ}">
      <div class="md-dialog-container" :class="{activeTheme, 'md-dialog-fullscreen': this.fullscreen}"  @keydown.esc="onEsc">
        <slot />

        <!-- Header -->
        <span class="md-dialog-title md-title">
          <slot name="title" />
        </span>
        
        <!-- Body -->
        <div class="md-dialog-content">
          <slot name="content" />
        </div>
        
        <!-- Footer -->
        <div class="md-dialog-actions">
          <slot name="footer" />
        </div>
        
        <div v-if="keepAlive">
          <Overlay :class="backdropClass" :active="activ" @click="onClick" v-if="backdrop" />
        </div>

      </div>
    </div>
  </transition>
</template>



<script>

  import Overlay from '@/components/base/overlay/Base-Overlay.vue'

  export default {
    
    components: {
      Overlay,
    },

    props: {
      activ: { type: Boolean, default: true },
      backdrop: { type: Boolean, default: true },
      backdropClass: { type: String, default: 'md-dialog-overlay' },
      closeOnEsc: { type: Boolean, default: true },
      clickOutsideToClose: { type: Boolean, default: true },
      fullscreen: { type: Boolean, default: true },
      keepAlive: { type: Boolean, default: false },
      animateFromSource: Boolean,
      activeTheme: String,
    },

    computed: {},

    watch: {

      active (isActive) {
        this.$nextTick().then(() => {
          if (isActive) {
            this.$emit('md-opened')
          } else {
            this.$emit('md-closed')
          }
        })
      }
    },

    methods: {

      closeDialog () {
        this.$emit('update:active', false)
      },

      onClick () {
        if (this.clickOutsideToClose) {
          this.closeDialog()
        }
        this.$emit('md-clicked-outside')
      },

      onEsc () {
        if (this.closeOnEsc) {
          this.closeDialog()
        }
      }
    }
  }

</script>



<style lang="scss" scoped>
 
  @import "@/styles/base/Base-Variables";
  @import "@/styles/base/Layout-Mixins";
  @import "@/styles/base/Elevation-Mixins";

  $opacity-transition-duration: .15s;
  $transform-transition-duration: .20s;
  $max-duration: max($opacity-transition-duration, $transform-transition-duration);

  .md-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    display: flex;
    transition-duration: $max-duration;
    z-index: 110;

    &.md-dialog-leave,
    &.md-dialog-enter-to {
      .md-dialog-container {
        opacity: 1;
        transform: scale(1);
      }

      .md-dialog-fullscreen {
        @include md-layout-xsmall {
          opacity: 0;
          transform: translate(0, 30%);
        }
      }
    }

    &.md-dialog-enter,
    &.md-dialog-leave-to {
      .md-dialog-container {
        opacity: 0;
        transform: scale(.9);
      }

      .md-dialog-fullscreen {
        @include md-layout-xsmall {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }

  }

  .md-dialog-container {
    @include md-elevation(24);
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    border-radius: 2px;
    backface-visibility: hidden;
    pointer-events: auto;
    opacity: 1;
    transform-origin: center center;
    transition: opacity $opacity-transition-duration $md-transition-stand-timing, transform $transform-transition-duration $md-transition-stand-timing;
    will-change: opacity, transform;

    &.md-dialog-leave,
    &.md-dialog-enter-to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    &.md-dialog-enter,
    &.md-dialog-leave-to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(.9);
    }
  }

  .md-dialog-container {
    .md-tabs {
      flex: 1;
      max-width: 100%;
    }

    .md-tabs-navigation {
      padding: 0 12px;
    }

    .md-tab {
      @include md-layout-xsmall {
        padding: 12px;
      }
    }
  }

  .md-dialog-fullscreen {
    @include md-layout-xsmall {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: 0;
      transform: none;

      &.md-dialog-enter,
      &.md-dialog-leave-to {
        opacity: 0;
        transform: translate3D(0, 30%, 0);
      }

      &.md-dialog-leave,
      &.md-dialog-enter-to {
        opacity: 1;
        transform: translate3D(0, 0, 0);
      }
    }
  }

  .md-dialog-title {
    margin-bottom: 20px;
    padding: 24px 24px 0;
  }

  .md-dialog-content {
    padding: 0 24px 24px;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    position: relative;

    &:first-child {
      padding-top: 24px;
    }

    p:first-child:not(:only-child) {
      margin-top: 0;
    }

    p:last-child:not(:only-child) {
      margin-bottom: 0;
    }
  }

  .md-dialog-actions {
    min-height: 52px;
    padding: 8px 8px 8px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    &:before {
      height: 1px;
      position: absolute;
      top: -1px;
      right: 0;
      left: 0;
      content: " ";
    }

    .md-button {
      min-width: 64px;
      margin: 0;

      + .md-button {
        margin-left: 8px;
      }
    }
  }

</style>
