<template>
  <main class="h-screen w-full bg-black p-4 md:p-6 overflow-hidden font-sans text-white">
    <div class="grid grid-cols-12 grid-rows-6 gap-3 h-full max-w-[1600px] mx-auto">

      <NuxtLink to="/" class="col-start-1 row-start-1 col-span-2 row-span-1">
        <TileBase class="bg-chiyo-neon flex items-center justify-center p-2">
          <img src="/public/images/FireflyIcon.png" class="w-full h-auto" alt="Logo CHIYO" />
        </TileBase>
      </NuxtLink>

      <div class="col-start-1 row-start-2 col-span-12 row-span-5 overflow-hidden">
        <TileBase class="bg-[#111] p-10 flex flex-col h-full border border-zinc-800 rounded-[2.5rem]">

          <div class="mb-10">
            <h1 class="text-3xl font-black italic tracking-tighter uppercase">3D PRODUCTION</h1>
            <div class="w-full h-[1px] bg-zinc-800 mt-4"></div>
          </div>

          <div class="grid grid-cols-3 gap-6 flex-1">

            <div class="bg-white rounded-[2rem] p-8 flex items-center relative overflow-hidden group">
              <img src="/public/images/thumb-3d.jpeg" class="h-full w-auto object-contain z-10" alt="3D Modeling" />
              <div class="absolute right-10 text-right">
                <h2 class="text-black text-6xl font-black italic leading-none">3D</h2>
                <p class="text-black text-xl font-bold uppercase tracking-tighter">Modeling</p>
              </div>
            </div>

            <div class="bg-white rounded-[2rem] p-8 flex items-center relative overflow-hidden group">
              <img src="/public/images/thumb-3d.jpeg" class="h-full w-auto object-contain z-10" alt="3D Animation" />
              <div class="absolute right-10 text-right">
                <h2 class="text-black text-6xl font-black italic leading-none">3D</h2>
                <p class="text-black text-xl font-bold uppercase tracking-tighter">Animation</p>
              </div>
            </div>

            <div class="bg-white rounded-[2rem] p-8 flex items-center relative overflow-hidden group">
              <img src="/public/images/thumb-3d.jpeg" class="h-full w-auto object-contain z-10" alt="LRC" />
              <div class="absolute right-10 text-right">
                <h2 class="text-black text-7xl font-black italic leading-none">LRC</h2>
              </div>
            </div>

          </div>

        </TileBase>
      </div>

    </div>
  </main>
</template>