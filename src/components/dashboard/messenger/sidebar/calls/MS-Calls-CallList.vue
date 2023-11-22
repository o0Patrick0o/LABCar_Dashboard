<template>
  <div>
    <Call v-for="[call, index] in getCalls" :key="index" :call="call" :open-info-modal="openInfoModal" />
  </div>
</template>


<script>

import Call from "@/components/dashboard/messenger/sidebar/Calls/MS-Calls-Call.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Call,
    },

    props: {
      chatStatus: String,
      delayLoading: String,
      openInfoModal: Function,
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getCalls',
      ]),
    },
  }
</script>