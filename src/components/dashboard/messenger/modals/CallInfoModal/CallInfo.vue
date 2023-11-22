<template>
  <div>
    <!--modal header-->
    <div class="px-5 flex justify-between items-center">
      <Typography id="modal-title" variant="heading-1" class="-none" tabindex="0">
        Call Details
      </Typography>

      <CButton @click="props.closeModal" variant="outlined" color="danger" typography="body-4">
        esc
      </CButton>
    </div>

    <div v-if="props.call" class="w-full py-7">
      <div class="px-5 pb-5 flex items-center">
        <InfoItem :icon="'fa-regular fa-calendar'" :title="call.date" />
      </div>

      <div class="px-5 pb-5 flex items-center">
        <InfoItem :icon="CallStatusIcon" :title="props.call.status" />
      </div>

      <div class="px-5 flex items-center">
        <InfoItem :icon="'fa-solid fa-users'" title="members" link chevron @click=" $emit('active-page-change', { tabName: 'call-members', animationName: 'slide-left' })" />
      </div>
    </div>
  </div>
</template>


<script>
 
  import InfoItem   from "@/components/dashboard/messenger/base/blocks/InfoItem.vue";
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CButton    from "@/components/dashboard/messenger/base/basics/Button.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      InfoItem,
      Typography,
      CButton,
    },

    props: {
      call: Object,
      closeModal: Function,
    },

    data() {
      return {
        openImageViewer: false,
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
      ]),

      CallStatusIcon() {
        if (this.call) {
          if (this.call.status === "received") {
            return 'fa-solid fa-phone-slash';
          } else if (this.call.status === "missed") {
            return 'fa-solid fa-phone-slash';
          } else if (this.call.status === "sent") {
            return 'fa-solid fa-phone-volume';
          }
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),
    },

  }
</script>