<script setup>
const props = defineProps({
  cocktails: Array,
});
//useless comment
</script>

<template>
  <div>
    <div v-for="cocktail in cocktails" :key="cocktail.idDrink">
      <div>
        <h3>{{ cocktail.strDrink }}</h3>
        <img :src="cocktail.strDrinkThumb + '/small'" alt="Cocktail Image" />
        <p>{{ cocktail.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>
