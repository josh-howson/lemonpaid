export type VibrationDuration = 'short' | 'medium' | 'long';

export default function useVibration() {
  const durations: Record<VibrationDuration, number> = {
    short: 100,
    medium: 300,
    long: 600,
  };

  const vibrate = (duration: VibrationDuration) => {
    if (navigator.vibrate) {
      navigator.vibrate(durations[duration]);
    } else {
      console.warn('Vibration API is not supported on this device.');
    }
  };

  return {
    vibrate,
  };
}
