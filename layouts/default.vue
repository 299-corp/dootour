<template>
  <div style="width: 100dvw; height: 100dvh;">
    <div class="default-header">
      <UContainer class="flex flex-row justify-start item-center h-16 gap-5">
        <nuxt-img
          src="../public/dooTour.svg"
          :width="200"
          height="auto"
          format="svg"
          loading="lazy"
          aria-label="Logo"
        />
        <div class="flex-auto" />
        <LazyColorSwitch />
        <AButton
          custom-class="self-center"
          use-icon
          icon-name="line-md:close-to-menu-transition"
          :button-color="colorMode.value === 'dark' ? 'rose' : 'violet'"
          button-variant="soft"
          button-label="Menu"
        />
      </UContainer>
    </div>
    <slot />
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'

const colorMode = useColorMode()

</script>
