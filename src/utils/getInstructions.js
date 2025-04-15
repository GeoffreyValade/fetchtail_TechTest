export function getInstructions(cocktail) {
  const instructions = [];
  const instruction = cocktail.strInstructions;

  const instructionParts = instruction.split(".");
  for (let i = 0; i < instructionParts.length; i++) {
    const part = instructionParts[i].trim();
    if (part) {
      instructions.push(i + 1 + ". " + part);
    }
  }
  return instructions;
}
