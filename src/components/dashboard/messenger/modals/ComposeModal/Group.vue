<template>
  <div>
    <div class="overflow-x-hidden">
      <SlideTransition :animation="animation">
        <component @active-page-change="changeActiveTab" :is="ActivePage" :key="activePageName" />
      </SlideTransition>
    </div>
  </div>
</template>



<script>

  import GroupInfo        from "@/components/dashboard/messenger/modals/ComposeModal/GroupInfo.vue";
  import GroupMembers     from "@/components/dashboard/messenger/modals/ComposeModal/GroupMembers.vue";
  import SlideTransition  from "@/components/dashboard/messenger/base/transitions/SlideTransition.vue";


  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      GroupInfo,
      GroupMembers,
      SlideTransition,
    },

    data() {
      return {
        animation: "slide-left",
        activePageName: "group-info",
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
        'getFullName',
        'getName',
        'getOddContact',
      ]),
      
      changeActiveTab(event) {
        this.animation = event.animationName;
        this.activePageName = event.tabName;
      },

      ActivePage() {
        if (this.activePageName === "group-info") {
          return this.GroupInfo
        } else if (this.activePageName === "group-members") {
          return this.GroupMembers
        };
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),
    },

  }
</script>