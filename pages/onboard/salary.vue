<template>
  <OnboardStep
    title="What is your annual salary?"
    message="You can change this anytime. We’ll use this to send you accurate reminders about pay."
    tone="green"
  >
    <input class="text-input" type="text" name="salary" placeholder="Annual salary">
    
    <template #bottom>
      <NuxtLink to="/onboard/hire-date" class="button-primary">Continue</NuxtLink>
    </template>
  </OnboardStep>
</template>
