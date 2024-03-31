<template>
  <!-- <v-btn>Button</v-btn>
  <div class="left-area"><left-area /></div>
  <div>
    <top-area />
    <main-area />
  </div> -->
  <v-layout>
    <v-navigation-drawer>
      <v-list density="compact">
        <v-list-subheader>REPORTS</v-list-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>Main Content</v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopArea from './TopArea.vue'
import MainArea from './MainArea.vue'
import LeftArea from './LeftArea.vue'

export default defineComponent({
  name: 'TodoList',
  components: { TopArea, MainArea, LeftArea },
  setup() {
    const items = [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' }
    ]
    return { items }
  }
})
</script>
<style lang="less"></style>
