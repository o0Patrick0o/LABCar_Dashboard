<template>
  <div v-if="message" class="border-l-2 pl-3 cursor-pointer outline-none border-opacity-50 duration-200" :class="['border-gray-900', 'dark:border-white', 'dark:border-opacity-50']"
    tabindex="0" :aria-label="'reply to: ' + getFullName(message.sender)">
    <!--name-->
    <p class="mb-3 font-semibold text-xs leading-4 tracking-[0.16px]" :class="['text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70']">
      {{ getUser && message.sender.id !== getUser.id ? getFullName(message.sender) : "You" }}
    </p>

    <!--content-->
    <Typography v-if="message.type !== 'recording' && message.content" variant="body-2" :no-color="true" class="text-black opacity-50 dark:text-white dark:opacity-70">
      {{ shorten(message, 60) }}
    </Typography>

    <!--attachments title-->
    <Typography v-else-if="hasAttachments(message)" variant="body-2" class="text-black opacity-50 dark:text-white dark:opacity-70">
      {{ message?.attachments[0].name }}
    </Typography>

    <!--recording title-->
    <Typography v-else-if="message.type === 'recording'" variant="body-2" class="text-black opacity-50 dark:text-white dark:opacity-70">
      recording 23s
    </Typography>
  </div>
</template>



<script>

  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
    },

    props: {
      message: Object,
      self: Boolean,
    },

    data() {
      return {
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
        'getFullName',
        'hasAttachments',
        'shorten',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getUser',
      ]),
    },

  }
</script>