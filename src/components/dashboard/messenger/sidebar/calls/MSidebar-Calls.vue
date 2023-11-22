<template>
  <div>
    <SidebarHeader>
      <!--title-->
      <template v-slot:title>Voice Calls</template>

      <!--side actions-->
      <template v-slot:actions>
        <IconButton @click="openDialModal = true" class="w-7 h-7" title="initiate call" aria-label="initiate call">
          <font-awesome-icon icon="fa-solid fa-circle-plus" class="w-[20px] h-[20px] text-indigo-300 hover:text-indigo-400"/>
        </IconButton>
      </template>
    </SidebarHeader>

    <!--content-->
    <div ref="contactContainer" class="w-full h-full scroll-smooth scrollbar-hidden" style="overflow-x: visible; overflow-y: scroll">

        <ExpandTransition>
          <div class="max-h-[200px]" v-if="store.callMinimized && store.activeCall">
            <Call v-if="store.activeCall" :call="store.activeCall" :open-voice-call-modal="() => (store.openVoiceCall = true)" :end-call="() => { store.activeCall = undefined; store.callMinimized = false; }" active />
          </div>
        </ExpandTransition>

        <CallList v-if="store.calls?.length > 0" :calls="store.calls" delay-loading="chat.delayLoading" :chat-status="store.status" :open-info-modal="handleOpenInfoModal" />

        <NoCalls v-else />

    </div>

    <!--call info modal-->
    <CallInfoModal :open="openInfoModal" :close-modal="() => (openInfoModal = false)" :call="selectedCall" />

    <!--start call modal-->
    <DialModal :open="openDialModal" :close-modal="() => (openDialModal = false)"/>
  </div>
</template>



<script>

  import CallInfoModal    from "@/components/dashboard/messenger/modals/CallInfoModal/CallInfoModal.vue";
  import DialModal        from "@/components/dashboard/messenger/modals/DialModal/DialModal.vue";
  import NoCalls          from "@/components/dashboard/messenger/sidebar/Calls/MS-Calls-NoCalls.vue";
  import IconButton       from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import ExpandTransition from "@/components/dashboard/messenger/base/transitions/ExpandTransition.vue";
  import Call             from "@/components/dashboard/messenger/sidebar/Calls/MS-Calls-Call.vue";
  import CallList         from "@/components/dashboard/messenger/sidebar/Calls/MS-Calls-CallList.vue";
  import SidebarHeader    from "@/components/dashboard/messenger/sidebar/MSidebar-Header.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      CallInfoModal,
      DialModal,
      NoCalls,
      IconButton,
      ExpandTransition,
      Call,
      CallList,
      SidebarHeader,
    },

    data() {
      return {
        selectedCall: null,
        openInfoModal: false,
        openDialModal: false,
      };
    },

    methods: {
      handleOpenInfoModal(call) {
        this.openInfoModal = true;
        this.selectedCall = call;
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