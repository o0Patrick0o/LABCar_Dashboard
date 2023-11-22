<template>
  <div class="block uppercase text-slate-500 truncate transition duration-150 select-none" href="#" @click="expand">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">{{ title }}</span>
        </div>
      </div>
  </div>
</template>
 
<script>
 export default {
  props:{
      title: { type: String, default: 'Placeholder' },
  }
 }
</script>
 
<style scoped>
 
</style>
 