<template>
  <div>
    <SidebarHeader>
      <!--title-->
      <template v-slot:title>Contacts</template>

      <!--side actions-->
      <template v-slot:actions>
        <IconButton @click="openModal = true" class="w-7 h-7" title="add contacts" aria-label="add contacts">
          <font-awesome-icon icon="fa-solid fa-user-plus" class="w-[20px] h-[20px] text-indigo-300 hover:text-indigo-400"/>
        </IconButton>
      </template>
    </SidebarHeader>

    <!--search-->
    <div class="px-5 xs:pb-6 md:pb-5">
      <SearchInput v-model="searchText" />
    </div>

    <!--content-->
    <div ref="contactContainer" class="w-full h-full scroll-smooth scrollbar-hidden" style="overflow-x: visible; overflow-y: scroll">
      <SortedContacts v-if="getUser && getUser.contacts.length > 0" :contactGroups="filteredContactGroups" :bottom-edge="contactContainer?.getBoundingClientRect().bottom" />
      <NoContacts v-else />
    </div>

    <!--add contact modal-->
    <AddContactModal :open-modal="openModal" :close-modal="() => (openModal = false)"/>
  </div>
</template>



<script>

  import AddContactModal  from "@/components/dashboard/messenger/modals/AddContactModal.vue";
  import NoContacts       from "@/components/dashboard/messenger/states/empty-states/NoContacts.vue";
  import IconButton       from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import SearchInput      from "@/components/dashboard/messenger/base/basics/SearchInput.vue";
  import SortedContacts   from "@/components/dashboard/messenger/sidebar/contacts/MS-Contacts-SortedContacts.vue";
  import SidebarHeader    from "@/components/dashboard/messenger/sidebar/MSidebar-Header.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      AddContactModal,
      NoContacts,
      IconButton,
      SearchInput,
      SortedContacts,
      SidebarHeader
    },

    data() {
      return {
        searchText: "",
        openModal: false,
        contactContainer: null,
        filteredContactGroups: undefined,
      };
    },

    mounted() {
      this.filteredContactGroups = this.contactGroups;
    },

    methods: {
      ...mapActions(useMessengerStore, [
          'contactGroups',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getUser',
        'getLoading',
      ]),
    },


    watch: {
      searchText: {
        handler() {
          this.filteredContactGroups = this.contactGroups ?.map((group) => { 
            let newGroup = { ...group };
            newGroup.contacts = newGroup.contacts.filter((contact) => {
              if ( contact.firstName.toLowerCase().includes(this.searchText.toLowerCase()) ) {
                return true;
              } else if ( contact.lastName.toLowerCase().includes(this.searchText.toLowerCase()) ) {
                return true;
              }
            });
          
            return newGroup;
          }).filter((group) => group.contacts.length > 0);
        },
        deep: true
      },
    }
  }
</script>