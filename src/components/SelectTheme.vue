<script setup>
import { ref, watch } from "vue";

const selectedTheme = ref("mojito");

const themes = [
  { name: "mojito", color: "#80cfa9" },
  { name: "tequila", color: "#ff5e3a" },
  { name: "lagoon", color: "#3dbde4" },
  { name: "colada", color: "#fceabb" },
  { name: "daiquiri", color: "#f67bbf" },
];

watch(selectedTheme, (newTheme) => {
  document.body.className = "";
  document.body.classList.add(`theme-${newTheme}`);
});
</script>

<template>
  <div class="theme-selector">
    <button
      v-for="theme in themes"
      :key="theme.name"
      :style="{ backgroundColor: theme.color }"
      :class="{ active: selectedTheme === theme.name }"
      @click="selectedTheme = theme.name"
      class="theme-button"
    ></button>
  </div>
</template>

<style scoped>
.theme-selector {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1em;
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1em;
}

.theme-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
}

.theme-button:hover {
  transform: scale(1.2);
}

.theme-button.active {
  border-color: white;
  transform: scale(1.2);
}
</style>
