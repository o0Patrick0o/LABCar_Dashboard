<template>
  <router-link :to="link" custom v-slot="{ navigate, isExactActive }">
    <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-slate-900'">
      <div class="block truncate transition duration-150 select-none cursor-pointer" :class="{'text-indigo-500': isExactActive, 'text-white hover:text-red-600': !isExactActive}" @click="navigate">
        <div class="flex items-center justify-between">
          <div class="grow flex items-center">
            <font-awesome-icon :icon="icon" class="shrink-0 h-6 w-6"/>
            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">{{ title }}</span>
          </div>
          <!-- Badge -->
          <div v-if="badge > 0" class="flex flex-shrink-0 ml-2">
            <span class="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">{{ badge }}</span>
          </div>
        </div>
      </div>
    </li>
  </router-link>
</template>
 
<script>
  export default {
    
    props:{
      title: { type: String, default: 'Placeholder' },
      icon: { type: String, default: 'fa-solid fa-globe' },
      link: { type:String, default: '/' },
      badge: { type:Number, default: 0 },
      childs:{ type: Object },
    },

  }
</script>
 
<style scoped>
 
</style> 