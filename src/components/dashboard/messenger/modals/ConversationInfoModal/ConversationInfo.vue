<template>
  <div>
    <div class="mb-6 px-5 flex justify-between items-center">

      <Typography variant="heading-1" id="modal-title" class="default-outline" tabindex="0">
        <span v-if="conversation.type === 'couple' || props.contact">Contact</span>
        <span v-else-if="conversation.type === 'group'">Group</span>
        <span v-else-if="conversation.type === 'broadcast'">Broadcast</span>
        Info
      </Typography>

      <CButton v-if="!props.contact" @click="props.closeModal" variant="outlined" color="danger" typography="body-4">
        esc
      </CButton>

      <button v-else @click="$emit('active-page-change', { tabName: 'members', animationName: 'slide-right', })"
        class="group p-2 border rounded-full border-gray-200 dark:border-white dark:border-opacity-70 focus:outline-none focus:border-indigo-100 focus:bg-indigo-100 hover:bg-indigo-100 hover:border-indigo-100 dark:hover:border-indigo-400 dark:hover:bg-indigo-400 dark:focus:bg-reindigod-400 dark:focus:border-indigo-400 transition-all duration-200 outline-none"
      >
        <font-awesome-icon icon="fa-solid fa-share" flip="horizontal" class="w-5 h-5 text-black opacity-100 dark:text-white dark:opacity-70 group-hover:text-indigo-500 group-hover:opacity-100 dark:group-hover:text-white"/>
      </button>
    </div>

    <div class="w-full p-5 pb-6">
      <div class="flex">
        <div class="mr-5">
          <button v-if="props.contact" @click="openImageViewer = true" class="outline-none" aria-label="view avatar">
            <div :style="{ backgroundImage: `url(${props.contact.avatar})` }" class="w-[38px] h-[38px] rounded-full bg-cover bg-center"></div>
          </button>

          <button v-else @click="openImageViewer = true" class="outline-none" aria-label="view avatar">
            <div :style="{ backgroundImage: `url(${getAvatar(props.conversation)})`}" class="w-[38px] h-[38px] rounded-full bg-cover bg-center"></div>
          </button>
        </div>

        <div class="w-full flex justify-between">
          <div>
            <Typography variant="heading-2" class="mb-3 mr-5 text-start">
              <span v-if="props.contact">
                {{ getFullName(props.contact) }}
              </span>

              <span v-else>
                {{ getName(props.conversation) }}
              </span>
            </Typography>

            <Typography variant="body-2" class="font-extralight text-start">
              <span v-if="conversation.type === 'couple' || contact">
                Last seen Dec 16, 2019
              </span>

              <span v-else-if="['group', 'broadcast'].includes(conversation.type)">
                {{ conversation.contacts.length }}
                Contacts
              </span>
            </Typography>
          </div>

          <IconButton title="edit group" v-if="['group', 'broadcast'].includes(conversation.type)" class="group w-7 h-7">
            <font-awesome-icon icon="fa-solid fa-pencil" class="w-5 h-5 text-gray-400 group-hover:text-indigo-300" @click="$emit('active-page-change', { tabName: 'edit-group', animationName: 'slide-left'})"/>
          </IconButton>
        </div>
      </div>
    </div>

    <div class="w-full py-5 border-t border-gray-100 dark:border-gray-700">
      <div v-if="conversation.type === 'couple' || props.contact" class="flex px-5 pb-5 items-center">
        <InfoItem :icon="'fa-solid fa-at'" :title="getOddContact(props.conversation)?.email" />
      </div>

      <div v-if="['group', 'broadcast'].includes(conversation.type) && !props.contact" class="px-5 flex items-center pb-5">
        <InfoItem :icon="'fa-regular fa-user'" title="members" link chevron @click=" $emit('active-page-change', { tabName: 'members', animationName: 'slide-left' })"/>
      </div>

      <div class="px-5 flex items-center">
        <InfoItem :icon="'fa-regular fa-bell'" title="notifications" switch />
      </div>

      <div class="px-5 pt-5 flex items-center">
        <InfoItem :icon="'fa-solid fa-share-nodes'" title="shared media" link chevron @click=" $emit('active-page-change', { tabName: 'shared-media', animationName: 'slide-left'})" />
      </div>
    </div>

    <div class="w-full border-t border-gray-100 dark:border-gray-700">

      <div v-if="conversation.type === 'couple' || props.contact" class="px-5 pt-5 group">
        <InfoItem :icon="'fa-solid fa-ban'" title="block contact" link color="danger" />
      </div>

      <div v-if="conversation.type === 'couple' || props.contact" class="px-5 pt-5 group">
        <InfoItem :icon="'fa-solid fa-trash'" title="delete contact" link color="danger"/>
      </div>

      <div v-if="['group', 'broadcast'].includes(conversation.type) && !props.contact" class="px-5 pt-5 flex items-center group">
        <font-awesome-icon icon="fa-solid fa-right-to-bracket" flip="horizontal" />
        <InfoItem :icon="ArrowLeftOnRectangleIcon" title="exit group" link color="danger"/>
      </div>
    </div>

    <!--image viewer-->
    <ImageViewer :image-url="imageUrl" :open="openImageViewer" :close-image="() => (openImageViewer = false)" />
  </div>
</template>



<script>

  import InfoItem     from "@/components/dashboard/messenger/base/blocks/InfoItem.vue";
  import ImageViewer  from "@/components/dashboard/messenger/modals/ConversationInfoModal/ImageViewer.vue";
  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CButton      from "@/components/dashboard/messenger/base/basics/Button.vue";
  import IconButton   from "@/components/dashboard/messenger/base/basics/IconButton.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      InfoItem,
      ImageViewer,
      Typography,
      CButton,
      IconButton,
    },

    props: {
      conversation: Object,
      contact: Object,
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
        'getFullName',
        'getName',
        'getOddContact',
      ]),
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