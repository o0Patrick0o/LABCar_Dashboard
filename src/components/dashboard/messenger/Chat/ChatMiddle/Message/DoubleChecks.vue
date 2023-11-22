<template>
  <img v-if="state === 'delivered'" :src="graychecks" class="w-[14px] h-[14px]"/>
  <img v-else-if="state === 'read'" :src="greenchecks" class="w-[14px] h-[14px]"/>
</template>



<script>
  
  import GreenChecks from "@/components/dashboard/messenger/assets/vectors/green_checks.svg";
  import GrayChecks from "@/components/dashboard/messenger/assets/vectors/gray_checks.svg";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {},

    props: {
      state: String,
    },

    data() {
      return {
        graychecks: GrayChecks,
        greenchecks: GreenChecks
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