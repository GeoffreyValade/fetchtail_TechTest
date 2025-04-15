# Fetchtail

Relations composants :

\App.vue
| \Bubble
| \CocktailSpace
| | \CocktailCard
| | \CocktailModal

Avertissements :
a. En l'état, la fonction getSomeCocktails ne comporte quasiment aucun risque. Avec plus d'éléments à afficher, un risque de boucle infinie est à prendre en compte.
=> Une boucle while tourne tant que le nombre de cocktails n'a pas été ajouté au tableau. Or, les cocktails récupérés avec l'API sont aléatoires. Donc, plus nous avons d'éléments dans le tableau, plus il y a de chances de retomber consécutivement sur un cocktail déjà présent dans le tableau.
