<template>
  <aside class="xs:w-full md:w-[290px] h-full xs:px-5 md:p-0 flex flex-col overflow-visible transition-all duration-500">
  
      <component :is="activeComponent" class="h-full flex flex-col" />

  </aside>
</template>

<script>

  import Conversations  from "@/components/dashboard/messenger/sidebar/conversations/MSidebar-Conversations.vue";
  import Contacts       from "@/components/dashboard/messenger/sidebar/contacts/MSidebar-Contacts.vue";
  import Notifications  from "@/components/dashboard/messenger/sidebar/notifications/MSidebar-Notifications.vue";
  import Calls          from "@/components/dashboard/messenger/sidebar/calls/MSidebar-Calls.vue";
  import Settings       from "@/components/dashboard/messenger/sidebar/settings/MSidebar-Settings.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {

    components: {
      Calls,
      Contacts,
      Conversations,
      Notifications,
      Settings
    },

    data() {
      return {
        activeComponent: 'Conversations',
      };
    },
  
    computed:{

      ...mapState(useMessengerStore, [
        'getActiveSidebarComponent',
      ]),

    },

    methods: {

      // the selected sidebar component (e.g message/notifications/settings)
      activeComponentChange() {
        console.log('test')
        console.log(this.getActiveSidebarComponent);
        if (this.getActiveSidebarComponent === "messages") {
          this.activeComponent = 'Conversations';
        } else if (this.getActiveSidebarComponent === "contacts") {
          this.activeComponent = 'Contacts';
        } else if (this.getActiveSidebarComponent === "notifications") {
          this.activeComponent = 'Notifications';
        } else if (this.getActiveSidebarComponent === "phone") {
          this.activeComponent = 'Calls';
        } else if (this.getActiveSidebarComponent === "settings") {
          this.activeComponent = 'Settings';
        }
      },

    },

    watch: {
      getActiveSidebarComponent: {
        handler() {
          this.activeComponentChange();
        },
        deep: true
      },
    }

  }
</script>