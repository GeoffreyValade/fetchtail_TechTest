<script setup>
import { useCocktails } from "./utils/useCocktails";
import CocktailSpace from "./components/CocktailSpace.vue";
import Bubble from "./components/Bubble.vue";
import SelectTheme from "./components/SelectTheme.vue";

const { cocktails, isLoading, getSomeCocktails } = useCocktails();
</script>

<template>
  <div class="body-container">
    <div class="main-container">
      <SelectTheme />      
      
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
  transition: color 0.3s ease;
}

.body-container {
  background: var(--bg-color);
  color: var(--text-color);
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
}

.main-container {
  display: flex;
  width:85%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 50px;
}

button {
  background-color: var(--btn-color);
  border-radius: 10px;
  color: white;
  border: none;
  padding: 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;;
  z-index: 1;
  font-weight: 600;
  font-size: 18px;
  position: relative;
}
button:hover {
  background-color: var(--btn-hover);
}
button.loading {
  background-color: #ccc;
  cursor: wait;
}
</style>
