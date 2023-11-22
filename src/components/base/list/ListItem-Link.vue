<template>
  <a class="md-list-item-link" :href="link" v-bind:[type]="typevalue">
    <div class="md-list-item-content" v-if="isDisabled">
      <slot />
    </div>
  </a>
</template>



<script>

  // Util
  import Propvalidator from '@/utils/Propvalidator.js';

  export default {
 
    props: {
      type: { type: String,  ...Propvalidator('input-type', ['download', 'hreflang', 'media', 'ping', 'referrerpolicy', 'rel', 'target', 'type']) },
      typevalue: { type: String },
      link: { type: String },
      disabled: { type: Boolean},
    },


    computed: {
      isDisabled () {
        return this.disabled
      }
    }

  }
</script>
