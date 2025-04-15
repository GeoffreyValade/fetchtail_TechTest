import { describe, it, expect } from "vitest";
import { useCocktails } from "../utils/useCocktails";

describe("useCocktails", () => {
  it("returns and keep the exact number of cocktails when getSomeCocktails(x) is called", async () => {
    const { cocktails, getSomeCocktails } = useCocktails();

    await getSomeCocktails(3);

    expect(cocktails.value.length).toBe(3);
  });
});
