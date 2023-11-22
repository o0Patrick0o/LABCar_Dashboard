<template>
  
  <button v-if="type == 'button'" type="button" class="md-button" :disabled="disabled">
    <div class="md-button-content">
      <slot />
    </div>
  </button>
  
  <a v-if="type == 'a'" class="md-button" :href="href">
    <div class="md-button-content">
      <slot />
    </div>
  </a>

  <router-link v-if="type == 'router-link'" :to="href" class="md-button">
    <slot />
  </router-link>

</template>



<script>

  export default{

    props: {
      href:  { type: String, default: '/Dashboard'},
      type: { type: String, default: 'button'},
      disabled: { type: Boolean, default: false },
    },
    
    data () {
      return {

      }
    },

    computed: {

    },

  }

</script>



<style lang="scss" scoped>

  @import "@/styles/base/Base-Variables";
  @import "@/styles/base/Elevation-Mixins";
  @import "@/styles/base/Elevation-Variables";
 

  $md-button-min-width: 88px;
  $md-button-height: 36px;
  $md-button-radius: 2px;
  $md-button-font-size: 14px;

  $md-button-dense-height: 32px;

  $md-button-icon-size: 40px;

  $md-button-fab-size: 56px;
  $md-button-fab-size-mini: $md-button-icon-size;

  .md-button-clean {
    margin: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    outline: none;
    background: transparent;
    border: 1px solid lightgray;
    border-radius: 0;
    transition: $md-transition-default;
    font-family: inherit;
    line-height: normal;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
  }

  .md-button {
    @extend .md-button-clean;
    min-width: $md-button-min-width;
    height: $md-button-height;
    margin: 6px 8px;
    user-select: none;
    border-radius: $md-button-radius;
    font-size: $md-button-font-size;
    font-weight: 500;
    text-transform: uppercase;

    &:active {
      outline: none;
    }

    &[disabled] {
      pointer-events: none;
    }

    &:not([disabled]) {
      cursor: pointer;

      &:hover,
      &:active,
      &.md-focused {
        &:before {
          background-color: currentColor;
          opacity: .12;
        }
      }

      &.md-focused {
        &.md-primary,
        &.md-accent {
          &:before {
            opacity: .2;
          }
        }
      }

      &:active {
        &:before {
          opacity: .2;
        }
      }

      &.md-ripple-off:active:before {
        opacity: .26;
      }
    }

    .md-button-content {
      position: relative;
      z-index: 2;
    }
  }

</style>
