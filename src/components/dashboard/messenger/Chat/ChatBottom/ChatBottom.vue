<template>
  <div class="w-full">
    <div class="relative transition-all duration-200" :class="{ 'pt-[60px]': activeConversation?.replyMessage }">
      <ReplyMessage />
    </div>

    <div class="h-auto min-h-[84px] p-5 flex items-end" v-if="store.status !== 'loading'" :class="recording ? ['justify-between'] : []">
      <div class="min-h-[44px]">
        <IconButton title="open select attachments modal" aria-label="open select attachments modal" @click="openAttachmentsModal = true" v-if="!recording" class="group w-7 h-7 md:mr-5 xs:mr-4">
          <font-awesome-icon icon="fa-solid fa-paperclip" class="w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300"/>
        </IconButton>


        <Typography v-if="recording" variant="body-1" no-color class="text-indigo-300">00:11</Typography>
      </div>

      <div class="grow md:mr-5 xs:mr-4 self-end" v-if="!recording">
        <div class="relative">
          <CTextarea v-model="value" @input="handleSetDraft" :value="value" class="max-h-[80px] pr-[50px] resize-none scrollbar-hidden" auto-resize cols="30" rows="1" 
          placeholder="Write your message here" aria-label="Write your message here"/>

          <div class="absolute bottom-[13px] right-0">
            <IconButton title="toggle emoji picker" aria-label="toggle emoji picker" @click="showPicker = !showPicker" class="toggle-picker-button group w-7 h-7 md:mr-5 xs:mr-4">
              <font-awesome-icon icon="fa-regular fa-circle-xmark" v-if="showPicker" class="w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300"/>
              <font-awesome-icon icon="fa-regular fa-face-smile" v-else class="w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300"/>
            </IconButton>

            <!--emoji picker-->
            <ScaleTransition>
              <div v-click-outside="handleClickOutside" v-show="showPicker" class="absolute z-10 bottom-[55px] md:right-0 xs:right-[-80px] mt-2">
                <div role="none">
                  <EmojiPicker :show="showPicker" />
                </div>
              </div>
            </ScaleTransition>
          </div>
        </div>
      </div>

      <div class="min-h-[44px]">
        <div v-if="recording" @click="handleCancelRecording">
          <CButton variant="ghost" color="danger"> Cancel </CButton>
        </div>
      </div>

      <div class="min-h-[44px] flex">
        <IconButton title="finish recording" aria-label="finish recording" v-if="recording" @click="handleToggleRecording" 
        class="relative group w-7 h-7 flex justify-center items-center outline-none rounded-full bg-indigo-300 hover:bg-green-300 dark:hover:bg-green-400 dark:focus:bg-green-400 focus:outline-none transition-all duration-200">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 group-hover:bg-green-300 opacity-40"></span>
          <font-awesome-icon icon="fa-solid fa-microphone" class="w-[20px] h-[20px] text-white group-hover:hidden"/>
          <font-awesome-icon icon="fa-solid fa-check" class="w-[20px] h-[20px] hidden text-white group-hover:block"/>
        </IconButton>

        <IconButton v-else @click="handleToggleRecording" title="start recording" aria-label="start recording" class="group w-7 h-7 md:mr-5 xs:mr-4">
          <font-awesome-icon icon="fa-solid fa-microphone" class="w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300"/>
        </IconButton>

        <IconButton v-if="!recording" class="group w-7 h-7 bg-indigo-300 hover:bg-indigo-400 focus:bg-indigo-400 dark:focus:bg-indigo-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 active:scale-110"
          variant="ghost" title="send message" aria-label="send message">
          <font-awesome-icon icon="fa-regular fa-paper-plane" class="w-[17px] h-[17px] text-white"/>
        </IconButton>
      </div>
    </div>

    <AttachmentsModal :open="openAttachmentsModal" :close-modal="() => (openAttachmentsModal = false)"/>
  </div>
</template>



<script>
  import AttachmentsModal from "@/components/dashboard/messenger/modals/AttachmentsModal/AttachmentsModal.vue";
  import Typography       from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CButton          from "@/components/dashboard/messenger/base/basics/Button.vue";
  import IconButton       from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import ScaleTransition  from "@/components/dashboard/messenger/base/transitions/ScaleTransition.vue";
  import ReplyMessage     from "@/components/dashboard/messenger/Chat/ChatBottom/ReplyMessage.vue";
  import EmojiPicker      from "@/components/dashboard/messenger/base/EmojiPicker/Messenger-EmojiPicker.vue";
  import CTextarea        from "@/components/dashboard/messenger/base/basics/Textarea.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      AttachmentsModal,
      Typography,
      CButton,
      IconButton,
      ScaleTransition,
      ReplyMessage,
      EmojiPicker,
      CTextarea,
    },

    props: {},

    data() {
      return {
        activeConversation: inject("activeConversation"),
        value: "",   
        recording: false,
        showPicker: false,
        openAttachmentsModal: false,
      };
    },

    mounted() {
      this.value = this.activeConversation.draftMessage;
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getConversationIndex',
      ]),
      
      handleToggleRecording() {
        this.recording = !this.recording;
      },
      
      handleCancelRecording() {
        this.recording = false;
      },
      
      handleClickOutside(event) {
        let target = event.target;
        let parent = target.parentElement;
        
        if ( target && !target.classList.contains("toggle-picker-button") &&  parent &&  !parent.classList.contains("toggle-picker-button")) {
          this.showPicker = false;
        }
      },
      
      handleSetDraft() {
        const index = this.getConversationIndex(this.activeConversation.id);
        if (index !== undefined) {
          this.getConversations[index].draftMessage = this.value;
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



<style>
input[placeholder="Search emoji"] {
  background: rgba(0, 0, 0, 0);
}

.v3-emoji-picker .v3-header {
  border-bottom: 0;
}

.v3-emoji-picker .v3-footer {
  border-top: 0;
}
</style>
