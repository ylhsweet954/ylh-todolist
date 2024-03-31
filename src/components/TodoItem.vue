<!-- <template>
  <div class="todo-item">
    <div class="todo-item__left">
      <n-checkbox v-model:checked="currentTodo.isDone" @update:checked="checkTodo">
        {{ currentTodo.content }}
      </n-checkbox>
    </div>
    <div class="todo-item__right">
      <n-tag :type="currentTodo.isDone ? 'success' : 'primary'" size="small">
        {{ currentTodo.isDone ? currentTodo.endTime : currentTodo.createTime }}
      </n-tag>
      <n-popconfirm positive-text="ok" negative-text="手滑了" @positive-click="deleteItem">
        <template #icon>
          <n-icon color="red" :component="MdHand" />
        </template>
        <template #trigger>
          <n-icon :component="Delete24Regular" size="24" :depth="2" />
        </template>
        确定要删除吗？
      </n-popconfirm>
    </div>
    <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="确认"
      content="你确认?"
      positive-text="确认"
      negative-text="算了"
      @positive-click="confirm"
      @negative-click="cancel"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, PropType } from 'vue'
import { TodoItem } from '../type'
import { cloneDeep } from 'lodash-es'
import { Delete24Regular } from '@vicons/fluent'
import { MdHand } from '@vicons/ionicons4'
import { useMessage } from 'naive-ui'

export default defineComponent({
  name: 'TodoItem',
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
    const showModal = ref(false)
    const message = useMessage()

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

    const checkTodo = (val: boolean) => {
      if (!val) {
        showModal.value = true
      } else {
        emit('checkTodo', currentTodo.value.id)
      }
    }

    const confirm = () => {
      emit('checkTodo', currentTodo.value.id)
      message.success('成功')
    }

    const cancel = () => {
      currentTodo.value.isDone = true
      message.warning('取消')
    }
    return {
      currentTodo,
      visible,
      showModal,
      deleteItem,
      checkTodo,
      Delete24Regular,
      MdHand,
      confirm,
      cancel
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
