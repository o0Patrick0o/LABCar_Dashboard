<template>
  
  <td v-if="!getEditModus" class="columnvalue"> 
    <div class="widget-table-item-progessbar">
      <div :style="{'width': progress + '%'}" class="widget-table-item-progess" /> 
    </div>
  </td>

  <td v-if="getEditModus" class="columnvalue">
    <input type="text" v-model="progress" class="columnvalue-input">
  </td>
      
</template>
  


<script>

  import { mapState }       from 'pinia';
  //import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
      
  export default {
      
    props:['row','columnid'],
        
    data() {
      return { 
        progress: 0,
      };
    },
          
    mounted() {
      this.changevalue();
    },
      
    methods: {
      
      changevalue() {
        var convertarray = Object.entries(this.row);
        var selectionarray = [];
        
        selectionarray = convertarray[this.columnid - 1];
        
        this.progress = parseInt(selectionarray[1]);
      }
      
    },
      
    computed:{ 
      
      ...mapState(useTableStore, [
        'getEditModus',
      ]),
    
    },
      
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

  .widget-table-item-progessbar{
    display: inline-flex;
    position: relative;
    width: 100%;
    overflow: hidden; 
    border-radius: 0.25rem;
    border-width: 2px;  
    height: 10px; 
  }

  .widget-table-item-progess{
    background: lightgreen;
  }

  .columnvalue-input{
    border: 1px solid lightgray;
    padding: 5px;
    width: 50px;
  }
      
</style>