<template>
  <OnboardStep
    title="When were you hired?"
    message="We’ll remind you about work anniversaries and celebrate with you."
  >
    <input class="text-input" type="text" name="date" placeholder="Hire date">
    
    <template #bottom>
      <NuxtLink to="/onboard/reminders" class="button-primary">Continue</NuxtLink>

      <NuxtLink to="/onboard/reminders" class="button-lame">Skip for now</NuxtLink>
    </template>
  </OnboardStep>
</template>
