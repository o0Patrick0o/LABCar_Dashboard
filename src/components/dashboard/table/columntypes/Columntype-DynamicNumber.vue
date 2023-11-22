<template>
  
  <td v-if="!getEditModus" class="columnvalue">
    <font-awesome-icon icon="fa-solid fa-arrow-trend-up" style="color: green;"  v-if="trendchange == 'up'" class="mr-3" />
    <font-awesome-icon icon="fa-solid fa-arrow-trend-down" style="color: red;" v-if="trendchange == 'down'" class="mr-3" />
    <font-awesome-icon icon="fa-solid fa-equals" v-if="trendchange == 'equals'" class="mr-3" />
    {{ trend }}
  </td>

  <td v-if="getEditModus" class="columnvalue">
    <font-awesome-icon icon="fa-solid fa-arrow-trend-up" style="color: green;"  v-if="trendchange == 'up'" class="mr-3" />
    <font-awesome-icon icon="fa-solid fa-arrow-trend-down" style="color: red;" v-if="trendchange == 'down'" class="mr-3" />
    <font-awesome-icon icon="fa-solid fa-equals" v-if="trendchange == 'equals'" class="mr-3" />
    <input type="text">
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
        trend: 0,
        trendchange: '',
      };
    },
          
    mounted() {
      this.changevalue();
    },

    updated(){
      this.changevalue();
    },
      
    methods: {
      changevalue(){
        var convertarray = Object.entries(this.row);
        var selectionarray = [];
              
        selectionarray = convertarray[this.columnid - 1];
              
        this.trend = selectionarray[1];
      }
    },
      
    computed:{ 
      
      ...mapState(useTableStore, [
        'getEditModus',
      ]),
    
    },
      
    watch: {
      trend: {
        handler(oldvalue, newvalue) {
          if(oldvalue > newvalue)
          {
            this.trendchange = 'down'
          } else if (oldvalue < newvalue)
          {
            this.trendchange = 'up'
          }
          else if(oldvalue == newvalue)
          {
            this.trendchange = 'equals'
          }
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