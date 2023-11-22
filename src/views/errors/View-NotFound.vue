<template>
    <div class="pagewrapper">  
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7">
          
          <div class="grid grid-cols-6 gap-4">
            
            <div class="col-start-2 col-span-4">
              <img class="logo" src="@/assets/Images/Placeholder/logo.svg" alt="">
            </div>
            
            <div class="col-start-2 col-span-4">
              
              <div class="custom-card">
                <div class="grid grid-cols-1 gap-4">
                 
                  <div class="col-start-1 col-span-1">
                    <h1 class="error-text">Ups, da haben wir uns glaube ein wenig verfahren.</h1>
                  </div>
                      
                      <div class="col-start-1 col-span-1">
                        <p class="text">Bitte überprüfen Sie, ob die Adresse der Website richtig geschrieben ist.</p>
                        <p class="text">Oder</p>
                      </div>
  
                    </div>
                  </div>
                </div>
                
                <div class="col-start-3 col-span-2">
                  <router-link to="/dashboard">
                    <button class="custom-button">Zurück nach Home</button>
                  </router-link>
                </div>
              
              </div>
            </div>
          </div>
        </div>
</template>
   


<script>
    
  export default {
    name: 'NotFound'
  }

</script>
    
  
  
    <style scoped>
    
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  
    .pagewrapper {
      min-height: 96vh;
      max-height: 96vh;
      
      display: flex;
      background-color: #ffffff;
  
      justify-content: center;
      align-items: center;
      text-align: center;
      vertical-align: middle;
  
      font-family: "Open Sans", sans-serif;
      color: #000000;    
    }
  
    .logo{
      display: block;
      width: 250px;
      margin-left: auto;
      margin-right: auto;
    }
  
    .text{
      text-align:center;
      font-size:20px;
    }
  
    .error-text{
      text-align:center;
      padding:20px;
      font-family: Cursive;
    } 
    
  
    .custom-card {
      display: flex;
  
      justify-content: center;
      align-items: center;
      text-align: center;
      vertical-align: middle;
  
      font-size: 23px;
      padding: 20px;
      color: #000000;
      background: #ffffff;
      user-select: none;
      border: 1px solid rgba(0, 0, 0, 0.5);
      box-shadow: 4px 4px 8px rgba(192, 192, 192, 0.3), -4px -4px 8px rgba(192, 192, 192, 0.3),
            inset 4px 4px 4px rgba(192, 192, 192, 0.3),
            inset -4px -4px 4px rgba(192, 192, 192, 0.3);
    }
  
    .custom-button{
      padding-top: 20px;
      padding-bottom: 20px;
      width: 300px;
  
      font-weight: 900;
      font-size: 23px;
   
      user-select: none;
  
      border: 1px solid rgba(0, 0, 0, 0.5);
      transition: all 0.3s linear;
      box-shadow: 4px 4px 8px rgba(192, 192, 192, 0.3), -4px -4px 8px rgba(192, 192, 192, 0.3),
            inset 4px 4px 4px rgba(192, 192, 192, 0.3),
            inset -4px -4px 4px rgba(192, 192, 192, 0.3);
    }
  
    .custom-button:hover{
        border-color: #000000;
        color: #cf2e2e !important;
        transform: translateY(-5px);
    }    
    
    </style>  