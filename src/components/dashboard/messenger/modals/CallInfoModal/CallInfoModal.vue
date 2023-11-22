<template>
  <Modal :open="props.open" :closeModal="props.closeModal">
    <template v-slot:content>
      <div class="w-[300px] py-6 overflow-x-hidden rounded bg-white dark:bg-gray-800" >
        <!--modal content-->
        <SlideTransition :animation="animation">
          <component @active-page-change="changeActiveTab" :is="ActivePage" :call="props.call" :close-modal="closeModal"/>
        </SlideTransition>

        <!--Call agian button-->
        <div class="px-5">
          <Button color="success" class="w-full py-4"> Call again </Button>
        </div>
      </div>
    </template>
  </Modal>
</template>



<script>

  import CallInfo         from "@/components/dashboard/messenger/modals/CallInfoModal/CallInfo.vue";
  import CallMembers      from "@/components/dashboard/messenger/modals/CallInfoModal/CallMembers.vue";
  import CButton          from "@/components/dashboard/messenger/base/basics/Button.vue";
  import SlideTransition  from "@/components/dashboard/messenger/base/transitions/SlideTransition.vue";
  import Modal            from "@/components/dashboard/messenger/modals/Modal.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      CallInfo,
      CallMembers,
      CButton,
      SlideTransition,
      Modal,
    },

    props: {
      call: Object,
      open: Boolean,
      closeModal: Function,
    },

    data() {
      return {
        activePageName: "call-info",
        animation: "slide-left",
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
      ]),

      changeActiveTab(event) {
        this.animation = event.animationName;
        this.activePageName = event.tabName;
      },

      activePage() {
        if (this.activePageName === "call-info") {
          return CallInfo;
        } else if (this.activePageName === "call-members") {
          return CallMembers;
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