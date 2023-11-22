<template>
  <ul class="md-list" :class="activeTheme">
    <div class="md-subheader"> {{ title }}</div>
    <slot name="list" />
  </ul>
</template>



<script>

  export default {

    props:{
      activeTheme: String, 
      title: String, 
    },
   
    data () {
      return {}
    },

    methods: {}
  }

</script>



<style lang="scss" scoped>

  @import "../../../styles/base/Base-Variables";

  .md-list {
    margin: 0;
    padding: 8px 0;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    list-style: none;

    &.md-dense {
      padding: 4px 0;
    }

    .md-divider {
      margin-top: -1px;
    }

    .md-subheader {
      &.md-inset {
        padding-left: 72px;
      }
    }

    > .md-subheader:first-of-type {
      margin-top: -8px;
    }
  }
</style>
