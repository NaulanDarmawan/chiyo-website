<template>
  <TileBase class="group cursor-pointer">
    <img
      v-if="tile?.src"
      :src="tile.src"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      :alt="tile?.title"
    />

    <div v-else class="w-full h-full bg-zinc-900 flex items-center justify-center">
      <span class="text-zinc-700 text-xs italic uppercase">No Image</span>
    </div>
  </TileBase>
</template>

<script setup lang="ts">
import type { BentoTile } from '~/composables/useBento'
defineProps<{ tile: BentoTile }>()
</script>