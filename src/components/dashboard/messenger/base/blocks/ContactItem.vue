<template>
  <div>
    <component :is="variant === 'card' ? 'div' : 'a'" @click="variant === 'card' ? () => {} : $emit('contactSelected', contact)" href="#" class="w-full p-5 flex transition duration-200 ease-out outline-none"
      :class="{'hover:bg-indigo-50 active:bg-indigo-100 focus:bg-indigo-50 dark:hover:bg-gray-600 dark:focus:bg-gray-600': variant !== 'card', 'bg-indigo-50 dark:bg-gray-600': active }">
      <!--profile image-->
      <div class="mr-4">
        <div :style="{ backgroundImage: `url(${contact.avatar})` }" class="w-7 h-7 rounded-full bg-cover bg-center"></div>
      </div>

      <div class="w-full flex flex-col items-start">
        <div class="w-full mb-3 flex justify-between items-center">
          <!--contact name-->
          <component :is="variant === 'card' && !unselectable ? 'a' : 'div'" @click=" variant === 'card' ? $emit('contactSelected', contact) : () => {}" href="#" class="flex items-center">
            <Typography variant="heading-2">
              {{ store.user && store.user.id === contact.id ? "You" : getFullName(contact) }}
            </Typography>

            <slot name="tag" />
          </component>

          <!--optional menu-->
          <div class="relative">
            <slot name="menu" />
          </div>
        </div>

        <!--contact last seen-->
        <Typography variant="body-2"> Last seen 2:30 am </Typography>
      </div>

      <div class="h-full flex flex-col justify-center items-center">
        <slot name="checkbox"></slot>
      </div>
    </component>
  </div>
</template>



<script>
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
    },

    props: {
      contact: { type: Object, default: () => ({ id: Number, firstName: String, lastName: String, avatar: String,  email: String, lastSeen: Date}) },
      variant: { type: String, default: '' },
      active: { type: Boolean, default: false },
      unselectable: { type: Boolean, default: false },
    },

    methods: {},

    computed:{
      ...mapState(useMessengerStore, [
        'getFullName',
      ]),
    },
  }
</script>


