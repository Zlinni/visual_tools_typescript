<template>
  <div
    class="h-[63px] flex items-center px-[32px] border-b border-[#efeff5] dark:border-[#2d2d30]"
  >
    <div class="flex items-center gap-[8px]">
      <IconTool icon="fa-solid:tools" />
      <span class="text-[18px]"> VisualToolsTypescript </span>
    </div>
    <div class="ml-auto flex items-center gap-[8px]">
      <IconTool icon="mdi:github" />
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
      <span>1.2.0</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTool from "@/components/IconTool/IconTool.vue";
import { useDarkmode } from "@/store/useDarkmode";

const { darkMode } = storeToRefs(useDarkmode());
const { toggleDarkMode } = useDarkmode();
</script>
