<template>
  <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="activeCondition && 'bg-slate-900'">
    
    <div class="block text-slate-200 truncate transition duration-150" @click="expand">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <font-awesome-icon :icon="icon" class="shrink-0 h-6 w-6"/>
          <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 select-none ">{{ title }}</span>
        </div>
        <!-- Icon -->
        <div class="flex shrink-0 ml-2">
          <font-awesome-icon icon="fa-solid fa-angle-down" class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="{'rotate-180': expanded}"/>
        </div>
      </div>
    </div>
    
  
    <ul v-if="expanded" class="pl-1 mt-1">
        
        <router-link v-for="item in childs" :key="item.id" :to="item.link" custom v-slot="{ navigate, isExactActive }">
          <li class="mb-1 block text-left ml-5">
            <div class="block truncate transition duration-150 select-none cursor-pointer" :class="{'text-indigo-400': isExactActive, 'text-slate-400 hover:text-blue-500': !isExactActive}"  @click="navigate">
              <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">{{ item.itemname }}</span>
            </div>
          </li>
        </router-link>
            
      </ul>

        
  </li>
</template>

<script>

  import { useRouter } from 'vue-router'

  export default {
      
    props:{
      title: { type: String, default: 'Placeholder' },
      icon: { type: String, default: 'fa-solid fa-globe' },
      link: { type:String, default: '/' },
      badge: { type:Number, default: 0 },
      childs:{ type: Object },
    },

    data() {
      return {
        expanded: false,
        currentRoute: useRouter().currentRoute.value,
        activeCondition: false
      };
    },

    mounted(){
      this.expanded =  this.currentRoute.fullPath.includes(this.title.toLowerCase());
      this.activeCondition = this.currentRoute.fullPath.includes(this.title.toLowerCase());
    },
      
    methods: {
      expand() {
        this.expanded = !this.expanded
      },

    },

  }
</script>
 
 <style scoped>
 
 </style>
 