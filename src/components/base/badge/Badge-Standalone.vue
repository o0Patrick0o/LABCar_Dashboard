<template>
  <div class="badge" :class="ActiveTheme">
    <slot />
  </div>
</template>

<script>


export default {

components: {},

props:['ActiveTheme'],

data() {
  return {

  };
},

methods: {},
}
</script>

<style scoped lang="scss">

  @import "@/styles/base/Base-Variables";


  .badge {
    position: absolute;
    transition: .3s $md-transition-default-timing;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-style: normal;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #000000;
    background-color: red;
    pointer-events: none;
    z-index: 11;
    .md-list-item-content & {
      position: relative;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &.md-dense {
      width: 18px;
      height: 18px;
      font-size: 8px;
    }
    &.md-square {
      width: auto;
      border-radius: 3px;
      height: 18px;
      padding: 0 4px;
    }
  }
</style>
