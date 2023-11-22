<template>
  <button class="w-full p-5 flex hover:bg-indigo-50 active:bg-indigo-100 dark:hover:bg-gray-600 dark:focus:bg-gray-600 outline-none transition-all duration-300">
    <!--icon-->
    <div class="w-8 h-8 mr-4 flex justify-center items-center rounded-full bg-gray-50 dark:bg-gray-500">
      <font-awesome-icon icon="fa-regular fa-image" class="h-5 w-5 text-gray-500 dark:text-white dark:text-opacity-70" v-if="props.attachment.type === 'image'"/>
      <font-awesome-icon icon="fa-regular fa-file" class="h-5 w-5 text-gray-500 dark:text-white dark:text-opacity-70" v-else-if="props.attachment.type === 'file'"/>
      <font-awesome-icon icon="fa-solid fa-video" class="h-5 w-5 text-gray-500 dark:text-white dark:text-opacity-70" v-else-if="props.attachment.type === 'video'"/>
    </div>

    <!--name, date and size-->
    <div class="grow">
      <div class="flex items-center justify-between mb-3">
        <Typography variant="heading-2">
          {{ attachment.name }}
        </Typography>

        <Typography variant="body-4">
          {{ props.date }}
        </Typography>
      </div>

      <div class="flex justify-start">
        <Typography variant="body-2" class="font-normal text-sm text-black opacity-60 leading-4 tracking-[0.16px]">
          {{ props.attachment.size }}
        </Typography>
      </div>
    </div>
  </button>
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

    props: {
      attachment: Object,
      date: String,
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getFullName',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),
    },

  }
</script>