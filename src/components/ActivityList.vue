<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface Activity {
  id: number
  course: string
  date: string
  xp: number
}

const props = defineProps<{ items: Activity[] }>()

const rows = computed(() =>
  props.items.map((r) => ({
    ...r,
    nice: new Date(r.date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  })),
)
</script>

<template>
  <div class="activities-card">
    <div class="activities-grid" role="table">
      <div class="header">Курс</div>
      <div class="header">Дата</div>
      <div class="header">XP</div>

      <template v-for="r in rows" :key="r.id">
        <div class="cell course">{{ r.course }}</div>
        <div class="cell date">{{ r.nice }}</div>
        <div class="cell xp">{{ r.xp }}</div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.activities-card {
  padding: 1rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.activities-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 6px 12px;
  font:
    500 14px/1.4 'Inter',
    system-ui,
    sans-serif;
  min-width: 340px;
}

.header {
  padding: 0.6rem 0.8rem;
  background: linear-gradient(180deg, #f7f8fa 0%, #eef0f3 100%);
  border: 1px solid #e5e7eb;
  border-radius: 6px 6px 0 0;
  color: #374151;
}

.cell {
  padding: 0.6rem 0.8rem;
  border: 1px solid #e5e7eb;
  background: #fff;
  transition:
    background 0.25s,
    box-shadow 0.25s;
}

.cell:nth-child(6n + 1),
.cell:nth-child(6n + 2),
.cell:nth-child(6n + 3) {
  background: #fafafa;
}

.cell:hover {
  background: #ebf6ff;
  box-shadow: inset 0 0 0 9999px rgba(235, 246, 255, 0.4);
}

.activities-grid > .cell.xp:last-child {
  border-bottom-right-radius: 6px;
}
.activities-grid > .cell.course:nth-last-child(3) {
  border-bottom-left-radius: 6px;
}

@media (max-width: 600px) {
  .activities-card {
    overflow-x: auto;
  }
}
</style>
