<script lang="ts" setup>
const notificationCount = ref(5);

const handleNotificationCountInput = (e: Event) => {
  if (e.target)
    notificationCount.value = Number((e.target as HTMLInputElement).value);
}
</script>

<template>
  <OnboardStep
    title="Next, let’s setup your daily reminders"
    message="Small doses of earning motivation can make a big difference in your work and personal life."
    tone="yellow"
  >
    <div class="input-wrap">
      <label for="start">Start at</label>

      <select id="start" name="start">
        <option>9:00 AM</option>
      </select>
    </div>
    
    <div class="input-wrap">
      <label for="end">End at</label>

      <select id="end" name="end">
        <option>10:00 PM</option>
      </select>
    </div>

    <div class="how-many">
      <div class="flex justify-between">
        <div class="flex-1-1-0 font-medium">How many</div>

        <div class="flex-0-0-auto">{{notificationCount}}x</div>
      </div>

       <InputSlider
        :min="0"
        :max="10"
        :value="notificationCount"
        @input="handleNotificationCountInput"
      />

      <div class="flex justify-between">
        <div class="flex-1-1-0">1</div>

        <div class="flex-0-0-auto">10</div>
      </div>
    </div>

    <div class="input-wrap">
      <label for="sound">Sound</label>

      <select id="sound" name="Sound">
        <option>Positive</option>
      </select>
    </div>
    
    <template #bottom>
      <NuxtLink to="/all-set" class="button-primary">Continue</NuxtLink>
    </template>
  </OnboardStep>
</template>
