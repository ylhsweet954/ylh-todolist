<template>
  <n-message-provider>
    <div class="todo-container">
      <top-area />
      <main-area />
    </div>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopArea from './views/TopArea.vue'
import MainArea from './views/MainArea.vue'

export default defineComponent({
  name: 'TodoList',
  components: { TopArea, MainArea },
  setup() {
    return {}
  }
})
</script>
