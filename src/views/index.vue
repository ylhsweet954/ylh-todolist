<template>
  <n-layout has-sider>
    <n-layout-sider>分组</n-layout-sider>
    <n-layout>
      <n-layout-header><top-area /></n-layout-header>
      <n-layout-content><main-area /></n-layout-content>
      <!-- <n-layout-footer>暂无</n-layout-footer> -->
    </n-layout>
  </n-layout>
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
<style lang="less">
.n-layout-sider {
  width: 25% !important;
  max-width: unset !important;
}
.n-layout-sider-scroll-container {
  padding: 24px;
}
.n-layout-scroll-container {
  overflow-x: unset !important;
}
</style>
