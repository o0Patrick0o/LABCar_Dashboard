<template>
  <header class="header">
    <div class="header-left">
      <img src="@/assets/Images/Placeholder/logo.svg" alt="" >
    </div>
    
    <div class="header-right">
      <div class="nav-item">
        <SearchBox/>
      </div>
        
      <div class="nav-item">
        <Messages />
      </div>
        
      <div class="nav-item">
        <Notification/>   
      </div>
        
      <div class="nav-item">
        <Help />
      </div>
        
      <div class="partition">
        <p>|</p>
      </div>
        
      <div class="nav-item">
        <UserMenu />
      </div>
      
    </div>
    
 
  </header>
</template>
  
  
  
<script>
  
  import SearchBox    from '@/components/filter/searchbar-1/Base-SearchBarPoint.vue';
  import Messages     from '@/components/messages/messagesbtn-1/Base-MassengesPoint.vue';
  import Notification from '@/components/buttons/btn-notification/notification-1/Base-NotificationPoint.vue';
  import Help         from '@/components/buttons/helpbutton/help-1/Base-HelpPoint.vue';
  import UserMenu     from '@/components/user/user-button/userbtn-1/Base-UserProfilePoint.vue';
  
  export default {
  
    components: { 
      SearchBox,
      Messages,
      Notification,
      Help,
      UserMenu,
    },
  
    data() {
      return {};
    },
  
    mounted() {},
  
    computed:{},
  
    methods: {}
  }
  
</script>
  
  
  
<style scoped>
   
   .header{
    display: flex;
    position: relative;
    background: rgb(0, 0, 0);
    color: white;
    width: 100% !important;
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important; 
   }
  .header-left{
    padding-left: 2rem;
  }

  .header-right{
    display: inline-flex !important;
    margin-left: auto; 
    margin-right: 0;
    padding-right: 2rem; 
  }

  .nav-item{  
    text-align: center;
    padding-left: 5px;
  }

  .partition{
    font-size: 20px;
    user-select: none;
    padding-left: 10px;
    padding-right: 10px;
  }
    
</style>