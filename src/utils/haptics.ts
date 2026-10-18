// Haptic & Sound Feedback Helper for Web and Mobile/Capacitor

export const triggerHaptic = (type: 'light' | 'medium' | 'success' | 'warning' = 'light') => {
  // If running in Capacitor or mobile browser with vibration API
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    try {
      if (type === 'light') {
        navigator.vibrate(12);
      } else if (type === 'medium') {
        navigator.vibrate(25);
      } else if (type === 'success') {
        navigator.vibrate([15, 40, 25]);
      } else if (type === 'warning') {
        navigator.vibrate([30, 60, 40]);
      }
    } catch {
      // Ignore vibration errors
    }
  }

  // Audio subtle click fallback using Web Audio API
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      if (type === 'success') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08); // A5
      } else {
        osc.frequency.setValueAtTime(type === 'light' ? 600 : 440, ctx.currentTime);
      }
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    }
  } catch {
    // Ignore audio error
  }
};
