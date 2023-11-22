<template>
    <MSidebarHeader>
      test
      <template v-slot:title>Messages</template>

      <template v-slot:actions>
        <IconButton  @click="composeOpen = true" aria-label="compose conversation" title="compose conversation" class="w-7 h-7" >
          <font-awesome-icon icon="fa-regular fa-pen-to-square" class="w-[20px] h-[20px] text-indigo-300 hover:text-indigo-400"/>
        </IconButton>
      </template>
    </MSidebarHeader>

    <div class="px-5 text-black bg-slate-600">
      test
      <SearchInput v-model="keyword" />
    </div>

    <div role="list" aria-label="conversations" class="w-full h-[80%] scroll-smooth scrollbar-hidden" style="overflow-x: visible; overflow-y: scroll">
      <div>
        <ArchivedButton v-if="getArchive.length > 0" :open="openArchive" @click="openArchive = !openArchive" />

        <div v-if="filteredConversations.length > 0 ">
          <Transition name="fade" mode="out-in">
            <component :is="'ConversationsList'" :filtered-conversations="filteredConversations" :active-id="getActiveConversationId" :handle-conversation-change="handleConversationChange" :key="openArchive ? 'archive' : 'active'"   />
          </Transition>
        </div>

        <div v-else>
          <NoConversation v-if="getArchive.length === 0" />
        </div>
      </div>
    </div>

    <!--compose modal-->
    <ComposeModal :open="composeOpen" :close-modal="closeComposeModal" />

</template>




<script>

  import MSidebarHeader     from "@/components/dashboard/messenger/sidebar/MSidebar-Header.vue";
  import SearchInput        from "@/components/dashboard/messenger/base/basics/SearchInput.vue";

  import ComposeModal       from "@/components/dashboard/messenger/modals/ComposeModal/ComposeModal.vue";
  import NoConversation     from "@/components/dashboard/messenger/sidebar/conversations/MS-Conversations-NoConversation.vue";
  import IconButton         from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  

  import ArchivedButton     from "@/components/dashboard/messenger/sidebar/conversations/MS-Conversations-ArchivedButton.vue";
  import ConversationsList  from "@/components/dashboard/messenger/sidebar/conversations/MS-Conversations-ConversationsList.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      ComposeModal,
      NoConversation,
      IconButton,
      SearchInput,
      ArchivedButton,
      ConversationsList,
      MSidebarHeader
    },

    data() {
      return {
        keyword: "",
        composeOpen: false,
        openArchive: false,
        filteredConversations: [],
        conversation: [],
      };
    },

    mounted() {
      this.filteredConversations = this.getConversations();

      this.conversation = this.getArchive.find((conversation) => conversation.id === this.getActiveConversationId);

      if (this.conversation) {
        this.openArchive = true
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getName',
        'setConversationOpen',
        'setActiveConversationId',
      ]),

      handleConversationChange(conversationId) {
        this.setActiveConversationId = conversationId;
        this.setConversationOpen  = "open";
      },
      
      closeComposeModal() {
        this.composeOpen = false;
      },

      filtered() {
        if (this.openArchive) {
          this.filteredConversations = this.getArchive?.filter((conversation) => this.getName(conversation) ?.toLowerCase() .includes(this.keyword.toLowerCase())  ) || [];
        } else {
          this.filteredConversations = this.getConversations?.filter((conversation) => this.getName(conversation) ?.toLowerCase() .includes(this.keyword.toLowerCase()) ) || [];
        }
      }
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
        'getConversations',
        'getActiveConversationId',
      ]),
    },

    watch: {

      keyword: {
        handler() {
          this.filtered();
        },
        deep: true
      },

      openArchive:   {
        handler() {
          this.filtered();
        },
        deep: true
      },

    }
  }
</script>