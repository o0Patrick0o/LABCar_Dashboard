<template>
  <Modal :open="open" :closeModal="closeModal">
    <template v-slot:content>
      <div class="w-[300px] py-6 bg-white dark:bg-gray-800 rounded">
        <!--modal header-->
        <div class="flex justify-between items-center mb-6 px-5">
          <Typography id="modal-title" variant="heading-1" class="default-outline" tabindex="0">
            Contacts
          </Typography>

          <!--close button-->
          <CButton @click="props.closeModal" variant="outlined" color="danger" typography="body-4">
            esc
          </CButton>
        </div>

        <!--search-->
        <div class="mb-5 mx-5">
          <SearchInput />
        </div>

        <!--contacts-->
        <ScrollBox ref="contactContainer" class="max-h-[216px] mb-5 overflow-y-scroll">

          <ContactItem v-for="(contact, index) in this.getUser.contacts" :contact="contact" @click="handleSelectedContactsChange(contact)" :active="isContactSelected(contact)" :key="index">
            <template v-slot:checkbox>
              <Checkbox :value="isContactSelected(contact)" />
            </template>
          </ContactItem>
        </ScrollBox>

        <!--call button-->
        <div class="px-5">
          <Button color="success" class="w-full py-4"> Call </Button>
        </div>
      </div>
    </template>
  </Modal>
</template>



<script>

  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CButton      from "@/components/dashboard/messenger/base/basics/Button.vue";
  import Checkbox     from "@/components/dashboard/messenger/base/basics/Checkbox.vue";
  import SearchInput  from "@/components/dashboard/messenger/base/basics/SearchInput.vue";
  import Modal        from "@/components/dashboard/messenger/modals/Modal.vue";
  import ContactItem  from "@/components/dashboard/messenger/base/blocks/ContactItem.vue";
  import ScrollBox    from "@/components/dashboard/messenger/base/utils/ScrollBox.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
      CButton,
      Checkbox,
      SearchInput,
      Modal,
      ContactItem,
      ScrollBox,
    },

    props: {
      closeModal: Function,
      open: Boolean,
    },

    data() {
      return {
        selectedContacts: [],
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getName',
      ]),
      
      isContactSelected(contact) {
        if (contact) {
          return Boolean(this.selectedContacts.find((item) => item.id === contact.id));
        } else {
          return false;
        }
      },
      
      handleSelectedContactsChange(contact) {
        let contactIndex = this.selectedContacts.findIndex((item) => item.id === contact.id);
        if (contactIndex !== -1) {
          this.selectedContacts.splice(contactIndex, 1);
        } else {
          this.selectedContacts.push(contact);
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getUser'
      ]),
    },
  }
</script>