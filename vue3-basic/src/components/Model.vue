<template>
  <teleport to="#model">
    <div id="center" v-if="isOpen">
      <h2><slot>this is model</slot></h2>
      {{lang}}
      <h2>{{currentUser && currentUser.name}}</h2>
      <button @click="butClick">Close</button>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "ModelCom",
  props: {
    isOpen: Boolean
  },
  emits: {
    'clone-model': null
  },
  setup(props, context) {
    // inject 拿到provide提供的数据
    const lang = inject('lang')
    const currentUser = inject<{name: string}>('currentUser')
    const butClick = () => {
      context.emit('clone-model')
    }
    return {
      butClick,
      lang,
      currentUser
    }
  }
})
</script>

<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: wheat;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>