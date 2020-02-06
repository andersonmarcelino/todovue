<template>
  <section class="todo-list">
    <input data-test="input-add" @keyup.enter="addItem" v-model="inputAdd"/>
    <ul data-test="todo-list">
      <li v-for="item in todoList" :key="item.id">
        {{item.label}}
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'TodoList',
    data () {
      return {
        todoList: [],
        inputAdd: '',
      }
    },
    methods: {
      addItem () {
        this.todoList.push({
          id: Math.random(),
          label: this.inputAdd
        })
      }
    }
  }
</script>
