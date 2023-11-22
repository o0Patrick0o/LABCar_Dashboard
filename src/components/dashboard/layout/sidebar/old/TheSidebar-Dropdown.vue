<template>
  <router-link to="#0">
    <div class="sidebar-link" @click="collapsedropdown()">

      <div class="grid grid-cols-6 gap-4">
          
        <div class="... sidebar-link-icon-left">
          <font-awesome-icon :icon="this.icon" />
        </div>

        <div class="col-start-2 col-span-4 sidebar-link-text" v-if="sidebarOpen">
          {{ this.linkname }}
        </div>

        <div class="col-end-7 col-span-1 sidebar-link-icon-right" v-if="sidebarOpen">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div>
        
      </div>

    </div>
  </router-link>
        
  <ul :class="{'sidebar-links-link-dropdown': showMenu}" v-if="showMenu">
      <SidebarItemDropdownChild v-for="child in this.childs" :key="child.id" :link="child.link" :itemname="child.itemname"/>
  </ul>

</template>
    
    
<script>
 
  import SidebarItemDropdownChild from '@/components/dashboard/layout/sidebar/old/TheSidebar-DropdownChild.vue';

  export default {

    components: {
      SidebarItemDropdownChild,
    },
      
    props:['icon', 'linkname', 'link', 'badge', 'childs', 'sidebarOpen'],

    data() {
      return {
        showMenu: false,
      };
    },
            
    methods: {          
      collapsedropdown() {
        this.showMenu = !this.showMenu;
      },
    },
 }

</script>
    
    
    
<style scoped>

.sidebar-link{
    color: black;
    margin-top: 10px;
    margin-left: 15px;
  }

  .sidebar-link-icon-left{
    margin-left: 0;
    margin-right: auto;
  }

  .sidebar-link-text{
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .sidebar-link-icon-right{
    display: flex;
    align-items: center;
  }

  .sidebar-links-link-dropdown{
    padding-left: 2.25rem; 
    margin-top: 0.25rem; 
  }

</style>