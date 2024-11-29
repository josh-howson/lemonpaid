<template>
  <OnboardingStep>
    <template #hero>
      <img class="graphic-1 slide-in-from-left" src="/images/onboarding/onboard-1-1.png" alt="">

      <img class="graphic-2 slide-in-from-right" :style="{ '--delay': '1.5s' }" src="/images/onboarding/onboard-1-2.png" alt="">
    </template>
    <template #message>
      <h1 class="headline-1">Bring back the joy of earning</h1>

      <p>Earning a living is noble and exciting. Encourage positive thoughts about your working lifestyle with daily creative reminders about how much money you’re making.</p>

      <button class="button-primary">Continue</button>
    </template>
  </OnboardingStep>
</template>

<style scoped>
.graphic-1 {
  object-position: bottom center;
}
.graphic-2 {
  object-position: top center;
}
.graphic-1,
.graphic-2 {
  flex: 1 1 0;
  height: 0;
  width: 100%;
  object-fit: cover;
}
</style>