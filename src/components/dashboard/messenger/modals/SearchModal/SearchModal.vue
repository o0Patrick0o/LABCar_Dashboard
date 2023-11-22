<template>
  <Modal :open="open" :close-modal="closeModal">
    <template v-slot:content>
      <div class="w-[300px] py-6 bg-white dark:bg-gray-800 rounded">
        <!--header-->
        <div class="mb-6 px-5 flex justify-between items-center">
          <Typography id="modal-title" variant="heading-1" tabindex="0">
            Messages
          </Typography>

          <CButton @click="closeModal" variant="outlined" color="danger" typography="body-4">
            esc
          </CButton>
        </div>

        <!--search-->
        <div class="mx-5 mb-5">
          <SearchInput />
        </div>

        <!--message-->
        <ScrollBox class="max-h-[230px] overflow-y-scroll">
          <MessageItem v-if="conversation.messages.length > 0" v-for="(message, index) in props.conversation.messages" :message="message" :key="index"/>

          <NoMessage vertical v-else />
        </ScrollBox>
      </div>
    </template>
  </Modal>
</template>



<script>

import NoMessage    from "@/components/dashboard/messenger/states/empty-states/NoMessage.vue";
import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
import CButton      from "@/components/dashboard/messenger/base/basics/Button.vue";
import SearchInput  from "@/components/dashboard/messenger/base/basics/SearchInput.vue";
import Modal        from "@/components/dashboard/messenger/modals/Modal.vue";
import MessageItem  from "@/components/dashboard/messenger/modals/SearchModal/MessageItem.vue";
import ScrollBox    from "@/components/dashboard/messenger/base/utils/ScrollBox.vue";

  export default {
    
    components: {
      NoMessage,
      Typography,
      CButton,
      SearchInput,
      Modal,
      MessageItem,
      ScrollBox,
    },

    props: {
      open: Boolean,
      closeModal: Function,
      conversation: Object,
    },
  }
</script>