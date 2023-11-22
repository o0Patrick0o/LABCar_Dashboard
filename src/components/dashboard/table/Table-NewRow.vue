<template>
  <div class="customtablenewrow">
    <button class="customtablenewrow-button" @click="newRow()">
      <p>Neue Zeile</p>
    </button>
  </div>      
</template>
  


<script>

  import { mapState }       from 'pinia';
  import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
  
  export default {
    
    data() {
      return { 
        selectAll: false,
      };
    },
    
    mounted() {},

    methods: {

      ...mapActions(useTableStore, [
        'setPage',
        'setRow',
        'setEditModus',
        'setTotalPages',
      ]),
            
      newRow(){
        this.setRow();
        this.setTotalPages();
        this.setPage(this.getTotelPages);
        this.setEditModus();
      }

    },

    computed:{  

      ...mapState(useTableStore, [
        'getRows',
        'getPage',
        'getPageSize',
        'getPageSizeOptions',
        'getTotelPages'
      ]),
    },

  }
</script>



<style scoped>

  .customtablenewrow{
    display: flex;
    color: black;
    background: white;
    margin-left: auto;
    margin-right: 0;
	}
	
	.customtablenewrow-button{
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

</style>