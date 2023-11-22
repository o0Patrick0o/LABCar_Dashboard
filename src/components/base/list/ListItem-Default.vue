<template>
  <div class="md-list-item-default" @click="toggleControl">
    
    <div class="md-list-item-content" v-if="!isDisabled">
      <slot name="content"/>
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
    },

    methods: {
      toggleControl () {
        const control = this.$el.querySelector('.md-checkbox-container, .md-switch-container, .md-radio-container')

        if (control) {
          control.click()
        }
      }
    }
  }
</script>
