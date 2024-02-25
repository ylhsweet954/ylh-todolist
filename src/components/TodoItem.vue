<template>
  <div class="todo-item">
    <div class="todo-item__left">
      <el-checkbox v-model="currentTodo.isDone" @change="checkTodo">
        {{ currentTodo.content }}
      </el-checkbox>
    </div>
    <div class="todo-item__right">
      <el-tag :type="currentTodo.isDone ? 'success' : 'primary'" size="small">
        {{ currentTodo.isDone ? currentTodo.doneTime : currentTodo.createTime }}
      </el-tag>
      <el-icon @click="deleteItem"><DeleteFilled /></el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import { TodoItem } from '../type'
import { DeleteFilled } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash-es'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
  name: 'TodoItem',
  components: { DeleteFilled },
  props: {
    data: {
      type: Object as PropType<TodoItem>,
      default: { isDone: false, date: new Date(), content: '' }
    }
  },
  emits: ['deleteItem', 'checkTodo'],
  setup(props, { emit }) {
    const currentTodo = ref()
    const visible = ref(false)

    watch(
      () => props.data,
      (val) => {
        currentTodo.value = cloneDeep(val)
      },
      { immediate: true, deep: true }
    )

    const deleteItem = () => {
      emit('deleteItem', props.data.id)
    }
    const checkTodo = (val) => {
      if (!val) {
        ElMessageBox.confirm('还没做完？', '', {
          confirmButtonText: '是的',
          cancelButtonText: '手滑了',
          type: 'warning'
        })
          .then(() => {
            emit('checkTodo', currentTodo.value.id)
            ElMessage({
              type: 'success',
              message: '启用成功'
            })
          })
          .catch(() => {
            currentTodo.value.isDone = true
          })
      } else {
        emit('checkTodo', currentTodo.value.id)
      }
    }
    return { currentTodo, visible, deleteItem, checkTodo }
  }
})
</script>
