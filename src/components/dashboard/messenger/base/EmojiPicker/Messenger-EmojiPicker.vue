<template>
  <div v-if="props.show" class="w-[300px] p-5 rounded-[16px] border shadow-xl shadow-outline bg-white dark:bg-gray-800 border-gray-50 dark:border-gray-700">
    <!--Tabs-->
    <EmojiTabs class="w-full mb-5" :active="activeTab" @tab-change="handleActiveTabChange"/>

    <!--Search-->
    <SearchInput class="w-full mb-5 rounded-[12px]" v-model="keyword" />

    <!--Emojis-->
    <Emojis :keyword="keyword" :active-tab="activeTab" class="w-full mb-5" />

    <!--Skin tones-->
    <EmojiSkinTones class="w-full" />
  </div>
</template>



<script>

  import Emojis         from "@/components/dashboard/messenger/base/EmojiPicker/EmojiPicker-Emojis.vue";
  import EmojiSkinTones from "@/components/dashboard/messenger/base/EmojiPicker/EmojiPicker-SkinTones.vue";
  import EmojiTabs      from "@/components/dashboard/messenger/base/EmojiPicker/EmojiPicker-Tabs.vue";
  import SearchInput    from "@/components/dashboard/messenger/base/basics/SearchInput.vue";

  export default {
    
    components: {
      Emojis,
      EmojiSkinTones,
      EmojiTabs,
      SearchInput,
    },

    props: {
      show: Boolean,
    },

    data() {
      return {
        activeTab: "people",
        keyword: "",
      };
    },

    methods: {

      handleActiveTabChange(tab) {
        this.activeTab = tab;
      },
    },

  }
</script>