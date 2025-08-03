<script setup lang="ts">
import OfflineToast from '@/components/OfflineToast.vue'
</script>

<template>
  <div class="container">
    <OfflineToast />
    <router-view />
  </div>
</template>

<style scoped>
.container {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  user-select: none;
}
</style>
