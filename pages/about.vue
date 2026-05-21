<template>
  <main class="h-screen w-full bg-black p-4 md:p-6 overflow-hidden font-sans text-white">
    <div class="grid grid-cols-12 grid-rows-6 gap-3 h-full max-w-[1600px] mx-auto">

      <NuxtLink to="/" class="col-start-1 row-start-1 col-span-2 row-span-1">
        <TileBase class="bg-chiyo-neon flex items-center justify-center p-2">
          <img src="/images/FireflyIcon.png" class="w-full h-auto" alt="Logo CHIYO" />
        </TileBase>
      </NuxtLink>

      <div class="col-start-1 row-start-2 col-span-6 row-span-5">
        <TileBase class="bg-[#111] p-8 flex flex-col h-full">
          <div class="mb-8">
            <h1 class="text-4xl font-black italic mb-4 tracking-tighter uppercase">ABOUT</h1>
            <div class="space-y-4 text-zinc-300 text-[13px] leading-relaxed max-w-[95%]">
              <p>CHIYO Creative started as a space for creative collaboration — not just to produce visuals, but to build a process that feels human, thoughtful, and welcoming.</p>
              <p>Our work is rooted in education, empathy, and social impact.</p>
              <p>We believe good visuals are not only seen, but <i>felt</i> — shaped by story, intention, and the people behind them.</p>
            </div>
          </div>

          <div class="mt-2 pt-6 border-t border-zinc-800">
            <h2 class="text-3xl font-black italic mb-4 tracking-tighter uppercase">HOW WE WORK</h2>
            <ul class="space-y-2 text-zinc-300 text-[12px] leading-tight">
              <li>- We value clear communication and mutual respect</li>
              <li>- We approach projects through narrative and emotional tone</li>
              <li>- We create a working environment that feels safe, open, and collaborative without losing structure and professionalism</li>
            </ul>
            <p class="mt-4 text-zinc-400 text-[11px] leading-normal italic">
              CHIYO is open to working with individuals, studios, and organizations who value meaningful storytelling and a healthy creative process.
            </p>
          </div>
        </TileBase>
      </div>

      <div class="col-start-7 row-start-2 col-span-6 row-span-5">
        <TileBase class="bg-[#111] p-8 flex flex-col h-full">
          <h2 class="text-3xl font-black italic mb-6 tracking-tighter uppercase">OUR PARTNER</h2>

          <div class="grid grid-cols-5 grid-rows-2 gap-3 mb-8">
            <div v-for="i in 10" :key="i" class="aspect-video bg-zinc-900/50 rounded-lg flex items-center justify-center p-3 border border-zinc-800/50">
              <img src="/images/FireflyIcon.png" class="max-w-full max-h-full object-contain grayscale opacity-30" />
            </div>
          </div>

          <div class="flex-1 space-y-4">
            <p class="text-zinc-300 text-[13px] leading-relaxed">
              We collaborate across creative and commercial projects, working with partners who value clear ideas and thoughtful storytelling.
            </p>

            <div class="space-y-3">
              <p class="text-zinc-300 text-[12px] italic uppercase font-bold tracking-tight">Our experience includes:</p>
              <ul class="space-y-2 text-zinc-400 text-[11px] leading-snug">
                <li>• Working on <b>local television series</b> and <b>international OTT series</b>.</li>
                <li>• <b>Collaborating with government programs</b>, including animated and illustrated content for passport services, tourism promotion, and public service campaigns.</li>
                <li>• Creating <b>animated visuals</b> and <b>music videos</b> in collaboration with local bands.</li>
                <li>• Illustrating <b>children's books</b> and <b>narrative projects</b> for independent authors and indie publishers, both locally and internationally.</li>
              </ul>
            </div>
          </div>

          <p class="mt-auto pt-4 text-zinc-500 italic text-[11px]">
            Each collaboration is approached as a shared creative process, grounded in empathy and clarity.
          </p>
        </TileBase>
      </div>

    </div>
  </main>
</template>