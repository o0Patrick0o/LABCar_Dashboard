<template>
    <Layout>
        <header class="dashbord-header">
            <div class="widget-header-left">
                <div class="widget-header-left-headline">ToDo</div>
            </div>
        </header>
        
        <div class="loading" v-if="isLoading">Loading Tasks...</div>
        <div class="todo-body" v-else>
            
            <div class="todo-body-header">
                <div class="todo-body-left">
                    <h1 class="todo-body-left-headline">ToDo Liste</h1>
                </div>
                
                <div class="todo-body-right">
                    <ul class="todo-body-right-filter">
                        <div class="todo-body-right-filteritem">Filter:</div>
                        <li @click="filter = 'all'" class="todo-body-right-filteritem">Alle</li>
                        <li @click="filter = 'done'" class="todo-body-right-filteritem">Erledigt</li>
                        <li @click="filter = 'undone'" class="todo-body-right-filteritem">Unerledigt</li>
                    </ul>
                </div>
            </div>

            <div class="todo-body-add">
                <input type="text" placeholder="Neue Aufgabe hinzufügen" class="todo-body-add-input" v-model="task" />

                <button @click="add(task)" class="todo-body-add-button" v-if="isedit === false">Add</button>
                <button @click="edit(task)" class="todo-body-add-button" v-if="isedit === true">Edit</button>
            </div>

            <div class="todo-body-task">
                <Task v-for="task in viewTodos" :key="task.id" :content="task.text" :id="task.id" :status="task.status" @remove="remove" @changestate="change" @edit="prepareedit"/>
            </div>
        </div>
    </Layout>
</template>



<script>
  import Layout from '@/layouts/Layout-Auth-Grid.vue';

  import Task   from '@/components/dashboard/todolist/TodoList-Task.vue';

  import { mapState }     from 'pinia';
  import { mapActions }   from 'pinia';
  import { useToDoStore } from "@/stores/todolist/Store-TodoList.js";

  export default {
    
        components: {
        Layout,
        Task
        },

        data() {
        return { 
            isLoading: false,
            filter: 'all',
            task:'',
            isedit: false,
            editid: 0, 
        };
        },

        methods: {
            ...mapActions(useToDoStore, [
            'addTask',
            'deleteTask',
            'toggleFinished',
            'prepareeditS',
            'editTask'
            ]),

            add(item) {
                if (item.length === 0) {
                    return
                }
                this.addTask(item);
                this.task = '';
            },

            prepareedit(id) {
              this.editid = id;
              this.task = this.prepareeditS(id);
              this.isedit = true;
            },

            edit(item) {
              this.editTask(this.editid, item)
              this.task = '';
            },
            
            change(id) {
                this.toggleFinished(id);
            },

            remove(id){
                this.deleteTask(id);
            }
        },

        computed:{
            ...mapState(useToDoStore, [
            'getAllTasks',
            'getCompletedTasks',
            'getLeftTasks',
            ]),

            viewTodos() {
            
            switch (this.filter) {
                
                case "all": {
                    return this.getAllTasks;
                }
                
                case "done": {
                    return this.getCompletedTasks;
                }
                
                case "undone": {
                    return this.getLeftTasks;
                }
                
                default: {
                    return this.getAllTasks;
                }
            }
            }
        },
    }

</script>



<style scoped>

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
  


    .todo-body{
        margin: 20px;
        padding: 20px; 
        background: white;
    }

    .todo-body-header{
        display: flex;
        margin-bottom: 20px;
        border-bottom: 1px solid lightgray; 
    }

    .todo-body-left{
        margin-left: 0;
        margin-right: auto;
    }

    .todo-body-left-headline{
        font-size: 1.5rem;    
        font-weight: 700; 
    }

    .todo-body-right{
        margin-left: auto;
        margin-right: 0;
    }

    .todo-body-right-filter{
        display: flex; 
    }

    .todo-body-right-filteritem{
        
        margin-right: 20px;
        cursor: pointer; 
        font-size: 1.25rem;
    }

    .todo-body-add{
        display: flex; 
        flex-direction: row; 
        width: 100%; 
    }

    .todo-body-add-input{
        padding: 1rem; 
        width: 75%; 
        border-radius: 13px; 
        border: 1px solid lightgray;        
    }

    .todo-body-add-button{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        margin-left: 10px;       
         
    }
    
    .todo-body-add-button:hover {
        color: #005eff; 
    }
    
    .todo-body-task{
        margin-top: 1rem; 
        height: 100%; 
    }

</style>