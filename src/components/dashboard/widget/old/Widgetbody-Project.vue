<template>
      <div class="widget-message" v-for="cont in content" :key="cont.id">
        <div class="widget-card" v-for="pdata in cont.project" :key="pdata.id">
      <div class="widget-card-body">
        
        <div class="widget-card-left separator">
          <p class="widget-card-left-titel">{{ pdata.titel }}</p>
          <small class="widget-card-left-description">{{ pdata.shortdescription }}</small>
          <span class="widget-card-left-timestamp">{{ pdata.timestamp }}</span>
        </div>

        <div class="widget-card-right">
          <p class="widget-card-right-submission"><font-awesome-icon icon="fa-solid fa-clock" />{{ pdata.submission }}</p>
          <p class="widget-card-right-commentnummber"><font-awesome-icon icon="fa-solid fa-comment" />{{ pdata.commentnummber }}</p>
          <div class="widget-card-progress">
            <div class="widget-card-progrssbar" role="progressbar" :style="{'width': pdata.progress+'%'}" />
          </div>
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

  .widget-card-body{
    display: flex !important;
    align-items: center !important;
    flex: 1 1 auto;
  }
  
  .widget-card-left{
    width: 50%;
    display: flex !important;
    align-items: center !important;
  }
  
  .widget-card-left-titel{
    margin-left: 20px;
    margin-right: 10px;
    font-size: 1.1rem;
    color: #000000 !important;
  }
  
  .widget-card-left-description{
    margin-left: 10px;
    margin-right: 10px;
    color: #999999 !important;
  }

	
	.widget-card-left-timestamp{
    color: #000000 !important;
    margin-left: 10px;
    margin-right: 10px;
	}
	
  .separator{
    border-right: 1px solid #b3b3b3 !important;
  }

	.widget-card-right{
    width: 50%;
    display: flex !important;
    align-items: center !important;
    color: #000000 !important;
	}
	
	.widget-card-right-submission{
    display: flex !important;
    align-items: center !important;
    margin-left: 20px;
    margin-right: 10px;
	}
	
	.widget-card-right-commentnummber{
    display: flex !important;
    align-items: center !important;
    margin-left: 10px;
    margin-right: 10px;
	}
	
	  .widget-card-progress{
    display:inline-flex;
    overflow: hidden;
    height: 10px;
    width: 200px;
    border: 2px solid rgb(0, 0, 0, 0.125);
    background-color: #ffffff;
    border-radius: 0.25rem;
    margin-left: 10px;
    margin-right: 10px;
  }

  .widget-card-progrssbar{
    overflow: hidden;
    height: 10px;
    background-color: rgb(30, 0, 255) !important;
  }
  
  </style>