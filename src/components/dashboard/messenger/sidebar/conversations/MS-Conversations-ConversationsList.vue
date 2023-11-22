<template>
  <div>
    <Conversation v-for="conversation in filteredConversations" :conversation="conversation" :key="conversation.id" role="listitem" :handle-conversation-change="props.handleConversationChange" :is-active="activeId === conversation.id" />
  </div>
</template>



<script>

  import Conversation from "@/components/dashboard/messenger/sidebar/conversations/MS-Conversationslist-Conversation.vue";

  export default {
    
    components: {
      Conversation,
    },

    props: {
      filteredConversations: { type: Object, default: () => ({ id: Number, type: String, name: String, avatar: String, admins: Array, contacts: Object, messages: Object, pinnedMessage: Object, pinnedMessageHidden: Boolean,  replyMessage: Object, unread: Number, draftMessage: String}) },
      handleConversationChange: Function,
      activeId: Number,
    },
  }
</script>