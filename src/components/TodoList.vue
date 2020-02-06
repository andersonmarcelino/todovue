<template>
  <section class="todo-list">
    <input data-test="input-add" @keyup.enter="addItem" v-model="inputAdd"/>
    <ul data-test="todo-list">
      <li v-for="item in todoList" :key="item.id">
        <input type="checkbox" v-model="item.done">
        {{item.label}}
      </li>
    </ul>
    <hr>
    <ul data-test="done-list">
      <li v-for="item in doneList" :key="item.id">
        <input type="checkbox" v-model="item.done">
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
    computed: {
      doneList () {
        return this.todoList.filter((item) => item.done)
      }
    },
    methods: {
      addItem () {
        this.todoList.push({
          id: Math.random(),
          label: this.inputAdd,
          done: false
        })
        this.inputAdd = ''
      }
    }
  }
</script>
