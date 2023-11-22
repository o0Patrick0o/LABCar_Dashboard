<template>
  <!--settings accordion-->
  <div role="list" aria-label="Settings Accordion Control Group Buttons" class="h-full">
    <AccountSettings :collapsed="accordionState['account-settings']" :handleToggle="handleToggle(accountSettings)"/>
    <PrivacySettings :collapsed="accordionState['privacy-settings']" :handleToggle="handleToggle(privacySettings)"/>
    <ApperanceSettings :collapsed="accordionState['appearance-settings']" :handleToggle="handleToggle(appearanceSettings)"/>
    <NotificationsSettings :collapsed="accordionState['notifications-settings']" :handleToggle="handleToggle(notificationsSettings)"/>
  </div>
</template>


<script>

  import AccountSettings        from "@/components/dashboard/messenger/sidebar/settings/MS-Settings-Account.vue";
  import PrivacySettings        from "@/components/dashboard/messenger/sidebar/settings/MS-Settings-Privacy.vue";
  import ApperanceSettings      from "@/components/dashboard/messenger/sidebar/settings/MS-Settings-Apperance.vue";
  import NotificationsSettings  from "@/components/dashboard/messenger/sidebar/settings/MS-Settings-Notifications.vue";

  export default{

    components: {
      AccountSettings,
      PrivacySettings,
      ApperanceSettings,
      NotificationsSettings,
    },

    props: {},

    data () {
      return {
        accountSettings: "account-settings",
        privacySettings: "privacy-settings",
        appearanceSettings: "appearance-settings",
        notificationsSettings: "notifications-settings",

        accordionState: {
          "account-settings": true,
          "privacy-settings": true,
          "appearance-settings": true,
          "notifications-settings": true,
        },

      }
    },

    methods: {
      
      handleToggle(name) {
        for (let key of Object.keys(this.accordionState)) {
          if (key !== name) {
            this.accordionState.value[key] = true;
          }
        }
        // open the clicked tabs
        this.accordionState.value[name] = !this.accordionState.value[name];
      },

    },

  }
</script>