<template>
  <SlideTransition animation="shelf-up">
    <div class="absolute bottom-0 w-full px-5 py-2 bg-white dark:bg-gray-800 flex items-center justify-between transition-all duration-200" v-if="activeConversation?.replyMessage">
      <!--selected message overview-->
      <MessagePreview :message="activeConversation?.replyMessage" />

      <!--close selected Message-->
      <IconButton @click="removeReplyMessage" class="group w-7 h-7" title="remove reply" aria-label="remove reply">
        <font-awesome-icon icon="fa-regular fa-circle-xmark" class="w-[16px] h-[16px] text-gray-300 group-hover:text-red-300"/>
      </IconButton>
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

      removeReplyMessage() {
        if (this.activeConversation) {
          let activeConversationIndex = this.getConversationIndex(this.activeConversation.id);
          if ( this.getConversations && activeConversationIndex !== undefined && activeConversationIndex !== null ) { 
            this.getConversations[activeConversationIndex].replyMessage = undefined;
          }
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getConversations'
      ]),
    },

  }
</script>