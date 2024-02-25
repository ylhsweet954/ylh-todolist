<template>
  <div class="main-area">
    <el-collapse v-model="doingActiveNames" @change="handleDoingCollapseChange">
      <el-collapse-item title="doing" name="1">
        <todo-item-container
          v-for="item in doingList"
          :key="item.content"
          :data="item"
          @delete-item="deleteItem"
          @check-todo="checkTodo"
        />
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="doneActiveNames" @change="handleDoneCollapseChange">
      <el-collapse-item title="done" name="2">
        <todo-item-container
          v-for="item in doneList"
          :key="item.content"
          :data="item"
          @delete-item="deleteItem"
          @check-todo="checkTodo"
        />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import TodoItemContainer from '../components/TodoItem.vue'
import { TodoItem } from '../type'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'MainArea',
  components: { TodoItemContainer },
  setup() {
    let todoList = ref<TodoItem[]>([
      {
        id: '1',
        createTime: '2022-02-25',
        doneTime: '今天',
        content: '学习Vue3',
        isDone: true
      },
      {
        id: '2',
        createTime: dayjs().format('YYYY-MM-DD HH:MM:ss'),
        doneTime: '今天',
        content: '学习Vue',
        isDone: false
      }
    ])
    const doingList = ref<TodoItem[]>([])
    const doneList = ref<TodoItem[]>([])
    watch(
      () => todoList.value,
      (val) => {
        doingList.value = val.filter((item) => !item.isDone)
        doneList.value = val.filter((item) => item.isDone)
      },
      { deep: true, immediate: true }
    )
    const doingActiveNames = ref(['1'])
    const doneActiveNames = ref(['2'])
    const handleDoingCollapseChange = (val: string[]) => {
      console.log(val)
    }
    const handleDoneCollapseChange = (val: string[]) => {
      console.log(val)
    }
    const deleteItem = (id: string) => {
      const index = todoList.value.findIndex((item) => item.id === id)
      if (index !== -1) {
        todoList.value.splice(index, 1)
      }
    }
    const checkTodo = (id: string) => {
      todoList.value.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
          item.doneTime = dayjs().format('YYYY-MM-DD HH:MM:ss')
        }
      })
    }
    return {
      todoList,
      doingList,
      doneList,
      doingActiveNames,
      doneActiveNames,
      handleDoingCollapseChange,
      handleDoneCollapseChange,
      deleteItem,
      checkTodo
    }
  }
})
</script>
