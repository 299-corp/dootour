<template>
  <naver-map
    class="naver-map"
    :map-options="mapOptions"
    @click="clickMap"
    @on-load="loadMap"
  >
    <!-- <naver-marker
      :latitude="latitude"
      :longitude="longitude"
      @on-load="loadMarker"
      @click="clickMarker"
    /> -->
    <naver-marker
      v-for="(markerData, index) in markers"
      :key="index"
      :latitude="markerData.latitude"
      :longitude="markerData.longitude"
      @on-load="loadMarker"
      @click="clickMarker"
    />
    <naver-info-window
      :marker="marker"
      :open="infoWindowTrigger"
      :options="infoWindowOption"
      @on-load="loadInfoWindow"
      @click="clickInfoWindow"
    >
      <div class="info-window-component">
        {{ markerAddress?.roadAddress ? $t('naverMaps.address', { address: markerAddress.roadAddress }) : $t('naverMaps.address', { address: markerAddress?.jibunAddress }) }}
      </div>
    </naver-info-window>
  </naver-map>
</template>

<script setup lang="ts">
import { NaverMap, NaverMarker, NaverInfoWindow } from 'vue3-naver-maps'

const mapOfDom = ref()
const marker = ref()
const infoWindow = ref()
const infoWindowTrigger = ref(false)

const props = withDefaults(
  defineProps<{
    latitude?: number,
    longitude?: number
  }>(),
  {
    latitude: 0,
    longitude: 0
  }
)

const emits = defineEmits([
  'update:address'
])

const markerLatitude = ref(0)
const markerLongitude = ref(0)
const markerAddress = ref<NaverResAddr>()

const markers = ref([
  { latitude: 37.5665, longitude: 126.9780 }, // 서울
  { latitude: 35.1796, longitude: 129.0756 } // 부산
  // 추가적인 마커 데이터...
])

const mapOptions = {
  zoom: 16,
  zoomControl: true,
  zoomControlOptions: {
    position: 'TOP_RIGHT',
    style: 2
  }
}

const infoWindowOption = {
  anchorSize: {
    width: 10,
    height: 8
  }
}

const loadMap = (map:any) => {
  mapOfDom.value = map
  const latLng = new window.naver.maps.LatLng(props.latitude, props.longitude)
  map.setCenter(latLng)
}

const loadMarker = (markerObject:any) => {
  marker.value = markerObject
}

const loadInfoWindow = (infoWindowObject:any) => {
  infoWindow.value = infoWindowObject
  infoWindow.value.setOptions(infoWindowOption)
}

const clickMap = (map:any) => {
  marker.value.setPosition(map.coord)
}

const clickMarker = async (markerObject:any) => {
  console.log(markerObject)
  if (!infoWindowTrigger.value) {
    markerLatitude.value = markerObject.coord.y
    markerLongitude.value = markerObject.coord.x
    await window.naver.maps.Service.reverseGeocode({
      coords: window.naver.maps.LatLng(markerObject.coord.y, markerObject.coord.x),
      orders: 'legalcode,admcode,addr,roadaddr'
    }, returnData)
  }
  infoWindowTrigger.value = !infoWindowTrigger.value
}

const returnData = (status:any, response:any) => {
  if (status !== 200) {
    return alert('잘못됨!')
  }
  markerAddress.value = response.v2.address
  emits('update:address', markerAddress.value, markerLatitude.value, markerLongitude.value)
}

const clickInfoWindow = () => {
  infoWindowTrigger.value = false
}

</script>
