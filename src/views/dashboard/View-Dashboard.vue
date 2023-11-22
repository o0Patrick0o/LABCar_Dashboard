<template>
  <Layout>
    <div class="h-[94%] overflow-y-scroll transition-all duration-200 ease-in-out">
      <header class="dashbord-header">

        <div class="widget-header-left">
            <div class="widget-header-left-headline">Dashboard</div>
          </div>
          
          <div class="widget-header-right">
     
    
            <EditMenu align="right" class="relative inline-flex">
              <li>
                  <a class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" href="#0">Option 1</a>
              </li>
              <li>
                <a class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" href="#0">Option 2</a>
              </li>
              <li>
                <a class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" href="#0">Remove</a>
              </li>
            </EditMenu>
          </div>

      </header>
      
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        <!-- Welcome banner -->
        <WelcomeBanner />

        <!-- Dashboard actions -->
        <div class="sm:flex sm:justify-between sm:items-center mb-8">

          <!-- Left: Actions -->
          <div></div>

          <!-- Right: Actions -->
          <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

            <!-- Filter button -->
            <FilterButton align="right" />

            <BaseDatePicker :format="'YYYY.MM.DD'" :value="'13.11.2023'" :editable="true"></BaseDatePicker>
            
            <!-- Add view button -->
            <button class="btn bg-white shadow-xl border border-gray-300 rounded-full w-11 hover:border-indigo-400">
                <font-awesome-icon icon="fa-solid fa-plus" class="hover:text-indigo-400"/>
            </button>
            
          </div>

        </div>

        <div :class="{'full': item.size == 3, 'full-2-3': item.size == 2, 'full-1-3': item.size == 1 }" v-for="item in this.getWidget" :key="item.id">
          <WidgetCard :widgetheadline="item.widgetheadline" :itemform="item.itemform" :content="item.content" />
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-12 gap-6">

         
          <DashboardCard01 />
    
          <DashboardCard02 />
 
          <DashboardCard03 />
     
          <DashboardCard04 />
     
          <DashboardCard05 />
    
          <DashboardCard06 />
   
          <DashboardCard07 />
         
          <DashboardCard08 />
     
          <DashboardCard09 />
      
          <DashboardCard10 />
       
          <DashboardCard11 /> 
        
          <DashboardCard12 />
        
          <DashboardCard13 />

        </div>

        </div>

    </div>
  </Layout>
</template>
  
  

<script>
  
  import Layout           from '@/layouts/Layout-Auth-Grid.vue';
  
  import WidgetCard       from '@/components/dashboard/widget/old/Base-Widget.vue';

  import WelcomeBanner    from '@/components/dashboard/widget/WelcomeBanner.vue'
  import FilterButton     from '@/components/dashboard/dropdown/Dropdown-Filter.vue'
  import BaseDatePicker from '@/components/base/datepicker/Base-DatePicker.vue';
  import DashboardCard01  from '@/components/dashboard/widget/DashboardCard01.vue'
  import DashboardCard02  from '@/components/dashboard/widget/DashboardCard02.vue'
  import DashboardCard03  from '@/components/dashboard/widget/DashboardCard03.vue'
  import DashboardCard04  from '@/components/dashboard/widget/DashboardCard04.vue'
  import DashboardCard05  from '@/components/dashboard/widget/DashboardCard05.vue'
  import DashboardCard06  from '@/components/dashboard/widget/DashboardCard06.vue'
  import DashboardCard07  from '@/components/dashboard/widget/DashboardCard07.vue'
  import DashboardCard08  from '@/components/dashboard/widget/DashboardCard08.vue'
  import DashboardCard09  from '@/components/dashboard/widget/DashboardCard09.vue'
  import DashboardCard10  from '@/components/dashboard/widget/DashboardCard10.vue'
  import DashboardCard11  from '@/components/dashboard/widget/DashboardCard11.vue'
  import DashboardCard12  from '@/components/dashboard/widget/DashboardCard12.vue'
  import DashboardCard13  from '@/components/dashboard/widget/DashboardCard13.vue'

  import EditMenu from '@/components/dashboard/dropdown/Dropdown-EditMenu.vue'

  import { mapState }           from 'pinia';
  import { useDashboardStore }  from "@/stores/dashboard/Store-Dashboard.js";

  export default {
  
    components: {
      Layout,
      WidgetCard,
      WelcomeBanner,
      FilterButton,
      BaseDatePicker,
      DashboardCard01,
      DashboardCard02,
      DashboardCard03,
      DashboardCard04,
      DashboardCard05,
      DashboardCard06,
      DashboardCard07,
      DashboardCard08,
      DashboardCard09,
      DashboardCard10,
      DashboardCard11,
      DashboardCard12,
      DashboardCard13,
      EditMenu
    },

    data() {
      return {
        today: '',
        dropdownOpen: false,
        trigger: null,
        dropdown: null,
      };
    },

    mounted() {
      var temp = new Date();
      this.today = temp.toLocaleDateString;
      console.log(this.today)

      document.addEventListener('click', this.clickHandler)
    },

    unmounted(){
      document.removeEventListener('click', this.clickHandler)
    },

    methods: {

      clickHandler({ target }) {
        if (!this.dropdownOpen.value || this.dropdown.value.contains(target) || this.trigger.value.contains(target)) {
          return this.dropdownOpen.value = false
        }
      }

    },
  
    computed:{
      ...mapState(useDashboardStore, [
        'getWidget',
      ]),
    },
  }
    
</script>
  

  
<style scoped>
  
  .content{
    flex-wrap: wrap;
    padding: 20px;
  }

  .dashbord-header{    
    display: flex; 
    height: 60px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05) !important;
    background-color: white !important;
    padding: 1rem;
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

  .full{
    width: 100%;
    margin-top: 1rem;
  }

  .full-2-3{
    width: 66.666667%;
    margin-top: 1rem;
  }

  .full-1-3{
    width: 33.333333%;
    margin-top: 1rem;
  }

</style>