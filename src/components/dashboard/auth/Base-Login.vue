<template>
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
          <div class="form-body lg:max-w-xl mx-auto lg:p-20 p-8 lg:mt-20 mt-5 space-y-8">
            <div class="form-head cursor-pointer" @click="$router.push('/')">
              <img :src="placeholder" alt="" class="w-10" />
            </div>
            <div class="space-y-3">
              <h2 class="dark:text-white font-semibold text-gray-800 text-4xl">
                Welcome, to Dashboard<span class="text-primary">.</span>
              </h2>
              <p class="dark:text-gray-400 text-gray-700">
                Please enter your account to continue.
              </p>
            </div>
  
            <div class="space-y-5">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email address</label
                >
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Password</label
                >
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    autocomplete="off"
                    class="accent-primary focus:ring-4 cursor-pointer w-4 h-4 border border-gray-300 rounded dark:bg-gray-700 bg-gray-50 focus:ring-3 focus:ring-primary/30"
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm cursor-pointer font-normal dark:text-white text-gray-500"
                  >Remember for 30 days</label
                >
              </div>
              <button
                @click="$router.push('/auth/forgot-password')"
                class="text-sm dark:text-white hover:text-primary text-gray-700"
              >
                Forgot password?
              </button>
            </div>

            <button
              class="text-white bg-primary hover:bg-primary/80 p-3 w-full rounded-md"
            >
              Login, to continue
            </button>
            <p class="dark:text-white text-center text-gray-700">
              Don't have an account?<button
                type="button"
                @click="$router.push('/auth/register')"
                class="ml-2 text-primary"
              >
                Register here
              </button>
            </p>
          </div>
        </form>
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