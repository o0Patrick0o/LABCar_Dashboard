<template>
  <Modal :open="open" :close-modal="() => closeModal(false)">
    <template v-slot:content>
      <div class="rounded bg-white dark:bg-gray-800 transition-all duration-300" :style="{ width: modalSize }">
        <FadeTransition>
          <component :is="ActiveComponent" :members="members" :active-call="store.activeCall" :close-modal="() => closeModal(true)" :handle-call-status-change="handleCallStatusChange"/>
        </FadeTransition>
      </div>
    </template>
  </Modal>
</template>



<script>

  import Dialing        from "@/components/dashboard/messenger/modals/VoiceCallModal/Dialing.vue";
  import Ongoing        from "@/components/dashboard/messenger/modals/VoiceCallModal/Ongoing.vue";
  import FadeTransition from "@/components/dashboard/messenger/base/transitions/FadeTransition.vue";
  import Modal          from "@/components/dashboard/messenger/modals/Modal.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Dialing,
      Ongoing,
      FadeTransition,
      Modal,
    },

    props: {
      open: Boolean,
      closeModal: Function,
    },

    data() {
      return {
        modalSize: "290px",
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getOtherMembers',
        'setActiveCallStatus',
      ]),

      handleCallStatusChange(status) {
        if (this.getActiveCall) {
          this.setActiveCallStatus(status);
        }
      },

      ActiveComponent() {
        if (this.getActiveCall) {
          if (this.getActiveCall.status === "dialing") {
            this.modalSize = "290px";
            return "Dialing";
          } else if (this.getActiveCall.status === "ongoing") {
            this.modalSize = "400px";
            return "Ongoing";
          }
        } else {
          return "div";
        }
      },

      members() {
        if (this.getActiveCall) {
          return this.getOtherMembers(this.getActiveCall);
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getActiveCall',
      ]),
    },
  }
</script>