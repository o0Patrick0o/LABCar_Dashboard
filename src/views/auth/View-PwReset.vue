<template>
  <div class="site-content">
			
		<div class="site-header">
			<img class="logo" :src="logo"  alt="..." />
		</div> 

		<div class="main-content">
			<h1 class="title">Wir sind dabei, etwas Neues vorzubereiten. <br> <span>Bleiben Sie dran!</span></h1>
		</div> 

	</div>
</template>
  


<script>
  
   import Logo from '@/assets/images/placeholder/logo.svg'

    export default {
  
      components: {},

      props:[],

      data() {
      return { 
        logo: Logo
      };
    },
  
    }
    
</script>
  
  
  
<style scoped>
  


    .site-header {
        text-align: center;
        padding: 80px 0;
    }
  
    .logo {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        padding-top: 60px;
        height: 150px;
    }

    .title {
        font-size: 48px;
        font-size: 2.6666666667em;
        font-weight: 300;
        text-align: center; 
    }

    .title span {
        color: #0015fd; 
    }
  
</style>