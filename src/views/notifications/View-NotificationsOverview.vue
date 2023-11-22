<template>
  <Layout>
        <header class="message-header">
            <div class="message-header-textcontainer">
                <div class="message-header-headline">Benachrichtigung</div>
            </div>
        </header>
        
        <div class="message-body">
            <div class="timeline">
                <ul>
                    <li>
                        <span>3rd January 2020</span>
                        <div class="content">
                            <h3>What Is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </li>
                    
                    <li>
                        <span>21st Jun 2019</span>
                        <div class="content">
                            <h3>What Is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </li>
                    
                    <li>
                        <span>15th April 2018</span>
                        <div class="content">
                            <h3>What Is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </li>
                    
                    <li>
                        <span>22nd Mars 2017</span>
                        <div class="content">
                            <h3>What Is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
</template>
  
<script>

  import Layout from '@/layouts/Layout-Auth-Grid.vue';

  export default {
  
        components: {
            Layout,
        },

      props:[],

      data() {
      return { 
      };
    },
  
    }
    
</script>
  
  
  
<style scoped>
  
    .message-header{    
        display: flex; 
        padding: 10px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05) !important;
        background-color: white !important;
        padding: 1rem;
        z-index: 25;
    }

    .message-header-textcontainer{
        margin-left: 0;
        margin-right: auto;
    }
    
    .message-header-headline{
        font-size: 18px;
        font-weight: 600; 
    }

    .message-body{
        display: flex;
        flex-wrap: wrap;
        margin: 20px;
        padding: 20px; 
        min-height: 900px;
        background: white;
        border-radius: 0.25rem;
    }

    .timeline{
        padding:20px;
    }

    .timeline ul{
        list-style-type: none;
        border-left: 2px solid #000000;
        padding: 5px;
    }

    .timeline ul li{
        padding:20px 20px;
        position:relative;
        cursor:pointer;
        transition:.5s;
    }
    
    .timeline ul li span{
        display:inline-block;
        background-color: lightblue;
        border-radius: 0.25rem;
        padding: 5px;
        font-size:15px;
    }

    .timeline ul li .content h3{
        color:#000000;
        font-size:20px;
        font-weight: 600;
    }

    .timeline ul li .content p{
        padding:5px 0px 15px 0px;
        font-size:15px;
    }
    
    .timeline ul li:before{
        position:absolute;
        content:'';
        width:10px;
        height:10px;
        background-color:#ff0000;
        border-radius:50%;
        left:-11px;
        top:30px;
        transition:.5s;
    }
    .timeline ul li:hover{
        background-color: lightgray;
        border-radius: 0.25rem;
    }
    .timeline ul li:hover:before{
        background-color:#0F0;
        box-shadow:0px 0px 10px 2px #0F0;
    }
  
</style>