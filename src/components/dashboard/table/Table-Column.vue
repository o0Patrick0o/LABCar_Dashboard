<template>
  <th class="column">
    <div class="inline-flex">
      <input v-if="col.hasCheckbox" v-model="selectAll" type="checkbox" class="column-checkbox"/>
      {{ col.title }}
        
      <span v-if="col.sortable" class="column-sortablecontainer" @click="changesortdirection">
        <font-awesome-icon icon="fa-solid fa-sort-up" class="column-sortablecontainer-icontop"  :class="{ 'column-sortablecontainer-iconaktiv': sortdirection === 'asc'}" />
        <font-awesome-icon icon="fa-solid fa-sort-down" class="column-sortablecontainer-iconbottom" :class="{'column-sortablecontainer-iconaktiv': sortdirection === 'desc'}"/>
      </span>
    </div>
  </th>
</template>



<script>
  import { mapState }       from 'pinia';
  import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
  
  export default {

    props: ['col'],
    
    data() {
      return { 
        selectAll: false,
        sortdirection: '',
      };
    },

    mounted() {},

    methods: {
    
      ...mapActions(useTableStore, [
        'setSelectAll',
      ]),

      changesortdirection() {
        if(this.sortdirection == 'asc')
        {
          this.sortdirection = 'desc'
        } else if(this.sortdirection == 'desc')
        {
          this.sortdirection = 'asc'
        } else {
          this.sortdirection = 'desc'
        }
      },

    },

    computed:{
      ...mapState(useTableStore, [
        'getLoading',
      ]),  
    },

  }

</script>



<style scoped>

  .column{
    min-width: 100px;
    padding-top: 1rem;
    padding-bottom: 1rem; 
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-size: 0.9rem;
    font-weight: 600; 
    color: black;
    text-align: left; 
    text-transform: uppercase;
	}
	
	.column-checkbox {
    border-radius: 0.25rem; 
    border-color: lightgray; 
    width: 1rem; 
    height: 1rem; 
    margin-right: 10px;
    margin-top: 4px;
    cursor: pointer; 
	}
	
	.column-sortablecontainer{
    display: inline-block;
    margin-left: 10px;
	}
	
	.column-sortablecontainer-icontop{
	  color:#0e172633;
	}

  .column-sortablecontainer-iconbottom{
    display: block;
	  color:#0e172633;
    margin-top: -16px;
	}
	
	.column-sortablecontainer-iconaktiv{
		color: blue;
	}

</style>
