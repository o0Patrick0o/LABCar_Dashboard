<template>
  <button type="button" @click="showiconpicker()" class="iconpicker">
    <font-awesome-icon :icon="currenticon"/>
  </button>

  <transition>
    <div v-if="modalshow" class="iconpicker-modal" >
      <div class="iconpicker-modal-content">
        <div class="iconpicker-modal-container">
        
        <!-- Header -->
        <div class="iconpicker-modal-header">
          <p class="iconpicker-modal-header-logotitle">
            {{ label }}
          </p>
 
          <div class="iconpicker-modal-header-closebtn" @click="closeiconpicker">
            <font-awesome-icon icon="fa-solid fa-x" />
          </div>
        </div>
        
        <!-- Body -->
        <div class="iconpicker-modal-body">
          
          <div class="iconpicker-modal-sidebar">
            
            <div v-for="tab in tabs" :key="tab.id" class="iconpicker-modal-sidebar-tabitem" :class="{ 'active': isActiveTab(tab.id) }" @click="setActiveTab(tab)">
              <font-awesome-icon :icon="tab.icon"  class="iconpicker-modal-sidebar-tabitem-icon"/>
              <span>{{ tab.title }}</span>
            </div>
      
            
            <div class="iconpicker-modal-sidebar-preview">
              
              <div class="iconpicker-modal-sidebar-preview-content">
                <div class="iconpicker-modal-sidebar-preview-icon">
                  <font-awesome-icon :icon="activeGlyph" />
                </div>
                <div class="iconpicker-modal-sidebar-iconname">
                  {{ activeGlyph }}
                </div> 
              </div>
                
            </div>

          </div>

          <div class="iconpicker-modal-body-inner">
            
            <div class="iconpicker-modal-search">
              <div>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="iconpicker-modal-search-icon"/>
              </div>
              <div class="iconpicker-modal-search-inputcontainer">
                <input v-model="filterText" placeholder="Filter nach Namen..." class="iconpicker-modal-search-input"/>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4 p-2">
              <div class="iconpicker-modal-iconcontainer" v-for="(glyph , index) in glyphs" :key="index" :class="{ 'selected': isActiveGlyph(glyph) }" @click="setActiveGlyph(glyph)">
        
                <font-awesome-icon :icon="glyph" class="iconpicker-modal-iconitem"/>
   
              </div>
            </div>
      
          </div>

        </div>
        
        <!-- Footer -->
        <div class="iconpicker-modal-footer">
          
          <TheFooter />

        </div>

        </div>
      </div>
    </div>
  </transition>
  
</template>



<script>

  import TheFooter from '@/components/dashboard/iconpicker/IconPicker-Footer.vue';

  import { mapState }           from 'pinia';
  //import { mapActions }         from 'pinia';
  import { useIconPickerStore } from '@/stores/iconpicker/Store-IconPicker.js';

  export default {

    components: {
      TheFooter,
    },
    
    props:['currenticon'],

    data() {
      return { 
        label: 'Icon Picker',
        modelValue: 'fa-regular fa-circle',
        modalshow: false,
        filterText: '',
        activeGlyph: 'fa-regular fa-circle',
        tabs: [
          {
            id: 'all',
            title: 'All Icons',
            icon: 'fa-solid fa-star-of-life',
            glyph: [],
          },
          {
            id: 'far',
            title: 'Font Awesome Regular',
            icon: 'fa-brands fa-fort-awesome-alt',
            glyph: [],
          },
          {
            id: 'fas',
            title: 'Font Awesome Solid',
            icon: 'fa-brands fa-fort-awesome',
            glyph: [],
          },
          {
            id: 'fab',
            title: 'Font Awesome Brands',
            icon: 'fa-solid fa-font-awesome',
            glyph: [],
          }
        ],
        
        activeTab: [],
        allGlyphs: [],
        
      };
    },

    mounted() {
      this.activeTab = this.tabs[0];
      this.allGlyphs.push(...this.getReguler);
      this.allGlyphs.push(...this.getSolid);
      this.allGlyphs.push(...this.getBrands);
      this.tabs[0].glyph.push(...this.allGlyphs);
      this.tabs[1].glyph.push(...this.getReguler);
      this.tabs[2].glyph.push(...this.getSolid);
      this.tabs[3].glyph.push(...this.getBrands);
      this.activeGlyph = this.currenticon;
    },

    methods: {
        
      showiconpicker() {
        this.modalshow = true;
      },
        
      closeiconpicker() {
        this.modalshow = false;
      },

      setActiveGlyph(glyph) {
        this.activeGlyph = glyph
      },

      isActiveGlyph (glyph) {
        this.activeGlyph == glyph
      },

      isActiveTab(tab) {
        return tab == this.activeTab.id
      },

      setActiveTab(tab) {
        this.activeTab = tab
      },      


    },

    computed:{ 
        
      ...mapState(useIconPickerStore, [
        'getReguler',
        'getSolid',
        'getBrands',
      ]),

      glyphs() {
        let _glyphs = []
        
        if (this.activeTab.id !== 'all') {
          _glyphs = this.activeTab.link.icons
        } else {
          _glyphs = this.allGlyphs
        }

        if (this.filterText != '') {
          const _filterText = this.filterText.toLowerCase()
          _glyphs = _glyphs.filter(
            item => item.substr(7, this.filterText.length) === _filterText
          )
        }
        return _glyphs
      },
      
    },

  }
