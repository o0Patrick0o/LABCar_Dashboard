<template>
  <font-awesome-icon icon="fa-regular fa-clock" v-if="props.state === 'waiting'" class="w-[14px] h-[14px] text-gray-300"/>
  <font-awesome-icon icon="fa-solid fa-check" v-else-if="props.state === 'sent'" class="w-[14px] h-[14px] text-gray-300"/>
  <DoubleChecks v-else :state="props.state" />
</template>



<script>

  import DoubleChecks from "@/components/dashboard/messenger/Chat/ChatMiddle/Message/DoubleChecks.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      DoubleChecks,
    },

    props: {
      state: String,
    },

    data() {
      return {
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
      ]),
    },

  }
</script>