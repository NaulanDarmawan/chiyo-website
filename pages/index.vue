<template>
  <main class="h-screen w-full bg-black p-4 md:p-6 overflow-hidden">
    <div
      class="grid grid-cols-12 grid-rows-6 gap-3 h-full w-full max-w-[1600px] mx-auto"
    >
      <component
        :is="getComponent(tile.type)"
        v-for="tile in tiles"
        :key="tile.id"
        :tile="tile"
        :class="tile.layout"
        @click="handleTileClick(tile)"
      />
    </div>
  </main>
</template>

<script setup>
const { tiles } = useBento();

const getComponent = (type) => {
  if (type?.startsWith("video")) return resolveComponent("TileVideo");
  if (type === "showcase") return resolveComponent("TileShowcase");
  if (["brand", "action", "overlay"].includes(type))
    return resolveComponent("TileAction");
  return resolveComponent("TileBase");
};

const router = useRouter();

const handleTileClick = (tile) => {
  if (tile.id === "2") {
    router.push("/about");
  } else if (tile.id === "4") {
    // ID untuk TEAM di content.json
    router.push("/team");
  } else if (tile.id === "8") {
    // ID untuk 3D Animation Prod.
    router.push("/3d-production");
  }
  if (tile.id === "9") {
    // ID untuk 3D Asset Store
    router.push("/3d-asset-store");
  }
};
</script>
