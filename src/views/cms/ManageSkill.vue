<template>
  <div style="display: flex; justify-content: space-between; padding: 0px 16px 24px">
    <Button type="primary" :icon="h(PlusOutlined)" @click="showModal">Tạo mới</Button>
  </div>

  <Table :data-source="listSkill" :columns="columns" :loading="isLoading" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name'].includes(column.dataIndex as string)">
        <div>
          <Input
            v-if="editableData[record.id]"
            v-model:value="editableData[record.id][column.dataIndex as keyof FormSkillState]"
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
            v-model:checked="editableData[record.id][column.dataIndex as keyof FormSkillState]"
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
      <template v-if="['type'].includes(column.dataIndex as string)">
        <div>
          <Select
            v-if="editableData[record.id]"
            v-model:value="editableData[record.id][column.dataIndex as keyof FormSkillState]"
            style="margin: -5px 0"
          >
            <SelectOption
              v-for="(type, index) in TYPE_SKILL_OPTIONS"
              :key="index"
              :value="type.value"
            >
              {{ type.label }}
            </SelectOption>
          </Select>
          <template v-else>
            {{ text === TYPE_SKILL.CORE_TECHNOLOGY ? 'Core Technology' : 'Familiar' }}
          </template>
        </div>
      </template>
      <template v-if="column.key === 'action'">
        <div v-if="editableData[record.id]">
          <Button type="primary" :icon="h(SaveOutlined)" @click="saveSkill(record.id)">Save</Button>
          <Popconfirm
            title="Are you sure cancel edit skill?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="cancelEditSkill(record.id)"
          >
            <Button danger :icon="h(CloseOutlined)">Cancel</Button>
          </Popconfirm>
        </div>
        <div v-else>
          <Button type="primary" :icon="h(EditOutlined)" @click="editSkill(record.id)">Edit</Button>
        </div>
        <Popconfirm
          title="Are you sure delete this skill?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm(text)"
          @cancel="cancel"
        >
          <Button danger :icon="h(DeleteOutlined)">Remove</Button>
        </Popconfirm>
      </template>
    </template>
  </Table>

  <Modal v-model:open="open" title="Thêm kỹ năng" @ok="handleOk">
    <Form
      layout="vertical"
      :model="formSkillState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <FormItem
        label="Tên"
        name="name"
        :rules="[{ required: true, message: 'Please input your skill \'s name!' }]"
      >
        <Input v-model:value="formSkillState.name" />
      </FormItem>

      <FormItem
        label="Loại"
        name="type"
        :rules="[{ required: true, message: 'Please input your skill \'s type!' }]"
      >
        <Select v-model:value="formSkillState.type">
          <SelectOption
            v-for="(type, index) in TYPE_SKILL_OPTIONS"
            :key="index"
            :value="type.value"
          >
            {{ type.label }}
          </SelectOption>
        </Select>
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

import { TYPE_SKILL, TYPE_SKILL_OPTIONS } from '@/helper/constant';
import {
  Button,
  Form,
  FormItem,
  Input,
  Modal,
  Popconfirm,
  Select,
  SelectOption,
  Switch,
  Table,
} from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import { h, onMounted, reactive, ref, type UnwrapRef } from 'vue';
import '../../assets/css/Dashboard.css';

import { notification, type NotificationPlacement } from 'ant-design-vue';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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

const listSkill = ref();
onMounted(() => {
  getListSkill();
});

function getListSkill() {
  isLoading.value = true;
  request({
    url: '/skills',
    method: 'GET',
    params: {
      limit: 1000,
    },
  })
    .then((response) => {
      console.log('🚀 ~ .then ~ response:', response);
      listSkill.value = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}

interface FormSkillState {
  id?: number;
  name: string;
  type: string;
  is_show: number;
}

const formSkillState = reactive<FormSkillState>({
  name: '',
  type: '',
  is_show: 0,
});

const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  addSkill(formSkillState);
  open.value = false;
};

const addSkill = (data: FormSkillState) => {
  request({
    url: '/skills',
    method: 'POST',
    data: {
      data,
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Thêm kỹ năng', result.data.message);
        getListSkill();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const dataSource = ref(listSkill);
const editableData: UnwrapRef<Record<string, FormSkillState>> = reactive({});

const editSkill = (id: number) => {
  editableData[id] = cloneDeep(
    dataSource.value.filter((item: FormSkillState) => id === item.id)[0],
  );
};

const saveSkill = (id: number) => {
  Object.assign(
    dataSource.value.filter((item: FormSkillState) => id === item.id)[0],
    editableData[id],
  );

  request({
    url: '/skills',
    method: 'PUT',
    data: {
      data: editableData[id],
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Sửa kỹ năng', result.data.message);
        delete editableData[id];
      } else {
        openNotification('bottomLeft', 'Sửa kỹ năng', result.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const cancelEditSkill = (id: number) => {
  delete editableData[id];
};

const deleteSkill = (id: number) => {
  request({
    url: '/skills',
    method: 'DELETE',
    data: {
      id,
    },
  })
    .then((result) => {
      if (result.status === 200) {
        openNotification('bottomLeft', 'Xóa kỹ năng', result.data.message);
        getListSkill();
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
  deleteSkill(id);
};

const cancel = () => {
  openNotification('bottomLeft', 'Xóa kỹ năng', 'Hủy xóa thành công');
};
</script>
