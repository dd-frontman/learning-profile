# Learning Profile - Vue 3 PWA

## Запуск проекта
```bash
npm install
npm run dev
npm run build # production build
```

## Структура проекта
- `/src/views` - страницы
- `/src/components` - компоненты UI
- `/src/stores` - состояние Pinia
- `/src/composables` - логика XP/уровней

## Особенности реализации
- Использован Vite PWA Plugin для офлайн-режима
- Адаптивная сетка CSS Grid/Flexbox
- Анимации с Vue Transition
- Типизация TypeScript

## Тестовые данные
Логика геймификации использует mock-данные из `src/mocks/user.ts`