import { ref, onMounted, onUnmounted } from 'vue'
export const useScrollPosition = () => {
  const scrollPosition = ref(0)
  const updateScrollPosition = () => {
    scrollPosition.value = window.scrollY
  }
  onMounted(() => {
    window.addEventListener('scroll', updateScrollPosition)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollPosition)
  })

  return {
    scrollPosition
  }
}
