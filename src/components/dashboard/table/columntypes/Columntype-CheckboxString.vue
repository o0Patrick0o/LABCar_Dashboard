<template>
  
  <td class="columnvalue">
    <input type="checkbox" v-model="selectet"/>
    {{ changevalue(row) }} (CS)
  </td>
      
</template>
    


<script>
      
  export default {
            
    props:['row','columnid'],
              
    data() {
      return { 
        selectet: false,
      };
    },
                
    mounted() {
      this.selectet = this.changevalue();
    },
            
    methods: {
      
      changevalue(){
        var convertarray = Object.entries(this.row);
        var selectionarray = [];
                    
        selectionarray = convertarray[this.columnid - 1];
                    
        return selectionarray[1];
      }
      
    },   
  }
</script>
     
    
    
<style scoped>
     
  .columnvalue{
    padding: 1rem; 
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-size: 0.8rem;
    vertical-align: middle; 
    white-space: nowrap; 
  }
      
</style>