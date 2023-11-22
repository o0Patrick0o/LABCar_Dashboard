<template>
  <div>
    <!--header-->
    <div class="flex justify-between items-center mb-6 px-5">
      <Typography id="modal-title" variant="heading-1" class="default-outline">
        Members
      </Typography>

      <button @click="$emit('active-page-change', { tabName: 'conversation-info', animationName: 'slide-right', removeContact: true, })"
        class="group p-2 border rounded-full border-gray-200 dark:border-white dark:border-opacity-70 focus:outline-none focus:border-indigo-100 focus:bg-indigo-100 hover:bg-indigo-100 hover:border-indigo-100 dark:hover:border-indigo-400 dark:hover:bg-indigo-400 dark:focus:bg-reindigod-400 dark:focus:border-indigo-400 transition-all duration-200 outline-none"
      >
        <font-awesome-icon icon="fa-solid fa-share" flip="horizontal" class="w-5 h-5 text-black opacity-50 dark:text-white dark:opacity-70 group-hover:text-indigo-500 group-hover:opacity-100 dark:group-hover:text-white"/>
      </button>
    </div>

    <div class="mb-5 mx-5">
      <SearchInput />
    </div>

    <div ref="contactContainer">
      <ScrollBox class="max-h-[232px] overflow-y-scroll">
        <ContactItem variant="card" @contact-selected=" (contact) =>$emit('active-page-change', { tabName: 'conversation-info', animationName: 'slide-left', contact: contact, })"
          v-for="(contact, index) in conversation.contacts" :contact="contact" :key="index">
          <template v-slot:tag v-if="conversation.admins.includes(contact.id)">
            <div class="ml-3">
              <Typography variant="body-4" noColor class="text-indigo-400">admin</Typography>
            </div>
          </template>

          <template v-slot:menu v-if="getUser && conversation.admins.includes(getUser.id) && contact.id !== getUser.id">
            <div>
              <!--dropdown menu button-->
              <IconButton title="menu" @click="(event) => handleToggleDropdown(event, index)" class="open-menu w-6 h-6">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="open-menu h-5 w-5 text-black opacity-60 dark:text-white" tabindex="0"/>
              </IconButton>

              <!--dropdown menu-->
              <Dropdown :close-dropdown="closeDropdowns" :handle-click-outside="handleClickOutside" :show="dropdownMenuStates[index]" :position="dropdownMenuPosition">
                <DropdownLink> Promote to admin </DropdownLink>

                <DropdownLink> Demote to member </DropdownLink>

                <DropdownLink color="danger"> Remove contact </DropdownLink>
              </Dropdown>
            </div>
          </template>
        </ContactItem>
      </ScrollBox>
    </div>
  </div>
</template>



<script >

  import ContactItem  from "@/components/dashboard/messenger/base/blocks/ContactItem.vue";
  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import IconButton   from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import SearchInput  from "@/components/dashboard/messenger/base/basics/SearchInput.vue";
  import Dropdown     from "@/components/dashboard/messenger/base/Dropdown/Dropdown.vue";
  import DropdownLink from "@/components/dashboard/messenger/base/Dropdown/DropdownLink.vue";
  import ScrollBox    from "@/components/dashboard/messenger/base/utils/ScrollBox.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      ContactItem,
      Typography,
      IconButton,
      SearchInput,
      Dropdown,
      DropdownLink,
      ScrollBox,
    },

    props: {
      closeModal: Function,
      conversation: Object,
    },

    data() {
      return {
        contactContainer: undefined,
        dropdownMenuStates: this.conversation.contacts?.map(() => false),
        dropdownMenuPosition: ["top-6", "right-0"],
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getName',
        'setConversationOpen',
        'setActiveConversationId',
      ]),
      
      closeDropdowns() {
        this.dropdownMenuStates = this.conversation.contacts?.map(() => false);
      },
      
      handleToggleDropdown(event, contactIndex) {
        if (this.contactContainer) {
          let buttonBottom = event.currentTarget.getBoundingClientRect().bottom;
          let containerBottom = this.contactContainer.getBoundingClientRect().bottom;
          if (buttonBottom >= containerBottom - 50) {
            this.dropdownMenuPosition.value = ["bottom-6", "right-0"];
          } else {
            this.dropdownMenuPosition.value = ["top-6", "right-0"];
          }
        }
        
        this.dropdownMenuStates.value = this.conversation.contacts?.map(
          (value, index) => {
            if (contactIndex === index) {
              return true;
            } else {
              return false;
            }
          }
        )
      },
      
      handleClickOutside(event) {
        let target = event.target;
        if ( target.parentElement && !target.classList.contains("open-menu") && !target.parentElement.classList.contains("open-menu")) {
          this.closeDropdowns();
        }
      }
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getUser',
      ]),
    },

    
  }
</script>