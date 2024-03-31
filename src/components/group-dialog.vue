<!-- <template>
  <n-modal-provider>
    <n-modal v-model:show="groupVisible" :mask-closable="false">
      <n-card>
        <n-form
          ref="formRef"
          label-placement="left"
          label-width="auto"
          :model="formData"
          :rules="rules"
        >
          <n-form-item label="分组名" path="name">
            <n-input v-model:value="formData.name" placeholder="请输入分组名" />
          </n-form-item>
        </n-form>
        <n-button type="primary" @click="confirm">确定</n-button>
        <n-button @click="cancel">取消</n-button>
      </n-card>
    </n-modal>
  </n-modal-provider>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { todoManager } from '../views/todo-manager'
import dayjs from 'dayjs'
import { FormValidationError } from 'naive-ui'
export default defineComponent({
  setup() {
    const { groupVisible } = todoManager
    const formRef = ref()
    const formData = reactive({
      id: '',
      name: ''
    })
    const rules = {
      name: { required: true, message: '请输入分组名', trigger: ['input', 'blur'] }
    }
    const confirm = () => {
      formRef.value?.validate((errors: FormValidationError[]) => {
        if (!errors) {
          todoManager.groupConfirm({ ...formData, id: dayjs().format('YYYY-MM-DD HH:MM:ss') })
        }
      })
    }
    const cancel = () => {
      formRef.value?.restoreValidation()
      formData.name = ''
      groupVisible.value = false
    }
    return { todoManager, groupVisible, formRef, formData, rules, confirm, cancel }
  }
})
</script>

<style lang="less" scoped>
.n-card {
  max-width: 600px;
}
</style> -->

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
