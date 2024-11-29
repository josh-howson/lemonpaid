<template>
  <OnboardStep
    title="What’s your first name?"
    message="Your name will be displayed in your earning reminders."
  >
    <input class="text-input" type="text" name="name" placeholder="Name">
    
    <template #bottom>
      <NuxtLink to="/onboard/salary" class="button-primary">Continue</NuxtLink>
    </template>
  </OnboardStep>
</template>
