<template>
  <div class="md-list-item-fake-button" v-if="isDisabled">
    <div class="md-list-item-content">
      <slot />
    </div>
  </div>
</template>



<script>
 
  export default {
    
    props: {
      disabled: Boolean
    },

    computed: {
      isDisabled () {
        return this.disabled
      }
    }
    
  }
</script>
