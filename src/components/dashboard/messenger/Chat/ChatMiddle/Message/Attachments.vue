<template>
  <div>
    <div class="flex">
      <div v-for="(attachment, index) in message.attachments" :key="index" class="mr-2 flex items-end" :class="{ 'mt-4': containsMedia }">
        <button v-if="attachment.type === 'image'" @click="openCarouselWithAttachment(attachment.id)" class="outline-none" :aria-label="numberOfMedia > 2 ? message.attachments.length - 1 + ' more attachments' : attachment.name">
          <div v-if="!isNumber(attachment, 2, true)" :style="{ backgroundImage: `url(${attachment.url})` }" class="rounded bg-cover bg-center" :class="numberOfMedia === 1 ? ['w-[200px]', 'h-[200px]'] : [ 'md:w-[110px]', 'md:h-[100px]', 'xs:w-[100px]','xs:h-[95px]']">
            <div v-if="isNumber(attachment, 1)" class="w-full h-full flex justify-center items-center rounded bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-200"></div>

            <div v-if="isNumber(attachment, 2) && numberOfMedia > 2" class="w-full h-full flex items-center justify-center rounded bg-black bg-opacity-40 text-white hover:bg-opacity-10 transition duration-200">
              {{ message.attachments.length - 1 }}+
            </div>
          </div>
        </button>

        <button v-if="attachment.type === 'video'" @click="openCarouselWithAttachment(attachment.id)" class="overflow-hidden outline-none"
          :aria-label="numberOfMedia > 2 ? message.attachments.length - 1 + ' more attachments' : attachment.name">
          <div v-if="!isNumber(attachment, 2, true)" :style="{ backgroundImage: `url(${attachment.thumbnail})` }" class="rounded bg-cover bg-center" 
          :class="numberOfMedia === 1 ? ['w-[200px]', 'h-[200px]'] : [ 'md:w-[110px]', 'md:h-[100px]', 'xs:w-[100px]', 'xs:h-[95px]']">
    
            <div v-if="isNumber(attachment, 1)" class="w-full h-full flex justify-center items-center rounded bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-200">
              <span class="p-3 rounded-full bg-white bg-opacity-40 transition-all duration-200">
                <font-awesome-icon icon="fa-solid fa-play" class="w-5 h-5 text-white"/>
              </span>
            </div>

            <!--second video-->
            <div v-else-if="isNumber(attachment, 2) && numberOfMedia < 3" class="w-full h-full flex justify-center items-center rounded bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-200">
              <span class="p-3 rounded-full bg-white bg-opacity-40 transition-all duration-200">
                <font-awesome-icon icon="fa-solid fa-play" class="w-5 h-5 text-white"/>
              </span>
            </div>

            <!--more videos overlay-->
            <div v-else-if="isNumber(attachment, 2) && numberOfMedia > 2" class="w-full h-full flex items-center justify-center rounded bg-black bg-opacity-40 text-white hover:bg-opacity-10 transition duration-200" >
              {{ message.attachments.length - 1 }}+
            </div>
          </div>
        </button>

        <!--file-->
        <div v-if="attachment.type === 'file' && !containsMedia">
          <div class="flex">
            <!--download button / icons-->
            <button c  class="w-8 h-8 mr-4 flex justify-center rounded-full outline-none items-center duration-200"
              :class="self ? ['bg-indigo-300'] : ['bg-indigo-50', 'hover:bg-indigo-100', 'active:bg-indigo-200', 'dark:bg-gray-400', 'dark:hover:bg-gray-300', 'dark:focus:bg-gray-300', 'dark:active:bg-gray-200']">
              <font-awesome-icon icon="fa-solid fa-download" class="stroke-2 h-5 w-5" :class="self ? ['text-white'] : ['text-blue-500', 'dark:text-gray-50']"/>
            </button>

            <div class="flex flex-col justify-center">
              <Typography variant="heading-2" :no-color="true" class="mb-3" :class="self ? ['text-black opacity-50 dark:text-white dark:opacity-70 '] : [ 'text-black', 'opacity-50', 'dark:text-white', 'dark:opacity-70']">
                {{ attachment.name }}
              </Typography>

              <Typography variant="body-2" :no-color="true" :class="self ? ['text-black opacity-60 dark:text-white dark:opacity-70'] : ['text-black', 'opacity-50', 'dark:text-white', 'dark:opacity-70']">
                {{ attachment.size }}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <!--carousel modal-->
      <Carousel :open="openCarousel" :starting-id="selectedAttachmentId" :close-carousel="closeCarousel" />
    </div>
  </div>
</template>



<script>

  import Carousel   from "@/components/dashboard/messenger/base/Carousel/Carousel.vue";
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Carousel,
      Typography,
    },

    props: {
      message: Object,
      self: Boolean,
    },

    data() {
      return {
        openCarousel: false,
        selectedAttachmentId: undefined,
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
      ]),
      
      openCarouselWithAttachment(attachmentId) {
        this.selectedAttachmentId = attachmentId;
        this.openCarousel.value = true;
      },
      
      closeCarousel() {
        this.openCarousel.value = false;
      },
      
      isNumber( attachment, number, largerThan) {
        let counter = 0;
        let caseCorrect = false;
        
        if (this.message.attachments) {
          for (let item of this.message.attachments) {
            if (["video", "image"].includes(item.type)) {
              counter += 1;
              if (largerThan) {
                if (item.id === attachment.id && counter > number) {
                  caseCorrect = true;
                }
              } else {
                if (item.id === attachment.id && counter === number) {
                  caseCorrect = true;
                }
              }
            }
          }
        }
        
        return caseCorrect;
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
      ]),

      containsMedia() {
        if (this.message.attachments) {
          for (let attachment of this.message.attachments) {
            if (["image", "video"].includes(attachment.type)) {
              return true;
            }
          }
        }
        
        return false;
      },
      
      numberOfMedia() {
        let counter = 0;
        if (this.message.attachments) {
          for (let attachment of this.message.attachments) {
            if (["video", "image"].includes(attachment.type)) {
              counter += 1;
            }
          }
        }
        
        return counter;
      },

    },

  }
</script>