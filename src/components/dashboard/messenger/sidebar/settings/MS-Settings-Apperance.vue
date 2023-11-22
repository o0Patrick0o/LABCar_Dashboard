<template>
  <!--appearance settings-->
  <AccordionButton id="appearance-settings-toggler" class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none" :collapsed="props.collapsed" chevron aria-controls="appearance-settings-collapse"
    @click="props.handleToggle()">
    <Typography variant="heading-2" class="mb-4"> Appearance </Typography>
    <Typography variant="body-2"> Customize the look and feel </Typography>
  </AccordionButton>

  <Collapse id="appearance-settings-collapse" :collapsed="props.collapsed">
    <SettingsSwitch title="Dark Mode" description="Apply a theme with dark colors" :value="!!store.settings.darkMode" :handle-toggle-switch="(value) => (store.settings.darkMode = value)" class="mb-7"/>
    <SettingsSwitch title="Bordered Theme" description="Apply borders to the theme" :value="!!store.settings.borderedTheme" :handle-toggle-switch="(value) => (store.settings.borderedTheme = value)" class="mb-7"/>
  </Collapse>
</template>



<script>

  import AccordionButton  from "@/components/dashboard/messenger/base/collapse/CollapseButton.vue";
  import Collapse         from "@/components/dashboard/messenger/base/collapse/Collapse.vue";
  import Typography       from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import SettingsSwitch   from "@/components/dashboard/messenger/sidebar/settings/MS-Settings-Switch.vue";

  export default{

    components: {
      AccordionButton,
      Collapse,
      SettingsSwitch,
      Typography,
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