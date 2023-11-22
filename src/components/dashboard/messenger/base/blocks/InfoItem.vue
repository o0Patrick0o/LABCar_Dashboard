<template>
  <!--info button-->
  <button v-if="link" class="group w-full flex items-center outline-none" @click="$emit('active-page-change', { tabName: 'members', animationName: 'slide-left', })">
    <component :is="icon" class="w-[20px] h-[20px] mr-6 transition-all duration-200" :class="colorClasses" />

    <div class="grow flex justify-start items-start">
      <Typography variant="body-2" no-color class="transition-all duration-200" :class="colorClasses">
        {{ title }}
      </Typography>
    </div>

    <font-awesome-icon icon="fa-solid fa-chevron-right" v-if="chevron" class="w-[20px] h-[20px] duration-200" :class="colorClasses"/>
  </button>

  <!--info item-->
  <div v-else class="w-full flex items-center">
    <component :is="props.icon" class="w-[20px] h-[20px] mr-6 transition-all duration-200" :class="colorClasses"/>

    <div class="grow flex justify-start items-start">
      <Typography variant="body-2" no-color :class="colorClasses">
        {{ title }}
      </Typography>
    </div>

    <SwitchInput v-if="cswitch" :value="true" />
  </div>
</template>



<script>

  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import SwitchInput  from "@/components/dashboard/messenger/base/basics/SwitchInput.vue";

  export default {
    
    components: {
      Typography,
      SwitchInput,
    },

    props: {
      link: Boolean,
      icon: String,
      title: String,
      chevron: Boolean,
      cswitch: Boolean,
      color: String,
    },

    computed: {
      colorClassesomputed() {
        if (this.color === "danger") {
          return "text-red-400 group-hover:text-red-500";
        } else {
          return `text-black dark:text-white opacity-50 dark:opacity-70 group-hover:text-indigo-500 group-active:text-indigo-600 dark:group-hover:text-indigo-300 dark:group-active:text-indigo-400`;
        }
      },
    },
  }
</script>