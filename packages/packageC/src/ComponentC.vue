<template>
  <div class="todo">
    <h3>Form from component C!</h3>
    <div class="form">
      <input
        v-model="inputValue"
        @keyup.enter="addTodo"
      >
      <button @click="addTodo">
        Add todo
      </button>
    </div>
    <ul class="items">
      <li
        v-for="item in list"
        :key="item.text"
        :class="{ done: item.done }"
        @click="toggle(item)"
      >
        <input
          type="checkbox"
          :checked="item.done"
        >
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'ComponentC',
    data() {
      return {
        inputValue: ''
      }
    },
    computed: {
      list() {
        return this.$store.state.customModule.list
      }
    },
    mounted() {
      console.log('Component C has mounted')
    },
    methods: {
      addTodo() {
        this.$store.commit('customModule/add', this.inputValue);
        this.inputValue = '';
      },
      ...mapMutations('customModule', [
        'toggle',
      ]),
    }
  }
</script>

<style scoped>
.todo {
  border: 1px solid gray;
  border-radius: 5px;
  width: 500px;
  margin: 100px auto;
  padding: 20px;
}
.form {
  display: flex;
  height: 30px;
}
.form input {
  width: 100%;
  margin-right: 10px;
  padding: 10px;
}
.form button {
  width: 150px;
}
.done {
  text-decoration: line-through;
}
.items {
  list-style: none;
  padding: 0;
}
</style>

