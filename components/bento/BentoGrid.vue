<template>
  <main class="min-h-screen md:h-screen md:overflow-hidden bg-black p-4">
    <div class="grid grid-cols-12 gap-4 h-full">

      <div
        v-for="tile in tiles"
        :key="tile.id"
        :class="tile.layout"
        class="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
      >
        <p class="p-4 text-white">{{ tile.title }}</p>
      </div>

    </div>
  </main>
</template>

<script setup>
const { tiles } = useBento()
</script>