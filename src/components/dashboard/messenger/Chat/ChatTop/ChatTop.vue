<template>
  <div class="w-full">
    <div class="w-full min-h-[84px] px-5 py-6">
      <SelectSection v-if="selectMode" :select-mode="selectMode" :select-all="selectAll" :handle-close-select="handleCloseSelect" :handle-select-all="handleSelectAll"
        :handle-deselect-all="handleDeselectAll" />
      <ConversationInfoSection v-else :handle-open-info="handleOpenInfo" :handle-open-search="handleOpenSearch" />
    </div>

    <!--Pinned Message-->
    <div class="relative transition-[padding] duration-200" :class="{ 'pb-[60px]': activeConversation.pinnedMessage && !activeConversation.pinnedMessageHidden, }">
      <PinnedMessage :active-conversation="activeConversation" />
    </div>

    <!--Search modal-->
    <SearchModal :open="openSearch" :close-modal="() => (openSearch = false)" :conversation="activeConversation"/>

    <!--Contact info modal-->
    <ConversationInfoModal :open="openInfo" :closeModal="() => (openInfo = false)" :conversation="activeConversation"/>

    <!--voice call modal-->
    <VoiceCallModal :open="getOpenVoiceCall" :close-modal="handleCloseVoiceCallModal" />
  </div>
</template>



<script>

  import ConversationInfoModal    from "@/components/dashboard/messenger/modals/ConversationInfoModal/ConversationInfoModal.vue";
  import SearchModal              from "@/components/dashboard/messenger/modals/SearchModal/SearchModal.vue";
  import VoiceCallModal           from "@/components/dashboard/messenger/modals/VoiceCallModal/VoiceCallModal.vue";
  import PinnedMessage            from "@/components/dashboard/messenger/Chat/ChatTop/PinnedMessage.vue";
  import ConversationInfoSection  from "@/components/dashboard/messenger/Chat/ChatTop/ConversationInfoSection.vue";
  import SelectSection            from "@/components/dashboard/messenger/Chat/ChatTop/SelectSection.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      ConversationInfoModal,
      SearchModal,
      VoiceCallModal,
      PinnedMessage,
      ConversationInfoSection,
      SelectSection,
    },

    props: {
      selectMode: Boolean,
      selectAll: Boolean,
      handleSelectAll: Function,
      handleDeselectAll: Function,
      handleCloseSelect: Function,
    },

    data() {
      return {
        activeConversation: [],
        openSearch: false,
        openInfo: false,
      };
    },
    
    mounted() {
      this.activeConversation = this.getActiveConversation
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'setActiveCall',
        'setCallMinimized',
      ]),
      
      handleOpenSearch() {
        this.openSearch = true;
      },
      
      handleOpenInfo() {
        this.openInfo = true;
      },

      handleCloseVoiceCallModal(endCall) {
        if (endCall) {
          this.setActiveCall = undefined;
          this.setCallMinimized = false;
        }
        
        if (this.getOpenVoiceCall) {
          this.setOpenVoiceCall = false;
          this.setCallMinimized = true;
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getOpenVoiceCall',
        'getActiveConversation'
      ]),
    },

  }
</script>