import { defineStore } from "pinia";


export const useToDoStore = defineStore('todoStore',{
    state: () => ({
        tasks: [],
        id: 0,
    }),


    getters: {
        
        getAllTasks: (state) => {
            return state.tasks;
        },

        getCompletedTasks: (state) => {
            return state.tasks.filter((task) => task.status);
        },

        getLeftTasks: (state) => {
            return state.tasks.filter((task) => !task.status);
        },

    },


  actions: {

    addTask(item) {
        this.tasks.push({ text: item, id: this.id++, status: false })
    },

    deleteTask(itemID) {
        this.tasks = this.tasks.filter((object) => {
            return object.id !== itemID;
        });
    },

    prepareeditS(id) {
        const task = this.tasks.find((t) => t.id === id);
        return task.text;
    },
    
    editTask(id, newitem){
        const task = this.tasks.find((t) => t.id === id);
        task.text = newitem;
    },

    toggleFinished(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.status = !task.status;
    },
  },
});
