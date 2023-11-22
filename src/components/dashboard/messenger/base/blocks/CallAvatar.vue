<template>
  <div v-if="index === 0" :style="{ backgroundImage: `url(${member.avatar})` }" class="rounded-full bg-cover bg-center" :class="props.large ? ['w-[100px]', 'h-[100px]'] : ['w-7', 'h-7']"></div>

  <div v-else-if="props.membersLength === 2 && index === 1" :style="{ backgroundImage: `url(${member.avatar})` }" class="absolute top-0 left-[20px] rounded-full bg-cover bg-center" :class="props.large ? ['w-[100px]', 'h-[100px]'] : ['w-7', 'h-7']"></div>

  <div v-else-if="props.membersLength > 2 && index === 1" class="absolute top-0 left-[20px] flex justify-center items-center rounded-full bg-gray-50 dark:bg-gray-700" :class="props.large ? ['w-[100px]', 'h-[100px]'] : ['w-7', 'h-7']">
    <Typography variant="body-4">{{ props.membersLength - 1 }}+</Typography>
  </div>
</template>



<script>
  
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";

  export default {
    
    components: {
      Typography,
    },
    
    props: {
      member: Object,
      index: Number,
      membersLength: Number,
      large: Boolean,
    },
  }
</script>