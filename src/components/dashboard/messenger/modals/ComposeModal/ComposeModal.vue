<template>
  <Modal :open="props.open" :close-modal="props.closeModal">
    <template v-slot:content>
      <div class="w-[300px] bg-white dark:bg-gray-800 rounded pt-6">
        <!--header-->
        <div class="flex justify-between items-center mb-6 px-5">
          <Typography id="modal-title" variant="heading-1" ref="modalTitle" class="default-outline" tabindex="0">
            Compose
          </Typography>

          <CButton @click="props.closeModal" variant="outlined" color="danger" typography="body-4">
            esc
          </CButton>
        </div>

        <!--tabs-->
        <div class="px-5 pb-5">
          <div class="flex items-center p-2 bg-gray-50 rounded-sm dark:bg-gray-700">
            <button @click="switchTab('contacts')" class="basis-1/2 p-4 rounded-sm text-md outline-none leading-4 tracking-[0.16px] transition-all duration-200 focus:outline-none mr-1"
              :class="activeTabName === 'contacts' ? ['bg-indigo-400', 'text-white'] : [ 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70']">
              Contact
            </button>
            <button @click="switchTab('group')" class="basis-1/2 p-4 rounded-sm text-md leading-4 tracking-[0.16px] transition-all duration-200 outline-none focus:outline-none"
            :class="activeTabName === 'group' ? ['bg-indigo-400', 'text-white'] : ['text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70']">
              Group
            </button>
          </div>
        </div>

        <!--ActiveTab-->
        <FadeTransition>
          <component :is="activeTab" />
        </FadeTransition>
      </div>
    </template>
  </Modal>
</template>



<script>

  import Contacts       from "@/components/dashboard/messenger/modals/ComposeModal/Contacts.vue";
  import Group          from "@/components/dashboard/messenger/modals/ComposeModal/Group.vue";
  import Typography     from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CButton        from "@/components/dashboard/messenger/base/basics/Button.vue";
  import FadeTransition from "@/components/dashboard/messenger/base/transitions/FadeTransition.vue";
  import Modal          from "@/components/dashboard/messenger/modals/Modal.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Contacts,
      Group,
      Typography,
      CButton,
      FadeTransition,
      Modal,
    },

    props: {
      open: Boolean,
      closeModal: Function,
    },

    data() {
      return {
        modalTitle: null,
        activeTabName: "contacts",
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
        'getFullName',
        'getName',
        'getOddContact',
      ]),

      switchTab(tabName) {
        this.activeTabName = tabName;
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),

      activeTab() {
        if (this.activeTabName === "contacts") {
          return Contacts;
        } else {
          return Group;
        }
      },
    },

  }
</script>