import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export default function useXpSystem() {
  const userStore = useUserStore()
  const level = computed(() => Math.floor(userStore.xp / 100))
  const progressPercentage = computed(() => {
    const current = userStore.xp % 100
    const total = userStore.nextLevelXp - Math.floor(userStore.xp / 100) * 100
    return (current / total) * 100
  })
  const { achievements } = storeToRefs(userStore)

  return { level, progressPercentage, achievements }
}
