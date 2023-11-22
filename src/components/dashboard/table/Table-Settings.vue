<template>
  <div class="customtablesettings">
    <button class="customtablesettings-button">
      <font-awesome-icon icon="fa-solid fa-gear" />
    </button>
  </div>
</template>
  
  

<script>

  export default {
    
    props: {},
    
    data() {
      return {

      };
    },
    
    created () {},
    
    computed: {},
    
    methods: {}
  }

</script>
  
  
  
<style scoped>

  .customtablesettings{
    display: flex;
    color: black;
    background: white;
	}
	
	.customtablesettings-button{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle; 
    padding: 1rem; 
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 0.25rem; 
    border: 1px solid lightgray;
    width: 40px;
    height: 40px;
    font-weight: 600; 
    user-select: none;
    box-shadow: inset 0px 0px 5px 0px lightgray; 
	}

</style>
  