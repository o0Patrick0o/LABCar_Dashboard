<template>        
  <div class="customtable-paginationinfo">
      
    <div class="customtable-paginationinfo-infotext">
      <p>Zeigt {{ from }} bis {{ to }} von {{ getTotalRows }} Einträgen</p>
    </div>

    <div class="customtable-paginationinfo-selectiontext">
      <p>Zeilen pro Seite</p>
    </div>

    <select v-model="rowsperpage" class="customtable-paginationinfo-dropdown">
      <option v-for="option in getPageSizeOptions" :value="option" :key="option">{{ option }}</option>
    </select>
  
  </div>
</template>    
  

  
<script>

  import { mapState }       from 'pinia';
  import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
  
  export default {
    
    components: {},
    
    data() {
      return {
        from: 1,
        to: 10,
        rowsperpage: 10,
      };
    },
    
    mounted() {},
    
    methods: {
      
      ...mapActions(useTableStore, [
        'setPageSize',
      ]),

      changepage() {
        if(this.getPage == 1)
        {
          this.from = 1;

          if( this.getPageSize > this.getTotalRows)
          {
            this.to = this.getTotalRows;
          }
          else {
            this.to = this.getPageSize;
          }
          
        } 
        else if(this.getPage > 1)
        {
          this.to = this.getPageSize * this.getPage;
          this.from = this.to - this.getPageSize + 1;
        }
      },
    
    },
    
    computed:{
      
      ...mapState(useTableStore, [
        'getTotalRows',
        'getPage',
        'getPageSize',
        'getPageSizeOptions',
      ]),
    
    },
    
    watch: {
      rowsperpage: {
        handler() {
          this.setPageSize(this.rowsperpage);
          this.changepage();
        },
        
        deep: true,
      },

      getPage: {
        handler() {
          this.changepage();
        },
        
        deep: true,
      },
    },

  }
</script>


<style scoped>

  .customtable-paginationinfo{
    display: flex;
    color: black;
    background: white;
  }
      
  .customtable-paginationinfo-infotext{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem; 
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 0.25rem; 
    width: 250px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 600; 
    user-select: none;

  }

  .customtable-paginationinfo-selectiontext{
    display: flex;
    align-items: center;
    padding: 1rem; 
    margin-left: auto;
    margin-right: 0;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    border-right: 0px;
    width: 130px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 600; 
    user-select: none;
  }
      
  .customtable-paginationinfo-dropdown{
    display: flex;
    text-align: center;
    margin-left: -0.125rem;
    width: 70px;
    height: 40px;
    background: white;
    font-size: 0.8rem;
    font-weight: 600; 
    user-select: none;
  }
    
</style>