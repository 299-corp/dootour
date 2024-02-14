
export const useLocations = defineStore('locations', () => {
  const { coords } = useGeolocation()

  /**
   * ! Pinia State !
   *
   * @param latitude 위도
   * @param longitude 경도
   *
   */

  const latitude = computed(() => {
    return coords.value.latitude
  })
  const longitude = computed(() => {
    return coords.value.longitude
  })

  /**
   * ! Pinia Actions !
   */

  return {
    latitude,
    longitude
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
