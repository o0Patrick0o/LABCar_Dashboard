<template>
  <li class="md-divider" :class="activeTheme" v-if="insideList"></li>
  <hr class="md-divider" :class="activeTheme" v-else>
</template>



<script>
 
  export default {

    props: {
      activeTheme: String,
    },

    computed: {

      insideList () {
        return this.$parent.$options._componentTag === 'md-list'
      }

    }

  }
</script>



<style lang="scss">

  @import "@/styles/base/Base-Variables";

  .md-divider {
    height: 1px;
    margin: 0;
    padding: 0;
    display: block;
    border: 0;
    transition: margin-left .3s $md-transition-default-timing;
    will-change: margin-left;

    &.md-inset {
      margin-left: 72px;
    }
  }
</style>
