<template>
  <transition name="md-snackbar">
    <div class="md-snackbar" :class="{activeTheme ,['md-position-' + this.position]: true}" v-if="alive">
      <div class="md-snackbar-content">
        <slot />
      </div>
    </div>
  </transition>
</template>



<script>

  export default {

    components: {},

    props: { 
      isActive: { type: Boolean, default: false },
      persistent: { type: Boolean, default: false },
      duration: { type: Number, default: 4000 },
      position: { type: String, default: 'center' }
    },

    data() {
      return {
        alive: this.isActive,
        timeout: null,
        positionvalidator: ['center', 'left']
      };
    },

    mounted() {
      
      if (this.isActive == true) {
          this.createSnackbar(this.duration, this.persistent)
      } else {
        this.destroySnackbar()
      }
    },

    methods: {
      
      destroySnackbar() {
        window.clearTimeout(this.timeout)
        this.alive = false;
        this.timeout = null
      },
      
      createSnackbar(duration, persistent) {
        if (this.timeout != null) {
            this.destroySnackbar();
            if (!persistent) {

              this.alive = true
              setTimeout(()=>{ this.destroySnackbar() }, duration);
            }
        }
        else {
          if (duration !== Infinity) {
            if (!persistent) {
              setTimeout(()=>{ this.destroySnackbar() }, duration);
            }
          }
        }
  
      }

    },

  }

</script>



<style lang="scss" scoped>

  @import "../../../styles/base/Base-Variables";
  @import "../../../styles/base/Layout-Mixins";
  @import "../../../styles/base/Elevation-Mixins";

  .md-snackbar {
    @include md-elevation(6);
    min-width: 288px;
    max-width: 568px;
    min-height: 48px;
    max-height: 80px;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
    border-radius: 2px;
    transition: .4s $md-transition-default-timing;
    background-color: white;

    &.md-position-center {
      margin: 0 auto;
      right: 0;
      bottom: 24px;
      left: 0;

      &.md-snackbar-enter,
      &.md-snackbar-leave-active {
        transform: translate3D(0, calc(100% + 8px), 0);
      }
    }

    &.md-position-left {
      bottom: 24px;
      left: 24px;

      &.md-snackbar-enter,
      &.md-snackbar-leave-active {
        transform: translate3D(0, calc(100% + 32px), 0);
      }
    }

    @include md-layout-xsmall {
      left: 0;
      transform: none;
      border-radius: 0;
    }
  }

  .md-snackbar-enter,
  .md-snackbar-leave-active {
    opacity: 0;

    .md-snackbar-content {
      opacity: 0;
    }
  }

  .md-snackbar-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: opacity .38s $md-transition-drop-timing;

    .md-button {
      min-width: 0;
      margin: -8px -8px -8px 36px;

      @include md-layout-xsmall {
        margin-left: 12px;
      }

      + .md-button {
        margin-left: 16px;
      }
    }
  }
</style>