</script>



<style scoped>
  
  .iconpicker{
    cursor: pointer;
    border: 1px solid lightgray;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 0.25rem;
  }

  .iconpicker-modal {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    color: black;
  }

  .iconpicker-modal-content {
    display: table-cell;
    vertical-align: middle;
  }

  .iconpicker-modal-container{
    width: 1200px;
    height: 800px;
    margin: 0px auto;
    padding: 16px;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  .iconpicker-modal-header {
    padding: 10px;
    box-shadow: 0px 0px 12px 0px lightgray;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .iconpicker-modal-header-logotitle {
    padding-top: 2px;
    line-height: 1;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  } 

  .iconpicker-modal-header-closebtn {
    cursor: pointer;
    font-size: 22px;
  }

  .iconpicker-modal-body {
    display: flex !important;
    padding-top: 10px;
    height: 85%;
  }

  
  .iconpicker-modal-sidebar {
    display: flex; 
    color: black;
    background: white;
    z-index: 50; 
    
    flex-direction: column; 
    width: 25%;
  }

  .iconpicker-modal-sidebar-tabitem {
    display: flex;
    padding: 15px ;
    font-size: 0.8rem;
    border-radius: 0.25rem;
    color: lightgray;
    cursor: pointer;
  }

  .iconpicker-modal-sidebar-tabitem-icon {
    font-size: 16px;
    margin-right: 10px;
  }

  .active {
    background-color: #fff;
    color: black;
    box-shadow: 0px 0px 12px 5px lightgray;
  }

  .iconpicker-modal-sidebar-preview{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 0;
    margin-top: auto;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
    height: 200px;
  }

  .iconpicker-modal-sidebar-preview-content{
    margin-top: auto;
    margin-bottom: auto;
  }

  .iconpicker-modal-sidebar-preview-icon{
    font-size: 46px;
  }

  .iconpicker-modal-sidebar-iconname{
    font-weight: 600;
  }

  .iconpicker-modal-body-inner {
    position: relative;
    padding: 16px;
    width: 100% !important;
    overflow: auto;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
    margin-left: 10px;
    box-shadow: inset 0px 0px 12px 5px lightgray;
  }

  .iconpicker-modal-search {
    display: flex;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 0.25rem; 
  }

  .iconpicker-modal-search-icon {
    margin-right: 10px;
    margin-left: 0px;
  }

  .iconpicker-modal-search-inputcontainer{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
  }

  .iconpicker-modal-search-input { 
    width: 300px;
  }

  .iconpicker-modal-iconcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    padding: 5px;
    border: 1px solid lightgray;
    cursor: pointer;
  }

  .iconpicker-modal-iconitem {
    font-size: 16px;
    font-weight: 600;
  }

  .iconpicker-modal-footer{
    margin-top: 20px;
    height: 6%; 
  }

  .iconpicker-modal-footer-cencelbutton {
    padding: 5px;
    width: 100px;
    margin-left: 0;
    margin-right: auto;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
  }

  .iconpicker-modal-footer-cencelbutton:hover {
    color: blue;
    border-color: blue;
  }

  .iconpicker-modal-footer-okbutton {
    padding: 5px;
    width: 100px;
    margin-right: 0;
    margin-left: 280px;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
  }

  .iconpicker-modal-footer-okbutton:hover {
    color: blue;
    border-color: blue;
  }

  .selected {
    background-color: #fff;
    color: black;
    box-shadow: 0px 0px 12px 5px lightgray;
  }

</style>