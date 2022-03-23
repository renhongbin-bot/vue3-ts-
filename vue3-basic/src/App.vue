<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h1>{{number}}</h1>
      </li>
    </ul>
    <h1>{{person.name}}</h1>
    <h1 v-if="loading">Loading...</h1>
    <img v-if="loaded" :src="result[0].url">
    <h1>X:{{x}}</h1>
    <h1>Y:{{y}}</h1>
    <button @click="increase">+1</button>
    <h1>{{greeting}}</h1>
    <button @click="updateGreeting">update title</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, toRefs, onUpdated, onRenderTriggered, watch } from "vue";
import useMousePosition from './hooks/useMousePosition'
import useUrlLoader from './hooks/useUrlLoader'
// 声明类型
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}
interface CatResult {
  id: string
  url: string
  width: number
  height: number
}
// defineComponent函数，对setup函数进行封装，返回options的对象提示代码；
export default defineComponent({
  name: "App",
  setup() {
    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // const increase = () => {
    //   count.value++
    // };
    // reactive创建一个响应式对象，但是通过...展开会失去响应式
    onUpdated(() => {
      console.log('update')
    })
    onRenderTriggered((event) => {
      console.log(event)
    })
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {},
    });
    const {x, y} = useMousePosition()
    const {result, loading, loaded} = useUrlLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if (result.value) {
        console.log('value', result.value[0].url)
      }
    })
    const greeting = ref('')
    const updateGreeting = () => {
      greeting.value += 'hello'
    }
    
    // 数据监听(reactive定义的数据要用过函数的形式进行数据监听)
    watch([greeting, () => data.count], (newVal, oldVal) => {
      console.log('old' + oldVal + '---' + 'new' + newVal);
      document.title = 'update' + greeting.value + data.count
    })
    data.numbers[0] = 5
    data.person.name = 'bitle'
    // toRefs把响应式对象里的每一项也变成响应式，保证对象展开后的数据也能是响应的
    const refData = toRefs(data);
    return {
      ...refData,
      greeting,
      updateGreeting,
      x,
      y,
      result,
      loading,
      loaded
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
