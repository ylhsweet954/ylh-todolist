<template>
  <todo-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from './views/index.vue'
import { getTodoManager } from './views/todo-manager'

export default defineComponent({
  components: { TodoList },
  setup() {
    getTodoManager()
    return {}
  }
})
</script>
