<template>
  
  <td class="columnvalue">
    <select v-model="selectdetstatus" class="columnvalue-status-dropdown">
      <option v-for="option in storeoption" :value="option" :key="option">{{ option }}</option>
    </select>
  </td>
      
</template>
        
<script>
      
  export default {
      
    props:['row','columnid'],
        
    data() {
      return { 
        storeoption: [],
        selectdetstatus: '',
      };
    },
          
    mounted() {
      this.changevalue()
    },
      
    methods: {

      changevalue(){
        var convertarray = Object.entries(this.row);
        var selectionarray = [];
              
        selectionarray = convertarray[this.columnid - 1];
  
        this.storeoption.push(...selectionarray[1].value1) 
        this.selectdetstatus = selectionarray[1].value2;
      }
    },
      
      computed:{},
      
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
    }

    .columnvalue-status-dropdown{
      min-width: 120px;
      color: black;
      border-radius: 0.25rem;
      border: 1px solid lightgray;
      background: white;
    }
      
  </style>