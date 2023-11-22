<template>
  <div class="customtablesearch">
    <div class="customtablesearch-button">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </div>
    
    <input type="search" class="customtablesearch-input" placeholder="Suche"/>
  </div>               
</template>
  
<script>

    import { mapState }         from 'pinia';
    import { mapActions }       from 'pinia';
    import { useTableStore }    from '@/stores/table/Store-Table.js';
  
    export default {

        
    
        data() {
            return { 
                selectAll: false,
            };
        },
    
        mounted() {},

        methods: {

            ...mapActions(useTableStore, [
                'setPageSize',
            ]),
            
            displayedItems(value) {
                const startIndex = (this.getPage - 1) * this.getPageSize;
                const endIndex = startIndex + this.getPageSize;
                
                return value.slice(startIndex, endIndex);
            },

        },

        computed:{  

            ...mapState(useTableStore, [
                'getContent',
                'getLoading',
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

  .customtablesearch{
    display: flex;
    color: black;
    background: white;
    margin-left: 0;
    margin-right: auto;
	}
	
	.customtablesearch-button{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle; 
    padding: 1rem; 
    margin-left: 5px;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    border: 1px solid lightgray;
    width: 40px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 600; 
    user-select: none;

	}

  .customtablesearch-input{
    display: flex;

    padding: 1rem; 
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border: 1px solid lightgray;
    margin-left: -0.125rem;
    width: 350px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 600; 
    user-select: none;
   
	}
	
</style>