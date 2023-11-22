<template>
  
  <td v-if="!getEditModus" class="columnvalue">
    <a :href="`mailto:${email}`" class="text-primary hover:underline">{{ email }}</a>
  </td>

  <td v-if="getEditModus" class="columnvalue">
    <input type="text" v-model="email" class="columnvalue-input">
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
        selectAll: false,
        email: '',
      };
    },
          
    mounted() {
      this.changevalue()
    },

    updated() {
      this.changevalue()
    },
      
    methods: {

      changevalue(){
        var convertarray = Object.entries(this.row);
        var selectionarray = [];
              
        selectionarray = convertarray[this.columnid - 1];
              
        this.email = selectionarray[1];
      }

    },

    computed:{ 
      
      ...mapState(useTableStore, [
        'getEditModus',
      ]),
    
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

  .columnvalue-input{
    border: 1px solid lightgray;
    padding: 5px;
    width: 130px;
  }
      
</style>