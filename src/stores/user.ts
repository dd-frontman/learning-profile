import { ref } from 'vue'
import { defineStore } from 'pinia'
import { user as mockUser, activities as mockActivities, mockAchievements } from '@/mocks/user'

export const useUserStore = defineStore('user', () => {
  const name = ref(mockUser.name)
  const avatar = ref(mockUser.avatar)
  const xp = ref(mockUser.xp)
  const nextLevelXp = ref(mockUser.nextLevelXp)
  const completedCourses = ref(mockUser.completedCourses)
  const skills = ref(mockUser.skills)
  const activity = ref(mockActivities)
  const achievements = ref(mockAchievements)

  return {
    name,
    avatar,
    xp,
    nextLevelXp,
    completedCourses,
    skills,
    activity,
    achievements,
  }
})
