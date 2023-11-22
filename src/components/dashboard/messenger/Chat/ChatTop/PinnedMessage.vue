<template>
  <SlideTransition animation="shelf-down">
    <div class="absolute z-10 w-full px-5 py-2 bg-white dark:bg-gray-800 flex items-center justify-between transition-all duration-500" v-if=" activeConversation.pinnedMessage && !activeConversation.pinnedMessageHidden">

      <MessagePreview :message="activeConversation?.pinnedMessage" />

      <div class="flex">

        <IconButton title="hide pinned message" aria-label="hide pinned message" @click="handleHidePinnedMessage" class="group w-7 h-7 text-gray-300" :class="{'mr-3': store.user && activeConversation?.admins?.includes(store.user.id) }">
          <font-awesome-icon icon="fa-regular fa-eye-slash" class="w-[16px] h-[16px]"/>
        </IconButton>

        <!--remove pinned Message-->
        <IconButton v-if="store.user && activeConversation?.admins?.includes(store.user.id)" @click="handleRemovePinnedMessage" class="group w-7 h-7" title="close pinned message" aria-label="close pinned message">
          <font-awesome-icon icon="fa-regular fa-circle-xmark" class="w-[16px] h-[16px] text-gray-300 group-hover:text-red-300"/>
        </IconButton>
      </div>
    </div>
  </SlideTransition>
</template>



<script>

  import IconButton       from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import SlideTransition  from "@/components/dashboard/messenger/base/transitions/SlideTransition.vue";
  import MessagePreview   from "@/components/dashboard/messenger/Chat/MessagePreview.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      IconButton,
      SlideTransition,
      MessagePreview,
    },

    props: {
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
      
      handleHidePinnedMessage() {
        if (this.activeConversation) {
          let activeConversationIndex = this.getConversationIndex(this.activeConversation.id);
          if (this.getConversations && activeConversationIndex !== undefined && activeConversationIndex !== null) {
            this.getConversations[activeConversationIndex].pinnedMessageHidden = true;
          }
        }
      },
      
      handleRemovePinnedMessage() {
        if (this.activeConversation) {
          let activeConversationIndex = this.getConversationIndex(this.activeConversation.id);
          if (this.getConversations && activeConversationIndex !== undefined && activeConversationIndex !== null) {
            this.getConversations[activeConversationIndex].pinnedMessage = undefined;
          }
        }
      }
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getConversations',
      ]),
    },

  }
</script>