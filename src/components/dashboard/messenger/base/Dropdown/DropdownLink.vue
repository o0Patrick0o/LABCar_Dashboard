<template>
  <button :aria-label="label"  @click.prevent="handleClick" :class="classes" role="menuitem">
    <slot></slot>
  </button>
</template>



<script>

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    props: {
      handleClick: undefined,
      label: String,
      color: String,
    },

    data() {
      return {
        baseClasses: `w-full px-4 py-3 flex items-center border-b opacity-60 dark:opacity-70 outline-none text-sm  border-gray-200 dark:border-gray-600 transition-all duration-200`,
      };
    },

    mounted() {},

    unmounted() {},

    methods: {},

    computed:{
      ...mapState(useMessengerStore, [
        'getActiveConversationId',
        'getLoading',
      ]),

      colorClasses()  {
        if (this.color === "danger") {
          return "text-red-500 dark:hover:text-red-50 hover:bg-red-50 active:bg-red-100 dark:hover:bg-red-900";
        } else {
          return `text-black dark:text-white active:bg-gray-100 dark:hover:bg-gray-600 dark:focus:bg-gray-600 hover:bg-gray-50`;
        }
      },
    },
  }
</script>