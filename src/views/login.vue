<template>
  <div class="loginWrapper">
    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div data-v-3fea50e2="" style="color: transparent">占位符</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm login-form"
        >
          <div class="title">HELLO!</div>
          <div class="title-tips">欢迎来到ANDER TEMPLATE系统！</div>
          <el-form-item label="" prop="username" size="large">
            <el-input
              v-model="ruleForm.username"
              type="text"
              autocomplete="off"
              prefix-icon="search"
              placeholder="请填写账号"
            />
          </el-form-item>
          <el-form-item label="" prop="password" size="large">
            <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              prefix-icon="lock"
              placeholder="请填写密码"
            />
          </el-form-item>

          <el-form-item size="large">
            <div class="d-flex w100">
              <el-button
                type="primary"
                @click="submitForm(ruleFormRef)"
                style="width: 220px"
                >登录</el-button
              >
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const validateUserName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}
const validatePassWord = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validateUserName, trigger: 'blur' }],
  password: [{ validator: validatePassWord, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style lang="less" scoped>
.loginWrapper {
  height: 100vh;
  background: url('@/assets/images/bg.png') no-repeat center center;
  background-size: 100% 100%;
  .title {
    font-size: 54px;
    font-weight: 500;
    color: var(--el-color-white);
  }
  .title-tips {
    margin-top: 29px;
    margin-bottom: 30px;
    line-height: 1;
    font-size: 26px;
    font-weight: 400;
    color: var(--el-color-white);
  }
  .login-form {
    position: relative;
    max-width: 100%;
    padding: 4.5vh;
    margin: calc(50vh - 277.5px) 5vw 5vw;
    overflow: hidden;
    background: linear-gradient(180deg, #066ec2 0%, #108eed 100%);
    background-size: 100% 100%;
    border-radius: 8px;
  }
}
</style>
