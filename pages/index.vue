<template>
  <LazyNaverMaps
    style="width: 100%; height: 100%;"
    :latitude="latitude"
    :longitude="longitude"
  />
</template>

<script setup lang="ts">

const { latitude, longitude } = storeToRefs(useLocations())

</script>
