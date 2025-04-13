<script setup>
import CocktailCard from "./CocktailCard.vue";

const props = defineProps({
  cocktails: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="cocktail-space">
    <CocktailCard
      v-for="cocktail in cocktails"
      :key="cocktail.idDrink"
      :cocktail="cocktail"
    />
  </div>
</template>

<style scoped>
.cocktail-space {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr; /* On pense à la réutilisation du code, on met une grid tout de suite */
}
</style>
