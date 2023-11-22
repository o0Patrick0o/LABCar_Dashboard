<template>
  <div class="customtablenewcolumn">
    <div class="customtablenewcolumn-wrapper">
      <div class="customtablenewcolumn-container">
        
        <!-- Header -->
        <div class="customtablenewcolumn-header">
          
          <div class="customtablenewcolumn-header-text">
            Neue Spalte
          </div>
          
          <div class="customtablenewcolumn-header-icon">
            <font-awesome-icon icon="fa-solid fa-x" class="customtablenewcolumn-header-close" @click="close()"/>
          </div>
        </div>

        <!-- Body -->
        <div class="customtablenewcolumn-body">
          
          <div class="grid grid-cols-6 gap-4">
            
            <div class="col-start-1 col-end-7 ...">
              <div class="block mx-3">
                <h4>Titel</h4>
                <input type="text" placeholder="Titel" v-model="title" class="input-text"/>
              </div>
            </div>
            
            <div class="col-start-1 col-end-7 ...">
              <div class="block mx-3">
                <h4>Spalten Type</h4>
                <select v-model="selectdettyp" class="typeoptions">
                  <option v-for="option in storeoption" :value="option" :key="option">{{ option }}</option>
                </select>              
              </div>
            </div>

            <div class="col-start-1 col-end-7 ... inline-flex">
              
              <div class="block mx-3">
                <h4>Sortierbar</h4>
                <div class="input-group">
                  
                  <input id="Sortierbar-Ja" type="radio" @click="changesortable()" class="radio-input"/>
                  <label for="Sortierbar-Ja" class="radio-coverlabel-left" :class="{'radio-coverlabel-aktiv': sortable}">
                    <p>Ja</p>
                  </label>
                  
                  <input id="Sortierbar-Nein" type="radio" @click="changesortable()" class="radio-input"/>
                  <label for="Sortierbar-Nein" class="radio-coverlabel-right" :class="{'radio-coverlabel-aktiv': !sortable}">
                    <p>Nein</p>
                  </label>
                
                </div>
              </div>

              <div class="block mx-3">
                <h4>Checkbox</h4>
                <div class="input-group">
                  
                  <input id="Checkbox-Ja" type="radio" @click="changecheckbox()" class="radio-input"/>
                  <label for="Checkbox-Ja" class="radio-coverlabel-left" :class="{'radio-coverlabel-aktiv': checkbox}">
                    <p>Ja</p>
                  </label>
                  
                  <input id="Checkbox-Nein" type="radio" @click="changecheckbox()" class="radio-input"/>
                  <label for="Checkbox-Nein" class="radio-coverlabel-right" :class="{'radio-coverlabel-aktiv': !checkbox}">
                    <p>Nein</p>
                  </label>
                
                </div>
              </div> 

            </div>
            
            <div class="col-start-1 col-end-7 ...">
              
              <div class="block mx-3">
                <h4>Ausrichtung</h4>
                <div class="input-group">
                  
                  <input id="Ausrichting-Links" type="radio" value="left" v-model="alignment" class="radio-input"/>
                  <label for="Ausrichting-Links" class="radio-coverlabel-left" :class="{'radio-coverlabel-aktiv': alignment == 'left'}">
                    <p>Links</p>
                  </label>
                  
                  <input id="Ausrichting-Mittig" type="radio" value="middel" v-model="alignment" class="radio-input"/>
                  <label for="Ausrichting-Mittig" class="radio-coverlabel-middel" :class="{'radio-coverlabel-aktiv': alignment == 'middel'}">
                    <p>Mittig</p>
                  </label>

                  <input id="Ausrichting-Rechts" type="radio" value="right" v-model="alignment" class="radio-input"/>
                  <label for="Ausrichting-Rechts" class="radio-coverlabel-right" :class="{'radio-coverlabel-aktiv': alignment == 'right'}">
                    <p>Rechts</p>
                  </label>

                </div>
              </div>

            </div>
  
          </div>       

        </div>

        <div class="customtablenewcolumn-footer">
          <div class="customtablenewcolumn-footer-left">
            <button type="button" class="customtablenewcolumn-cancelbutton" @click="close()">Abbrechen</button>
          </div>
          <div class="customtablenewcolumn-footer-right">
            <button type="button" class="customtablenewcolumn-okbutton" @click="submit()">OK</button>
          </div>
        </div>

      </div>
    </div>
  </div> 
