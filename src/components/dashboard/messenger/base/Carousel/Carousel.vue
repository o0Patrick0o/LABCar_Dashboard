<template>
  <div class="relative z-10" aria-label="media carousel" role="dialog" aria-modal="true">
    <!--overlay-->
    <FadeTransition>
      <div v-show="props.open" class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>
    </FadeTransition>

    <!--content-->
    <ScaleTransition>
      <div v-show="props.open" class="fixed inset-0 z-10 overflow-y-auto">
        <div v-if="props.startingId" ref="carousel" class="h-full flex flex-col p-5" >

          <Toolbar :is-image="Boolean(selectedAttachment.type === 'image')" :handle-close-carousel="handleCloseCarousel" :handle-increase-zoom="handleIncreaseZoom" :handle-decrease-zoom="handleDecreaseZoom" />

          <div class="h-full flex justify-between">
  
            <div class="flex items-center justify-end mr-5">
              <IconButton title="previous" @click="handlePreviousItem" aria-label="previous item" :class="{ invisible: !thereIsPrevious() }" variant="ghost">
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="md:w-8 md:h-8 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100"/>
              </IconButton>
            </div>

            <div class="w-full h-full px-5 flex items-center justify-center overflow-hidden">
  
              <img class="w-auto md:max-w-[700px] xs:max-w-[340px] transition-transform duration-300" :style="{ transform: `scale(${zoom})` }" v-if="selectedAttachment.type === 'image'"
                :src="selectedAttachment?.url" :key="selectedAttachment.id" :alt="selectedAttachment.name" />

              <!--Video-->
              <VideoPlayer :id="'video-player-' + selectedAttachment.id" v-if="selectedAttachment.type === 'video'" :url="selectedAttachment.url" :thumbnail="(selectedAttachment.thumbnail)"
                :key="selectedAttachment.id" />
            </div>

            <!--right controls-->
            <div class="flex items-center justify-end ml-5">
              <IconButton title="next" aria-label="next item" :class="{ invisible: !thereIsNext() }" @click="handleNextItem" variant="ghost">
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="md:w-8 md:h-8 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100"/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </ScaleTransition>
  </div>
</template>



<script>

  import { inject } from "vue";

  import VideoPlayer      from "@/components/dashboard/messenger/base/Carousel/VideoPlayer.vue";
  import IconButton       from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import Toolbar          from "@/components/dashboard/messenger/base/Carousel/Toolbar.vue";
  import ScaleTransition  from "@/components/dashboard/messenger/base/transitions/ScaleTransition.vue";
  import FadeTransition   from "@/components/dashboard/messenger/base/transitions/FadeTransition.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";


  export default {
    
    components: {
      VideoPlayer,
      IconButton,
      Toolbar,
      ScaleTransition,
      FadeTransition,
    },

    props: {
      open: Boolean,
      startingId: Number,
      closeCarousel: Function,
    },

    data() {
      return {
        zoom: 1,
        carousel: undefined,
        conversation: inject("activeConversation"),
        currentIndex: 0,
        moved: false,
      };
    },

    mounted() {
      this.currentIndex = this.startingIndex ;
      document.addEventListener("keydown", this.handleCloseOnEscape);
    },

    unmounted() {
      document.removeEventListener("keydown", this.handleCloseOnEscape);
    },

    methods: {

      ...mapActions(useMessengerStore, [
        'hasAttachments',
      ]),

      handleIncreaseZoom() {
        if (this.zoom < 2) {
          this.zoom += 0.5;
        }
      },
      
      handleDecreaseZoom() {
        if (this.zoom > 0.5) {
          this.zoom -= 0.5;
        }
      },
      
      handleCloseCarousel() {
        this.moved = false;
        this.closeCarousel();
      },
      
      thereIsNext() {
        let length = this.attachments.length;
        return length > 0 && !(this.currentIndex + 1 >= length);
      },

      thereIsPrevious() {
        let length = this.attachments.length;
        return length > 0 && !(this.currentIndex <= 0);
      },


      handleNextItem() {
        if (this.thereIsNext()) {
          this.zoom = 1;
          this.moved = true;
          this.currentIndex++;
        }
      },

      handlePreviousItem() {
        if (this.thereIsPrevious()) {
          this.zoom= 1;
          this.moved = true;
          this.currentIndex--;
        }
      },

      handleCloseOnEscape(event) {
        if (["Escape", "Esc"].includes(event.key)) {
          this.closeCarousel();
        }
      },

    },

    computed: {

      ...mapState(useMessengerStore, [
      ]),

      attachments() {
        let attachments = [];
        
        if (this.conversation) {
          for (let message of this.conversation.messages) {
            if (message.attachments && this.hasAttachments(message)) {
              for (let attachment of message.attachments) {
                if (["video", "image"].includes(attachment.type)) {
                  attachments.push(attachment);
                }
              }
            }
          }
        }
        
        return attachments;
      },
      
      startingIndex() {
        let startingIndex;
        
        this.attachments.value.forEach((value, index) => {
          if (value.id === this.startingId) {
            startingIndex = index;
          }
        });
        
        return startingIndex;
      },


      selectedAttachment() {
        return this.attachments[ this.moved ? this.currentIndex: this.startingIndex ]; },
    },

    watch: {
      open: {
        handler() {
          this.currentIndex = this.startingIndex;
        },
        deep: true
      },
    }
  }
</script>