<template>
  <i class="md-icon md-icon-font" :class="activeTheme" >
    
    <font-awesome-icon v-if="is_Fa_Icon_Set" :icon="fontawesomeicon" />
    <slot />

  </i>
</template>



<script>

  export default {

    props: {
      fontawesomeicon: { type: String, default: ''},
      activeTheme: String,
    },

    data() {
      return {
        is_Fa_Icon_Set: false,
      };
    },

    mounted () {
      this.select()
    },

    methods: {

      select() {
        if(this.fontawesomeicon === '' || this.fontawesomeicon === null) {
          this.is_Fa_Icon_Set = false
          console.log('test1');
        } else {
          this.is_Fa_Icon_Set = true
          console.log('test2');
        }
      },

    },

    watch: {
      fontawesomeicon: {
        handler() {
          this.select();
        },
        deep: true,
      },
    },

  }

</script>



<style lang="scss" scoped>

  @import "@/styles/base/Base-Variables";
  @import "./mixins";

  $icon-size: 24px;

  .md-icon {
    @include md-icon-size($icon-size);
    margin: auto;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    &.md-size-2x {
      @include md-icon-size($icon-size * 2);
    }

    &.md-size-3x {
      @include md-icon-size($icon-size * 3);
    }

    &.md-size-4x {
      @include md-icon-size($icon-size * 4);
    }

    &.md-size-5x {
      @include md-icon-size($icon-size * 5);
    }
  }

  .md-icon-image {
    svg {
      height: 100%;
      flex: 1;
      transition: fill .4s $md-transition-default-timing;
    }
  }

  .md-icon {
    transition: color .4s $md-transition-default-timing;
    direction: ltr;
    font-family: "Material Icons";
    font-feature-settings: "liga";
    font-style: normal;
    letter-spacing: normal;
    line-height: 1;
    text-rendering: optimizeLegibility;
    text-transform: none;
    word-wrap: normal;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
