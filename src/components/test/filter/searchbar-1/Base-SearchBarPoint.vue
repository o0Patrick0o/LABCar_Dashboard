<template>
  <div class="searchBox">
    <input class="searchInput" type="text" name="" placeholder="Search">
    <button class="searchButton" href="#">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
  </div>
</template>
    
    
    
<script>
      
    export default {
    
      components: {},
    
      data() {
        return {};
      },
    
      mounted() {},
    
      computed:{},
    
      methods: {}
    }
    
</script>
    
    
    
<style scoped>

.searchBox {
  width: 280px;
}

.searchBox:hover > .searchInput {
  width: 240px;
  padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background: white;
  color : #000000;
}

.searchButton {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  float:right;
  border-radius: 9999px; 
  width: 2rem; 
  height: 2rem;
  background: #2f3640;
}

.searchInput {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background: #2f3640;
  outline:none;
  float:left;
  color: white;
  width: 0;
  height: 2rem;
  transition: 0.4s;
}

@media screen and (max-width: 620px) {
  .searchBox:hover > .searchInput {
    width: 150px;
    padding: 0 6px;
  }
}
           
</style>