<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 opacity-0 pointer-events-none" aria-hidden="true"></div>

    <!-- Sidebar -->
    <div id="sidebar" class="flex flex-col  z-40 left-0 top-0  h-[94vh] overflow-y-scroll lg:overflow-y-auto no-scrollbar shrink-0 bg-slate-800 px-4 py-8 transition-all duration-200 ease-in-out" >

      <TheSidebarHeader />

      <div class="space-y-8">
        
        <div>
          <Category :title="'page'"/>
          <ul class="mt-3">            
            <component v-for="item in this.getSidebarItem" :key="item.id" :is="item.type" :title="item.linkname" :icon="item.icon" :badge="item.badge" :link="item.link" :childs="item.childs" />
          </ul>
        </div>
    
        <div>
          <Category :title="'More'"/>
          <ul class="mt-3">
            <component v-for="item in this.getSidebarItem2" :key="item.id" :is="item.type" :title="item.linkname" :icon="item.icon" :badge="item.badge" :link="item.link" :childs="item.childs" />
          </ul>
        </div>

      </div>

      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
              <path class="text-slate-600" d="M3 23H1V1h2z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import TheSidebarHeader from '@/components/dashboard/layout/sidebar/TheSidebar-Header.vue';
import Category from '@/components/dashboard/layout/sidebar/TheSidebar-Category.vue';
import ItemCollapsible from '@/components/dashboard/layout/sidebar/TheSidebar-ItemCollapsible.vue';
import ItemSingel from '@/components/dashboard/layout/sidebar/TheSidebar-ItemSingel.vue';

import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

import SidebarLinkGroup from './SidebarLinkGroup.vue'

import { mapState }         from 'pinia';
import { useSidebarStore }  from "@/stores/thesidebar/Store-TheSidebar.js";

export default {
  
  components: {
    SidebarLinkGroup,
    TheSidebarHeader,
    Category,
    ItemCollapsible,
    ItemSingel,
  },

  computed:{
      ...mapState(useSidebarStore, [
        'getSidebarItem',
        'getSidebarItem2',
      ]),
    },

  setup(props, { emit }) {

    const trigger = ref(null)
    const sidebar = ref(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

    const currentRoute = useRouter().currentRoute.value

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      ) return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(sidebarExpanded, () => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
    }
  },
}
</script>