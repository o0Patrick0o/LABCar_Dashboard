<template>
  <Layout>
    <div class="h-[94%] overflow-y-scroll transition-all duration-200 ease-in-out">
      <header class="dashbord-header">
        <div class="widget-header-left">
          <div class="widget-header-left-headline">Komponenten Test</div>
        </div>
      </header>

      <div class="calendar">

        <!-- Base Components -->
        <!-- <BaseAvatar>
          <img src="@/assets/Images/Placeholder/user.png" alt="User" />
        </BaseAvatar> -->

        <!-- <BaseBadge :Content="9"></BaseBadge> -->

        <!-- <BaseButton>
          <p>test</p>
        </BaseButton> -->

        <!-- <BaseCard>
          <template v-slot:header>
            <div>Card with hover effect</div>
          </template>

          <template v-slot:subheader>

            <div>It also have a ripple</div>
          </template>

          <template v-slot:content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          </template>

          <template v-slot:footer>
            <BaseButton>Action</BaseButton>
            <BaseButton>Action</BaseButton>
          </template>
        </BaseCard> -->

        <!-- <BaseCheckBox>test</BaseCheckBox> -->

        <!-- <BaseChip>test</BaseChip> -->

        <!-- <BaseDialog>
          <template v-slot:title>
            <div>Card with hover effect</div>
          </template>

          <template v-slot:content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          </template>

          <template v-slot:footer>
            <BaseButton>Action</BaseButton>
            <BaseButton>Action</BaseButton>
          </template>
        </BaseDialog> -->

        <!-- <BaseAlert :activ="true"></BaseAlert> -->

        <!-- <BaseField>test</BaseField> -->

        <!-- <BaseIcon :fontawesomeicon="'fa-solid fa-x'"></BaseIcon>
        <BaseIcon><font-awesome-icon icon="fa-solid fa-m" /></BaseIcon>
        <BaseIcon :fontawesomeicon="'fa-solid fa-a'"></BaseIcon>
        <BaseIcon><font-awesome-icon icon="fa-solid fa-s" /></BaseIcon> -->

        <!-- <BaseList :title="'Das ist ein Test'">
          <template v-slot:list>
            <ListItem :itemtype="'DefaultItem'">dfgdf</ListItem>
            <ListItem :itemtype="'ButtonItem'">dfgdf</ListItem>
            <ListItem :itemtype="'FakeButtonItem'">dfgdf</ListItem>
            <ListItem :itemtype="'LinkItem'">dfgdf</ListItem>
            <ListItem :itemtype="'RouterItem'">dfgdf</ListItem>
            <ListItem :itemtype="'ExpandItem'">
              dfgdf
              <template v-slot:expand>
                <ListItem :itemtype="'DefaultItem'">dfgdf</ListItem>
                <ListItem :itemtype="'ButtonItem'">dfgdf</ListItem>
                <ListItem :itemtype="'FakeButtonItem'">dfgdf</ListItem>
                <ListItem :itemtype="'LinkItem'">dfgdf</ListItem>
                <ListItem :itemtype="'RouterItem'">dfgdf</ListItem>
              </template>
            </ListItem>
          </template>
        </BaseList> -->

        <!-- <BaseMenu>
          <template v-slot:content>
            <MenuItem>Test1</MenuItem>
            <MenuItem>Test2</MenuItem>
            <MenuItem>Test3</MenuItem>
            <MenuItem>Test4</MenuItem>
          </template>
        </BaseMenu> -->

        <!-- <div style="width: 100%">
          <BaseProgressBar :value="value2" color="#0288d1" />
          <br />
          <BaseProgressBar :value="value" :showValue="false" color="#38b2ac" />
          <br />
          <BaseProgressBar mode="indeterminate" color="#bb2727" />
        </div> -->

        <!-- <BaseProgressSpinner />
        <BaseProgressSpinner animationDuration="4s" />
        <BaseProgressSpinner animationDuration="6s" /> -->

        <!-- <BaseRadio>Test</BaseRadio> -->

        <!-- <BaseSnackbar :isActive="true" :position="'center'" :duration="4000" >Test</BaseSnackbar> -->

      
      
        <!-- <BaseSpeedDial :direction="bottom">
          <template v-slot:button>
            <font-awesome-icon icon="fa-solid fa-plus" />
          </template>

          <template v-slot:content>
            <BaseButton class="md-icon-button">
              <font-awesome-icon icon="fa-solid fa-file" />
            </BaseButton>

            <BaseButton class="md-icon-button">
              <font-awesome-icon icon="fa-solid fa-paperclip" />
            </BaseButton>
          </template>
          
        </BaseSpeedDial>

    
        <BaseSpeedDial :event="click" :direction="bottom">
          <template v-slot:button>
            <font-awesome-icon icon="fa-solid fa-plus" />
          </template>

          <template v-slot:content>
            <BaseButton class="md-icon-button">
              <font-awesome-icon icon="fa-solid fa-file" />
            </BaseButton>

            <BaseButton class="md-icon-button">
              <font-awesome-icon icon="fa-solid fa-paperclip" />
            </BaseButton>
          </template>
        </BaseSpeedDial> -->


        <!-- <BaseStepper v-model:step="step" :loading="loading" :finalize="finalize" :tabs="steps">
          
          <template #1>
            Donec eu leo at elit efficitur vehicula in
            at velit. Fusce nec ante nec erat pellentesque fringilla. Sed mollis, ante
            at faucibus aliquam, turpis ante molestie lectus, sit amet mollis nisi
            velit sit amet ligula.
          </template>

          <template #2>
            Donec id pharetra nunc, at rhoncus dui. Nulla in feugiat ante. Maecenas euismod justo eget
            dignissim faucibus. Nam elementum dolor sit amet felis sodales luctus.
            Aenean et lacus varius, mollis mi nec, posuere lectus. Pellentesque tempor
            sapien a magna fringilla iaculis.
          </template>

          <template #3>
            Donec id libero ex. Aliquam ut massa dolor.
          </template>

          <template #4>
            Sed eu volutpat enim. Donec nisi nulla,
            eleifend quis mollis eu, posuere nec lorem. Donec id libero ex. Aliquam ut
            massa dolor.
          </template>

          <template #5>
            Etiam in turpis erat. Vestibulum auctor vel nibh eget vehicula. Integer
            finibus libero a ex vehicula pharetra.
          </template>

          <template #6>
            Etiam in turpis erat. Vestibulum auctor vel nibh eget vehicula. Integer
            finibus libero a ex vehicula pharetra. Suspendisse dapibus ipsum elit, nec
            euismod sapien laoreet ac.
          </template>

        </BaseStepper> -->
      
        <!-- <BaseSwitch>Test</BaseSwitch> -->
        
        <!-- <div style="width: 100%;">
          <BaseTabs class="w-11/12 lg:w-10/12 mx-auto mb-16" :tabList="tabList" :id="1">
            <template #1> Content 1 </template>
            <template #2> Content 2 </template>
            <template #3> Content 3 </template>
            <template #4> Content 4 </template>
          </BaseTabs>
        </div> -->

        <div style="width: 100%;">

          <BaseTabs class="w-11/12 lg:w-10/12 mx-auto" :tabList="tabList" variant="horizontal" :id="2">
            <template #1> Content 1 </template>
            <template #2> Content 2 </template>
            <template #3> Content 3 </template>
            <template #4> Content 4 </template>
          </BaseTabs>
        </div>
        
        <!-- <TabsTab :tabs="tabs">
          <template #1>
            Donec eu leo at elit efficitur vehicula in
            at velit. Fusce nec ante nec erat pellentesque fringilla. Sed mollis, ante
            at faucibus aliquam, turpis ante molestie lectus, sit amet mollis nisi
            velit sit amet ligula.
          </template>

          <template #2>
            Donec id pharetra nunc, at rhoncus dui. Nulla in feugiat ante. Maecenas euismod justo eget
            dignissim faucibus. Nam elementum dolor sit amet felis sodales luctus.
            Aenean et lacus varius, mollis mi nec, posuere lectus. Pellentesque tempor
            sapien a magna fringilla iaculis.
          </template>

          <template #3>
            Donec id libero ex. Aliquam ut massa dolor.
          </template>

          <template #4>
            Sed eu volutpat enim. Donec nisi nulla,
            eleifend quis mollis eu, posuere nec lorem. Donec id libero ex. Aliquam ut
            massa dolor.
          </template>
        </TabsTab> -->

    
    
        <!-- <BaseTooltip :tooltiptext="'sdjfslnd'" :position="'top'">
          Test
        </BaseTooltip> -->

        <!-- <BaseDatePicker :format="'YYYY.MM.DD'" :value="'11.11.2023'" :editable="true"></BaseDatePicker> -->

      </div>
    </div>
  </Layout>
