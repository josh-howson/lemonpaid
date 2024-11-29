<script lang="ts" setup>
import { registerServiceWorker } from './utilities/service-worker';

registerServiceWorker();
</script>

<template>
  <NuxtRouteAnnouncer />

  <NuxtPage />
</template>
