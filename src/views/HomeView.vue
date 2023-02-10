<template>
  <!-- <n-menu ></n-menu> -->
  <div class="flex w-full">
    <div
      style="width: calc(100% - 228px)"
      class="mr-[36px] h-screen overflow-x-hidden overflow-y-auto"
    >
      <div class="grid grid-cols-2 gap-[16px] items-start">
        <div
          v-for="(g, gIdx) in gridData"
          :key="gIdx"
          class="grid col-span-1 gap-[16px]"
        >
          <n-card
            v-for="(n, idx) in g"
            :key="idx"
            :title="n.title"
            :segmented="{
              content: true,
              footer: true,
            }"
            :id="n.id"
          >
            <template #header-extra>
              <div class="flex items-center gap-2">
                <n-tooltip placement="bottom" trigger="hover">
                  <template #trigger>
                    <IconTool icon="charm:copy" size="12" />
                  </template>
                  <span> 复制 </span>
                </n-tooltip>
                <n-tooltip placement="bottom" trigger="hover">
                  <template #trigger>
                    <IconTool
                      icon="ic:outline-code"
                      size="16"
                      :color="currentIdxArr.includes(idx) ? '#7fe7c4' : ''"
                      @click="
                        ArrayTool.addOrDelInArray(currentIdxArr, idx, 'push')
                      "
                    />
                  </template>
                  <span>
                    {{ currentIdxArr.includes(idx) ? "折叠" : "展开" }}
                  </span>
                </n-tooltip>
              </div>
            </template>
            <div style="overflow: auto">
              <n-code :code="n.example" language="javascript" />
            </div>
            <template #footer v-if="currentIdxArr.includes(idx)">
              <n-scrollbar>
                <n-code :code="n.code" language="javascript" />
              </n-scrollbar>
              <!-- <div style="overflow: auto"> -->
              <!-- </div> -->
            </template>
            <!-- <template #action> #action </template> -->
          </n-card>
        </div>
        <!-- <div class="grid col-span-1 gap-[16px]">
          <n-card title="卡片插槽示例" v-for="n in 4" :key="n">
            <template #header-extra> #header-extra </template>
            卡片内容
            <template #footer> #footer </template>
            <template #action> #action </template>
          </n-card>
        </div> -->
      </div>
    </div>
    <div class="w-[192px]">
      <n-anchor
        affix
        listen-to=".document-scroll-container"
        :trigger-top="24"
        :top="88"
        style="z-index: 1"
        :bound="24"
      >
        <n-anchor-link
          v-for="(n, idx) in commonData"
          :key="idx"
          :title="n.id"
          :href="'#' + n.id"
        />
        <!-- @click="toItem(n.id)" -->
      </n-anchor>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTool from "@/components/IconTool/IconTool.vue";
import { divContentDatas, sliceArray } from "@/utils/common";
import { array as ArrayTool } from "zlinni_common_pkg";
import { commonData } from "@/utils/commonJson";

const route = useRoute();
const { query } = route;
const queryMapper = {
  common: commonData,
  // array:arrayData,
  // time:timeData
};
// const router = useRouter();
// if (!query) {
//   router.push({ path: "/common" });
// }
// Map { 'first' => 1, 'second' => 2, 'third' => 3 }
const currentIdxArr = ref<number[]>([]);
const gridData = divContentDatas(commonData);
console.log(gridData, "gridData");

// const toItem = (id: string) => {

// };
</script>
