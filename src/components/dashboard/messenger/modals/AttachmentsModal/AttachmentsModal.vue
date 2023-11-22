<template>
  <Modal :open="open" :close-modal="closeModal">
    <template v-slot:content>
      <div class="w-[400px] bg-white dark:bg-gray-800 rounded py-6">
        <!--attachments list-->
        <ScrollBox class="max-h-[140px] overflow-y-scroll">
          <Attachment v-for="(attachment, index) in attachments" :attachment="attachment" :key="index" />
        </ScrollBox>

        <!--caption button-->
        <div class="px-5 py-6">
          <TextInput placeholder="Caption" type="text" />
        </div>

        <!--Action buttons-->
        <div class="flex w-full px-5">
          <div class="grow flex justify-start">
            <CButton variant="ghost"> Add </CButton>
          </div>

          <CButton variant="ghost" @click="closeModal" class="mr-4">
            Cancel
          </CButton>

          <CButton> Send </CButton>
        </div>
      </div>
    </template>
  </Modal>
</template>



<script>

  import Attachment from "@/components/dashboard/messenger/modals/AttachmentsModal/Attachment.vue";
  import CButton    from "@/components/dashboard/messenger/base/basics/Button.vue";
  import TextInput  from "@/components/dashboard/messenger/base/basics/TextInput.vue";
  import Modal      from "@/components/dashboard/messenger/modals/Modal.vue";
  import ScrollBox  from "@/components/dashboard/messenger/base/utils/ScrollBox.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Attachment,
      CButton,
      TextInput,
      Modal,
      ScrollBox,
    },

    props: {
      open: Boolean,
      closeModal: Function,
    },

    data() {
      return {
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getAttachments',
      ]),

    },

  }
</script>