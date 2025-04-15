// useCocktails.js
import { ref } from "vue";

export function useCocktails() {
  const cocktails = ref([]);
  const isLoading = ref(false);

  const fetchRandomCocktail = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      return data.drinks[0]; // <= L'API renvoie un tableau de boissons (même pour un seul cocktail)
    } catch (error) {
      console.error("Erreur lors de la récupération du cocktail :", error);
      return null;
    }
  };

  const getSomeCocktails = async (nbr) => {
    isLoading.value = true;
    cocktails.value = []; // <= On vide le tableau avant de le remplir, c'est ce qui permet de n'avoir toujours que 3 cocktails

    const uniqueCocktails = [];

    while (uniqueCocktails.length < nbr) {
      // Tant que le tableau n'a pas atteint la taille souhaitée ...
      const newCocktail = await fetchRandomCocktail(); // <= ... On continue à chercher des cocktails

      if (
        newCocktail && // <= Si le cocktail n'est pas null ...
        !uniqueCocktails.some((c) => c.idDrink === newCocktail.idDrink) // <= ... et qu'il n'est pas déjà dans le tableau ...
      ) {
        uniqueCocktails.push(newCocktail); // <= ... On l'ajoute au tableau
      }
    }

    cocktails.value = uniqueCocktails; // <= On met à jour le tableau ref avec les cocktails uniques
    isLoading.value = false;
  };

  getSomeCocktails(3); // <= On appelle la fonction pour récupérer 3 cocktails au démarrage

  return {
    cocktails,
    isLoading,
    getSomeCocktails,
  };
}
