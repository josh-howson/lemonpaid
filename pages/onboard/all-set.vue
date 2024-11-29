<script lang="ts" setup>
import '@khmyznikov/pwa-install';

const pwaInstall = ref<HTMLElement | null>(null);

const handleInstall = () => {
  if (pwaInstall.value) {
    (pwaInstall.value as any).showDialog();
  }
};
</script>

<template>
  <OnboardStep
    title="You’re all set!"
    message="Little boosts of positivity will start rolling in. Get ready to change your attitude and outlook about being a working professional!"
  >

    <button @click="handleInstall" class="button-primary">Install</button>
    <pwa-install
      ref="pwaInstall"
      manual-apple="true"
      manual-chrome="true"
    ></pwa-install>
    <template #bottom>
      <NuxtLink to="/" class="button-primary">Continue</NuxtLink>
    </template>
  </OnboardStep>
</template>
