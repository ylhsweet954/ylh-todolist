<template>
  <div class="todo-container">
    <top-area />
    <main-area />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopArea from './TopArea.vue'
import MainArea from './MainArea.vue'

export default defineComponent({
  name: 'TodoList',
  components: { TopArea, MainArea },
  setup() {
    return {}
  }
})
</script>
