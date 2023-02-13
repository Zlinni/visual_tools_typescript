<template>
  <!-- <n-menu ></n-menu> -->
  <div class="flex w-full">
    <div class="mr-[36px] calcWidth">
      <div class="grid-cols-2 gap-[16px] items-start hidden xl:grid">
        <div
          v-for="(g, gIdx) in gridData"
          :key="gIdx"
          class="grid grid-template-columns-max gap-[16px]"
        >
          <CardTemp :datas="g" />
        </div>
      </div>
      <div
        class="grid-template-columns-max gap-[16px] items-start grid xl:hidden"
      >
        <CardTemp :datas="commonData" />
      </div>
    </div>
    <div class="w-[192px] hidden md:block">
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
import { divContentDatas } from "@/utils/common";
import CardTemp from "@/views/CardTemp.vue";
import axios from "axios";
import { useMessage } from "naive-ui";

window.$message = useMessage();
// const cardTemp = ref<InstanceType<typeof CardTemp>>();
// cardTemp.value?.initDatas()
const route = useRoute();
onMounted(() => {
  getDatas();
});
const originDatas = ref<
  Array<{
    fileName: string;
    data: FileData[];
  }>
>([]);
const getDatas = () => {
  axios.get("/visual_tools_typescript/test.json").then((res) => {
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

const gridData = ref<FileData[][]>([]);
const commonData = ref<FileData[]>([]);
</script>

<style scoped>
.grid-template-columns-max {
  grid-template-columns: 100%;
}
@media screen and (max-width: 767px) {
  .calcWidth {
    width: 100%;
  }
}
@media screen and (min-width: 767px) {
  .calcWidth {
    width: calc(100% - 228px);
  }
}
</style>
