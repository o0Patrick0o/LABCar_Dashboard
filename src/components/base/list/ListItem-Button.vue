<template>
  <button type="button" class="md-list-item-button" :disabled="isDisabled">
    <div class="md-list-item-content">
      <slot />
    </div>
  </button>
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
