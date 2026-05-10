// composables/useBento.ts
export interface BentoTile {
  id: string
  type: string
  title?: string // Pakai tanda tanya agar opsional
  src?: string
  poster?: string
  url?: string
  layout: string
  bgColor?: string    // Opsional
  textColor?: string  // Opsional
  items?: any[]
}

import rawData from '@/assets/data/content.json'

export const useBento = () => {
  const tiles = ref(rawData.tiles as BentoTile[])
  return { tiles }
}