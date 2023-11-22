<template>
  <div class="w-full min-h-[80px] max-h-fit px-5 py-6 flex justify-between items-center text-black">
    <Typography variant="heading-1" tabindex="0" class="outline-none">
      <slot name="title"></slot>
    </Typography>

    <div>
      <slot name="actions"></slot>
    </div>
  </div>
</template>




<script >

  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  export default {
    
    components: {
      Typography,
    },

    props: {},
  }
</script>