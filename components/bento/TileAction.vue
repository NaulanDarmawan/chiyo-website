<template>
  <TileBase :class="[tile?.bgColor || 'bg-[#111]', 'flex items-center justify-center p-4 text-center']">
    <h2 :class="[tile?.textColor || 'text-white', 'text-xl font-[900] italic uppercase leading-none']">
      {{ tile?.title || 'No Title' }}
    </h2>
  </TileBase>
</template>

<script setup lang="ts">
import type { BentoTile } from '~/composables/useBento'
// Pastikan props didefinisikan dengan benar
defineProps<{ tile: BentoTile }>()
</script>