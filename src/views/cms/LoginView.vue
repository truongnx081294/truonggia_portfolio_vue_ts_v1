<template>
  <div class="login-container">
    <div style="width: 50%">
      <h2 style="text-align: center">Đăng nhập</h2>
      <Form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <FormItem
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <Input v-model:value="formState.username" />
        </FormItem>

        <FormItem
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <InputPassword v-model:value="formState.password" />
        </FormItem>

        <!-- <FormItem name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </FormItem> -->

        <FormItem :wrapper-col="{ offset: 8, span: 16 }">
          <Button type="primary" html-type="submit">Đăng nhập</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { request } from '@/api/axiosInstance';
import router from '@/router';
import { Button, Form, FormItem, Input, InputPassword } from 'ant-design-vue';
import { reactive } from 'vue';
import '../../assets/css/Login.css';

interface FormState {
  username: string;
  password: string;
  // remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  // remember: true,
});

const onFinish = (values: any) => {
  login(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const login = (data: FormState) => {
  request({
    method: 'POST',
    url: '/authentication/login',
    data: {
      data,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        const userInfo = res.data.data;
        localStorage.setItem('userToken', userInfo.token);
        router.replace('/cms/dashboard');
      } else {
        console.error('Login failed:', res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
