<template>
  <TileBase @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <video
      v-if="tile?.src"
      ref="videoRef"
      :src="tile.src"
      :poster="tile?.poster"
      :autoplay="tile?.type === 'video-autoplay'"
      :loop="true"
      :muted="true"
      playsinline
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    ></video>

    <div v-else class="w-full h-full bg-zinc-900 flex items-center justify-center">
      <span class="text-zinc-700 text-xs italic uppercase">Video Missing</span>
    </div>
  </TileBase>
</template>

<script setup lang="ts">
import type { BentoTile } from '~/composables/useBento'

const props = defineProps<{
  tile: BentoTile
}>()

const videoRef = ref<HTMLVideoElement | null>(null)

/**
 * Memutar video saat kursor masuk (khusus tipe video-hover)
 */
const handleMouseEnter = () => {
  if (props.tile?.type === 'video-hover' && videoRef.value) {
    videoRef.value.play().catch((err) => {
      console.warn("Autoplay diblokir browser:", err)
    })
  }
}

/**
 * Menghentikan video dan mereset ke poster saat kursor keluar
 */
const handleMouseLeave = () => {
  if (props.tile?.type === 'video-hover' && videoRef.value) {
    videoRef.value.pause()
    // Fungsi load() akan memuat ulang elemen video sehingga poster muncul kembali
    videoRef.value.load()
  }
}
</script>