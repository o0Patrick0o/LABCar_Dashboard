<template>
  <div ref="container" class="grow px-5 py-5 flex flex-col overflow-y-scroll scrollbar-hidden">
    <div v-for="(message, index) in activeConversation.messages" :key="index">
      <TimelineDivider v-if="renderDivider(index, index - 1)" />

      <Message :message="message" :self="isSelf(message)" :follow-up="isFollowUp(index, index - 1)" :divider="renderDivider(index, index - 1)" 
      :selected="props.selectedMessages.includes(message.id)" :handle-select-message="handleSelectMessage" :handle-deselect-message="handleDeselectMessage"/>
    </div>
  </div>
</template>


<script>

  import Message          from "@/components/dashboard/messenger/Chat/ChatMiddle/Message/Message.vue";
  import TimelineDivider  from "@/components/dashboard/messenger/Chat/ChatMiddle/TimelineDivider.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Message,
      TimelineDivider,
    },

    props: {
      handleSelectMessage: Function,
      handleDeselectMessage: Function,
      selectedMessages: [],
    },

    data() {
      return {
        container: null,
        activeConversation: inject("activeConversation"),
      };
    },

    mounted(){
      this.container.scrollTop = this.container.scrollHeight;
    },

    methods: {
      ...mapActions(useMessengerStore, [
      ]),
      
      isFollowUp(index, previousIndex) {
        if (previousIndex < 0) {
          return false;
        } else {
          let previousSender = this.activeConversation.messages[previousIndex].sender.id;
          let currentSender = this.activeConversation.messages[index].sender.id;
          return previousSender === currentSender;
        }
      },
      
      isSelf(message) {
        return Boolean(this.getUser && message.sender.id === this.getUser.id);
      },
      
      renderDivider(index) {
        if (index === 3) {
          return true;
        } else {
          return false;
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getUser',
      ]),

    },

  }
</script>