<template>
  <aside class="xs:w-full md:w-[290px] h-full xs:px-5 md:p-0 flex flex-col overflow-visible transition-all duration-500">
    <FadeTransition>
      <component :is="ActiveComponent" class="h-full flex flex-col" />
    </FadeTransition>
  </aside>
</template>

<script>

  import FadeTransition from "@/components/dashboard/messenger/base/transitions/FadeTransition.vue";
  
  import Calls          from "@/components/dashboard/messenger/sidebar/calls/MSidebar-Calls.vue";
  import Contacts       from "@/components/dashboard/messenger/sidebar/contacts/MSidebar-Contacts.vue";
  import Conversations  from "@/components/dashboard/messenger/sidebar/conversations/MSidebar-Conversations.vue";
  import Notifications  from "@/components/dashboard/messenger/sidebar/notifications/MSidebar-Notifications.vue";
  import Settings       from "@/components/dashboard/messenger/sidebar/settings/MSidebar-Settings.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {

    components: {
      FadeTransition,
      Calls,
      Contacts,
      Conversations,
      Notifications,
      Settings
    },

    data() {
      return {
      };
    },
  
    computed:{

      ...mapState(useMessengerStore, [
        'getActiveSidebarComponent',
      ]),

    },

    methods: {

      // the selected sidebar component (e.g message/notifications/settings)
      ActiveComponent() {
        console.log('test')
        console.log(this.getActiveSidebarComponent);
        if (this.getActiveSidebarComponent === "messages") {
          return 'Conversations';
        } else if (this.getActiveSidebarComponent === "contacts") {
          return 'Contacts';
        } else if (this.getActiveSidebarComponent === "notifications") {
          return 'Notifications';
        } else if (this.getActiveSidebarComponent === "phone") {
          return 'Calls';
        } else if (this.getActiveSidebarComponent === "settings") {
          return 'Settings';
        }
      },

    },

  }
</script>