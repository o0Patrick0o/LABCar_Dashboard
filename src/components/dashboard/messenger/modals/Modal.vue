<template>
  <div role="dialog" class="relative z-20" :aria-hidden="!open" aria-labelledby="modal-title" aria-modal="true">
    <!--overlay-->
    <Transition name="fade">
      <div v-show="open" class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>
    </Transition>

    <!--modal-->
    <SlideTransition animation="slide-down">
      <div v-show="open" class="fixed inset-0 z-10 h-full overflow-y-auto">
        <div ref="modal" @click="closeOnClick" id="close-modal" class="h-full flex items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <!--content-->
          <slot name="content"></slot>
        </div>
      </div>
    </SlideTransition>
  </div>
</template>



<script>

  import SlideTransition from "@/components/dashboard/messenger/base/transitions/SlideTransition.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      SlideTransition,
    },

    props: {
      open: Boolean,
      closeModal: undefined,
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

      closeOnClick(event) {
        if (event.target.id === "close-modal") {
          this.closeModal();
        }
      },

      handleCloseOnEscape(event) {
        if (["Escape", "Esc"].includes(event.key)) {
          this.closeModal();
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



<style scoped>
.fade-enter-active {
  transition: opacity 0.1s ease;
}

.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
