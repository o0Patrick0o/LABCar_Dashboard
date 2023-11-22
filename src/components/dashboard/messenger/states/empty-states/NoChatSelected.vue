<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="w-10 h-10 mr-4 mb-5 flex justify-center items-center rounded-full bg-gray-50 dark:bg-gray-700 transition duration-500">
      <font-awesome-icon icon="fa-regular fa-comment" class="w-7 h-7 text-gray-400 dark:text-white dark:opacity-70"/>
    </div>

    <Typography variant="heading-2" class="mb-3"> No chat selected </Typography>

    <Typography variant="body-2" class="flex">
      Select a conversation from the conversation menu.
    </Typography>
  </div>
</template>



<script>
  
import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  export default {
    
    components: {
      Typography,
    },
  }
</script>