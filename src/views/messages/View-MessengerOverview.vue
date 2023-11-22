<template>
  <Layout>
    <header class="message-header">
      <div class="message-header-textcontainer">
        <div class="message-header-headline">Nachrichten</div>
      </div>
    </header>
        
        <div class="message-body">
            
            <div class="message-body-left">
                
                <div class="message-body-left-searchbox">
                    <div class="message-body-left-input">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        <input placeholder="Suche" type="text">
                    </div>
                </div>
                
                <div class="message-body-left-interlocutor">
                    <img class="message-body-left-profileimage" :src="placeholder" alt="">
                    <div class="message-body-left-textcontainer">
                        <div class="message-body-left-name">Robo Cop</div>
                        <div class="message-body-left-status">Hey, you're arrested!</div>
                    </div>
                    <span class="message-body-left-lastactivity">13:21</span>
                </div>
                
            </div>
            
            <div class="message-body-right">
                
                <header class="message-body-right-header">
       
                    <img class="message-body-right-header-profileimage" :src="placeholder" alt="">
                    <div class="message-body-right-header-name">Robo Cop</div>
                   
                </header>
                
                <body class="message-body-right-chatpanel">
                    
                    <div class="message-body-right-chatpanel-usermessage">Hallo!</div>
                    <div class="message-body-right-chatpanel-interlocutormessage">Hallo!</div>

                </body>
                
                <footer class="message-body-right-chatbox">

                    <font-awesome-icon icon="fa-solid fa-face-smile" class="message-body-right-chatbox-icons"/>
                    <input type="text" placeholder="Type your message here..." class="message-body-right-chatbox-input">
                    <font-awesome-icon icon="fa-solid fa-microphone" class="message-body-right-chatbox-icons"/>
                    <font-awesome-icon icon="fa-solid fa-paper-plane" class="message-body-right-chatbox-icons"/>
              
                </footer>
            
            </div>
        </div>
    </Layout>
</template>
  


<script>
  
  import Layout       from '@/layouts/Layout-Auth-Grid.vue';
  import Placeholder  from '@/assets/Images/Placeholder/user.png';

  export default {

    components: {
      Layout,
    },

        props:[],

        data() {
            return {
                placeholder: Placeholder,
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

    .message-body-left{
        width: 33.333333%;
        border: 1px solid lightgray;
    }
    
    .message-body-left-searchbox {
        background: lightgray;
        padding: 25px;
    }
    
    .message-body-left-input {
        color: black;
        vertical-align: middle;
        background: white;
        border-radius: 0.25rem;
    }
    
    .message-body-left-interlocutor {
        display: flex;

        padding: 10px;
        cursor: pointer;
        border-bottom: 1px solid lightgray;
    }
 
    .message-body-left-profileimage {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 40px;
        margin-left: 30px;
        margin-right: 30px;
    }
    
    .message-body-left-textcontainer {
        display: block;
    }
 
    .message-body-left-name {
        font-size: 20px;
        font-weight: 600;
    }
    
	.message-body-left-status{
		color: gray;
        font-size: 14px;
        font-weight: 600;
	}
 
    .message-body-left-lastactivity{
        margin-left: auto;
        margin-right: 0;
        color: gray;
        font-size: 0.8rem
    }

    .message-body-right{
        width: 66.666667%;
        border: 1px solid lightgray;
    }
 
    .message-body-right-header {
        display: flex;
        align-items: center;
        background: lightgray;
        padding: 10px;
    }
 
    .message-body-right-header-profileimage{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 40px;
        margin-left: 30px;
        margin-right: 30px;
    }
  
    .message-body-right-header-name{
        font-size: 20px;
        font-weight: 600;
    }
 
    .message-body-right-chatpanel{
        width: 100%;
        height: 735px;
        padding: 10px;
    }

    .message-body-right-chatpanel-usermessage{
        display: flex;
        width: 80%;
        padding-left: 1rem;
        background: lightblue;
        border-radius: 0.25rem;
        border: 20px solid transparent;
        border-left: 20px solid black;
        margin-top: 10px;
    }

    .message-body-right-chatpanel-interlocutormessage{
        display: flex;
        width: 80%;
        margin-left: auto;
        margin-right: 0;
        padding-left: 1rem;
        background: lightgreen;
        border-radius: 0.25rem;
        border: 20px solid transparent;
        border-right: 20px solid black;
        margin-top: 10px;
    }

    .message-body-right-chatbox{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        width: 100%;
        background: lightgray;
        padding: 10px;
    }
 
    .message-body-right-chatbox-input{
        width: 70%;  
        margin: 0 10px;
        padding: 6px 2px;
    }
 
    .message-body-right-chatbox-icons{
        font-size: 26px;
        vertical-align: middle;
        margin-left: 10px;
        margin-right: 10px;
    }
  
</style>