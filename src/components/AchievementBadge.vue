<script setup lang="ts">
import { ref, defineProps } from 'vue'

defineProps<{ icon: string; description: string; active: boolean }>()
const showTooltip = ref(false)
</script>

<template>
  <div class="achievement" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
    <img :class="{ active }" :src="icon" alt="achievement" class="icon" />
    <transition name="slide" appear>
      <div v-if="showTooltip" class="tooltip">{{ description }}</div>
    </transition>
  </div>
</template>

<style scoped>
.achievement {
  position: relative;
  display: inline-block;
  margin: 0 8px;
}
.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid white;
}

.active {
  border: 5px solid #42b883;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  pointer-events: none;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -8px);
}
.slide-enter-to,
.slide-leave-from {
  /* state during/after animation */
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
