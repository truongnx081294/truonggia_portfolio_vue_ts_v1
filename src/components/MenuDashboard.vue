<template>
  <Menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 100%"
    mode="inline"
    :items="items"
    @click="handleClick"
  >
  </Menu>
  <Button danger :icon="h(LogoutOutlined)" @click="Logout">Logout</Button>
</template>
<script lang="ts" setup>
import router from "@/router";
import {
  HomeOutlined,
  LogoutOutlined,
  ProjectOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import type { ItemType, MenuProps } from "ant-design-vue";
import { Button, Menu } from "ant-design-vue";
import { VueElement, h, reactive, ref } from "vue";
import "../assets/css/Dashboard.css";

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);

const items: ItemType[] = reactive([
  getItem("Go to Website", "home", () => h(HomeOutlined)),

  getItem("Trang chủ", "dashboard", () => h(HomeOutlined)),

  getItem("Skill", "skill", () => h(ToolOutlined)),

  getItem("Project", "project", () => h(ProjectOutlined)),

  { type: "divider" },

  getItem("Tài khoản", "user", () => h(UserOutlined)),
]);

const handleClick: MenuProps["onClick"] = (e) => {
  router.replace(`/cms/${e.key}`);
};

function Logout() {
  localStorage.removeItem("userToken");
  router.replace(`/login`);
}
</script>
