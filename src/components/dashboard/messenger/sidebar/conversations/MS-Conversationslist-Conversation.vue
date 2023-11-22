<template>
  <div class="select-none">
    <button :aria-label="'conversation with' + getName(conversation)" tabindex="0" v-click-outside="contextConfig" @contextmenu.prevent="handleShowContextMenu" @click=" ($event) => { handleRemoveUnread(); handleSelectConversation(); }" 
    class="w-full h-[92px] px-5 py-6 mb-3 flex rounded focus:bg-indigo-50 dark:active:bg-gray-600 dark:focus:bg-gray-600 dark:hover:bg-gray-600 hover:bg-indigo-50 active:bg-indigo-100 focus:outline-none transition duration-500 ease-out" 
    :class="{ 'md:bg-indigo-50': isActive, 'md:dark:bg-gray-600': isActive, }">
      <!--profile image-->
      <div class="mr-4">
        <div :style="{ backgroundImage: `url(${getAvatar(conversation)})` }" class="w-7 h-7 rounded-full bg-cover bg-center"></div>
      </div>

      <div class="w-full flex flex-col">
        <div class="w-full">
          <!--conversation name-->
          <div class="flex items-start">
            <div class="grow mb-4 text-start">
              <Typography variant="heading-2">
                {{ getName(props.conversation) }}
              </Typography>
            </div>

            <!--last message date-->
            <Typography variant="body-1">
              {{ lastMessage?.date }}
            </Typography>
          </div>
        </div>

        <div class="flex justify-between">
          <div>
            <!--draft Message-->
            <Typography v-if="conversation.draftMessage && conversation.id !== getActiveConversationId" variant="body-2" class="flex justify-start items-center text-red-400" no-color>
              draft: {{ shorten(conversation.draftMessage) }}
            </Typography>

            <!--recording name-->
            <Typography v-else-if="lastMessage.type === 'recording' && lastMessage.content" variant="body-2" class="flex justify-start items-center">
              <font-awesome-icon icon="fa-solid fa-microphone" class="w-4 h-4 mr-2 text-black opacity-60 dark:text-white dark:opacity-70" :class="{ 'text-indigo-400': conversation.unread }"/>
              <span :class="{ 'text-indigo-400': conversation.unread }">
                Recording
                {{ lastMessage.content.duration }}
              </span>
            </Typography>

            <!--attachments title-->
            <Typography v-else-if="hasAttachments(lastMessage)" variant="body-2" class="flex justify-start items-center" :class="{ 'text-indigo-400': conversation.unread }">
              <span :class="{ 'text-indigo-400': conversation.unread }">
                {{ lastMessage?.attachments[0].name }}
              </span>
            </Typography>

            <!--last message content -->
            <Typography v-else variant="body-2" class="flex justify-start items-center" :class="{ 'text-indigo-400': conversation.unread }">
              <span :class="{ 'text-indigo-400': conversation.unread }">
                {{ shorten(lastMessage) }}
              </span>
            </Typography>
          </div>

          <div v-if="props.conversation.unread">
            <div class="w-[18px] h-[18px] flex justify-center items-center rounded-[50%] bg-indigo-300">
              <Typography variant="body-1" no-color class="text-white">
                {{ conversation.unread }}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </button>

    <!--custom context menu-->
    <Dropdown :close-dropdown="() => (showContextMenu = false)" :show="showContextMenu" :handle-close="handleCloseContextMenu" :handle-click-outside="handleCloseContextMenu" 
    :coordinates="{ left: contextMenuCoordinations?.x + 'px', top: contextMenuCoordinations?.y + 'px', }" :position="['top-0']">
      <DropdownLink :handle-click="handleCloseContextMenu">
        <font-awesome-icon icon="fa-solid fa-circle-info" class="h-5 w-5 mr-3"/>
        Conversation info
      </DropdownLink>

      <DropdownLink :handle-click="handleCloseContextMenu">
        <font-awesome-icon icon="fa-solid fa-box-open" class="h-5 w-5 mr-3"/>
        Archive conversation
      </DropdownLink>

      <DropdownLink :handle-click="handleCloseContextMenu" color="danger">
        <font-awesome-icon icon="fa-solid fa-trash" class="h-5 w-5 mr-3"/>
        Delete conversation
      </DropdownLink>
    </Dropdown>
  </div>
</template>



<script>

  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import Dropdown     from "@/components/dashboard/messenger/base/Dropdown/Dropdown.vue";
  import DropdownLink from "@/components/dashboard/messenger/base/Dropdown/DropdownLink.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      DropdownLink,
      Dropdown,
      Typography,
    },

    props: {
      conversation: { type: Object, default: () => ({ id: Number, type: String, name: String, avatar: String, admins: Array, contacts: Object, messages: Object, pinnedMessage: Object, pinnedMessageHidden: Boolean,  replyMessage: Object, unread: Number, draftMessage: String}) },
      isActive: Boolean,
      handleConversationChange: Function,
    },

    data() {
      return {
        contextConfig: { handler: this.handleCloseContextMenu, events: ["contextmenu"] },
        showContextMenu: false,
        contextMenuCoordinations: { x: null, y: null },
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
          'getAvatar',
          'getName',
          'hasAttachments',
          'shorten',
          'getConversationIndex',
          'setConversationsUnread',
      ]),
      
      handleRemoveUnread() {
        let index = this.getConversationIndex(this.conversation.id);
        if (index !== undefined) {
          this.setConversationsUnread(index, 0);
        }
      },
      
      handleSelectConversation() {
        this.showContextMenu = false;
        if (this.handleConversationChange) {
          this.handleConversationChange(this.conversation.id);
        }
      },
      
      handleShowContextMenu(event) {
        this.showContextMenu = true;
        this.contextMenuCoordinations = { x: window.innerWidth - 205 <= event.pageX ? window.innerWidth - 220 : event.pageX, y: window.innerHeight - 125 <= event.pageY ? window.innerHeight - 200 : event.pageY, };
      },
      
      handleCloseContextMenu() {
        this.showContextMenu = false;
      },
      
      lastMessage() {
        this.conversation.messages[this.conversation.messages.length - 1]
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