<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import useXpSystem from '@/composables/useXpSystem'
import ProgressBar from './ProgressBar.vue'
import AchievementBadge from './AchievementBadge.vue'
import ActivityList from './ActivityList.vue'
import SkillsBar from '@/components/SkillsBar.vue'

const userStore = useUserStore()
const { level, progressPercentage, achievements } = useXpSystem()
</script>

<template>
  <div class="profile">
    <img :src="userStore.avatar" alt="avatar" class="avatar" width="80" />
    <h2>{{ userStore.name }}</h2>
    <SkillsBar :skills="userStore.skills" />
    <p>Уровень: {{ level }}</p>
    <ProgressBar :percentage="progressPercentage" />
    <div class="achievements">
      <AchievementBadge
        v-for="ach in achievements"
        :key="ach.description"
        :icon="ach.icon"
        :description="ach.description"
        :active="ach.isActive"
      />
    </div>
    <h3>Последняя активность</h3>
    <ActivityList :items="userStore.activity" />
  </div>
</template>

<style scoped>
.profile {
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.avatar {
  aspect-ratio: auto;
  border-radius: 50%;
}

.achievements {
  display: flex;
  justify-content: center;
  margin: 8px 0;
}

@media (max-width: 600px) {
  .profile {
    max-width: 100%;
  }
}
</style>
