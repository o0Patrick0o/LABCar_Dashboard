<template>
    <div class="widget-shortinfobar" v-for="cont in content" :key="cont.id">
        <div class="..." >
            <div class="widget-card" v-for="todo in cont.todo" :key="todo.id">

                <div class="widget-card-item">
                    <input class="widget-card-input" type="checkbox" name="input-6" id="input-6">
                    <label class="widget-card-label" for="input-6">{{ todo.item }}</label>
                </div>
                    
            </div>
        </div>
    </div>
</template>
  
<script>
  
   
    export default {
  
      props:["content"],

      methods: {
        dynamic(value){
            if(value == 'up')
            {
                return 'fa-solid fa-circle-up';
            }
            else if(value != 'up')
            {
                return 'fa-solid fa-circle-down';
            }
        }
      },

    }
    
</script>
  
  
  
  <style scoped>
  
  .widget-shortinfobar{
        display: block; 
		
    }

    .widget-card{
        display: flex; 
        flex-direction: column; 
        border: 1px solid lightgray;
        border-radius: 0.25rem; 
        background-color: #ffffff; 
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
        margin: 10px; 
        padding: 10px; 
    }

	.widget-card-item{
    padding: 1rem !important;
    display: block;
  }
 
  .widget-card-input{
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
  }
  
  .widget-card-label{
    padding: 10px;
  }
    
  </style>