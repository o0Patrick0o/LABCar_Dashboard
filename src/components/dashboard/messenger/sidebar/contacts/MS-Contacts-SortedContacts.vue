<template>
  <div v-for="(group, groupIndex) in props.contactGroups" :key="groupIndex">
    <!--group title-->
    <Typography variant="heading-3" class="w-full px-5 pb-3 pt-5">
      {{ group.letter }}
    </Typography>

    <!--contacts-->
    <div v-for="(contact, index) in group.contacts" :key="index">
      <div class="w-full p-5 flex justify-between items-center">
        <button class="default-outline transition-all duration-200 ease-out" :aria-label="getFullName(contact)">
          <div class="flex-row">
            <!--contact name-->
            <Typography variant="heading-2">
              {{ getFullName(contact) }}
            </Typography>
          </div>
        </button>

        <!--dropdown menu-->
        <div class="relative">
          <!--dropdown menu button-->
          <IconButton :id="'open-contact-menu-' + index" :aria-expanded="dropdownMenuStates[groupIndex][index]" :aria-controls="'contact-menu-' + index" 
          @click="(event) => handleToggleDropdown(event, groupIndex, index)" class="open-menu w-6 h-6" title="toggle contact menu" aria-label="toggle contact menu">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="open-menu h-5 w-5 text-black opacity-60 dark:text-white dark:opacity-70" tabindex="0"/>
          </IconButton>

          <Dropdown :id="'contact-menu-' + index" :close-dropdown="handleCloseAllMenus" :handle-click-outside="handleClickOutside" :aria-labelledby="'open-contact-menu-' + index"
            :show="dropdownMenuStates[groupIndex][index]" :position="dropdownMenuPosition">
            <DropdownLink>
              <font-awesome-icon icon="fa-solid fa-circle-info" class="h-5 w-5 mr-3 text-black opacity-60 dark:text-white dark:opacity-70"/>
              Personal information
            </DropdownLink>

            <DropdownLink color="danger">
              <font-awesome-icon icon="fa-solid fa-trash" class="h-5 w-5 mr-3"/>
              Delete contact
            </DropdownLink>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
import IconButton   from "@/components/dashboard/messenger/base/basics/IconButton.vue";
import Dropdown     from "@/components/dashboard/messenger/base/Dropdown/Dropdown.vue";
import DropdownLink from "@/components/dashboard/messenger/base/Dropdown/DropdownLink.vue";

  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      DropdownLink,
      Dropdown,
      IconButton,
      Typography
    },

    props: {
      contactGroups: Object,
      bottomEdge: Number,
    },

    data() {
      return {
        dropdownMenuPosition: ["top-6", "right-0"],
        dropdownMenuStates: undefined,
      };
    },

    mounted() {
      this.dropdownMenuStates = this.contactGroups?.map((contactGroup) => { 
        let group = contactGroup.contacts.map(() => false); 
        return group;
      });
    },

    methods: {
      ...mapActions(useMessengerStore, [
          'getFullName',
      ]),

      handleCloseAllMenus() {
        this.dropdownMenuStates = this.contactGroups?.map((contactGroup) => {
          let group = contactGroup.contacts.map(() => false);
          return group;
        });
      },
      
      handleToggleDropdown( event, groupIndex,  index) {
        if (this.bottomEdge) {
          let buttonBottom = event.currentTarget.getBoundingClientRect().bottom;
          if (buttonBottom >= this.bottomEdge - 75) {
            this.dropdownMenuPosition.value = ["bottom-6", "right-0"];
          } else {
            this.dropdownMenuPosition.value = ["top-6", "right-0"];
          }
        }
        
        this.dropdownMenuStates = this.dropdownMenuStates.map( (group) => { 
          return group.map((value, idx) => {
            if (idx === index) return value;
            else return false;
          });
        });
        
        this.dropdownMenuStates.value[groupIndex][index] = !this.dropdownMenuStates[groupIndex][index];
      },
      
      handleClickOutside(event) {
        let target = event.target;
        let parentElement = target.parentElement;
        if ( target &&  !target.classList.contains("open-menu") && !(parentElement && parentElement.classList.contains("open-menu"))) {
           this.handleCloseAllMenus();
          }
  	  },
    },

  }
</script>