<template>
  <n-theme-editor>
    <n-message-provider>
      <todo-list />
    </n-message-provider>
  </n-theme-editor>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from './views/index.vue'
import { NThemeEditor } from 'naive-ui'

export default defineComponent({
  components: { TodoList },
  setup() {
    return {}
  }
})
</script>
