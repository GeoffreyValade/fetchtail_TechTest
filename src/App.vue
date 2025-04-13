<script setup>
import { ref } from "vue";
import { useCocktails } from "./composables/useCocktails";
import CocktailSpace from "./components/CocktailSpace.vue";
import Bubble from "./components/Bubble.vue";

const { cocktails, isLoading, getSomeCocktails } = useCocktails();
</script>

<template>
  <div>
    <Bubble v-for="n in 30" :key="n" />

    <h1>Three drinks for zero regrets !</h1>

    <div class="cocktail-list">
      <CocktailSpace :cocktails="cocktails" />
    </div>
    <button
      @click="getSomeCocktails(3)"
      :disabled="isLoading"
      :class="{ loading: isLoading }"
    >
      {{ isLoading ? "Loading" : "Another round !" }}
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.cocktail-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1;
  position: relative;
}
button:hover {
  background-color: #35495e;
}
button.loading {
  background-color: #ccc;
  cursor: wait;
}
</style>