</template>
  


<script>

  import { mapState }       from 'pinia';
  import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
  
  export default {
    
    data() {
      return { 
        title: '',
        selectdettyp: '',
        storeoption: [],
        sortable: false,
        checkbox: false,
        alignment: '',
      };
    },
    
    mounted() {
      this.changevalue();
    },

    methods: {
      ...mapActions(useTableStore, [
        'setColumn',
      ]),

      changecheckbox() {
        this.checkbox = !this.checkbox
      },

      changesortable() {
        this.sortable = !this.sortable;
      },
        
      close() {
        this.$emit('closeModal')
      },
        
      submit() {
        this.setColumn(this.title, this.selectdettyp, this.sortable, this.checkbox, this.alignment);
        this.close();
      },
        
      changevalue(){          
        for(let i = 0; i < this.getColumnTyps.length; i++)
        {
          this.storeoption.push(this.getColumnTyps[i].title);
        }
      }
    },
    
    computed:{ 
      ...mapState(useTableStore, [
        'getColumnTyps',
      ]),
    },
  }
</script>



<style scoped>

  .customtablenewcolumn {
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

  .customtablenewcolumn-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .customtablenewcolumn-container {
    width: 600px;
    margin: 0px auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .customtablenewcolumn-header{
    display: flex; 
    width: 100%; 
    border-bottom-width: 2px; 
    padding: 10px;
  }

  .customtablenewcolumn-header-text{
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600; 
    text-align: left; 
  }

  .customtablenewcolumn-header-icon{
    display: flex;
    margin-right: 0;
    margin-left: auto;
  }

  .customtablenewcolumn-header-close{
    width: 20px;
    height: 20px;
  }

  .customtablenewcolumn-header-close:hover{
    color: red;
  }

  .customtablenewcolumn-body{
    color: black;
    padding: 10px;
  }

  .customtablenewcolumn-footer {
    display: flex;
    margin-top: 10px;
    width: 100%;
    padding: 10px;
  }

  .customtablenewcolumn-footer-left {
    display: inline-flex;
    margin-left: 10px;
    margin-right: auto;
  }

  .customtablenewcolumn-footer-right {
    display: inline-flex;
    margin-left: auto;
    margin-right: 10px;
  }

  .customtablenewcolumn-cancelbutton {
    border: 2px solid lightgrey;
    width: 150px;
    padding: 10px;
    border-radius: 0.25rem;
  }

  .customtablenewcolumn-okbutton {
    border: 2px solid lightgrey;
    width: 150px;
    padding: 10px;
    border-radius: 0.25rem;
  }

  .radio-input {
    display: none;
  }
  
  .radio-coverlabel-left {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
    width: 100px;
    user-select: none;
    margin-left: 0.125;
    padding: 10px;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    border: 1px solid lightgray;
  }

  .radio-coverlabel-middel {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
    width: 100px;
    user-select: none;
    padding: 10px;
    border: 1px solid lightgray;
  }

  .radio-coverlabel-right {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
    width: 100px;
    user-select: none;
    margin-right: 0.125;
    padding: 10px;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border: 1px solid lightgray;
  }

  .radio-coverlabel-aktiv{
    background-color: orange;
    color: #fff;
    border-color: blue;
  }
 
  .input-group {
    display: inline-flex;
  }

  .input-text {
    font-weight: 600;
    width: 500px;
    padding: 6px;
    border: 1px solid lightgray;
  }

  .typeoptions{
    font-weight: 600;
    width: 500px;
    padding: 10px;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    background: white;
  }

</style>