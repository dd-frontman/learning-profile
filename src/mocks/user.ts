export const user = {
  name: 'Алексей Петров',
  avatar: new URL('../assets/images/user-avatar.png', import.meta.url).href,
  level: 12,
  xp: 850,
  nextLevelXp: 1000,
  completedCourses: 7,
  skills: ['JavaScript', 'Vue.js', 'TypeScript'],
}

export const activities = [
  { id: 1, course: 'Vue Advanced', date: '2023-05-15', xp: 50 },
  { id: 2, course: 'TypeScript', date: '2023-05-10', xp: 30 },
]

export const mockAchievements = [
  {
    icon: new URL('../assets/images/beginner.jpg', import.meta.url).href,
    description: 'Новичок',
    isActive: false,
  },
  {
    icon: new URL('../assets/images/stubborn.png', import.meta.url).href,
    description: 'Упорный',
    isActive: true,
  },
  {
    icon: new URL('../assets/images/expert.png', import.meta.url).href,
    description: 'Эксперт',
    isActive: false,
  },
]
