<template>
  <div
    class="h-full flex items-center px-[32px] border-b border-[#efeff5] dark:border-[#2d2d30]"
  >
    <div class="flex items-center gap-[8px]">
      <IconTool icon="fa-solid:tools" />
      <span class="text-[18px]"> VisualToolsTypescript </span>
    </div>
    <div class="ml-auto flex items-center gap-[8px]">
      <IconTool
        icon="mdi:github"
        @click="
          dt.injectHerf('https://github.com/Zlinni/visual_tools_typescript')
        "
      />
      <IconTool
        icon="ri:moon-clear-fill"
        v-show="darkMode"
        @click="toggleDarkMode"
      />
      <IconTool
        icon="ic:outline-wb-sunny"
        v-show="!darkMode"
        @click="toggleDarkMode"
      />
      <span
        class="cursor-pointer"
        @click="
          dt.injectHerf(
            'https://www.npmjs.com/package/zlinni_common_pkg?activeTab=explore'
          )
        "
        >1.2.0</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTool from "@/components/IconTool/IconTool.vue";
import { useDarkmode } from "@/store/useDarkmode";
import { dom as dt } from "zlinni_common_pkg";

const { darkMode } = storeToRefs(useDarkmode());
const { toggleDarkMode } = useDarkmode();
</script>
