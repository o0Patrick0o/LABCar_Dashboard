<template>
  <div class="flex items-center outline-none" tabindex="0" aria-label="audio message">
    <div v-if="loading" class="p-4 mr-4 flex justify-center items-center rounded-[12px] outline-none transition-all duration-200 bg-indigo-300 active:bg-indigo-400">
      <Spinner />
    </div>

    <button v-else @click="handleTogglePlay" class="p-4 mr-4 flex justify-center items-center rounded-[12px] outline-none transition-all duration-200 bg-indigo-300 active:bg-indigo-400"
      :aria-label="playing ? 'pause' : 'play'">
      <font-awesome-icon icon="fa-solid fa-pause" v-if="playing" class="w-5 h-5 text-white"/>
      <font-awesome-icon icon="fa-solid fa-play" v-else class="w-5 h-5 text-white"/>
    </button>

    <!--audio waveform-->
    <div class="w-full mr-4 relative flex items-center">
      <div :id="'waveform-' + props.recording.id" class="w-[150px]"></div>
      <div class="absolute border animate-pulse w-[150px] border-gray-300" v-show="loading"></div>
    </div>

    <Typography variant="body-1" noColor class="text-black dark:text-white opacity-40 dark:opacity-70" tabindex="0" aria-label="11 seconds">
      00:11
    </Typography>
  </div>
</template>



<script>

  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import Spinner    from "@/components/dashboard/messenger/base/utils/Spinner.vue";

  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      Typography,
      Spinner,
    },

    props: {
      recording: Object,
      self: Boolean,
    },

    data() {
      return {
        wavesurfer: null,
        playing: false,
        loading: true,
      };
    },

    methods: {
      ...mapActions(useMessengerStore, [
      ]),

      handleTogglePlay() {
        if (this.wavesurfer) {
          if (this.playing) {
            this.playing = false;
            this.wavesurfer.pause();
          } else {
            this.playing = true;
            this.wavesurfer.play();
          }
        }
      },
    },

    computed:{
      ...mapState(useMessengerStore, [
      ]),

    },

  }
</script>