<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});

const isImageLoading = ref(true);

watch(
  () => props.cocktail,
  () => {
    isImageLoading.value = true;
  }
);
</script>

<template>
  <div class="card">
    <h3>{{ cocktail.strDrink }}</h3>

    <div class="image-wrapper">
      <div v-if="isImageLoading" class="loader">Loading...</div>

      <img
        :src="cocktail.strDrinkThumb + '/small'"
        alt="Cocktail Image"
        class="cocktail-image"
        @load="isImageLoading = false"
      />
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  height: 200px;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  height: 200px;
  width: 200px;
  color: #666;
  font-style: italic;
}
</style>
