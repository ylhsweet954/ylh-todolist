<!-- <template>
  <div class="top-area">
    <div>
      <p>{{ greeting }}, Yuan Longhui!</p>
      <p>Today, {{ dayjs().format('YYYY-MM-DD') }}</p>
    </div>
    <div>
      <n-date-picker
        v-model:value="dateRange"
        type="daterange"
        :shortcuts="shortcuts"
        :update-value-on-close="true"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="width: 280px"
        @update:value="handleDateRangeChange"
      />
      <n-popselect
        :value="popValue"
        :options="popOptions"
        trigger="click"
        @update:value="popChange"
      >
        <n-icon :component="TableSettings20Filled" size="36" :depth="2" />
      </n-popselect>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import dayjs from 'dayjs'
import { shortcuts, greetings } from '../constants'
import { TableSettings20Filled } from '@vicons/fluent'

export default defineComponent({
  name: 'TopArea',
  components: { TableSettings20Filled },
  setup() {
    const greeting = computed(() => {
      const currentTime = new Date()
      const currentHour = currentTime.getHours()
      const { message } = greetings.find(
        ({ start, end }) => currentHour >= start && currentHour < end
      ) || { message: 'Hello' }
      return message
    })
    const popOptions = ref([
      { label: '导入', value: 'import' },
      { label: '导出', value: 'export' }
    ])
    const popValue = ref('anniu')
    const dateRange = ref(null)

    const handleDateRangeChange = (val: Date[]) => {
      console.log(val)
    }

    const popChange = (val: string) => {
      console.log(111, val)
    }

    return {
      greeting,
      popValue,
      popOptions,
      TableSettings20Filled,
      popChange,
      dateRange,
      shortcuts,
      dayjs,
      handleDateRangeChange
    }
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
