<template>
  <!-- <n-menu ></n-menu> -->
  <div class="flex w-full">
    <div style="width: calc(100% - 228px)" class="mr-[36px]">
      <div class="grid-cols-2 gap-[16px] items-start lg:hidden xl:grid">
        <div
          v-for="(g, gIdx) in gridData"
          :key="gIdx"
          class="grid grid-template-columns-max gap-[16px]"
        >
          <n-card
            v-for="(n, idx) in g"
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
                      :color="!currentIdxArr.includes(n.id) ? '#7fe7c4' : ''"
                      @click="
                        ArrayTool.addOrDelInArray(currentIdxArr, n.id, 'push')
                      "
                    />
                  </template>
                  <span>
                    {{ !currentIdxArr.includes(n.id) ? "折叠" : "展开" }}
                  </span>
                </n-tooltip>
              </div>
            </template>
            <!-- <div style="overflow: auto">
              <n-code :code="n.example" language="javascript" />
            </div> -->
            <template #footer v-if="!currentIdxArr.includes(n.id)">
              <n-scrollbar>
                <n-code :code="n.code" language="javascript" />
              </n-scrollbar>
              <!-- <div style="overflow: auto"> -->
              <!-- </div> -->
            </template>
            <!-- <template #action> #action </template> -->
          </n-card>
        </div>
      </div>
      <div
        class="grid-template-columns-max gap-[16px] items-start lg:grid xl:hidden"
      >
        <n-card
          v-for="(n, idx) in commonData"
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
                    :color="!currentIdxArr.includes(n.id) ? '#7fe7c4' : ''"
                    @click="
                      ArrayTool.addOrDelInArray(currentIdxArr, n.id, 'push')
                    "
                  />
                </template>
                <span>
                  {{ currentIdxArr.includes(n.id) ? "展开" : "折叠" }}
                </span>
              </n-tooltip>
            </div>
          </template>
          <!-- <div style="overflow: auto">
              <n-code :code="n.example" language="javascript" />
            </div> -->
          <template #footer v-if="!currentIdxArr.includes(n.id)">
            <n-scrollbar>
              <n-code :code="n.code" language="javascript" />
            </n-scrollbar>
            <!-- <div style="overflow: auto"> -->
            <!-- </div> -->
          </template>
          <!-- <template #action> #action </template> -->
        </n-card>
      </div>
    </div>
    <div class="w-[192px]">
      <!-- listen-to=".document-scroll-container" -->
      <n-anchor
        affix
        offset-target=".document-scroll-container"
        :trigger-top="24"
        :top="88"
        style="z-index: 1"
      >
        <!-- :bound="24" -->
        <n-anchor-link
          v-for="(n, idx) in gridData.flat()"
          :key="idx"
          :title="n.funName"
          :href="'#' + n.funName + '.fun'"
        />
      </n-anchor>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTool from "@/components/IconTool/IconTool.vue";
import { divContentDatas } from "@/utils/common";
import { array as ArrayTool } from "zlinni_common_pkg";
import axios from "axios";

const route = useRoute();
onMounted(() => {
  getDatas();
});
interface FileData {
  id: number;
  funName: string;
  code: string;
}
const originDatas = ref<
  Array<{
    fileName: string;
    data: FileData[];
  }>
>([]);
const getDatas = () => {
  axios.get("/test.json").then((res) => {
    originDatas.value = res.data;
    const { params } = route;
    console.log(params);
    params?.type && getQueryData(params.type as string);
  });
};
watch(
  route,
  (val) => val?.params?.type && getQueryData(val.params.type as string)
);
const getQueryData = (inKey: string) => {
  const findItem = originDatas.value.find((item) => {
    return item.fileName === inKey;
  });
  if (findItem && findItem.data) {
    commonData.value = findItem.data;
    gridData.value =
      commonData.value.length === 1
        ? [commonData.value]
        : divContentDatas(commonData.value);
  }
};

const currentIdxArr = ref<number[]>([]);
const gridData = ref<FileData[][]>([]);
const commonData = ref<FileData[]>([]);
</script>

<style scoped>
.grid-template-columns-max {
  grid-template-columns: 100%;
}
</style>
