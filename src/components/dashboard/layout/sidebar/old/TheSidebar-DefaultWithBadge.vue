<template>
  <router-link :to="this.link">
    <div class="sidebar-link">

      <div class="grid grid-cols-6 gap-4">
          
        <div class="... sidebar-link-icon-left" :class="{'sidebar-open': sidebarOpen}">
          <font-awesome-icon :icon="this.icon" />
        </div>
  
        <div class="col-start-2 col-span-4 sidebar-link-text" v-if="sidebarOpen">
          {{ this.linkname }}
        </div>
  
        <div class="col-end-7 col-span-1 sidebar-link-icon-right" v-if="sidebarOpen">
          <div class="sidebar-links-link-badge">{{ this.badge }}</div>
        </div>
          
      </div>
  
    </div>
  </router-link>
</template>
    
    
<script>
 
  export default {
      
    props:['icon', 'linkname', 'link', 'badge', 'childs', 'sidebarOpen'],

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

  .sidebar-links-link-badge{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    padding: 10px;
    height: 20px; 
    width: 20px;
    font-size: 0.7rem;
    font-weight: 600; 
    color: #ffffff;
    background-color: #0004ff; 
  }
  
</style>