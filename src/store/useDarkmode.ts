import { ref } from "vue";

// 关于黑暗模式的一个hook
export const useDarkmode = defineStore("darkMode", () => {
  const darkMode = ref<boolean>(false);
  try {
    darkMode.value = localStorage.getItem("darkMode") === "dark";
  } catch (error) {
    darkMode.value = false;
  }
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem("darkMode", darkMode.value ? "dark" : "light");
  };
  return {
    darkMode,
    toggleDarkMode,
  };
});
