<template>
  <OnboardStepImage>
    <template #hero>
      <img class="graphic-1" src="/images/onboard/onboard-2.png" alt="">
    </template>

    <template #message>
      <h1 class="headline-1">Let’s take it one step at a time</h1>

      <p>Tell us a little bit about yourself and your salary, and then choose how you’d like to receive reminders.</p>

      <NuxtLink to="/onboard/name" class="button-primary">Continue</NuxtLink>
    </template>
  </OnboardStepImage>
</template>

<style scoped>
.graphic-1 {
  flex: 1 1 0;
  height: 0;
  width: 100%;
  object-fit: cover;
}
</style>
