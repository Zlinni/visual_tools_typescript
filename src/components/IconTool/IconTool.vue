<template>
  <n-icon :size="size">
    <Icon :icon="icon"></Icon>
  </n-icon>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

defineProps({
  size: {
    type: String,
    default: "20",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>
