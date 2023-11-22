<template>
  <div class="select-none">
    <div class="xs:mb-6 md:mb-5 flex" :class="{ 'justify-end': self }">
      <div class="mr-4" :class="{ 'ml-[36px]': followUp && !divider }">
        <div v-if="!hideAvatar()" :aria-label="getFullName(message.sender)" class="outline-none">
          <div :style="{ backgroundImage: `url(${message.sender.avatar})` }" class="w-[36px] h-[36px] bg-cover bg-center rounded-full"></div>
        </div>
      </div>

      <div class="flex items-end">
        <div @click="handleCloseContextMenu" v-click-outside="contextConfig" @contextmenu.prevent="handleShowContextMenu" class="group max-w-[500px] p-5 rounded-b transition duration-500"
          :class="{ 'rounded-tl ml-4 order-2 bg-indigo-50 dark:bg-gray-600': self && !selected, 'rounded-tr mr-4 bg-gray-50 dark:bg-gray-600': !self && !selected,
          'rounded-tl ml-4 order-2 bg-indigo-200 dark:bg-indigo-500': self && selected, 'rounded-tr mr-4 bg-indigo-200 dark:bg-indigo-500': !self && selected }">
  
          <MessagePreview v-if="replyMessage" :message="replyMessage" :self="self" class="mb-5 px-3"/>

          <Typography variant="body-2" noColor v-if="message.content && message.type !== 'recording'" class="outline-none text-black opacity-60 dark:text-white dark:opacity-70" tabindex="0"></Typography>

          <div v-else-if="message.content && message.type === 'recording'">
            <Recording :recording="message.content" :self="self"/>
          </div>

          <!--attachments-->
          <Attachments v-if="message.attachments ?.length > 0" :message="message" :self="self"/>

          <!--link preview-->
          <LinkPreview v-if="message.previewData && !message.attachments" :self="self" :preview-data="message.previewData" class="mt-5" />
        </div>

        <!--date-->
        <div :class="self ? ['ml-4', 'order-1'] : ['mr-4']">
          <Typography variant="body-1" class="whitespace-pre">
            {{ message.date }}
          </Typography>
        </div>

        <!--read receipt-->
        <Receipt v-if="self" :state="message.state" />
      </div>
    </div>
    <MessageContextMenu :selected="selected" :message="message" :show="showContextMenu" :left="contextMenuCoordinations.x" :top="contextMenuCoordinations.y"
    :handle-close-context-menu="handleCloseContextMenu" :handle-select-message="handleSelectMessage" :handle-deselect-message="handleDeselectMessage"/>
  </div>
</template>



<script>

  import Typography         from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import Attachments        from "@/components/dashboard/messenger/Chat/ChatMiddle/Message/Attachments.vue";
  import LinkPreview        from "@/components/dashboard/messenger/Chat/ChatMiddle/Message/LinkPreview.vue";
  import MessageContextMenu from "@/components/dashboard/messenger/Chat/ChatMiddle/Message/MessageContextMenu.vue";
  import Recording          from "@/components/dashboard/messenger/Chat/ChatMiddle/Message/Recording.vue";
  import MessagePreview     from "@/components/dashboard/messenger/Chat/MessagePreview.vue";
  import Receipt            from "@/components/dashboard/messenger/Chat/ChatMiddle/Message/Receipt.vue";


  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
      Attachments,
      LinkPreview,
      MessageContextMenu,
      Recording,
      MessagePreview,
      Receipt,
    },

    props: {
      message: Object,
      followUp: Boolean,
      self: Boolean,
      divider: Boolean,
      selected: Boolean,
      handleSelectMessage: Function,
      handleDeselectMessage: Function,
    },

    data() {
      return {
        activeConversation: inject("activeConversation"),
        showContextMenu: false,
        contextMenuCoordinations: { x: 0, y: 0 },
        contextConfig: { handler: this.handleCloseContextMenu, events: ["contextmenu"] },
        replyMessage: this.getMessageById(this.activeConversation, this.message.replyTo),
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getFullName',
        'getMessageById',
      ]),
      
      handleShowContextMenu(event) {
        this.showContextMenu = true;
        this.contextMenuCoordinations = { x: window.innerWidth - 220 <= event.pageX ? window.innerWidth - 250 : event.pageX, 
          y: window.innerHeight - 300 <= event.pageY ? window.innerHeight - 250 : event.pageY };
      },
      
      handleCloseContextMenu() {
        this.showContextMenu = false;
      },
      
      hideAvatar() {
        if (this.divider && !this.self) {
          return false;
        } else {
          if (this.followUp) {
            return true;
          }
          if (this.self) {
            return true;
          }
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),
    },

  }
</script>