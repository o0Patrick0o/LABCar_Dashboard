<template>
  <div class="md-speed-dial" :class="{activeTheme, 'md-active': this.active, 'md-with-hover': this.event === 'hover', ['md-direction-' + this.direction]: true, ['md-effect-' + this.effect]: true}">
    <BaseButton class="md-speed-dial-target md-fab" @click="handleClick">
      <slot name="button" />
    </BaseButton>

    <div class="md-speed-dial-content">
      <slot name="content" />

      <BaseButton class="md-icon-button">
          <font-awesome-icon icon="fa-solid fa-file" />
      </BaseButton>
    </div>
  
  </div>
</template>


<script>

  import BaseButton from '@/components/base/button/Base-Button.vue';

  export default {

    components: {
      BaseButton
    },

    props: {
      event: { type: String, default: 'hover'},
      direction: { type: String, default: 'top'},
      effect: { type: String, default: 'fling'}
    },

    data () {
      return {
        active: false,
        eventvalidator: ['click', 'hover'],
        directionvalidator: ['top', 'bottom'],
        effectvalidator: ['fling', 'scale', 'opacity']
      }
    },

    methods: {
      handleClick () {
        if (this.event === 'click') {
          this.active = !this.active
        }
      },
    },

  }

</script>



<style lang="scss" scoped>
  
  @import "../../../styles/base/Base-Variables";

  .md-speed-dial {
    display: inline-flex;
    flex-direction: column;

    &.md-top-right, &.md-top-left {
      position: absolute;
      top: 24px;
    }

    &.md-bottom-right, &.md-bottom-left {
      position: absolute;
      bottom: 24px;
    }

    &.md-top-center, &.md-bottom-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &.md-top-center {
      top: 24px;
    }

    &.md-bottom-center {
      bottom: 24px;
    }

    &.md-top-right,
    &.md-bottom-right {
      right: 24px;
    }

    &.md-top-left, &.md-bottom-left {
      left: 24px;
    }

    &.md-fixed {
      position: fixed;
    }

    &.md-direction-top {
      &.md-effect-fling {
        .md-speed-dial-content .md-button {
          transform: translate3d(0, 50%, 0) scale(.8);
        }
      }

      .md-speed-dial-target {
        order: 2;
        margin-bottom: 0 !important;
      }

      .md-speed-dial-content {
        order: 1;

        .md-button:first-child {
          margin-top: 0;
        }
      }
    }

    &.md-direction-bottom {
      &.md-effect-fling {
        .md-speed-dial-content .md-button {
          transform: translate3d(0, -50%, 0) scale(.8);
        }
      }

      .md-speed-dial-target {
        order: 1;
        margin-top: 0 !important;
      }

      .md-speed-dial-content {
        order: 2;

        .md-button:last-child {
          margin-bottom: 0;
        }
      }
    }

    &.md-effect-scale {
      .md-speed-dial-content .md-button {
        transform: scale(.3);
      }
    }

    &.md-active, &.md-with-hover:hover {
      .md-morph-initial {
        opacity: 0;
        transform: translate3D(-50%, -50%, 0) rotate(90deg) scale(.7);
      }

      .md-morph-final {
        opacity: 1;
        transform: translate3D(-50%, -50%, 0) rotate(0deg) scale(1);
      }

      .md-speed-dial-content .md-button {
        pointer-events: auto;
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1) !important;
        transition: opacity .2s $md-transition-default-timing,
                    transform .3s $md-transition-stand-timing;

        @for $index from 0 through 5 {
          &[md-button-index="#{$index}"] {
            transition-delay: .1s * $index
          }
        }
      }
    }

    .md-button {
      margin: 6px 0;
    }

    .md-speed-dial-content .md-button {
      pointer-events: none;
      opacity: 0;
      transition: opacity .3s $md-transition-default-timing,
                  transform 0s .3s $md-transition-default-timing;
      will-change: opacity, transform;
    }

    .md-morph-initial, .md-morph-final {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
      transition: .3s $md-transition-stand-timing;
      transition-property: opacity, transform;
      will-change: opacity, transform;
    }

    .md-morph-final {
      opacity: 0;
      transform: translate3D(-50%, -50%, 0) scale(.7) rotate(-90deg);
    }
  }

  .md-speed-dial-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    transition: .3s $md-transition-default-timing;
  }

  .md-speed-dial-target {
    z-index: 1;
  }

</style>
