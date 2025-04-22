<template>
  <List
    item-layout="vertical"
    :data-source="listUser"
    class="demo-loadmore-list"
  >
    <template #renderItem="{ item }">
      <ListItem>
        <Skeleton avatar :title="false" :loading="!!item.loading" active>
          <ListItemMeta :description="item.email">
            <template #title>
              <p>{{ item.username }}</p>
            </template>
            <template #avatar>
              <Avatar :src="item.ava" />
            </template>
          </ListItemMeta>
        </Skeleton>
      </ListItem>
    </template>
  </List>
</template>
<script lang="ts" setup>
import { Avatar, List, ListItem, ListItemMeta, Skeleton } from "ant-design-vue";
import { ref } from "vue";
import "../../assets/css/Dashboard.css";

let listUser = ref();
// getListUser();

// function getListUser() {
//   return request({
//     url: "/users",
//     method: "GET",
//     params: {
//       limit: 1000,
//     },
//   }).then((response) => {
//     listUser.value = response.data;
//   });
// }
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
