<template>
  
  <td class="columnvalue">
    <img :src="changevalue()" alt="" class="columnimage inline-flex">
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

      changevalue(){
        var convertarray = Object.entries(this.row);
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

    .columnimage{
      height: 30px;
      width: 30px;
    }
      
  </style>