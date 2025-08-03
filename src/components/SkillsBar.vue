<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ skills: string[] }>()

const coloredSkills = computed(() =>
  props.skills.map((name, i) => ({
    name,
    c1: `hsl(${(i * 40) % 360} 70% 60%)`,
    c2: `hsl(${(i * 40 + 30) % 360} 70% 50%)`,
  })),
)
</script>

<template>
  <div class="skills-bar">
    <span
      v-for="skill in coloredSkills"
      :key="skill.name"
      class="skill-pill"
      :style="{
        '--c1': skill.c1,
        '--c2': skill.c2,
      }"
    >
      {{ skill.name }}
    </span>
  </div>
</template>

<style scoped>
.skills-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
}

.skill-pill {
  --c1: #42b883;
  --c2: #2ecc71;

  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;

  background: linear-gradient(135deg, var(--c1), var(--c2));
  border-radius: 9999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  transition:
    transform 0.3s,
    box-shadow 0.3s;
  user-select: none;
}

.skill-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
</style>
