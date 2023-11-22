<template>
  <div class="sidebar" :class="{'sidebar-open': sidebarOpen}">
    
    <button class="sidebar-closebutton" @click="sidebarswitch()" :class="{'sidebar-closebutton-open': sidebarOpen}">
      <span class="sidebar-header-closebutton-tooltip">Close sidebar</span>
      <font-awesome-icon v-if="sidebarOpen"  icon="fa-solid fa-bars-staggered" />
      <font-awesome-icon v-if="!sidebarOpen" icon="fa-solid fa-bars" />
    </button>
    
    <div class="sidebar-header">
        
      <router-link class="sidebar-header-link" to="/">
        <img class="sidebar-header-avatar" :src="placeholder" alt="">
          <div v-if="sidebarOpen" class="sidebar-header-textcontainer">
            <p class="sidebar-header-maintext">John Doe</p>
            <p class="sidebar-header-subtext">Web Designer</p>
          </div>
      </router-link>

    </div>
    
    <div class="sidebar-links">
      
      <div class="sidebar-category">Seiten</div>
      
      <ul class="sidebar-links-container">
        
        <component v-for="item in this.getSidebarItem" :key="item.id" :is="item.itemform" :icon="item.icon" :linkname="item.linkname" :childs="item.childs" :link="item.link" :badge="item.badge" :sidebarOpen="this.sidebarOpen" />
     
      </ul>
      
      <div class="sidebar-category">More</div>
      
      <ul class="sidebar-links-container">

        <component v-for="item in this.getSidebarItem2" :key="item.id" :is="item.itemform" :icon="item.icon" :linkname="item.linkname" :childs="item.childs" :link="item.link" :badge="item.badge" :sidebarOpen="this.sidebarOpen" />
      
      </ul>
    
    </div>
  
  </div>
</template>



<script>

  import Placeholder          from '@/assets/Images/Placeholder/user.png';
  import Dropdown             from '@/components/dashboard/layout/sidebar/old/TheSidebar-Dropdown.vue';
  import DefaultwithBadge     from '@/components/dashboard/layout/sidebar/old/TheSideBar-DefaultWithBadge.vue';
  import Default              from '@/components/dashboard/layout/sidebar/old/TheSideBar-Default.vue';

  import { mapState }         from 'pinia';
  import { useSidebarStore }  from "@/stores/thesidebar/Store-TheSidebar.js";

  export default {

    components: {
      Dropdown,
      DefaultwithBadge,
      Default
    },

    data() {
      return {
        placeholder: Placeholder,
        sidebarOpen: true,
      };
    },

    computed:{
      ...mapState(useSidebarStore, [
        'getSidebarItem',
        'getSidebarItem2',
      ]),
    },

    methods: {
      sidebarswitch(){
        this.sidebarOpen = !this.sidebarOpen
        console.log(this.sidebarOpen)
      },
    },
  }
  
</script>



<style scoped>

  .sidebar{
    display: flex; 
    color: black;
    background: white;
    z-index: 50; 
    padding: 15px; 
    flex-direction: column; 
    width: 6rem; 
    overflow-y: auto;
    border: 2px solid rgb(0, 0, 0, 0.125);
  }

  .sidebar-open{
    width: 16rem;
  }

  .sidebar-header{
    display: flex; 
    justify-content: space-between; 
  }

  .sidebar-closebutton{
    margin-bottom: 10px;
    padding-left: auto;
    padding-right: 0;
  }

  .sidebar-closebutton-open{
    margin-bottom: 10px;
    padding-left: 170px;
    padding-right: 0;
  }

  .sidebar-header-closebutton-tooltip{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .sidebar-header-link{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    margin: 0 auto;
  }

  .sidebar-header-avatar{
    width: 50px;
    height: 50px;
    border-radius: 50% !important;
  }

  .sidebar-header-textcontainer{
   margin-left: 10px;
  }

  .sidebar-header-maintext{
    color: black;
    font-size: 1.1rem;
    font-weight: 600 !important;
  }

  .sidebar-header-subtext{
    font-size: 0.8rem;
    color: #797979 !important;
    font-weight: 300 !important;
  }


  .sidebar-links{
    margin-top: 2rem; 
    margin-bottom: 2rem;
  }

  .sidebar-category{
    font-size: 0.8rem;
    font-weight: 600; 
    text-transform: uppercase;
    margin: auto auto; 
  }

  .sidebar-links-container{
    margin-top: 15px;
    margin-bottom: 15px; 
  }

</style>