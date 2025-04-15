<script setup>
const getBubbleStyle = () => {
  const size = Math.random() * 6 + 5;
  const colors = ["#ffffff33", "#ffe4e133", "#ccf3e033", "#ffd1dc33"];

  return {
    left: Math.random() * 100 + "vw",
    animationDelay: Math.random() * 10 + "s",
    AnimationTimingFunction: "linear",
    width: size + "px",
    height: size + "px",
    background: colors[Math.floor(Math.random() * colors.length)],
  };
};
</script>

<template>
  <div class="bubble" :style="getBubbleStyle()"></div>
</template>

<style scoped>
.bubble {
  position: fixed;
  bottom: -15px;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: floatUp 3s linear infinite;
  z-index: 0;
  pointer-events: none;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) translateX(0) scale(0.8);
    opacity: 1;
  }
  25% {
    transform: translateY(-5vh) translateX(-3px) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-10vh) translateX(0px) scale(0.8);
    opacity: 1;
  }
  75% {
    transform: translateY(-15vh) translateX(3px) scale(0.2);
    opacity: 1;
  }
  100% {
    transform: translateY(-20vh) translateX(0px) scale(0.8);
    opacity: 0.6;
  }
}
</style>
