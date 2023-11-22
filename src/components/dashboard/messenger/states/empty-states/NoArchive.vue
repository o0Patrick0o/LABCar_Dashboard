<template>
  <div class="w-full p-5 flex">
    <!--icon-->
    <div>
      <div class="w-7 h-7 mr-4 flex justify-center items-center rounded-full bg-gray-50 dark:bg-gray-700 transition duration-500">
        <font-awesome-icon icon="fa-solid fa-inbox" class="w-5 h-5 text-gray-500 dark:text-white dark:opacity-70" />
      </div>
    </div>

    <!--content-->
    <div>
      <Typography variant="heading-2" class="mb-3">No archived conversations</Typography>

      <Typography variant="body-2" class="flex">
        select archive from the conversation context menu to save one.
      </Typography>
    </div>
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