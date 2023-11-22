<template>
  <div>
    <SidebarHeader>
      <template v-slot:title>Notifications</template>
    </SidebarHeader>

    <div class="w-full h-full scroll-smooth scrollbar-hidden" style="overflow-x: visible; overflow-y: scroll">


      <Notification v-for="(notification, index) in store.notifications" :notification="notification" :key="index"/>

      <NoNotifications/>
    </div>
  </div>
</template>



<script >

  import NoNotifications from "@/components/dashboard/messenger//sidebar/notifications/MS-Notifications-NoNotifications.vue";
  import Loading1 from "@/components/dashboard/messenger/states/loading-states/Loading1.vue";
  import Notification from "@/components/dashboard/messenger/sidebar/notifications/MS-Notifications-Notification.vue";
  import SidebarHeader from "@/components/dashboard/messenger/sidebar/MSidebar-Header.vue";

  export default{

    components: {
      NoNotifications,
      Loading1,
      Notification,
      SidebarHeader,
    },

    props: {},

    data () {
      return {}
    },

    methods: {},

  }
</script>