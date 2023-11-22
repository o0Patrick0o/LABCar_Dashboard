<template>
    <div class="widget-message" v-for="cont in content" :key="cont.id">
        <div class="widget-card" v-for="noti in cont.notice" :key="noti.id">
            <div class="widget-card-header">
                
                <div class="widget-card-header-image-container">
                  <img class="widget-card-header-image" :src="noti.image" alt="">  
                </div>
         
                <div class="widget-card-header-textcontainer">                    
                    <div class="widget-card-header-text">{{ noti.message }}</div>
                </div>
                
            </div>
            <div class="widget-card-body">
                <div class="widget-card-body-textcontainer">
                    <small class="widget-card-texttimestamp">{{ noti.timestamp }}</small>
                </div>
            </div>

        </div>
    </div> 
</template>
  


<script>
  
    export default {
  
      props:["content"],

      methods: {},

    }
    
</script>
  
  
  
<style scoped>
  
    .widget-message{
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

	.widget-card-header{
        display: flex; 
    }

	.widget-card-header-textcontainer{
        width: 100%; 
	}
    .widget-card-header-image-container{
        margin: 5px;
    }

    .widget-card-header-image{
        display: inline-flex;
        border-radius: 50% !important;
        width: 40px;
    }

	.widget-card-header-text{
        display: flex;
		font-size: 0.9rem !important;
        font-weight: 700;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px; 
	}

	.widget-card-body{
        margin-top: 20px; 
        font-size: 0.8rem; 
	}

	.widget-card-body-textcontainer{
       margin-right: 10px;
	}
    
    
    .widget-card-texttimestamp{
        color: #888888 !important;
        font-weight: 300 !important;
    }
  
  </style>