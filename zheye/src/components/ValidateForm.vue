<template>
  <form ref="formRef" class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button
          type="submit"
          class="btn btn-primary"
        >
          提交
        </button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit', 'clear-inputs'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const formRef = ref()
    const submitForm = () => {
      // 验证全部的表单
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
      context.emit('clear-inputs', formRef.value)
    }
    const callback = (func?: ValidateFunc | any) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style>
</style>
