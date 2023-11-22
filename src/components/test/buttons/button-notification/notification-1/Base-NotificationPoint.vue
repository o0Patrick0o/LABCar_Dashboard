<template>
  <div class="menu-container">
    
    <button ref="trigger" class="menu-button" @click.prevent="dropdownOpen = !dropdownOpen">
      <span class="menu-button-text">Nachrichten</span>
      <font-awesome-icon icon="fa-solid fa-bell"/>
      <div class="menu-button-pill"/>
    </button>

    <transition class="menu-dropdownmenu-container">
      <div v-show="dropdownOpen" class="menu-dropdownmenu">
        
        <div class="menu-dropdownmenu-header">Benachrichtigungen</div>
        
        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
          
          <li class="menu-dropdownmenu-item">
            <router-link class="menu-dropdownmenu-item-link" to="#" @click="dropdownOpen = false">
              <div class="menu-dropdownmenu-item-content">
                <div class="menu-dropdownmenu-item-icon">
                  <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
                </div>
                
                <div class="menu-dropdownmenu-item-textcontainer">
                  <span class="menu-dropdownmenu-item-maintext">You have 6 new messages</span>
                  <small class="menu-dropdownmenu-item-subtext">4 minutes ago</small>
                </div>
                <span class="menu-dropdownmenu-item-timestamp">Jan 24, 2020</span> 
              </div>  
            </router-link>
          </li>
          
          <li class="menu-dropdownmenu-item">
            <router-link class="menu-dropdownmenu-item-link" to="#" @click="dropdownOpen = false">
              <div class="menu-dropdownmenu-item-content">
                <div class="menu-dropdownmenu-item-icon">
                  <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
                </div>
                
                <div class="menu-dropdownmenu-item-textcontainer">
                  <span class="menu-dropdownmenu-item-maintext">You have 6 new messages</span>
                  <small class="menu-dropdownmenu-item-subtext">4 minutes ago</small>
                </div>
                <span class="menu-dropdownmenu-item-timestamp">Jan 24, 2020</span> 
              </div>  
            </router-link>
          </li>
          
          <li class="menu-dropdownmenu-item">
            <router-link class="menu-dropdownmenu-item-link" to="#" @click="dropdownOpen = false">
              <div class="menu-dropdownmenu-item-content">
                <div class="menu-dropdownmenu-item-icon">
                  <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
                </div>
                
                <div class="menu-dropdownmenu-item-textcontainer">
                  <span class="menu-dropdownmenu-item-maintext">You have 6 new messages</span>
                  <small class="menu-dropdownmenu-item-subtext">4 minutes ago</small>
                </div>
                <span class="menu-dropdownmenu-item-timestamp">Jan 24, 2020</span> 
              </div>  
            </router-link>
          </li>

          <li class="menu-dropdownmenu-item">
            <router-link class="menu-dropdownmenu-item-link" to="#" @click="dropdownOpen = false">
              <div class="menu-dropdownmenu-item-content">
                <div class="menu-dropdownmenu-item-icon">
                  <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
                </div>
                
                <div class="menu-dropdownmenu-item-textcontainer">
                  <span class="menu-dropdownmenu-item-maintext">You have 6 new messages</span>
                  <small class="menu-dropdownmenu-item-subtext">4 minutes ago</small>
                </div>
                <span class="menu-dropdownmenu-item-timestamp">Jan 24, 2020</span> 
              </div>  
            </router-link>
          </li>

        </ul>

        <div class="menu-dropdownmenu-footer">
          <router-link  to="#">
            Alle Benachrichtigungen Anzeigen
          </router-link>
        </div>
        

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
    display: inline-flex;
    position: relative; 
  }

  .menu-button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    background: #2f3640; 
  }

  .menu-button-text{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .menu-button-pill{
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 9999px;
    border-width: 2px;
    background-color: red;
    border-color: #000000;
    width: 0.625rem;
    height: 0.625rem; 
  }

  .menu-dropdownmenu{
    position: absolute;
    right: 0;   
    border-radius: 0.25rem; 
    margin-top: 55px;
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
  }

  .menu-dropdownmenu-footer:hover{
    color: lightblue;
  }

  .menu-dropdownmenu-item{
    border-bottom-width: 1px; 
  }

  .menu-dropdownmenu-item-link{
    display: block; 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
  }

  .menu-dropdownmenu-item-content{
    display: flex !important;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .menu-dropdownmenu-item-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 9999px;
}

  .menu-dropdownmenu-item-textcontainer{
    margin-left: 2rem !important;
  }

  .menu-dropdownmenu-item-maintext{
    display: block !important;
    font-weight: 600 !important;
  }

  .menu-dropdownmenu-item-subtext{
    color: #b3b3b3 !important;
    font-size: 0.7rem !important;
  }

  .menu-dropdownmenu-item-timestamp{
    font-size: 0.75rem;
    font-weight: 600;
    margin-left: 3rem !important; 
  }

</style>