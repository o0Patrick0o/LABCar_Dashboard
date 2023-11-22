<template>
  <router-link class="md-list-item-router" :to="href">
    <div class="md-list-item-content" v-if="isDisabled">
      <slot />
    </div>
  </router-link>
</template>

<script>


  export default {
    props: {
      disabled: Boolean,
      href: { type: String, default: '/'},
    },

    computed: {
    
      isDisabled () {
        return this.disabled
      }
    }
  }
</script>
