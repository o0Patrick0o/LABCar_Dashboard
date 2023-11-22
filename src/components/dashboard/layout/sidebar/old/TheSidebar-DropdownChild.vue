<template>
  <router-link :to="this.link">
    <div class="sidebar-link-dropdown-linkcontainer">
      <div class="sidebar-link-dropdown-linktext">{{ this.itemname }}</div>
    </div>
  </router-link>
</template>
    


<script>
 
  export default {

    props:['link', 'itemname'],

  }

</script>
    
    
    
<style scoped>
     

.sidebar-link-dropdown-linkcontainer {
  margin-top: 10px;
}

.sidebar-link-dropdown-linkcontainer:hover{
  background: lightgray;
}

.sidebar-link-dropdown-linktext{
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 500; 
}
  
</style>