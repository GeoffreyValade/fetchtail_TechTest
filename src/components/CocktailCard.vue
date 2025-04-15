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
.card {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  cursor: pointer;
}

.card:hover h3 {
  color: #e4fffd;
  text-shadow: 0 0 5px rgba(98, 209, 200, 0.658);
}

.image-wrapper {
  position: relative;
  height: 200px;
  width: 200px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.cocktail-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.card:hover .image-wrapper {
  transform: scale(1.04);
}

.loader {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #666;
  font-style: italic;
}

h3 {
  display: flex;
  height: 2.4em;
  margin: 0 0 0.4em 0;
  width: 100%;
  font-size: 40px;
  font-family: "Caveat Brush", cursive;
  font-weight: 400;
  font-style: normal;
  min-height: 2.4em;
  align-items: center;
  justify-content: center;
  transition: text-shadow 0.3s ease, color 0.3s ease;
}
</style>
