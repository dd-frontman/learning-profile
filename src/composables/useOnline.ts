import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useOnline() {
  const online = ref(navigator.onLine)

  const set = () => (online.value = navigator.onLine)

  onMounted(() => {
    window.addEventListener('online', set)
    window.addEventListener('offline', set)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('online', set)
    window.removeEventListener('offline', set)
  })

  return online
}
