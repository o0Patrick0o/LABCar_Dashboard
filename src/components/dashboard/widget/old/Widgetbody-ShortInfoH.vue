<template>
    <div class="widget-shortinfobar" v-for="cont in content" :key="cont.id">
        <div class="..." v-for="stat in cont.stats" :key="stat.id">
            <div class="widget-card">

                    <div class="widget-card-header">
                        <div class="widget-card-header-textcontainer">
                            <div class="widget-card-header-title">
                                {{ stat.statSubtitle }}
                            </div>
                            <div class="widget-card-header-subtitle">
                                {{ stat.statTitle }}
                            </div>
                        </div>
                        <div class="widget-card-header-iconcontainer">
                            <div class="widget-card-header-icon" :class="stat.statIconColor">
                                <font-awesome-icon :icon="stat.statIconName" />
                            </div>
                        </div>
                    </div>
                    <div class="widget-card-body">
                        <div class="widget-card-body-textcontainer" :class="stat.statPercentColor">
                            <font-awesome-icon :icon="dynamic(stat.statArrow)" />
                            {{ stat.statPercent }}%
                        </div>
                        <div>{{ stat.statDescripiron }}</div>
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

	.widget-card-header{
        display: flex; 
    }

	.widget-card-header-textcontainer{
        width: 85%; 
	}

	.widget-card-header-title{
		font-size: 1.25rem;
        font-weight: 600; 
	}

	.widget-card-header-subtitle{
		font-size: 0.75rem;
        font-weight: 700; 
	}

	.widget-card-header-iconcontainer{
        margin-left: auto;
        margin-right: 0;
	}

	.widget-card-header-icon{
		display: inline-flex; 
        justify-content: center; 
        align-items: center; 
        border-radius: 9999px; 
        width: 50px; 
        height: 50px; 
        color: #ffffff; 
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
	}

	.widget-card-body{
        display: inline-flex;
        margin-top: 20px; 
        font-size: 0.8rem; 
	}

	.widget-card-body-textcontainer{
       margin-right: 10px;
	}
    
  </style>