<template>
  <div class="message">
    <h1>{{user.name}}</h1>
    <h1>{{user.age}}</h1>
    <button @click="onChange">change</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
interface IUser {
  name: string,
  age: number
}
interface IEvents {
  (e: 'change', age: number): void
}
const props = defineProps<{user: IUser}>()
const emit = defineEmits<IEvents>()
const onChange = () => {
  emit('change', props.user.age)
}
</script>