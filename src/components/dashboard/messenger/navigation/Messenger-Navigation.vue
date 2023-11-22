<template>
  <div class="xs:w-full md:w-11 md:h-full md:py-7 xs:py-5 px-5 flex xs:flex-row md:flex-col items-center transition-all duration-500">

    <div class="grow">
      <nav aria-label="Main navigation">
        <ul class="xs:flex md:block xs:justify-between xs:items-center">
 
          <NavLink :icon="'fa-solid fa-comment'" title="Conversations" @click="activeSidebarComponentChange('messages')" :active="this.getActiveSidebarComponent === 'messages'" />

          <NavLink :icon="'fa-solid fa-user'" title="Contacts" @click="activeSidebarComponentChange('contacts')" :active="this.getActiveSidebarComponent === 'contacts'"/>

          <NavLink :icon="'fa-solid fa-bell'" title="Notifications" :notifications="3" @click="activeSidebarComponentChange('notifications')" :active="this.getActiveSidebarComponent === 'notifications'" />

          <NavLink :icon="'fa-solid fa-phone'" title="Call log" @click="activeSidebarComponentChange('phone')" :active="this.getActiveSidebarComponent === 'phone'" />

        </ul>
      </nav>
    </div>

    

    <div>

      <hr class="xs:hidden md:block mb-6 border-gray-100 dark:border-gray-600" />

      <nav aria-label="Extra navigation" class="xs:hidden md:block">
        <ul>

          <NavLink :icon="this.getSettings.darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" title="Night mode" @click="setDarkMode" />

          <NavLink :icon="'fa-solid fa-gear'" title="Settings" @click="activeSidebarComponentChange('settings')" :active="this.getActiveSidebarComponent === 'settings'" />

        </ul>
      </nav>

    </div>
  </div>
</template>

<script>

  import NavLink          from "@/components/dashboard/messenger/navigation/Navigation-NavLink.vue";
  
  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

export default {
    
    components: {
      NavLink,
    },

    data() {
      return {
        showDropdown: false,
        tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
      };
    },

    mounted() {},

    methods: {
      ...mapActions(useMessengerStore, [
        'setActiveSidebarComponent',
        'setDarkMode',
      ]),

      activeSidebarComponentChange(value) {
        this.setActiveSidebarComponent(value);
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getSettings',
        'getActiveSidebarComponent',
      ]),
    },
  }
</script>

