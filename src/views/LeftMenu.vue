<template>
  <n-menu :options="menuOptions" @update-value="changeRoute"></n-menu>
  <!-- <div>scac</div> -->
</template>

<script setup lang="ts">
import { NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import IconTool from "@/components/IconTool/IconTool.vue";
import router from "@/router";

const renderIcon = (icon: string) => () =>
  h(IconTool, {
    icon,
  });
const menuOptions = reactive<MenuOption[]>([
  {
    label: "Common 通用",
    key: "common",
    icon: renderIcon("ri:creative-commons-nd-line"),
  },
  {
    label: "Array 数组",
    key: "array",
    icon: renderIcon("material-symbols:data-array"),
  },
  {
    label: "Time 时间",
    key: "time",
    icon: renderIcon("material-symbols:av-timer-rounded"),
  },
  {
    label: "File 文件",
    key: "file",
    icon: renderIcon("ri:file-text-line"),
  },
  {
    label: "DOM 操作",
    key: "DOM",
    icon: renderIcon("icon-park-outline:dome"),
  },
]);
const emits = defineEmits(["keyChange"]);
const changeRoute = (key: string) => {
  console.log(key);
  emits("keyChange", key);
};
</script>
