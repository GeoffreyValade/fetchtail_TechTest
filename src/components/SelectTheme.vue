<script setup>
import { ref, watch } from 'vue'

const selectedTheme = ref("mojito")

watch(selectedTheme, (newTheme) => {
  document.body.className = ''
  document.body.classList.add(`theme-${newTheme}`)
})
</script>

<template>
      <select v-model="selectedTheme">
        <option value="mojito">Mojito</option>
        <option value="tequila">Tequila Sunrise</option>
        <option value="lagoon">Blue Lagoon</option>
        <option value="colada">Pina Colada</option>
        <option value="daiquiri">Strawberry Daiquiri</option>
      </select>
</template>

<style scoped>
select {
  font-size: 1em;
  padding: 0.5em;
  border-radius: 8px;
  border: none;
  margin-bottom: 1em;
}
</style>
