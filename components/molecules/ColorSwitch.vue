<template>
  <AButton
    custom-class="self-center"
    use-icon
    :icon-name="isDark ? 'line-md:moon-filled-loop' : 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'"
    :button-color="isDark ? 'rose' : 'violet'"
    button-variant="outline"
    button-label="Theme"
    @click:button="isDark = !isDark"
  />
</template>

<script setup lang="ts">

const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>
