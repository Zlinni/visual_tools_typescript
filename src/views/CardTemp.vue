<template>
  <n-card
    v-for="(n, idx) in comDatas"
    :key="idx"
    :title="n.funName"
    :segmented="{
      content: true,
      footer: true,
    }"
    :id="n.funName + '.fun'"
  >
    <template #header-extra>
      <div class="flex items-center gap-2">
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <IconTool
              icon="charm:copy"
              class="cursor-pointer"
              size="12"
              @click="copy(n.code)"
            />
          </template>
          <span> 复制 </span>
        </n-tooltip>
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <IconTool
              icon="ic:outline-code"
              size="16"
              class="cursor-pointer"
              :color="currentFunNameArr.includes(n.funName) ? '#7fe7c4' : ''"
              @click="changecurrentFunNameArr(n.funName)"
            />
          </template>
          <span>
            {{ currentFunNameArr.includes(n.funName) ? "折叠" : "展开" }}
          </span>
        </n-tooltip>
      </div>
    </template>
    <!-- <div style="overflow: auto">
              <n-code :code="n.example" language="javascript" />
            </div> -->
    <template #footer v-if="currentFunNameArr.includes(n.funName)">
      <n-scrollbar>
        <n-code :code="n.code" language="javascript" />
      </n-scrollbar>
      <!-- <div style="overflow: auto"> -->
      <!-- </div> -->
    </template>
    <!-- <template #action> #action </template> -->
  </n-card>
</template>

<script setup lang="ts">
import { array as ArrayTool } from "zlinni_common_pkg";

const props = withDefaults(
  defineProps<{
    datas: FileData[];
  }>(),
  {}
);
const comDatas = computed(() => {
  return props.datas;
});
const currentFunNameArr = ref<string[]>([]);
const changecurrentFunNameArr = (target: string) => {
  ArrayTool.addOrDelInArray(currentFunNameArr.value, target, "push");
};
const copy = (code: string) => {
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.setAttribute("value", code);
  input.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
    window.$message.info("复制成功");
  }
  document.body.removeChild(input);
};
watch(
  comDatas,
  (val) => {
    if (val) {
      currentFunNameArr.value = val.map((item) => item.funName);
    }
  },
  {
    immediate: true,
  }
);
</script>
