<template>
  <div>
    <div v-if="show" class="fixed left-0 top-0 z-[50] w-full h-full"></div>

    <ScaleTransition>
      <div :class="position" :style="coordinates" v-show="show" v-click-outside="handleClickOutside"
        class="absolute z-[100] w-[200px] mt-2 rounded-sm bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-600 focus:outline-none"
        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div role="none">
          <slot></slot>
        </div>
      </div>
    </ScaleTransition>
  </div>
</template>



<script>

  import ScaleTransition from "@/components/dashboard/messenger/base/transitions/ScaleTransition.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      ScaleTransition,
    },

    props: {
      show: Boolean,
      coordinates: {
        left: String,
        right: String,
        top: String,
        bottom: String,
      },
      position: Object,
      closeDropdown: Function,
    },

    data() {
      return {

      };
    },

    mounted() {
      document.addEventListener("keydown", this.handleCloseOnEscape);
    },

    unmounted() {
      document.removeEventListener("keydown", this.handleCloseOnEscape);
    },

    methods: {
      handleCloseOnEscape(event) {
        if (["Escape", "Esc"].includes(event.key)) {
          this.closeDropdown();
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getActiveConversationId',
        'getLoading',
      ]),
    },
  }
</script>