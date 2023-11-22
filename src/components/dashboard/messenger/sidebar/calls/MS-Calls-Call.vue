<template>
  <div>
    <component :is="props.active ? 'div' : 'button'" :aria-label="'voice call with ' + getCallName(props.call, true)" @click="handleOpenInfoModal"
     class="w-full h-[92px] px-5 py-6 mb-3 flex rounded focus:outline-none transition duration-500 ease-out" 
     :class=" props.active ? ['border border-dashed border-green-100 dark:border-green-800'] : ['focus:bg-indigo-50 dark:active:bg-gray-600 dark:focus:bg-gray-600 dark:hover:bg-gray-600 hover:bg-indigo-50 active:bg-indigo-100', ]"
      tabindex="0">
      <!--profile images-->
      <div :class="members.length === 1 ? ['mr-4'] : ['mr-[32px]']">
        <div class="relative">
          <button v-if="props.active" class="relative block" @click="props.openVoiceCallModal">
            <CallAvatar v-for="(member, index) in members" :key="index" :member="member" :index="index" :members-length="members.length" />
          </button>

          <CallAvatar v-else v-for="(member, index) in members" :key="index" :member="member" :index="index" :members-length="members.length" />
        </div>
      </div>

      <div class="w-full flex flex-col">
        <div class="w-full">
          <!--contacts names-->
          <div class="flex items-start">
            <div class="grow mb-4 text-start">
              <button v-if="active" class="block" @click="openVoiceCallModal">
                <Typography variant="heading-2">
                  {{ getCallName(call) }}
                </Typography>
              </button>

              <Typography v-else variant="heading-2">
                {{ getCallName(call) }}
              </Typography>
            </div>

            <!--end Call-->
            <button v-if="active" @click="endCall" class="p-[5px] flex justify-center items-center rounded-full outline-none bg-red-400 hover:bg-red-500 active:bg-red-600 transition-all duratoin-500 ease">
              <font-awesome-icon icon="fa-solid fa-phone" class="w-[14px] h-[14px] text-white"/>
            </button>

            <!--status icon-->
            <div v-else class="mr-2">
              <font-awesome-icon icon="fa-solid fa-phone-slash" v-if="call.status === 'missed'" class="w-[14px] h-[14px] text-red-300 dark:text-red-400 "/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" v-else-if="call.status === 'sent'" class="w-[14px] h-[14px] text-green-300 dark:text-green-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" v-else-if="call.status === 'received'" class="w-[14px] h-[14px] text-green-300 dark:text-green-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>

              <PhoneArrowDownLeftIcon   />
            </div>
          </div>
        </div>

        <div>
          <!--recording length-->
          <Typography v-if="props.active" variant="body-2" no-color  class="flex justify-start items-center text-indigo-300">
            {{ call.length }}
          </Typography>

          <!--recording date-->
          <Typography v-else variant="body-2" class="flex justify-start items-center">
            {{ props.call.date }}
          </Typography>
        </div>
      </div>
    </component>
  </div>
</template>



<script>
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CallAvatar from "@/components/dashboard/messenger/base/blocks/CallAvatar.vue";

  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

export default {
    
    components: {
      Typography,
      CallAvatar,
    },

    props: {
      call: Object,
      active: Boolean,
      openInfoModal: Function,
      openVoiceCallModal: Function,
      endCall: Function,
    },

    data() {
      return {

      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
          'getCallName',
          'getOtherMembers',
      ]),

      handleOpenInfoModal() {
        if (this.openInfoModal && !this.active) {
          this.openInfoModal(this.call);
        }
      },
    },

    computed: {
      members () {
        return this.getOtherMembers(this.call);
      },
    },
  }
</script>