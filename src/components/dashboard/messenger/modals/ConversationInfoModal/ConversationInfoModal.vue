<template>
  <Modal :open="props.open" :close-modal="props.closeModal">
    <template v-slot:content>
      <div class="overflow-x-hidden">
        <div class="w-[300px] bg-white dark:bg-gray-800 rounded py-6">
          <!--content-->
          <SlideTransition :animation="animation">
            <component @active-page-change="changeActiveTab" :is="ActivePage" :conversation="conversation" :close-modal="closeModal" :key="activePageName" :contact="selectedMember"/>
          </SlideTransition>
        </div>
      </div>
    </template>
  </Modal>
</template>



<script>

  import ConversationInfo from "@/components/dashboard/messenger/modals/ConversationInfoModal/ConversationInfo.vue";
  import EditGroupInfo    from "@/components/dashboard/messenger/modals/ConversationInfoModal/EditGroupInfo.vue";
  import Members          from "@/components/dashboard/messenger/modals/ConversationInfoModal/Members.vue";
  import SharedMedia      from "@/components/dashboard/messenger/modals/ConversationInfoModal/SharedMedia.vue";
  import Modal            from "@/components/dashboard/messenger/modals/Modal.vue";
  import SlideTransition  from "@/components/dashboard/messenger/base/transitions/SlideTransition.vue";


  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      ConversationInfo,
      EditGroupInfo,
      Members,
      SharedMedia,
      Modal,
      SlideTransition,
    },

    props: {
      open: Boolean,
      conversation: Object,
      closeModal: Function,
    },

    data() {
      return {
        selectedMember: undefined,
        activePageName: "conversation-info",
        animation: undefined,
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getFullName',
      ]),

      changeActiveTab(event) {

        this.animation = event.animationName;
        this.activePageName = event.tabName;

        if (event.contact) {
          this.selectedMember = event.contact;
        }

        if (event.removeContact) {
          this.selectedMember = undefined;
        }
      },

      ActivePage() {
        if (this.activePageName === "conversation-info") return ConversationInfo;
        else if (this.activePageName === "members") return Members;
        else if (this.activePageName === "group-member") return ConversationInfo;
        else if (this.activePageName === "shared-media") return SharedMedia;
        else if (this.activePageName === "edit-group") return EditGroupInfo;
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),
    },
  }
</script>