<template>
  <div class="w-full my-7 flex items-center justify-center">
    <div class="w-full h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0"></div>

    <Typography variant="body-4" class="mx-5"> Today </Typography>

    <div class="w-full h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0"></div>
  </div>
</template>



<script>

  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
    },

    props: {},

    data() {
      return {
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
      ]),
    },

  }
</script>