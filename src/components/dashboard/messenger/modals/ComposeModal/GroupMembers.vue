<template>
  <div>
    <!--search-->
    <div class="mx-5 mt-3 mb-5">
      <SearchInput />
    </div>

    <!--contacts-->
    <ScrollBox class="overflow-y-scroll max-h-[200px] mb-5">
      <ContactItem  v-for="(contact, index) in store.user.contacts" :contact="contact" @click="handleSelectedContactsChange(contact)" :active="isContactSelected(contact)" :key="index">
        <template v-slot:checkbox>
          <Checkbox :value="isContactSelected(contact)" />
        </template>
      </ContactItem>

    
    </ScrollBox>

    <div class="flex px-5 mt-5 pb-6">
      <div class="grow"></div>
      <!--previous button-->
      <CButton @click="$emit('active-page-change', { tabName: 'group-info', animationName: 'slide-right' })" variant="ghost" class="px-5 mr-4">
        <Typography variant="body-5" no-color> Previous </Typography>
      </CButton>

      <!--next button-->
      <CButton class="px-5 bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500">
        Finish
      </CButton>
    </div>
  </div>
</template>


<script>

  import SearchInput  from "@/components/dashboard/messenger/base/basics/SearchInput.vue";
  import ContactItem  from "@/components/dashboard/messenger/base/blocks/ContactItem.vue";
  import CButton      from "@/components/dashboard/messenger/base/basics/Button.vue";
  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import Checkbox     from "@/components/dashboard/messenger/base/basics/Checkbox.vue";
  import ScrollBox    from "@/components/dashboard/messenger/base/utils/ScrollBox.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      SearchInput,
      ContactItem,
      CButton,
      Typography,
      Checkbox,
      ScrollBox,
    },

    props: {},

    data() {
      return {
        selectedContacts: [],
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
        'getFullName',
        'getName',
        'getOddContact',
      ]),
      
      isContactSelected(contact) {
        if (contact) {
          return Boolean( this.selectedContacts.find((item) => item.id === contact.id) );
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
        'getUser',
      ]),

    },

  }
</script>