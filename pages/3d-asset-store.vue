<template>
  <main class="h-screen w-full bg-black p-4 md:p-6 overflow-hidden font-sans text-white">
    <div class="grid grid-cols-12 grid-rows-6 gap-3 h-full max-w-[1600px] mx-auto">

      <NuxtLink to="/" class="col-start-1 row-start-1 col-span-2 row-span-1">
        <TileBase class="bg-chiyo-neon flex items-center justify-center p-2">
          <img src="/images/FireflyIcon.png" class="w-full h-auto" alt="Logo CHIYO" />
        </TileBase>
      </NuxtLink>

      <div class="col-start-1 row-start-2 col-span-12 row-span-5 relative">
        <TileBase class="bg-[#111] p-10 flex flex-col h-full border border-zinc-800 rounded-[2.5rem] overflow-hidden">

          <div class="mb-6">
            <h1 class="text-2xl font-black tracking-tighter uppercase">3D Modeling</h1>
            <div class="w-full h-[1px] bg-zinc-800 mt-4"></div>
          </div>

          <div class="flex-1 relative flex items-center justify-center">
            <button @click="prev" class="absolute left-4 z-50 text-zinc-600 hover:text-white transition-colors">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>

            <div class="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
              <div
                v-for="(card, index) in cards"
                :key="card.id"
                class="absolute transition-all duration-500 ease-in-out cursor-pointer rounded-[2rem] overflow-hidden bg-zinc-800 border-4 border-zinc-700/30"
                :style="getCardStyle(index)"
                @click="activeIndex = index"
              >
                <img :src="card.image" class="w-full h-full object-cover" />
              </div>
            </div>

            <button @click="next" class="absolute right-4 z-50 text-zinc-600 hover:text-white transition-colors">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
            </button>
          </div>

        </TileBase>
      </div>
    </div>
  </main>
</template>

<script setup>
const activeIndex = ref(1)

// Data Gambar sesuai referensi
const cards = [
  { id: 1, image: '/images/thumb-3d.jpeg' }, // Room setup
  { id: 2, image: '/images/thumb-2d.jpeg' }, // Cat Mascot (Center)
  { id: 3, image: '/images/thumb-assetstore.jpeg' }, // Desk setup
  { id: 4, image: '/images/thumb-assetstore.jpeg' }, // Desk setup
  { id: 5, image: '/images/thumb-assetstore.jpeg' }, // Desk setup
  { id: 6, image: '/images/thumb-assetstore.jpeg' }, // Desk setup
]

/**
 * Logika Animasi Stacking (Tumpuk)
 */
const getCardStyle = (index) => {
  const diff = index - activeIndex.value

  // Kartu Tengah (Active)
  if (diff === 0) {
    return {
      transform: 'translateX(0) scale(1)',
      zIndex: 30,
      opacity: 1,
      width: '600px',
      height: '450px'
    }
  }

  // Kartu Samping (Behind)
  return {
    transform: `translateX(${diff * 200}px) scale(0.85)`,
    zIndex: 10,
    opacity: 0.6,
    width: '600px',
    height: '450px',
    filter: 'blur(2px)'
  }
}

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % cards.length
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + cards.length) % cards.length
}
</script>