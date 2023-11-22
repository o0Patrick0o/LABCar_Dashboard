<template>
  <div href="#" class="flex px-5 py-4 transition-all duration-300">
    <!--icon-->
    <div class="w-8 h-8 mr-4 rounded-full flex justify-center items-center bg-gray-100 dark:bg-gray-600">
      <font-awesome-icon icon="fa-regular fa-image" class="stroke-1 h-5 w-5 text-black opacity-60 dark:text-white dark:opacity-70" v-if="attachment.type === 'image'"/>
      <font-awesome-icon icon="fa-solid fa-video" class="stroke-1 h-5 w-5 text-black opacity-60 dark:text-white dark:opacity-70" v-else-if="attachment.type === 'video'"  />
      <font-awesome-icon icon="fa-regular fa-file" class="stroke-1 h-5 w-5 text-black opacity-60 dark:text-white dark:opacity-70" v-else-if="attachment.type === 'file'"/>
    </div>

    <!--name, date and size-->
    <div class="grow">
      <div class="flex items-center justify-between mb-3">
        <Typography variant="heading-2" tabindex="0">
          {{ attachment.name }}
        </Typography>
      </div>

      <div class="flex justify-start">
        <Typography variant="body-2" tabindex="0">
          {{ attachment.size }}
        </Typography>
      </div>
    </div>

    <!--action buttons-->
    <div class="flex">
      <IconButton class="w-7 h-7 mr-2" title="replace">
        <font-awesome-icon icon="fa-solid fa-repeat" class="w-[15px] h-[15px] text-gray-400 group-hover:text-indigo-300"/>
      </IconButton>
      <IconButton class="w-7 h-7" title="delete">
        <font-awesome-icon icon="fa-solid fa-trash" class="w-[15px] h-[15px] text-gray-400 group-hover:text-red-300"/>
      </IconButton>
    </div>
  </div>
</template>


<script>

  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import IconButton from "@/components/dashboard/messenger/base/basics/IconButton.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
      IconButton,
    },

    props: {
      attachment: Object,
    },

    data() {
      return {
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),
    },

  }
</script>