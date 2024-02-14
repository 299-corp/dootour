<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator
        color="repeating-linear-gradient(to right,#bdbdbd 0%,#cb8a80 100%)"
        :height="5"
      />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const { t } = useLocale()

useHead({
  titleTemplate: (title:string | undefined) => {
    let returnTitle = null
    title && !title?.includes(t('pageTitle.dootour').concat(' | '))
      ? returnTitle = t('pageTitle.dootour').concat(' | ', title)
      : returnTitle = null
    return returnTitle
  }
})

</script>
