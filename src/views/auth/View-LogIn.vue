<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="login-card-body">
          
          <div class="login-card-left">
            <p class="login-card-left-headline">Dashboard</p>
            <p class="login-card-left-subline">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
            

          <div class="login-card-right">
              
            <div class="login-card-right-container">
              <div class="login-card-form">
                <form>
                  <div class="login-card-inputgroup">
                    <label class="login-card-label" htmlFor="grid-password">Email</label>
                    <input type="email" class="login-card-input" placeholder="Email"/>
                  </div>
                    
                  <div class="login-card-inputgroup">
                    <label class="login-card-label" htmlFor="grid-password">Password</label>
                    <input type="password" class="login-card-input" placeholder="Password"/>
                  </div>
                    
                  <div>
                    <label class="login-card-rememberme-label">
                      <input id="customCheckLogin" type="checkbox" class="login-card-rememberme-input"/>
                      <span class="login-card-rememberme-text">Remember me</span>
                    </label>
                  </div>
                    
                  <div class="login-card-button-container">
                    <button class="login-card-button" type="button">Login</button>
                  </div>
                    
                  <div class="login-card-pwforgot">
                    <router-link to="/pwforgotten">
                      <small>Password Vergessen?</small>
                    </router-link>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>
  
  
  
<script>

  export default {
    
    components: {},
    
    data() {
      return {
        User:[
          {
            name: "John Doe",
            email: "john@example.com",
            avatar:"https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93"
          },
        ],
      };
    },
    
    mounted() {},
    
    computed:{},
    
    methods: {}
  }
  
</script>
  
  

<style scoped>
     
  .login-page{
    position: relative;
  }

  .login-container{
    min-height: 100vh;
    display: flex !important;   
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
  }

  .login-card{
    display: flex;
    height: 600px;
    width: 1200px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05) !important;
    overflow: hidden !important;
  }

  .login-card-body{
    flex: 1 1 auto;
    display: flex;
  }

  .login-card-left{
    width: 50%;
    background: rgb(0, 174, 255, 0.521);
    color: #fff;
    display: flex !important;
    justify-content: center !important;
    flex-direction: column !important;
    padding: 1.5rem !important;
    height: 100% !important;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .login-card-left-headline{
    font-size: 46px;
    font-weight: 700 !important;
  }

  .login-card-left-subline{
    font-weight: 500 !important;
  }


  .login-card-right{
    width: 50%;
    background-color: rgb(255, 255, 255) !important;
    display: flex !important;
    align-items: center !important;
    padding-right: 3rem !important;
    padding-left: 3rem !important;
    height: 100% !important;
  }

  .login-card-right-container{
    display: flex; 
    position: relative; 
    margin-bottom: 1.5rem; 
    flex-direction: column; 
    border-width: 0; 
    width: 100%; 
    min-width: 0; 
    overflow-wrap: break-word; 
  }

  .login-card-form{
    padding-left: 1rem;
    padding-right: 1rem; 
    padding-top: 2.5rem;
    padding-bottom: 2.5rem; 
    padding-top: 0; 
    flex: 1 1 auto; 
  }
  
  @media (min-width: 1024px) {
    .login-card-form{ 
      padding-left: 2.5rem;
      padding-right: 2.5rem; 
    }
  }
 
  .login-card-inputgroup{
    position: relative; 
    margin-bottom: 0.75rem; 
    width: 100%; 
  }

  .login-card-input{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    border-radius: 0.25rem; 
    border-width: 0; 
    width: 100%; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    background-color: #ffffff; 
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    transition-duration: 150ms; 
    transition-timing-function: linear; 
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid rgb(0, 0, 0, 0.125); 
  }

  .login-card-label {
    display: block; 
    margin-bottom: 0.5rem; 
    font-size: 0.75rem;
    line-height: 1rem; 
    font-weight: 700; 
    text-transform: uppercase; 
  }


  .login-card-rememberme-label{
    display: inline-flex; 
    align-items: center; 
    cursor: pointer; 
  }

  .login-card-rememberme-input{
    margin-left: 0.25rem; 
    border-radius: 0.25rem; 
    border-width: 0; 
    width: 1.25rem; 
    height: 1.25rem; 
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    transition-duration: 150ms; 
    transition-timing-function: linear;
    border: 1px solid rgb(0, 0, 0, 0.125); 
  }

  .login-card-rememberme-text{
    margin-left: 0.5rem; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 600; 
  }

  .login-card-button-container{
    margin-top: 1.5rem; 
    text-align: center; 
  }

  .login-card-button{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    margin-right: 0.25rem; 
    margin-bottom: 0.25rem; 
    border-radius: 0.25rem; 
    width: 100%; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 700; 
    color: black; 
    text-transform: uppercase; 
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    transition-duration: 150ms; 
    transition-timing-function: linear; 
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid rgb(0, 0, 0, 0.125); 
  }

  .login-card-button:hover{
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
  }

  .login-card-pwforgot{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    margin-top: 1.5rem; 
    flex-wrap: wrap; 
  }

  .login-card-pwforgot:hover{
    color: blue;
  }

  </style>