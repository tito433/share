<template>
  <AppHeader />
  <main><router-view /></main>
  <AppFooter />
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
<style scoped lang="scss">
main {
  padding: 6rem 1rem 1rem;
}
</style>
