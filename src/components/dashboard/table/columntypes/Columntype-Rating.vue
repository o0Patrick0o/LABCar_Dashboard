<template>
  
  <td v-if="!getEditModus" class="columnvalue">
    <label class="star-rating" v-for="rating in ratings" :class="{ 'is-selected': intern_value >= rating && intern_value != null}"
        v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out" :key="rating">
      ★
    </label>
  </td>

  <td v-if="getEditModus" class="columnvalue">
    <input type="text" v-model="intern_value" class="columnvalue-input">
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
        ratings: [1, 2, 3, 4, 5],
        intern_value: null,
        checked_value: null,
        temp_value: null
      };
    },
          
    mounted() {
      this.changevalue();
    },
      
    methods: {
      changevalue(){
        var convertarray = Object.entries(this.row);
        var selectionarray = [];
              
        selectionarray = convertarray[this.columnid - 1];
              
        this.intern_value = selectionarray[1];
        this.temp_value = selectionarray[1];
      },

      star_over(value) {
        return (this.intern_value = value);
      },
        
      star_out() {
        return (this.intern_value = this.temp_value);
      },
        
      set(value) {
        if (!this.disabled) {
          this.temp_value = value;
          this.checked_value = value;
          this.$emit("stardata", this.checked_value);
          return (this.intern_value = this.temp_value);
        }
      },
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

  .star-rating {
    display: inline-block;
    padding: 1px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ababab;
    transition: color 0.2s ease-out;
  }

  .star-rating:hover {
    cursor: pointer;
  }

  .is-selected {
    color: #ffd700;
  }

  .columnvalue-input{
    border: 1px solid lightgray;
    padding: 5px;
    width: 50px;
  }
      
</style>