</template>
  


<script>

  import Layout from '@/layouts/Layout-Auth-Grid.vue';

  // Base Components
  //import BaseAvatar from '@/components/base/avatar/Base-Avatar.vue';
  //import BaseBadge from '@/components/base/badge/Base-Badge.vue';
  //import BaseButton from '@/components/base/button/Base-Button.vue';
  //import BaseCard from '@/components/base/card/Base-Card.vue';
  //import BaseCheckBox from '@/components/base/checkbox/Base-Checkbox.vue';
  //import BaseChip from '@/components/base/chips/Base-Chip.vue';
  //import BaseDialog from '@/components/base/dialog/Base-Dialog.vue';
  //import BaseAlert from '@/components/base/dialog/Base-Alert.vue';
  //import BaseField from '@/components/base/field/Base-Field.vue'
  //import BaseIcon from '@/components/base/icon/Base-Icon.vue'
  //import BaseList from '@/components/base/list/Base-List.vue';
  //import ListItem from '@/components/base/list/List-Item.vue';
  //import BaseMenu from '@/components/base/menu/Base-Menu.vue';
  //import MenuItem from '@/components/base/menu/Menu-Item.vue';
  //import BaseProgressBar from '@/components/base/progress/Base-ProgressBar.vue';
  //import BaseProgressSpinner from '@/components/base/progress/Base-ProgressSpinner.vue';
  //import BaseRadio from '@/components/base/radio/Base-Radio.vue';
  //import BaseSnackbar from '@/components/base/snackbar/Base-Snackbar.vue';
  //import BaseSpeedDial from '@/components/base/speeddialog/Base-SpeedDial.vue';
  //import BaseStepper from '@/components/base/stepper/Base-Stepper.vue';
  //import BaseSwitch from '@/components/base/switch/Base-Switch.vue';
  import BaseTabs from '@/components/base/tabs/Base-Tabs.vue';
  //import TabsTab from '@/components/base/tabs/Tabs-Tab.vue';
  //import BaseTooltip from '@/components/base/tooltip/Base-Tooltip.vue';
  //import BaseDatePicker from '@/components/base/datepicker/Base-DatePicker.vue';

  
  export default {

    components: {
      Layout,
      
      // Base Components
      //BaseAvatar,
      //BaseBadge,
      //BaseButton,
      //BaseCard,
      //BaseCheckBox,
      //BaseChip,
      //BaseDialog,
      //BaseAlert,
      //BaseField,
      //BaseIcon,
      //BaseList,
      //ListItem,
      //BaseMenu,
      //MenuItem,
      //BaseProgressBar,
      //BaseProgressSpinner,
      //BaseRadio,
      //BaseSnackbar,
      //BaseSpeedDial,
      //BaseStepper,
      //BaseSwitch,
      BaseTabs,
      //TabsTab
      //BaseTooltip,
      //BaseDatePicker,
  

    },

    data() {
      return {
        value: 0,
        value2: 0,
        text: 'Donec id pharetra nunc, at rhoncus dui. Nulla in feugiat ante. Maecenas euismod justo eget dignissim faucibus. Nam elementum dolor sit amet felis sodales luctus.',
        step: 1,
        tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
        loading: false,
        mode: 'dark',
        date: '2019.01.01',
        tabs: [
          {
            title: 'Tab 1',
            iconSuccess: null,
            isValid: true,
          },
          {
            title: 'Tab 2',
            iconSuccess: null,
            isValid: true,
          },
          {
            title: 'Tab 3',
            iconSuccess: null,
            isValid: true,
          },
          {
            title: 'Tab 4',
            iconSuccess: null,
            isValid: true,
          },
          {
            title: 'Tab 5',
            iconSuccess: null,
            isValid: true,
          },
        ],
        steps: [
          {
            title: "Step 1",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Step 2",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Step 3",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Step 4",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Step 5",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Step 6",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "Step 7",
            iconSuccess: null,
            isValid: true,
          },
        ]
      };
    },
    
    interval: null,

    methods: {

      startProgress() {
        this.interval = setInterval(() => {
          let newValue = this.value + 10;
          if (newValue >= 101) {
            newValue = 0;
          }
          this.value = newValue;
          if(newValue === 100)
          {
            this.value2 = this.value2 + 1;
          }

        }, 1000);
      },

      endProgress() {
        clearInterval(this.interval);
        this.interval = null;
      },

      finalize() {
        this.loading = true;
      }

    },

    mounted() {
      this.startProgress();
    },

    beforeUnmount() {
      this.endProgress();
    },
  }
</script>
  
  
  
<style lang="scss" scoped>
    
  .calendar{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 20px;
    width: 100%;
  }

  .dashbord-header{    
    display: flex; 
    padding: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05) !important;
    background-color: white !important;
    padding: 1rem;
    z-index: 25;
  }

  .widget-header-left{
    margin-left: 0;
    margin-right: auto;
  }
  
  .widget-header-left-headline{
    font-size: 18px;
    font-weight: 600; 
  }

  .md-speed-dial-target {
    z-index: 1;
  }


  * {
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif;
  }
  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8f8;
    margin: 0;
    padding: 20px;
  }

  .change__style {
    background-color: #eee;
    font-size: 1em;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>