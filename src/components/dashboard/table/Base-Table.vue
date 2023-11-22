<template>
  <div class="customtable">
    
    <div class="grid grid-cols-6 gap-4">
      
      <div id="customtabel-header" class="col-start-1 col-end-7"> 
        <div class="grid grid-cols-6 gap-4">
          
          <div class="col-start-1 col-end-4">
            <CustomTableSearch />
          </div>
          
          <div class="col-end-7 col-span-3">
            
            <div class="customtabel-header-rigth">

              <CustomTableNewRow />
              
              <button type="button" class="customtablenewcolumn-button" @click="showNewEvent()">
                <p>Neue Spalte</p>
              </button>
              
              <button type="button" class="customtableedit-button" @click="setEditModus">
                <p class="mr-1">Edit</p>
                <font-awesome-icon icon="fa-regular fa-pen-to-square" />
              </button>  

              <CustomTableSettings />

            </div>
          
          </div>
        
        </div>
      </div>
       
      <div class="col-start-1 col-end-7">
        <div class="customtable-tablecontainer">
          <table class="customtable-table">
            
            <thead class="customtable-table-header">
              <tr>
                <CustomTableHeader v-for="col in getColumns" :key="col.id" :col="col" />
              </tr>
            </thead>
            
            <tbody class="customtable-table-body">
              <CustomTableRow />
            </tbody>
            
            <tfoot>
              <tr>
                <CustomTableHeader v-if="getCloneHeaderInFooter" />
              </tr>
            </tfoot>
          
          </table>
        </div>
      </div>
      
      <div class="col-start-1 col-end-7">

        <div class="grid grid-cols-6 gap-4 customtable-footer">
          
          <div class="col-start-1 col-end-4">
            
            <div class="customtable-paginationinfo">
              
              <CustomTablePaginationInfo />

            </div>

          </div>
          
          <div class="col-end-7 col-span-3">
            
            <div class="customtable-pagination">
              
              <CustomTablePagination />
            
            </div>
          
          </div>
        
        </div>

      </div>
    
    </div>

  </div>

  <transition>
    <CustomTableNewColumn v-if="neShow" @close-modal="closeNewEvent"/>
  </transition>

</template>
  


<script>

  import CustomTableSearch    from '@/components/dashboard/table/Table-Search.vue';
  import CustomTableNewRow    from '@/components/dashboard/table/Table-NewRow.vue';
  import CustomTableNewColumn from '@/components/dashboard/table/Table-NewColumn.vue';
  import CustomTableSettings  from '@/components/dashboard/table/Table-Settings.vue';
  
  import CustomTableHeader    from '@/components/dashboard/table/Table-Column.vue';
  import CustomTableRow       from '@/components/dashboard/table/Table-Row.vue';

  import CustomTablePaginationInfo  from '@/components/dashboard/table/Table-PaginationInfo.vue';
  import CustomTablePagination      from '@/components/dashboard/table/Table-Pagination.vue';

  import { mapState }       from 'pinia';
  import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
  
  export default {

    components: {
      CustomTableSearch,
      CustomTableNewRow,
      CustomTableNewColumn,
      CustomTableSettings,

      CustomTableHeader,
      CustomTableRow,

      CustomTablePaginationInfo,
      CustomTablePagination,
    },
    
    data() {
      return { 
        selectAll: false,
        neShow: false,
      };
    },
    
    mounted() {},
    
    methods: {
      
      ...mapActions(useTableStore, [
        'setPageSize',
        'setEditModus',
      ]),
            
      displayedItems(value) {
        const startIndex = (this.getPage - 1) * this.getPageSize;
        const endIndex = startIndex + this.getPageSize;
                
        return value.slice(startIndex, endIndex);
      },

      selectallChanged(value) {
        this.selectAll = value;
      },

      showNewEvent() {
        this.neShow = true;
      },
      
      closeNewEvent() {
        this.neShow = false;
      },

    },

    computed:{  

      ...mapState(useTableStore, [
        'getColumns',
        'getRows',
        'getTotalRows',
        'getStickyHeader',
        'getStickyFirstColumn',
        'getCloneHeaderInFooter',
        'getSelctRowOnClick',
        'getPage',
        'getPageSize',
        'getPageSizeOptions'
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

  .customtable{
    min-width: 100%;
    max-width: 100%;
		padding: 1.5rem;
		background-color: white;
		border-radius: 0.25rem;
	}
	
	.customtabel-header-rigth{
		display: flex;
    width: 100%;
	}
	
  .customtable-tablecontainer{
    display: block; 
    overflow-x: auto; 
    width: 100%; 
  }

	.customtable-table{
    align-items: center; 
    width: 100%; 
    background-color: transparent; 
    border-collapse: collapse; 
		margin-top: 10px; 
	}
	
	.customtable-table-header{
    border-top: 1px solid lightgray; 
	}
	
	.customtable-table-body{
		border-top: 1px solid lightgray; 
	}

  .customtable-footer{
    border-top: 1px solid lightgray;
    padding-top: 10px; 
  }
		
	.customtable-paginationinfo{
    display: flex;
    width: 100%;
	}
		
	.customtable-pagination{
	  display: flex;
    width: 100%;
	}

  .customtablenewcolumn-button{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle; 
    padding: 1rem; 
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 0.25rem; 
    border: 1px solid lightgray;
    width: 150px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 600; 
    user-select: none;
    box-shadow: inset 0px 0px 5px 0px lightgray; 
	}

  .customtableedit-button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle; 
    padding: 1rem; 
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 0.25rem; 
    border: 1px solid lightgray;
    width: 100px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 600; 
    user-select: none;
    box-shadow: inset 0px 0px 5px 0px lightgray; 
  }
	
	.customtable-table-loader{
		width: 48px;
		height: 48px;
		border: 5px solid #FFF;
		border-bottom-color: #FF3D00;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}
	
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 

</style>