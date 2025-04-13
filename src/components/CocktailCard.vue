<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <h3>{{ cocktail.strDrink }}</h3>

    <img
      :src="cocktail.strDrinkThumb + '/small'"
      alt="Cocktail Image"
      class="cocktail-image"
    />

    <p>{{ cocktail.strInstructions }}</p>
  </div>
</template>
