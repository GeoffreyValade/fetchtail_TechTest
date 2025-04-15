export function getIngredients(cocktail) {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (!ingredient) {
      break;
    } else {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : null,
      });
    }
  }
  return ingredients;
}
