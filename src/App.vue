<script setup lang="ts">
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui";
import { useDarkmode } from "./store/useDarkmode";
import LeftMenu from "./views/LeftMenu.vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);
const hookDarkmode = useDarkmode();
const { darkMode } = storeToRefs(hookDarkmode);
const lightThemeOverrides = {
  // common: {
  //   primaryColor: '#58aef5',
  //   primaryColorHover: '#58aef5',
  //   primaryColorPressed: '#58aef5',
  // },
  // Button: {
  //   textColor: '#2080f0',
  //   borderHover: '1px solid #58aef5',
  // },
  // Pagination: {
  //   textColorHover: '#000',
  // },
  // ...
};

const darkThemeOverrides = {
  // common: {
  //   primaryColor: '#323f48',
  //   primaryColorHover: '#323f48',
  //   primaryColorPressed: '#323f48',
  // },
  // Button: {
  //   textColor: '#2080f0',
  //   borderHover: '1px solid #323f48',
  // },
  // Pagination: {
  //   textColorHover: '#000',
  // },
  // ...
};
const router = useRouter();
const keyChange = (key: string) => {
  router.push({
    name: "home",
    params: {
      type: key,
    },
  });
};
</script>

<template>
  <n-config-provider
    :theme="darkMode ? darkTheme : lightTheme"
    :theme-overrides="darkMode ? darkThemeOverrides : lightThemeOverrides"
    :hljs="hljs"
  >
    <n-dialog-provider>
      <n-message-provider>
        <n-layout has-sider class="h-screen">
          <n-layout-sider
            content-style="padding: 16px;"
            class="hidden lg:block"
          >
            <LeftMenu @key-change="keyChange" />
          </n-layout-sider>
          <n-layout>
            <n-layout-header>
              <!-- <nav class="h-10">
                <n-button @click="$router.push('/')">Home</n-button> |
                <n-button @click="$router.push('/about')">About</n-button>
              </nav> -->
            </n-layout-header>
            <n-layout-content
              content-style="padding: 16px;"
              class="document-scroll-container"
            >
              <RouterView />
            </n-layout-content>
            <!-- <n-layout-footer>我是底部footer</n-layout-footer> -->
          </n-layout>
        </n-layout>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
