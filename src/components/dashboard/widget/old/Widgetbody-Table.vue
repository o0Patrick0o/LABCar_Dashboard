<template>
    <table class="widget-table" v-for="cont in content" :key="cont.id">
        <thead>
            <tr>
                <th v-for="headeritem in cont.headeritems" :key="headeritem.item" class="widget-table-headeritem">{{ headeritem.item }}</th>
            </tr>
          </thead>
          
          <tbody>
            
            <tr v-for="bodyitem in cont.bodyitems" :key="bodyitem.id">
              <th class="widget-table-item" v-for="column in bodyitem.column" :key="column.id">
                <img v-if="column.form == 'image'" class="widget-table-item-image" :src="column.content" width="20" height="20" alt="..." />
                <font-awesome-icon v-if="column.form == 'icon'" class="widget-table-item-icon" :icon="column.content" />
                <font-awesome-icon v-if="column.form == 'dynamic'" class="widget-table-item-icon" :icon="dynamic(column.text)" />
                <div v-if="column.form == 'progress'" class="widget-table-item-progessbar">
                  <div :style="{'width': column.content}" class="widget-table-item-progess" />
                </div>
                <p class="widget-table-item-text">{{column.text}}</p>
              </th>
            </tr>
  
          </tbody>
        </table>
  </template>
  
  <script>
  
   
    export default {
  
      components: {},

      props:["content"],

      data() {
        return {
          number: 0,
        };
      },

      methods: {
        dynamic(value) {
          let oldValue = this.number;

          if (value == oldValue || oldValue == 0) {
            this.number = value;
            return 'fa-solid fa-minus';
          }
          else if(value > oldValue){
            this.number = value;
            return 'fa-solid fa-arrow-up';
          }
          else if(value < oldValue){
            this.number = value;
            return 'fa-solid fa-arrow-down';
          }
        }
      },

      watch: {
        number: {
        deep: true,
        handler (value, oldValue) {
          if (value.name == oldValue.name || oldValue == 0) {
            this.icon = 'fa-solid fa-minus'
          }
        }
    }
}

    }
    
  </script>
  
  
  
<style scoped>
  
    .widget-table{
      width: 100%; 
      align-items: center;
      background-color: transparent; 
    }
  
    .widget-table-headeritem{
      padding: 10px;
      border-bottom-width: 1px; 
      border-style: solid; 
      font-size: 0.9rem;
      font-weight: 600; 
      text-align: left; 
      text-transform: uppercase; 
    }
  
    .widget-table-item{
      padding: 10px; 
      font-size: 0.8rem;
      text-align: left;
    }
  
    .widget-table-item-image{
      display: inline-flex;
      border-radius: 0.25rem;
      margin-right: 10px;
      width: 20px; 
      height: 20px; 
    }

    .widget-table-item-icon{
      margin-right: 10px;
      width: 15px; 
      height: 15px; 
    }

    .widget-table-item-progessbar{
      display: inline-flex;
      position: relative;
      margin-left: 10px;
      margin-right: 10px;
      width: 70%;
      overflow: hidden; 
      border-radius: 0.25rem;
      border-width: 2px;  
      height: 10px; 
    }

    .widget-table-item-progess{
      background: lightgreen; 
    }
    
    .widget-table-item-text{
      display: inline-flex;
      vertical-align: middle;
      font-size: 13px;
      font-weight: 400;
    }
    
  </style>