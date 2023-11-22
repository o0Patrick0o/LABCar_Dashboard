<template>
  <ScrollBox class="w-full max-h-[274px] overflow-y-scroll">
    <div v-for="[name, group, index] in Object.entries(filteredEmojis)" :key="index" class="mb-6" >
      <!--Group title-->
      <Typography variant="heading-2" class="mb-4 dark:text-white">{{ name }}</Typography>
      <div class="flex flex-wrap justify-start">
        <!--Emojis-->
        <div v-for="[emoji, index] in group" :key="index">
          <IconButton v-if="emoji && emoji.r" class="w-[30px] h-[30px] mr-1" :title="emoji.n[0]" :aria-label="emoji.n[0]">
            {{ unicodeToEmoji(emoji.r) }}
          </IconButton>
        </div>
      </div>
    </div>
  </ScrollBox>
</template>



<script>

  import emojis from "@/stores/data/emojis.json";
  
  import ScrollBox  from "@/components/dashboard/messenger/base/utils/ScrollBox.vue";
  import IconButton from "@/components/dashboard/messenger/base/basics/IconButton.vue";
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";


  import { mapState }           from 'pinia';
  import { mapActions }         from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    components: {
      ScrollBox,
      IconButton,
      Typography,
    },

    props: {
      keyword: String,
      activeTab: String,
    },

    data() {
      return {
        loading: true,
        filteredEmojis: emojis,

        emojiGroupNames: ["people", "nature", "food", "activity", "objects", "travel", "flags"],
      };
    },

    mounted() {
      this.filteredEmojis = this.filterEmojis;
    },

    methods: {
      ...mapActions(useMessengerStore, [
          'unicodeToEmoji',
      ]),
    },

    computed:{
      ...mapState(useMessengerStore, [
        'getEmojiSkinTone',
      ]),


      filterEmojis() {
        const _emojiGroups = {};
  
        Object.keys(emojis).forEach((key) => {
            const _emojis = [];
            if (key === this.activeTab) {
              (emojis)[key].forEach((emoji) => {
                
                if (emoji["n"][0].includes(this.keyword.toLocaleLowerCase())) {
                  let result = emoji.u;
                  if (this.getEmojiSkinTone !== "neutral" && Array.isArray(emoji.v)) {
                    const v_index =
                      emoji.v?.findIndex((v) => v.includes(this.getEmojiSkinTone)) || -1;
                    if (v_index !== -1 && emoji.v) {
                      // @ts-ignore
                      result = emoji.v[v_index];
                    }
                  }
                  return _emojis.push({ ...emoji, r: result });
                }
              });

              // save filtered group to _emojiGroups
              if (_emojis.length) {
                _emojiGroups[key] = _emojis;
              }
            }
          });
          return _emojiGroups;
        },
    },

    watch: {

      keyword: {
        handler() {
          this.filteredEmojis = this.filterEmojis;
        },
        deep: true
      }, 

      activeTab: {
        handler() {
          this.filteredEmojis = this.filterEmojis;
        },
        deep: true
      }, 

      getEmojiSkinTone: {
        handler() {
          this.filteredEmojis = this.filterEmojis;
        },
        deep: true
      },
   
}

  }

</script>

