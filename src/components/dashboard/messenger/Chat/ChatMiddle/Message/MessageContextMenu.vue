<template>
  <Dropdown :close-dropdown="handleCloseContextMenu" :handle-click-outside="handleCloseContextMenu" :show="show" :coordinates="{ left: left + 'px', top: top + 'px' }" :position="['top-0']">
    <DropdownLink :handle-click="handleReplyToMessage">
      <font-awesome-icon icon="fa-solid fa-reply" class="h-5 w-5 mr-3"/>
      Reply
    </DropdownLink>

    <DropdownLink :handle-click="handleCloseContextMenu">
      <font-awesome-icon icon="fa-regular fa-bookmark" class="h-5 w-5 mr-3"/>
      Copy
    </DropdownLink>

    <DropdownLink :handle-click="handlePinMessage">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
      </svg>
      Pin
    </DropdownLink>

    <DropdownLink v-if="selected" :handle-click="() => { handleCloseContextMenu(); props.handleDeselectMessage(props.message.id); }">
      <font-awesome-icon icon="fa-regular fa-circle-xmark" class="h-5 w-5 mr-3"/>
      Deselect
    </DropdownLink>

    <DropdownLink v-else :handle-click="() => { handleCloseContextMenu(); props.handleSelectMessage(props.message.id); }">
      <font-awesome-icon icon="fa-regular fa-circle-check" class="h-5 w-5 mr-3"/>
      Select
    </DropdownLink>

    <DropdownLink :handle-click="handleCloseContextMenu" color="danger">
      <font-awesome-icon icon="fa-solid fa-trash" class="h-5 w-5 mr-3"/>
      Delete Message
    </DropdownLink>
  </Dropdown>
</template>



<script>

  import Dropdown from "@/components/dashboard/messenger/base/Dropdown/Dropdown.vue";
  import DropdownLink from "@/components/dashboard/messenger/base/Dropdown/DropdownLink.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Dropdown,
      DropdownLink,
    },

    props: {
      message: Object,
      show: Boolean,
      left: Number,
      top: Number,
      selected: Boolean,
      handleCloseContextMenu: Function,
      handleSelectMessage: Function,
      handleDeselectMessage: Function,
    },

    data() {
      return {
        activeConversation: inject("activeConversation"),
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getConversationIndex',
      ]),
      
      handlePinMessage() {
        this.handleCloseContextMenu();
        if (this.activeConversation) {
          let activeConversationIndex = this.getConversationIndex(this.activeConversation.id);
          if ( this.getConversations && activeConversationIndex !== undefined && activeConversationIndex !== null ) {
            this.getConversations[activeConversationIndex].pinnedMessage = this.message;
            this.getConversations[activeConversationIndex].pinnedMessageHidden = false;
          }
        }
      },
      
      handleReplyToMessage() {
        this.handleCloseContextMenu();
        if (this.activeConversation) {
          let activeConversationIndex = this.getConversationIndex(this.activeConversation.id);
          if ( this.getConversations && activeConversationIndex !== undefined && activeConversationIndex !== null) {
            this.getConversations[activeConversationIndex].replyMessage = this.message;
          }
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getConversations',
      ]),

    },

  }
</script>