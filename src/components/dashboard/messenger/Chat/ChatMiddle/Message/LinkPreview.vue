<template>
  <div class="border-l pl-3 cursor-pointer border-opacity-50 duration-200" :class="self ? ['border-white'] : ['border-black', 'dark:border-white', 'dark:border-opacity-70']">

    <p class="mb-3 font-semibold text-xs leading-4 tracking-[0.16px]" :class="self ? ['text-white'] : ['text-black', 'opacity-50', 'dark:text-white', 'dark:opacity-70']">
      {{ previewData.title }}
    </p>

    <p class="font-normal text-xs leading-4 tracking-[0.16px]" :class="self ? ['text-white'] : ['text-black', 'opacity-50', 'dark:text-white', 'dark:opacity-70']">
      {{ previewData.description }}
    </p>

    <img :src="previewData.image" class="my-5 rounded-sm" :alt="previewData.link" />

    <a :href="previewData.link" class="font-normal text-xs leading-4 tracking-[0.16px] flex items-center" :class="self ? ['text-white'] : ['text-black', 'opacity-50', 'dark:text-white', 'dark:opacity-70']">
      <font-awesome-icon icon="fa-solid fa-link" class="w-4 h-4 mr-2 stroke-1"/>
      {{ previewData.domain }}
    </a>
  </div>
</template>



<script>

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {},

    props: {
      self: Boolean,
      previewData: Object,
    },

    data() {
      return {
        openImageViewer: false,
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