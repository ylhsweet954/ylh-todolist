<!-- <template>
  <div class="left-area">
    <n-button type="primary" dashed @click="() => todoManager.showGroupDialog()">新建分组</n-button>
    <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
    <group-dialog />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { MenuOption } from 'naive-ui'
import { todoManager } from './todo-manager'
import GroupDialog from '../components/group-dialog.vue'

export default defineComponent({
  components: {
    GroupDialog
  },
  setup() {
    const { groups } = todoManager
    const menuOptions = computed(() => {
      return groups.value.map((group) => ({ label: group.name, key: group.id }))
    })
    const handleUpdateValue = (key: string, item: MenuOption) => {
      console.log(key, item)
    }
    return { groups, menuOptions, todoManager, handleUpdateValue }
  }
})
</script> -->
<template>
  <div class="top-area">1111111</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>
