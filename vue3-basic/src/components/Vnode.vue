<script lang="ts">
import { defineComponent, h, ref } from 'vue'
export default defineComponent({
  name: 'VNode',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const count = ref(1)
    return () => [h('h1', props.msg), h('div', count.value)]
  }
})
</script>
