<template>
    <div class="todo-tast">
        <div @click="$emit('changestate', this.id)" class="todo-task-content" :class="{'aktiv': this.status}">
            {{ this.content }}
        </div>
        <div>
            <font-awesome-icon icon="fa-solid fa-trash-can" @click="$emit('remove', this.id )" class="todo-tast-removeicon"/>
            <font-awesome-icon icon="fa-solid fa-pen-to-square" @click="$emit('edit', this.id)" class="todo-tast-editicon"/>
        </div>
    </div>
</template>



<script>

    export default {
        props: ['content', 'id', 'status'],
    }

</script>



<style scoped>

    .todo-tast{
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        border: 1px solid lightgray;
        padding: 10px;
        margin-top: 10px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05) !important;
    }

    .todo-task-content{
        overflow: hidden; 
        position: relative; 
        height: 1.5rem; 
        cursor: pointer; 
        user-select: none; 
        width: 80%;
    }

    .aktiv {
        text-decoration: line-through;
    }

    .todo-tast-removeicon{
        color: rgb(239 68 68);
        margin-right: 1rem;
        cursor: pointer;
    }

    .todo-tast-editicon{
        color: rgb(34 197 94);
        cursor: pointer;
    }

</style>