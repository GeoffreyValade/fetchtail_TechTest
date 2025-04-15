<script setup>
import { useCocktails } from "./composables/useCocktails";
import CocktailSpace from "./components/CocktailSpace.vue";
import Bubble from "./components/Bubble.vue";

const { cocktails, isLoading, getSomeCocktails } = useCocktails();
</script>

<template>
  <div>
    <div class="main-container">
      <h1>Three drinks for zero regret !</h1>

      <CocktailSpace :cocktails="cocktails" />

      <button
        @click="getSomeCocktails(3)"
        :disabled="isLoading"
        :class="{ loading: isLoading }"
      >
        {{ isLoading ? "Loading" : "Another round !" }}
      </button>
    </div>
    <div class="bubbles">
      <Bubble v-for="n in 30" :key="n" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 0;
  font-size: 5em;
  font-family: "Lobster", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 50px;
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
