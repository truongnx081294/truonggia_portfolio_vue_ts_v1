<template>
  <div style="display: flex; justify-content: space-between; padding: 0px 16px 24px">
    <Button type="primary" :icon="h(PlusOutlined)" @click="showModal">Tạo mới</Button>
  </div>

  <Table :data-source="listProject" :columns="columns" :loading="isLoading" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'description', 'type'].includes(column.dataIndex as string)">
        <div>
          <Input
            v-if="editableData[record.id]"
            v-model:value="editableData[record.id][column.dataIndex as keyof FormProjectState]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>

      <template v-if="['is_show'].includes(column.dataIndex as string)">
        <div>
          <Switch
            v-if="editableData[record.id]"
            v-model:checked="editableData[record.id][column.dataIndex as keyof FormProjectState]"
            :checked-children="'Yes'"
            :un-checked-children="'No'"
            style="margin: -5px 0"
            :disabled="!editableData[record.id]"
          />
          <template v-else>
            <Switch
              :checked="text"
              :checked-children="'Yes'"
              :un-checked-children="'No'"
              style="margin: -5px 0"
              :disabled="true"
            />
          </template>
        </div>
      </template>

      <template v-if="column.key === 'action'">
        <Space>
          <div v-if="editableData[record.id]">
            <Space>
              <Button type="primary" :icon="h(SaveOutlined)" @click="saveProject(record.id)"
                >Save</Button
              >
              <Popconfirm
                title="Are you sure cancel edit project?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="cancelEditProject(record.id)"
              >
                <Button danger :icon="h(CloseOutlined)">Cancel</Button>
              </Popconfirm>
            </Space>
          </div>
          <div v-else>
            <Button type="primary" :icon="h(EditOutlined)" @click="editProject(record.id)"
              >Edit</Button
            >
          </div>
          <Popconfirm
            title="Are you sure delete this project?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm(text)"
            @cancel="cancel"
          >
            <Button type="primary" danger :icon="h(DeleteOutlined)">Remove</Button>
          </Popconfirm>
        </Space>
      </template>
    </template>
  </Table>

  <Modal v-model:open="open" title="Thêm dự án" @ok="handleOk">
    <Form
      layout="vertical"
      :model="formProjectState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <FormItem
        label="Tên"
        name="name"
        :rules="[{ required: true, message: 'Please input your project \'s name!' }]"
      >
        <Input v-model:value="formProjectState.name" />
      </FormItem>

      <FormItem
        label="Mô tả"
        name="description"
        :rules="[
          {
            required: true,
            message: 'Please input your project \'s description!',
          },
        ]"
      >
        <Input v-model:value="formProjectState.description" />
      </FormItem>

      <FormItem
        label="Loại"
        name="type"
        :rules="[{ required: true, message: 'Please input your project \'s type!' }]"
      >
        <Input v-model:value="formProjectState.type" />
      </FormItem>
    </Form>
  </Modal>

  <contextHolder />
</template>
<script lang="ts" setup>
import { request } from '@/api/axiosInstance';
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons-vue';

import {
  Button,
  Form,
  FormItem,
  Input,
  Modal,
  Popconfirm,
  Space,
  Switch,
  Table,
} from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import { h, reactive, ref, type UnwrapRef } from 'vue';
import '../../assets/css/Dashboard.css';

import { notification, type NotificationPlacement } from 'ant-design-vue';

type ColumnItem = {
  title: string;
  dataIndex: string;
  key: string;
  sorter?: boolean;
};

const columns: ColumnItem[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    sorter: true,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    sorter: true,
  },
  {
    title: 'Show',
    dataIndex: 'is_show',
    key: 'is_show',
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

const isLoading = ref<boolean>(false);

const listProject = ref();
getListProject();

function getListProject() {
  isLoading.value = true;
  request({
    url: '/projects',
    method: 'GET',
    params: {
      limit: 1000,
    },
  })
    .then((response) => {
      listProject.value = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}

interface FormProjectState {
  id?: number;
  name: string;
  description: string;
  type: string;
}

const formProjectState = reactive<FormProjectState>({
  name: '',
  description: '',
  type: '',
});

const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  addProject(formProjectState);
  open.value = false;
};

const addProject = (data: FormProjectState) => {
  request({
    url: '/projects',
    method: 'POST',
    data: {
      data,
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Thêm dự án', result.data.message);
        getListProject();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const dataSource = ref(listProject);
const editableData: UnwrapRef<Record<string, FormProjectState>> = reactive({});

const editProject = (id: number) => {
  editableData[id] = cloneDeep(
    dataSource.value.filter((item: FormProjectState) => id === item.id)[0],
  );
};

const saveProject = (id: number) => {
  Object.assign(
    dataSource.value.filter((item: FormProjectState) => id === item.id)[0],
    editableData[id],
  );

  request({
    url: '/projects',
    method: 'PUT',
    data: {
      data: editableData[id],
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Sửa dự án', result.data.message);
        delete editableData[id];
      } else {
        openNotification('bottomLeft', 'Sửa dự án', result.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const cancelEditProject = (id: number) => {
  delete editableData[id];
};

const deleteproject = (id: number) => {
  request({
    url: '/projects',
    method: 'DELETE',
    data: {
      id,
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Xóa dự án', result.data.message);
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
  deleteproject(id);
};

const cancel = () => {
  openNotification('bottomLeft', 'Xóa dự án', 'Hủy xóa thành công');
};
</script>
