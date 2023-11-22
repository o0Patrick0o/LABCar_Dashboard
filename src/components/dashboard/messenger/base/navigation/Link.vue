<template>
  <a :href="href">
    <Typography :variant="variant" :no-color="noColor">
      <slot></slot>
    </Typography>
  </a>
</template>


<script>
  
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  export default {
    
    components: {
      Typography,
    },

    props: {
      variant: String,
      noColor: Boolean,
      href: String,
    },
  }
</script>