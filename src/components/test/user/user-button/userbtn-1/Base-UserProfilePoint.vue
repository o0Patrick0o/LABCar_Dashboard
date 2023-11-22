<template>
  <div class="menu-container">
    
    <button ref="trigger" class="menu" @click.prevent="dropdownOpen = !dropdownOpen">
      <div class="menu-textcontainer">
        <span class="menu-text">Profile</span>
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </div>
    </button>

    <transition class="menu-dropdownmenu-container">
      <div v-show="dropdownOpen" class="menu-dropdownmenu">
        
        <div class="menu-dropdownmenu-header">Administrator</div>
        
        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
          <li class="menu-dropdownmenu-item">
            <router-link class="menu-dropdownmenu-item-link" to="#" @click="dropdownOpen = false">
              <div class="menu-dropdownmenu-item-content">                
                <div class="menu-dropdownmenu-item-textcontainer">
                  <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
                  <span class="menu-dropdownmenu-item-maintext">Profile</span>
                </div>
              </div>  
            </router-link>
          </li>
          
          <li class="menu-dropdownmenu-item">
            <router-link class="menu-dropdownmenu-item-link" to="#" @click="dropdownOpen = false">
              <div class="menu-dropdownmenu-item-content">  
                <div class="menu-dropdownmenu-item-textcontainer">
                  <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
                  <span class="menu-dropdownmenu-item-maintext">Settings</span>
                </div>
              </div>  
            </router-link>
          </li>

          <div class="menu-dropdownmenu-footer">
            <router-link  to="#">
              Logout
            </router-link>
          </div>

        </ul>        

      </div> 
    </transition>

  </div>
</template>



<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DropdownNotifications',
  props: ['align'],
  setup() {

    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
      dropdownOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen.value || keyCode !== 27) return
      dropdownOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      dropdownOpen,
      trigger,
      dropdown,
    }
  }
}
</script>



<style scoped>

  .menu-container{
    display: flex;
    position: relative; 
  }

  .menu{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    width: 6rem;
    height: 2rem;
    background: #2f3640; 
  }

  .menu-textcontainer{
    display: flex;    
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
  }

  .menu-text{
    margin-right: 10px;
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 500; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }

  .menu-dropdownmenu{
    position: absolute;
    right: 0;   
    border-radius: 0.25rem; 
    margin-top: 51px;
    padding-left: 10px;
    padding-right: 10px;
    width: 350px;   
    z-index: 100;
    background: #2f3640;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .menu-dropdownmenu-header{
    padding-left: 10px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    border-bottom-width: 1px;  
  }

  .menu-dropdownmenu-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    border-top-width: 1px;  
  }
  

  .menu-dropdownmenu-item-link{
    display: block; 
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; 
  }

  .menu-dropdownmenu-item-content{
    display: flex !important;
    border-width: 1px;
    border-radius: 13px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .menu-dropdownmenu-item-textcontainer{
    margin-left: 2rem !important;
    margin-right: auto;
  }

  .menu-dropdownmenu-item-maintext{
    display: inline-flex !important;
    font-weight: 600 !important;
    margin-left: 10px;
  }
</style>