<template>
  <div>
    <SHeader>
      <template v-slot:title>Settings</template>
    </SHeader>

    <div class="w-full h-full scroll-smooth scrollbar-hidden" style="overflow-x: visible; overflow-y: scroll">
      <Accordion />
    </div>
  </div>
</template>

<script>
  import SHeader    from "@/components/dashboard/messenger/sidebar/MSidebar-Header.vue";
  import Accordion  from "@/components/dashboard/messenger/sidebar/settings/MS-Settings-Accordion.vue";

  export default {
    
    components: {
      SHeader,
      Accordion,
    },
  }
</script>