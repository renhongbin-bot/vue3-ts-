import {ref, onMounted, onUnmounted} from 'vue'
function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    console.log('mouted')
    document.addEventListener('click', updateMouse)
  })
  onUnmounted(() => {
    console.log('onUnMounted')
    document.removeEventListener('click', updateMouse)
  })
  return { x, y}
}
 export default useMousePosition