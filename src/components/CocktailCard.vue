<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});

const isImageLoading = ref(true);
const onImageLoad = () => {
  isImageLoading.value = false;
};
</script>

<template>
  <div class="card">
    <h3>{{ cocktail.strDrink }}</h3>

    <div class="image-wrapper">
      <div v-if="isImageLoading" class="loader">Loading...</div>

      <img
        v-show="!isImageLoading"
        :src="cocktail.strDrinkThumb + '/small'"
        @load="onImageLoad"
        alt="Cocktail Image"
        class="cocktail-image"
      />
    </div>

    <p>{{ cocktail.strInstructions }}</p>
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
