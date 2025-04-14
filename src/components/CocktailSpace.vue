<script setup>
import CocktailCard from "./CocktailCard.vue";

const props = defineProps({
  cocktails: {
    type: Array,
    required: true,
  },
});
//useless comment
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
  grid-template-columns: 1fr 1fr 1fr; /* => Réutilisation du code, une grid présentera mieux si + d'éléments */
  width: 100%;
  min-height: 300px;
}
</style>
