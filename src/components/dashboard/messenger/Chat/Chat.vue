<template>
  <div v-if="activeConversation" class="h-full flex flex-col scrollbar-hidden">
    <ChatTop :select-all="selectAll" :select-mode="selectMode" :handle-select-all="handleSelectAll" :handle-deselect-all="handleDeselectAll" :handle-close-select="handleCloseSelect"/>
    <ChatMiddle :selected-messages="selectedMessages" :handle-select-message="handleSelectMessage" :handle-deselect-message="handleDeselectMessage" />
    <ChatBottom />
  </div>
</template>



<script>

  import ChatBottom from "@/components/dashboard/messenger/Chat/ChatBottom/ChatBottom.vue";
  import ChatMiddle from "@/components/dashboard/messenger/Chat/ChatMiddle/ChatMiddle.vue";
  import ChatTop    from "@/components/dashboard/messenger/Chat/ChatTop/ChatTop.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      ChatBottom,
      ChatMiddle,
      ChatTop,
    },

    data() {
      return {
        selectMode: false,
        selectAll: false,
        selectedMessages: [],
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
        'setActiveConversation',
      ]),

      handleSelectMessage(messageId) {
        this.selectedMessages.push(messageId);
        if (this.activeConversation && this.selectedMessages.length === this.activeConversation.messages.length) {
          this.selectAll = true;
        }
        if (!this.selectMode) {
          this.selectMode = true;
        }
      },
      
      handleDeselectMessage(messageId) {
        this.selectAll = false;
        this.selectedMessages = this.selectedMessages.filter( (item) => item !== messageId);
        if (this.activeConversation && this.selectedMessages.length === 0) {
          this.selectMode = false;
        }
      },
      
      handleSelectAll() {
        if (this.activeConversation) {
          const messages = this.activeConversation.messages.map((message) => message.id);
          this.selectedMessages = messages;
          this.selectAll = true;
        }
      },
      
      handleDeselectAll() {
        this.selectAll = false;
        this.selectedMessages = [];
      },
      
      handleCloseSelect() {
        this.selectMode = false;
        this.selectAll = false;
        this.selectedMessages = [];
      }
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
        'getActiveConversationId',
        'getConversations'
      ]),
      
      activeConversation() {
        let activeConversation = this.getConversations.find( (conversation) => conversation.id === this.getActiveConversationId);
        if (activeConversation) {
          this.setActiveConversation(activeConversation);
          return activeConversation;
        } else {
          var temp = this.getArchive.find((conversation) => conversation.id === this.getActiveConversationId);
          this.setActiveConversation(temp);
          return temp
        }
      },
    },

  }
</script>


