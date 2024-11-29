<template>
  <main class="flex column">
    <div class="hero flex column">
      <slot name="hero"></slot>
    </div>

    <div class="message flex column gap-2">
      <slot name="message"></slot>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
}
.hero {
  flex: 1 1 0;
  height: 0;
  max-height: 55svh;
  margin-top: calc(env(safe-area-inset-top, 0) * -1);
}
.message {
  flex: 0 0 auto;
  margin-top: auto;
  padding-block: var(--gutter-y);
  padding-inline: var(--gutter-x);
}
</style>
