<template>
    <div class="widget-notification" v-for="cont in content" :key="cont.id">
        <div class="widget-card" v-for="noti in cont.notice" :key="noti.id">
            <div class="widget-card-header">
                
                <div class="widget-card-header-image-container">
                  <img class="widget-card-header-image" :src="noti.image" alt="">  
                </div>
         
                <div class="widget-card-header-textcontainer">
                    
                    <div class="widget-card-header-title">{{ noti.title }}</div>
                    
                    <div class="widget-card-header-subtitle">{{ noti.notification }}</div>
                
                </div>
                
                <div class="widget-card-header-container">
                    <div class="widget-card-header-timestamp">
                        <small>5min ago</small>
                    </div>
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
  
    .widget-notification{
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
        width: 75%; 
	}
    .widget-card-header-image-container{
        margin: 5px;
    }

    .widget-card-header-image{
        display: inline-flex;
        border-radius: 50% !important;
        width: 40px;
    }

	.widget-card-header-title{
		font-size: 1rem;
        font-weight: 600; 
	}

	.widget-card-header-subtitle{
		font-size: 0.9rem !important;
        font-weight: 700; 
	}

	.widget-card-header-container{
        margin-left: auto;
        margin-right: 0;
	}

	.widget-card-header-timestamp{ 
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
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