<template>
  <main
    class="h-screen w-full bg-black p-4 md:p-6 overflow-hidden font-sans text-white"
  >
    <div
      class="grid grid-cols-12 grid-rows-6 gap-3 h-full max-w-[1600px] mx-auto"
    >
      <NuxtLink to="/" class="col-start-1 row-start-1 col-span-2 row-span-1">
        <TileBase class="bg-chiyo-neon flex items-center justify-center p-2">
          <img
            src="/images/FireflyIcon.png"
            class="w-full h-auto"
            alt="Logo CHIYO"
          />
        </TileBase>
      </NuxtLink>

      <div class="col-start-1 row-start-2 col-span-12 row-span-5">
        <TileBase
          class="bg-[#111] p-8 flex flex-col h-full border border-white/20 rounded-[2.5rem]"
        >
          <div class="mb-6">
            <h1
              class="text-4xl font-black italic tracking-tighter uppercase mb-1"
            >
              TEAM
            </h1>
            <p class="text-zinc-400 text-sm italic">
              We don't just make things look good. We make sure they mean
              something.
            </p>
            <div class="w-full h-[1px] bg-white/10 mt-4"></div>
          </div>

          <div
            class="grid grid-cols-6 gap-4 flex-1 overflow-y-auto custom-scrollbar pr-2"
          >
            <div
              v-for="member in team"
              :key="member.name"
              class="border border-white/80 rounded-[2rem] p-5 flex flex-col items-center justify-center text-center bg-black/20 hover:bg-white/5 transition-colors"
            >
              <div
                class="w-32 h-32 rounded-full bg-white mb-4 flex items-center justify-center overflow-hidden"
              >
                <img
                  :src="member.image"
                  class="w-full h-full object-cover"
                  :alt="member.name"
                />
              </div>

              <h3
                class="text-[11px] font-black uppercase tracking-tight leading-tight mb-1 text-white"
              >
                {{ member.name }}
              </h3>
              <p
                class="text-[9px] text-zinc-500 uppercase font-bold tracking-widest"
              >
                {{ member.role }}
              </p>
            </div>
          </div>
        </TileBase>
      </div>
    </div>
  </main>
</template>

<script setup>
const team = [
  {
    name: "Liling Sampurna",
    role: "Director",
    image: "/images/FireflyIcon.png",
  },
  {
    name: "Dani Hendrawan",
    role: "Creative Director",
    image: "/images/FireflyIcon.png",
  },
  {
    name: "Brian Apredo A.",
    role: "Writer/ Storyboard Artist",
    image: "/images/FireflyIcon.png",
  },
  {
    name: "Basyasyah Dhiwa",
    role: "Illustrator",
    image: "/images/FireflyIcon.png",
  },
  {
    name: "M. Daryl Saputra",
    role: "Lead 3D animator",
    image: "/images/FireflyIcon.png",
  },
  {
    name: "Kumari Zidni",
    role: "3D animator",
    image: "/images/FireflyIcon.png",
  },
  { name: "Anisa May", role: "3D animator", image: "/images/FireflyIcon.png" },
  {
    name: "Diandrina Ariska",
    role: "3D animator",
    image: "/images/FireflyIcon.png",
  },
  { name: "Andin", role: "3D animator", image: "/images/FireflyIcon.png" },
  {
    name: "Fathul Falah",
    role: "3D Modeler",
    image: "/images/FireflyIcon.png",
  },
  {
    name: "Kusuma Wardhana",
    role: "3D tech artist",
    image: "/images/FireflyIcon.png",
  },
  { name: "siapa ya", role: "apa ya", image: "/images/FireflyIcon.png" },
];
</script>
