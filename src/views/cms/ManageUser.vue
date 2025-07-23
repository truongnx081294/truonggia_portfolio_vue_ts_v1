<template>
  <div style="display: flex; justify-content: space-between; padding: 0px 16px 24px">
    <Button type="primary" :icon="h(PlusOutlined)" @click="showModal">Tạo mới</Button>
  </div>

  <Table
    size="large"
    :scroll="{ y: 240 }"
    :data-source="listUser"
    :columns="columns"
    :loading="isLoading"
    style="max-height: 700px"
    bordered
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'ava'">
        <Avatar :src="text" alt="" />
      </template>
      <template v-if="column.key === 'action'">
        <Space>
          <Button type="primary" :icon="h(EditOutlined)">Edit</Button>
          <Popconfirm
            title="Are you sure delete this account?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm(text)"
            @cancel="cancel"
          >
            <Button danger :icon="h(DeleteOutlined)">Remove</Button>
          </Popconfirm>
        </Space>
      </template>
    </template>
  </Table>

  <Modal v-model:open="open" title="Thêm tài khoản" @ok="handleOk">
    <Form
      layout="vertical"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <FormItem label="Upload">
        <Upload action="/upload.do" list-type="picture-card">
          <div>
            <PlusOutlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem
        label="Email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <Input v-model:value="formState.email" />
      </FormItem>

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

      <FormItem
        label="Role"
        name="role"
        :rules="[{ required: true, message: 'Please select role of user!' }]"
      >
        <RadioGroup v-model:value="formState.role">
          <Radio value="admin">Admin</Radio>
          <Radio value="manager">Manager</Radio>
        </RadioGroup>
      </FormItem>
    </Form>
  </Modal>

  <contextHolder />
</template>
<script lang="ts" setup>
import { request } from '@/api/axiosInstance';
import {
  Avatar,
  Button,
  Form,
  FormItem,
  Input,
  InputPassword,
  Modal,
  Popconfirm,
  Radio,
  RadioGroup,
  Space,
  Table,
  Upload,
} from 'ant-design-vue';
import { h, onMounted, reactive, ref } from 'vue';
import '../../assets/css/Dashboard.css';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons-vue';

import { type NotificationPlacement, notification } from 'ant-design-vue';

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'ava',
    key: 'ava',
  },
  {
    title: 'Name',
    dataIndex: 'username',
    key: 'username',
    sorter: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    sorter: true,
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Action',
    dataIndex: 'id',
    key: 'action',
  },
];

const listUser = ref();
const isLoading = ref<boolean>(false);

onMounted(() => {
  getListUser();
});

function getListUser() {
  isLoading.value = true;
  return request({
    url: '/users',
    method: 'GET',
    params: {
      limit: 1000,
    },
  })
    .then((response) => {
      listUser.value = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}

interface FormState {
  email: string;
  username: string;
  password: string;
  role: boolean;
  avatar: string;
}

const formState = reactive<FormState>({
  email: '',
  username: '',
  password: '',
  role: true,
  avatar: '',
});

const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  addAccount(formState);
  open.value = false;
};

const addAccount = (data: FormState) => {
  request({
    url: '/authentication/register',
    method: 'POST',
    data: {
      data,
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Thêm tài khoản', result.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteAccount = (id: number) => {
  request({
    url: '/users',
    method: 'DELETE',
    data: {
      id,
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Xóa tài khoản', result.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const [api, contextHolder] = notification.useNotification();

const openNotification = (placement: NotificationPlacement, title: string, content: string) => {
  api.info({
    message: title,
    description: content,
    placement,
  });
};

const confirm = (id: number) => {
  deleteAccount(id);
};

const cancel = () => {
  openNotification('bottomLeft', 'Xóa tài khoản', 'Hủy xóa thành công');
};
</script>
