<template>
  <div class="top-area">
    <div>
      <p>{{ greeting }}, Yuan Longhui!</p>
      <p>Today, {{ dayjs(new Date()).format('YYYY-MM-HH') }}</p>
    </div>
    <div>
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        range-separator="~"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
        style="width: 220px"
        @change="handleDateRangeChange"
      />
      <el-popover placement="bottom" :width="80" trigger="click">
        <template #reference>
          <el-icon class="top-area__menu"><Menu /></el-icon>
        </template>
        <el-button>导入</el-button>
        <el-button>导出</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import dayjs from 'dayjs'
import { greetings } from '../type'
import { Menu } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'TopArea',
  components: { Menu },
  setup() {
    const greeting = computed(() => {
      const currentTime = new Date()
      const currentHour = currentTime.getHours()
      const { message } = greetings.find(
        ({ start, end }) => currentHour >= start && currentHour < end
      ) || { message: '你好' }
      return message
    })
    const dateRange = ref([])
    const shortcuts = [
      {
        text: '上周',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          return [start, end]
        }
      },
      {
        text: '上个月',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          return [start, end]
        }
      },
      {
        text: '上三个月',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          return [start, end]
        }
      }
    ]

    const handleDateRangeChange = (val: Date[]) => {
      console.log(val)
    }

    return { greeting, dateRange, shortcuts, dayjs, handleDateRangeChange }
  }
})
</script>
