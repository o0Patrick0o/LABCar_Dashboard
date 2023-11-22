<template>
  
  <td v-if="!getEditModus" class="columnvalue">
    <font-awesome-icon :icon="icons" class="columnvalue-icon"/>
  </td>

  <td v-if="getEditModus" class="columnvalue">
    <IconPicker class="columnvalue-input"  :currenticon="icons" />
  </td>
      
</template>
  


<script>

  import IconPicker         from '@/components/dashboard/iconpicker/Base-IconPicker.vue';

  import { mapState }       from 'pinia';
  //import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
      
  export default {
      
    props:['row','columnid'],

    components: {
      IconPicker
    },
        
    data() {
      return { 
        selectAll: false,
        icons: '',
      };
    },
          
    created() {
      this.changevalue();
    },

    updated() {
      this.changevalue();
    },
      
    methods: {

      changevalue(){
        var convertarray = Object.entries(this.row);
        var selectionarray = [];
              
        selectionarray = convertarray[this.columnid - 1];
        
        this.icons = selectionarray[1];
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
     
    .columnvalue {
      padding: 1rem; 
      padding-left: 1.5rem;
      padding-right: 1.5rem; 
      font-size: 0.8rem;
      vertical-align: middle; 
      white-space: nowrap; 
    }

    .columnvalue-icon {
      width: 20px;
      height: 20px;
    }

  .columnvalue-input{
    border: 1px solid lightgray;
    padding: 5px;
    width: 130px;
  }
      
  </style>