<template>
  <div class="px-5">
    <!--inputs-->
    <div class="mb-5">
      <div class="mb-5">
        <TextInput type="text" placeholder="Group name" label="Name" />
      </div>

      <div>
        <DropFileUpload label="Avatar" />
      </div>
    </div>

    <!--next button-->
    <div class="flex pb-6">
      <div class="grow"></div>
      <CButton @click="$emit('active-page-change', { tabName: 'group-members', animationName: 'slide-left'})" class="px-5 bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500">
        Next
      </CButton>
    </div>
  </div>
</template>


<script>

  import CButton        from "@/components/dashboard/messenger/base/basics/Button.vue";
  import DropFileUpload from "@/components/dashboard/messenger/base/basics/DropFileUpload.vue";
  import TextInput      from "@/components/dashboard/messenger/base/basics/TextInput.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      CButton,
      DropFileUpload,
      TextInput,
    },

    props: {
      conversation: Object,
      contact: Object,
      closeModal: Function,
    },

    data() {
      return {
        openImageViewer: false,
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
        'getFullName',
        'getName',
        'getOddContact',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),

      imageUrl() {
        if (this.contact) {
          return this.contact.avatar;
        } else {
          return this.getAvatar(this.conversation);
        }
      },
    },

  }
</script>