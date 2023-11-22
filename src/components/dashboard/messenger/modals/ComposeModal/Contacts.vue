<template>
  <div class="pb-6">
    <!--search-->
    <div class="mx-5 mb-5">
      <SearchInput />
    </div>

    <!--contacts-->
    <ScrollBox class="overflow-y-scroll max-h-[200px]">
      <Loading1 v-for="(item, index) in 3" :key="index"/>

      <ContactItem v-for="(contact, index) in getUser.contacts" :key="index" :contact="contact"/>

      <NoContacts vertical />
    </ScrollBox>
  </div>
</template>


<script>

  import NoContacts   from "@/components/dashboard/messenger/states/empty-states/NoContacts.vue";
  import Loading1     from "@/components/dashboard/messenger/states/loading-states/Loading1.vue";
  import SearchInput  from "@/components/dashboard/messenger/base/basics/SearchInput.vue";
  import ContactItem  from "@/components/dashboard/messenger/base/blocks/ContactItem.vue";
  import ScrollBox    from "@/components/dashboard/messenger/base/utils/ScrollBox.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      NoContacts,
      Loading1,
      SearchInput,
      ContactItem,
      ScrollBox,
    },

    props: {},

    data() {
      return {
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getAvatar',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getUser',
      ]),
    },

  }
</script>