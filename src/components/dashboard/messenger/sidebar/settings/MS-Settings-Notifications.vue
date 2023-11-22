<template>
  <!--notifications settings-->
  <AccordionButton id="notifications-settings-toggler" class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none" :collapsed="props.collapsed" chevron aria-controls="notifications-settings-collapse"
    @click="props.handleToggle()">
    <Typography variant="heading-2" class="mb-4"> Notifications </Typography>
    <Typography variant="body-2"> Customize notifications </Typography>
  </AccordionButton>

  <Collapse id="notifications-settings-collapse" :collapsed="props.collapsed">
    <SettingsSwitch title="Allow Notifications" description="Receive Notifications from avian" :value="!!store.settings.allowNotifications" :handle-toggle-switch="(value) => (store.settings.allowNotifications = value)" class="mb-7"/>
    <SettingsSwitch title="Keep Notifications" description="Save notifications after they are received" :value="!!store.settings.keepNotifications" :handle-toggle-switch="(value) => (store.settings.keepNotifications = value)" class="mb-7"/>
  </Collapse>
</template>



<script>

  import AccordionButton  from "@/components/dashboard/messenger/base/collapse/CollapseButton.vue";
  import Collapse         from "@/components/dashboard/messenger/base/collapse/Collapse.vue";
  import SettingsSwitch   from "@/components/dashboard/messenger/sidebar/settings/MS-Settings-Switch.vue";
  import Typography       from "@/components/dashboard/messenger/base/style/Base-P.vue";

  export default{

    components: {
      AccordionButton,
      Typography,
      Collapse,
      SettingsSwitch,
    },

    props: {
      collapsed: Boolean,
      handleToggle: undefined,
    },

    data () {
      return {

      }
    },

    computed: {

    },

  }
</script>