<template>
  <MainLayout />
  <router-view />
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";

export default {
  components: {
    MainLayout,
  },
};
</script>
