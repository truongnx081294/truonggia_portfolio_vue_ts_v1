<template>
  <Layout style="height: 100%;">
    <LayoutSider :style="siderStyle">
      <MenuDashboard />
    </LayoutSider>
    <Layout>
      <LayoutContent style="padding-top: 16px">
        <!-- <p>{{ abc }}</p> -->
        <!-- <Breadcrumb>
          <BreadcrumbItem v-for="item in listRoute" :href="item">
            <RouterLink :to="item">
              {{ item }}
            </RouterLink>
          </BreadcrumbItem>
        </Breadcrumb> -->
        <slot />
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import MenuDashboard from "@/components/MenuDashboard.vue";
import {
  Layout,
  LayoutContent,
  LayoutSider
} from "ant-design-vue";
import { reactive, type CSSProperties } from "vue";
import { useRoute } from "vue-router";
import "../assets/css/Dashboard.css";

const path = useRoute();

const listRoute = reactive<string[]>(path.fullPath.split("/"));

const siderStyle: CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
};

// let abc = reactive(ref([1, 2, 3]));

// setTimeout(() => {
//   abc.value = [4];
//   console.log("🚀 ~ setTimeout ~ abc.value:", abc);
// }, 5000);
</script>
