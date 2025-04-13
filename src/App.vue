<script setup>
import { ref } from "vue";
import CocktailSpace from "./components/CocktailSpace.vue";

const cocktails = ref([]);
const isLoading = ref(false);

const fetchCocktail = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const newCocktail = data.drinks[0];

    const exists = cocktails.value.some(
      (cocktail) => cocktail.idDrink === newCocktail.idDrink
    );

    if (!exists) {
      cocktails.value.push(newCocktail);
    } else {
      console.log("Cocktail déjà présent, on ne l’ajoute pas.");
      fetchCocktail();
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du cocktail :", error);
  }
};

const getNumberOfCocktail = async (nbr) => {
  isLoading.value = true;
  console.log("Chargement des cocktails...");
  for (let i = 0; i < nbr; i++) {
    await fetchCocktail();
  }
  isLoading.value = false;
  console.log("Tous les cocktails ont été ajoutés !");
};
</script>

<template>
  <div>
    <h1>Liste de Cocktails</h1>
    <button
      @click="getNumberOfCocktail(3)"
      :disabled="isLoading"
      :class="{ loading: isLoading }"
    >
      {{ isLoading ? "Chargement" : "Sortir un cocktail !" }}
    </button>
    <div class="cocktail-list">
      <CocktailSpace :cocktails="cocktails" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.cocktail-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #35495e;
}
button.loading {
  background-color: #ccc;
  cursor: wait;
}
</style>
