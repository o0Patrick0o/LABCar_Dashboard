<template>
  <div :id="tabid" :class="{ 'flex': variant === 'horizontal' }">
    <ul class="list-none bg-blue-900 bg-opacity-30 p-1.5 rounded-lg text-center overflow-auto whitespace-nowrap" :class="{ 'flex items-center mb-6': variant === 'vertical', }">
      <li v-for="(tab, index) in tabList" :key="index" class="w-full px-4 py-1.5 rounded-lg" :class="{'text-blue-600 bg-white shadow-xl': index + 1 === activeTab, 'text-white': index + 1 !== activeTab,}">
        <label :for="tabid + index" v-text="tab" class="cursor-pointer block" />
        <input :id="tabid + index" type="radio" :name="`${tabid}-tab`" :value="index + 1" v-model="activeTab" class="hidden" />
   
      </li>
    </ul>
    <div v-for=" index in tabList.length" :key="index">
      <div v-if="index === activeTab" class="flex-grow bg-white rounded-lg shadow-xl p-4" :class="{ 'ml-5 w-full ': variant === 'horizontal' }">
        <slot :name="index"></slot>
      </div>
    </div>
  </div>
</template>



<script>

  export default {
    
    props: {
      id: {type: Number, default: 1},
      tabList: { type: Array, required: true, },
      variant: { type: String, required: false, default: () => "vertical", validator: (value) => ["horizontal", "vertical"].includes(value), },
    },

    data() {
      return {
        activeTab: 1,
        tabid: ''
      };
    },

    mounted() {
      this.customid;
      this.tabid = 'tab-id-'+ this.customid;
    },
    
    computed:{  

      customid() {
        const id = Math.random().toString(36).substring(2, 15);
        return id;
      }

    },

  }
</script>