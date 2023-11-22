<template>
  
    <td class="columnvalue">
      <img :src="changevalue(row)[1]" alt="" class="mr-3">
      {{ changevalue(row)[2] }}
    </td>
      
  </template>
        
  <script>
      
    export default {
      
      props:['row','columnid'],
        
      data() {
        return { 
          selectAll: false,
        };
      },
          
      mounted() {},
      
      methods: {
        changevalue(value){
          var convertarray = Object.entries(value);
          var selectionarray = [];
              
          selectionarray = convertarray[this.columnid - 1];
              
          return selectionarray[1];
        }
      },
      
      computed:{},
      
      watch: {
        palceholder: {
          handler() {
    
          },
          deep: true,
        },
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