<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <!-- 表单验证 -->
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          :modeValue="emailVal"
          placeholder="请输入邮箱"
          type="text"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          :modeValue="emailVal"
          placeholder="请输入密码"
          type="password"
        ></validate-input>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList, { IColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { IUserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
const currentUser: IUserProps = {
  isLogin: true,
  name: 'bitle'
}
// 邮箱验证
export default defineComponent({
  name: 'App',
  setup () {
    const emailVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      // { type: 'email', message: '格式不正确' },
      {
        type: 'range',
        min: {
          length: 6,
          message: '你的密码至少包括六位，不能含有空格'
        }
      },
      {
        type: 'range',
        max: {
          length: 10,
          message: '不能超过10位数'
        }
      }
    ]
    return {
      // list: testData,
      currentUser: currentUser,
      emailRules,
      emailVal
    }
  },
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  }
})
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
