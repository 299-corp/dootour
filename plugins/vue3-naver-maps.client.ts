import { createNaverMap } from 'vue3-naver-maps'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createNaverMap, {
    clientId: useRuntimeConfig().public.naverClientId, // Required
    category: 'ncp', // Optional
    subModules: ['geocoder'] // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  })
})
