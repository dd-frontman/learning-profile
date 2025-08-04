<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{ percentage: number }>()

const current = ref(0)

onMounted(() => {
  requestAnimationFrame(() => (current.value = props.percentage))
})

watch(
  () => props.percentage,
  (val) => (current.value = val),
)
</script>

<template>
  <div
    class="progress-bar"
    role="progressbar"
    :aria-valuenow="current"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Прогресс опыта"
  >
    <p class="current-xp">{{ current }}XP</p>
    <div
      class="progress"
      :class="{ complete: current === 100 }"
      :style="{ width: current + '%' }"
    />
  </div>
</template>

<style scoped>
.progress-bar {
  width: 100%;
  height: 20px;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;
}

.progress {
  position: relative;
  height: 100%;
  background-image: linear-gradient(90deg, #42b883 0%, #2ecc71 100%);
  box-shadow: 0 0 4px rgba(66, 184, 131, 0.6);
  transition: width 0.6s ease-out;
  overflow: hidden;
}

.progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 50%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg);
  animation: shine 2s linear infinite;
}

@keyframes shine {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 6px rgba(66, 184, 131, 0.8);
  }
  50% {
    box-shadow: 0 0 16px rgba(66, 184, 131, 1);
  }
}
.progress.complete {
  animation: pulse 1.2s ease-in-out infinite;
}

.current-xp {
  text-align: center;
  position: absolute;
  margin: 0;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 1;
}
</style>
