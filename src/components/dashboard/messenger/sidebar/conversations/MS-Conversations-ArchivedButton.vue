<template>
    <button class="group w-full h-[92px] px-5 py-6 mb-3 flex rounded focus:outline-none transition duration-300 ease-out mt-3 select-none" 
    :class="open ? ['bg-red-300', 'hover:bg-red-400', 'focus:bg-red-400', 'active:bg-red-400'] : ['focus:bg-indigo-50', 'hover:bg-indigo-50', 'active:bg-indigo-100']" tabindex="0">
      <div v-if="!open" class="mr-4">
        <div class="w-7 h-7 flex justify-center items-center rounded-full transition duration-500">
          <font-awesome-icon icon="fa-solid fa-box-archive" class="w-5 h-5 stroke-1 text-gray-500 transition duration-500"/>
        </div>
      </div>

      <div v-if="!open" class="w-full flex flex-col">
        
        <div class="w-full">
          <!--title-->
          <div class="flex items-start">
            <div class="grow mb-4 text-start">
              <Typography variant="heading-2">
                Archived Conversations
              </Typography>
            </div>
          </div>
        </div>

        <Typography variant="body-2" class="flex justify-start items-center">
          {{ getArchive.length }}
          conversations
        </Typography>
      
      </div>

      <div v-if="open" class="w-full h-full flex justify-center items-center" :class="{ hidden: !open }">
        <font-awesome-icon icon="fa-solid fa-xmark" class="w-5 h-5 mr-3 stroke-1" :class="open ? ['text-black', 'group-hover:text-white', 'group-focus:text-white' ] : []" />

        <Typography variant="body-2" no-color class="text-black group-hover:text-red group-focus:text-white">
          Close Archive
        </Typography>
      </div>

    </button>
</template>



<script>
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
    },

    props: {
      open:  {type: Boolean, default: false},
    },

    methods: {},

    computed:{
      ...mapState(useMessengerStore, [
        'getActiveConversationId',
        'getLoading',
        'getArchive',
      ]),
    },
  }
</script>