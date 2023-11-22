<template>
  <div class="md-image" :class="[$mdActiveTheme]">
    <img v-if="is_Path_Set" :src="path" alt="Picture can not Load">
    <slot />
  </div>
</template>



<script>


  export default {

    props: {
      path: { type: String, default: ''},
      activeTheme: String,
    },

    data() {
      return {
        is_Path_Set: false,
      };
    },

    mounted () {
      this.select()
    },

    methods: {

      select() {
        if(this.path === '' || this.path === null) {
          this.is_Path_Set = false
          console.log('test1');
        } else {
          this.is_Path_Set = true
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
  .md-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>