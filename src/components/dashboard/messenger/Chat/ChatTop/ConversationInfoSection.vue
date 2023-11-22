<template>
  <!--conversation info-->
  <div class="w-full flex justify-center items-center">
    <div class="group mr-4 md:hidden">
      <IconButton class="w-7 h-7" @click="handleCloseConversation" title="close conversation" aria-label="">
        <font-awesome-icon icon="fa-solid fa-chevron-left" aria-label="close conversation" class="w-[20px] h-[20px] text-gray-300 group-hover:text-indigo-300"/>
      </IconButton>
    </div>

    <div class="flex grow">
      <!--avatar-->
      <button class="mr-5 outline-none" @click="handleOpenInfo" aria-label="profile avatar">
        <div :style="{ backgroundImage: `url(${getAvatar(activeConversation)})`, }" class="w-[36px] h-[36px] rounded-full bg-cover bg-center"></div>
      </button>

      <!--name and last seen-->
      <div class="flex flex-col">
        <Typography variant="heading-2" @click="handleOpenInfo" class="mb-2 default-outline cursor-pointer" tabindex="0">
          {{ getName(activeConversation) }}
        </Typography>

        <Typography variant="body-2" class="font-extralight default-outline rounded-[4px]" tabindex="0" aria-label="Last seen december 16, 2019">
          Last seen Dec 16, 2019
        </Typography>
      </div>
    </div>

    <div class="flex" :class="{ hidden: store.status === 'loading' }">
      <IconButton title="search messages" aria-label="search messages" @click="handleOpenSearch" class="group w-7 h-7 mr-3">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300"/>
      </IconButton>

      <div class="relative">
        <!--dropdown menu button-->
        <IconButton id="open-conversation-menu" @click="showDropdown = !showDropdown" tabindex="0" class="open-top-menu group w-7 h-7" :aria-expanded="showDropdown" aria-controls="conversation-menu"
          title="toggle conversation menu" aria-label="toggle conversation menu">
          <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="open-top-menu w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300"/>
        </IconButton>

        <!--dropdown menu-->
        <Dropdown id="conversation-menu" :close-dropdown="() => (showDropdown = false)" :show="showDropdown" :position="['right-0']" :handle-click-outside="handleClickOutside" aria-labelledby="open-conversation-menu">
          <DropdownLink :handle-click="() => { handleCloseDropdown(); handleOpenInfo(); }">
            <font-awesome-icon icon="fa-solid fa-circle-info" class="h-5 w-5 mr-3 text-black opacity-60 dark:text-white dark:opacity-70"/>
            Profile Information
          </DropdownLink>

          <DropdownLink :handle-click="() => { handleCloseDropdown(); handleOpenVoiceCallModal(); }">
            <font-awesome-icon icon="fa-solid fa-phone" class="h-5 w-5 mr-3 text-black opacity-60 dark:text-white dark:opacity-70"/>
            Voice call
          </DropdownLink>

          <DropdownLink :handle-click="handleCloseDropdown">
            <font-awesome-icon icon="fa-solid fa-share-nodes" class="h-5 w-5 mr-3 text-black opacity-60 dark:text-white dark:opacity-70"/>
            Shared media
          </DropdownLink>

          <DropdownLink :handle-click="handleCloseDropdown" color="danger">
            <font-awesome-icon icon="fa-solid fa-ban" class="h-5 w-5 mr-3"/>
            Block contact
          </DropdownLink>
        </Dropdown>
      </div>
    </div>
  </div>
</template>



<script>

  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import IconButton   from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import Dropdown     from "@/components/dashboard/messenger/base/Dropdown/Dropdown.vue";
  import DropdownLink from "@/components/dashboard/messenger/base/Dropdown/DropdownLink.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
      IconButton,
      Dropdown,
      DropdownLink,
    },

    props: {
      handleOpenInfo: Function,
      handleOpenSearch: Function,
    },

    data() {
      return {
        activeConversation: [],
        showDropdown: false,
      };
    },

    mounted() {
      this.activeConversation = this.getActiveConversation
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
        'getName',
        'setConversationOpen',
        'setActiveConversationId',
        'setActiveCall',
        'setCallMinimized',
        'setOpenVoiceCall'
      ]),
      
      handleCloseDropdown() {
        this.showDropdown = false;
      },
      
      handleClickOutside(event) {
        let target = event.target;
        let parentElement = target.parentElement;
        
        if (target && !target.classList["classList"].contains("open-top-menu") && parentElement && !parentElement.classList["classList"].contains("open-top-menu")) {
          this.handleCloseDropdown();
        }
      },
      
      handleCloseConversation() {
        this.setConversationOpen = "close";
        this.setActiveConversationId = null;
      },
      
      handleOpenVoiceCallModal() {
        this.setActiveCall = this.getActiveCalll;
        this.setCallMinimized = false;
        setTimeout(() => {
          this.setOpenVoiceCall = true;
        }, 300);
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getActiveCall',
      ]),
    },

  }
</script>