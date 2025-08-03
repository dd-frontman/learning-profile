<script setup lang="ts">
import { useOnline } from '@/composables/useOnline'
const online = useOnline()
</script>

<template>
  <p v-if="!online" class="offline-toast">📡 Соединение потеряно. Работаем офлайн.</p>
</template>

<style scoped>
.offline-toast {
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  background: #ffb547;
  color: #3e2723;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  text-align: center;

  animation: slideFade 0.3s ease-out forwards;
}

@keyframes slideFade {
  from {
    transform: translate(-50%, 20px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}
</style>
