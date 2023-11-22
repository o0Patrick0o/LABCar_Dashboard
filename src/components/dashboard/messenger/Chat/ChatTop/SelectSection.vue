<template>
  <!--select mode controls-->
  <div v-if="props.selectMode" class="w-full flex justify-between items-center">
    <div class="flex items-center">
      <Checkbox input-id="select-all" :value="props.selectAll" class="mr-3" :handle-check="handleCheck" />
      <label for="select-all">
        <Typography variant="body-2">Select All</Typography>
      </label>
    </div>
    <div class="flex items-center">
      <CButton variant="ghost" color="danger" class="mr-3"> Delete </CButton>
      <CButton variant="ghost" color="primary" @click="props.handleCloseSelect">
        Cancel
      </CButton>
    </div>
  </div>
</template>



<script>

  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CButton    from "@/components/dashboard/messenger/base/basics/Button.vue";
  import Checkbox   from "@/components/dashboard/messenger/base/basics/Checkbox.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
      CButton,
      Checkbox,
    },

    props: {
      selectMode: Boolean,
      selectAll: Boolean,
      handleCloseSelect: Function,
      handleDeselectAll: Function,
      handleSelectAll: Function,
    },

    data() {
      return {
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
        'getFullName',
        'getName',
        'getOddContact',
      ]),
      
      handleCheck() {
        if (this.selectAll) {
          this.handleDeselectAll();
        } else {
          this.handleSelectAll();
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getArchive',
      ]),

      imageUrl() {
        if (this.contact) {
          return this.contact.avatar;
        } else {
          return this.getAvatar(this.conversation);
        }
      },
    },

  }
</script>