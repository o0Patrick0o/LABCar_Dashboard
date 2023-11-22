<template>
    <div class="widget shadow-xl border border-gray-300 rounded">
      
      <div class="widget-header">
  
        <div class="widget-header-left">
          <div class="widget-header-left-headline">{{ widgetheadline }}</div>
        </div>
        
        <div class="widget-header-right">
          <button ref="trigger" class="widget-header-right-options" type="button" @click.prevent="dropdownOpen = !dropdownOpen">
            <font-awesome-icon icon="fa-solid fa-ellipsis" />
          </button>
  
          <transition v-show="dropdownOpen">
            <div ref="dropdown" class="widget-header-right-dropdownmenu" @focusin="open = true" @focusout="open = false">
              <a href="#" class="widget-header-right-dropdownitem">Action 1</a>
              <a href="#" class="widget-header-right-dropdownitem">Action 2</a>
              <a href="#" class="widget-header-right-dropdownitem">Action 3</a>
            </div>
          </transition>
        </div>

      </div>
      
      <div class="widget-content">
        
        <component :is="itemform" :content="content" />

      </div>
    </div>
  </template>
  
  <script>
  
    import { ref, onMounted, onUnmounted } from 'vue'
    import Tablebody        from '@/components/dashboard/widget/old/Widgetbody-Table.vue';
    //import Chartbody        from '@/components/dashboard/widget/old/Widgetbody-Chart.vue';
    import ShortInfoVBody   from '@/components/dashboard/widget/old/Widgetbody-ShortInfoV.vue';
    import ShortInfoHBody   from '@/components/dashboard/widget/old/Widgetbody-ShortInfoH.vue';
    import NotificationBody from '@/components/dashboard/widget/old/Widgetbody-Notification.vue';
    import MessageBody      from '@/components/dashboard/widget/old/Widgetbody-Message.vue';
    import ProjectBody      from '@/components/dashboard/widget/old/Widgetbody-Project.vue';
    import MeetingBody      from '@/components/dashboard/widget/old/Widgetbody-Meeting.vue';
    import TodoBody         from '@/components/dashboard/widget/old/Widgetbody-Todo.vue';
      
    export default {
  
      components: {
        Tablebody,
        //Chartbody,
        ShortInfoVBody,
        ShortInfoHBody,
        NotificationBody,
        MessageBody,
        ProjectBody,
        MeetingBody,
        TodoBody,
      },

      props:["widgetheadline", "itemform" , "content"],
  
      setup() {
  
        const dropdownOpen = ref(false)
        const trigger = ref(null)
        const dropdown = ref(null)
  
        const clickHandler = ({ target }) => {
        if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
        dropdownOpen.value = false
        }
  
        onMounted(() => {
          document.addEventListener('click', clickHandler)
        })
  
        onUnmounted(() => {
          document.removeEventListener('click', clickHandler)
        })
  
        return {
          dropdownOpen,
          trigger,
          dropdown,
        }
      },
    }
    
  </script>
  
  
  
  <style scoped>
  
    .widget{
      display: flex; 
      flex-direction: column;
      margin: 10px;
      padding: 10px; 
    }
  
    .widget-header{
      display: flex; 
      padding: 10px;
      border-bottom-width: 1px; 
    }
  
    .widget-header-left{
      margin-left: 0;
      margin-right: auto;
    }
  
    .widget-header-left-headline{
      font-size: 18px;
      font-weight: 600; 
    }
  
    .widget-header-right{ 
      margin-left: auto;
      margin-right: 0;
  
    }
  
    .widget-header-right-options{
      font-size: 20px;
      font-weight: 700; 
      color: black; 
    }
  
    .widget-header-right-dropdownmenu{
      position: absolute;
      right: 20px;
      z-index: 50; 
      margin-top: -5px;
      border-radius: 0.25rem; 
      border-width: 1px; 
      font-size: 0.8rem;
      background-color: #ffffff; 
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
    }
  
    .widget-header-right-dropdownitem{
      display: block;
      padding-top: 10px;
      padding-bottom: 10px; 
      padding-left: 20px;
      padding-right: 20px; 
    }
  
    .widget-content{
      display: block;
      width: 100%; 
    }
  
    .widget-table{
      width: 100%; 
      align-items: center;
      background-color: transparent; 
    }
  
    .widget-table-headeritem{
      padding: 10px;
      border-top-width: 1px;
      border-bottom-width: 1px; 
      border-style: solid; 
      font-size: 0.9rem;
      font-weight: 600; 
      text-align: left; 
      text-transform: uppercase; 
    }
  
    .widget-table-firstitem{
      display: inline-flex;
      padding: 10px; 
      font-size: 0.8rem;
      text-align: left; 
    }
  
    .widget-table-firstitem-image{
      border-radius: 0.25rem;
      margin-right: 10px;
      width: 20px; 
      height: 20px; 
    }
  
    .widget-table-item{
      padding: 10px;
      font-size: 0.8rem;
    }
  
  </style>