<template>
  <Layout>
    <div class="xs:relative md:static h-[96%] flex xs:flex-col md:flex-row overflow-hidden" >
      <!--navigation-bar-->
      <MessengerNavigation class="xs:order-1 md:-order-none" />
      <!--sidebar-->
      <MessengerSidebar class="xs:grow-1 md:grow-0 xs:overflow-y-scroll md:overflow-visible scrollbar-hidden" />
      <!--chat-->
      <div id="mainContent" class="xs:absolute xs:z-10 md:static grow h-full xs:w-full md:w-fit scrollbar-hidden bg-white dark:bg-gray-800 transition-all duration-500"
        :class=" getConversationOpen === 'open' ? ['xs:left-[0px]', 'xs:static'] : ['xs:left-[1000px]'] " role="region">
        <Transition name="fade" mode="out-in">
          <!-- <NoChatSelected></NoChatSelected> -->
          <component :is="activeComponent"  :key="getActiveConversationId" />
        </Transition>
      </div>
    </div>
  </Layout>
</template>

<script>

  import Layout         from '@/layouts/Layout-Auth-Grid.vue';

  import MessengerNavigation     from "@/components/dashboard/messenger/navigation/Messenger-Navigation.vue";
  import MessengerSidebar        from "@/components/dashboard/messenger/sidebar/Messenger-Sidebar.vue";
  
  import Loading3       from "@/components/dashboard/messenger/states/loading-states/Loading3.vue";
  import Chat           from "@/components/dashboard/messenger/Chat/Chat.vue";
  import NoChatSelected from "@/components/dashboard/messenger/states/empty-states/NoChatSelected.vue";
  
  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Layout, 
      
      MessengerNavigation,
      MessengerSidebar,
      
      Chat,
      NoChatSelected,
      Loading3,
 
    },

    data() {
      return {
        activeComponent: '',
      };
    },

    mounted() {
      this.activeComponent = 'Loading3';   
      this.loading();
    },

    unmounted() {},

    methods: {
      async loading() {
        this.timer = setTimeout(async () => {
          if (this.getActiveConversationId) {
            this.activeComponent = 'Chat';
          } else {
            this.activeComponent = 'NoChatSelected';
          }    
        }, 3000);
        
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getActiveConversationId',
        'getLoading',
        'getConversationOpen',
      ]),

      activeChatComponent() {
        if (this.getLoading) {
          return Loading3;
        } else if (this.getActiveConversationId) {
          return Chat;
        } else {
          return NoChatSelected;
        }
      },
    },
  }

</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-in;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
