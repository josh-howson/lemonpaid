<script lang="ts" setup>
type Props = {
  title: string;
  message: string;
  tone?: "blue" | "green" | "yellow";
};

withDefaults(defineProps<Props>(), {
  tone: "blue",
});
</script>

<template>
  <main class="relative flex column gap-2">
    <img class="grain absolute bottom left right object-cover w-full" :src="`/images/onboard/bg-grain-${tone}.png`" alt=""/>

    <h1 class="headline-1 text-center">{{ title }}</h1>

    <p class="text-center">{{ message }}</p>

    <slot></slot>

    <div class="bottom flex column gap-1 align-center">
      <slot name="bottom"></slot>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-block: var(--gutter-y);
  padding-inline: var(--gutter-x);
  height: 100%;
}
.grain {
  min-height: 300px;
  max-height: 50svh;
  z-index: -1;
}
.bottom {
  margin-block-start: auto;
}
</style>
