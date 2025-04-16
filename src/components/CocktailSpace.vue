<script setup>
import CocktailCard from "./CocktailCard.vue";
import { ref } from "vue";
import Modal from "./Modal.vue";

const props = defineProps({
  cocktails: {
    type: Array,
    required: true,
  },
});

const selectedCocktail = ref(null);
const isModalVisible = ref(false);

function showModal(cocktail) {
  selectedCocktail.value = cocktail;
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
  selectedCocktail.value = null;
}
</script>

<template>
  <div class="cocktail-space">
    <CocktailCard
      v-for="cocktail in cocktails"
      :key="cocktail.idDrink"
      :cocktail="cocktail"
      @click="showModal(cocktail)"
    />

    <Modal
      v-if="isModalVisible"
      @close="closeModal"
      :selectedCocktail="selectedCocktail"
    />
  </div>
</template>

<style scoped>
.cocktail-space {
  display: grid; /* => Réutilisation du code, une grid présentera mieux si + d'éléments */
  grid-template-columns: repeat(3, min-content);
  width: 100%;
  min-height: 405px;
  justify-content: space-evenly;
}
</style>
