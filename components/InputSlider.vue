<script lang="ts" setup>
type Emits = {
  (e: 'input', event: Event): void;
};

const emit = defineEmits<Emits>();

type Props = {
  min: number;
  max: number;
  step?: number;
  value: number
};

const props = withDefaults(defineProps<Props>(), {
  step: 1,
});

const min = 0;
const max = 10;
const step = 1;
const percentage = computed(() => ((props.value - min) / (max - min)) * 100)
const { vibrate } = useVibration();

const handleInput = (e: Event) => {
  emit('input', e);
  vibrate('short');
}
</script>

<template>
  <div class="slider-container">
    <div class="dots">
      <div
        :class="[
          'dot',
          value === dot && 'active',
          value < dot && 'above',
        ]"
        v-for="dot in Array.from({ length: max - min - 1 }, (_, i) => min + 1 + i)"
      />
    </div>

    <input
      type="range"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      @input="handleInput"
      class="slider"
      :style="{'--percentage': `${percentage}%`}"
    />
  </div>
</template>

<style scoped lang="scss">
.slider-container {
  --track-height: 1.6rem;
  --height: calc(var(--track-height) + 2.8rem);
  width: 100%;
  position: relative;
  height: var(--height);
  display: flex;
  align-items: center;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: var(--track-height);
  background: linear-gradient(
    to right,
    var(--on-surface) var(--percentage),
    #E6E6DF var(--percentage)
  );
  border-radius: 999rem;
  outline: none;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

@mixin thumb {
  height: var(--height);
  width: .4rem;
  background: #122640;
  border-radius: 999rem;
  cursor: pointer;
  outline: .6rem solid var(--surface);
  border: none;
}

/* Thumb Styling */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  @include thumb;
}

/* Firefox */
.slider::-moz-range-thumb {
  @include thumb;
  overflow: hidden;
}

.dots {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  height: 1.9rem;
  align-items: center;
  padding: 0 9.7%;
  pointer-events: none;
  .dot {
    height: .4rem;
    width: .4rem;
    border-radius: 999rem;
    background-color: var(--surface);
    &.active {
      visibility: hidden;
    }
    &.above {
      background: var(--on-surface);
    }
  }
}

</style>
