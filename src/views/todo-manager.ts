import { Ref, ref } from 'vue'
import { TodoGroup, TodoItem } from '../type'

export let todoManager: TodoManager

class TodoManager {
  todoItems: Ref<TodoItem[]> = ref([])
  groups: Ref<TodoGroup[]> = ref([])
  groupVisible: Ref<boolean> = ref(false)
  constructor() {
    this.groups.value = [
      {
        id: '1',
        name: '全部'
      },
      {
        id: '2',
        name: '学习'
      },
      {
        id: '3',
        name: '工作'
      }
    ]
  }
  showGroupDialog() {
    this.groupVisible.value = true
  }

  groupConfirm(group: TodoGroup) {
    this.groupVisible.value = false
    const index = this.groups.value.findIndex((g) => g.id === group.id)
    if (index > -1) {
      this.groups.value[index] = group
    } else {
      this.groups.value.push(group)
    }
  }

  groupDelete(id: string) {
    this.groups.value = this.groups.value.filter((g) => g.id !== id)
  }
}

export function getTodoManager() {
  return (todoManager ??= new TodoManager())
}
