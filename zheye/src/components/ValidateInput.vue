<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-z])/
interface IRuleProp {
  type: 'required' | 'email' | 'range';
  min?: {
    length: number,
    message: string
  };
  max?: {
    length: number,
    message: string
  }
  message?: string;
}
export type RulesProp = IRuleProp[];
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modeValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    console.log(context.attrs)
    const inputRef = reactive({
      val: props.modeValue || '',
      error: false,
      message: '',
      length: 0
    })
    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          if (rule.message) {
            inputRef.message = rule.message
          } else if (rule.min) {
            inputRef.message = rule.min.message
          } else if (rule.max) {
            inputRef.message = rule.max.message
          }
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'range':
              if (rule.min) {
                passed = (inputRef.val.length >= rule.min.length)
              } else if (rule.max) {
                passed = (inputRef.val.length <= rule.max.length)
              }
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style>
</style>
