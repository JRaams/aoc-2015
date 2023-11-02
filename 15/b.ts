const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);
const regex =
  /^(\w+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)$/;

type Ingredient = {
  name: string;
  capacity: number;
  durability: number;
  flavor: number;
  texture: number;
  calories: number;
};

type Recipe = {
  ingredient: Ingredient;
  amount: number;
};

function parse(input: string[]): Ingredient[] {
  const ingredients: Ingredient[] = [];

  input.forEach((line) => {
    const [_, name, capacity, durability, flavor, texture, calories] = line
      .match(regex)!;
    ingredients.push({
      name,
      capacity: Number(capacity),
      durability: Number(durability),
      flavor: Number(flavor),
      texture: Number(texture),
      calories: Number(calories),
    });
  });

  return ingredients;
}

function calculateScore(recipe: Recipe[]): number {
  let capacity = 0;
  let durability = 0;
  let flavor = 0;
  let texture = 0;

  recipe.forEach((r) => {
    capacity += r.amount * r.ingredient.capacity;
    durability += r.amount * r.ingredient.durability;
    flavor += r.amount * r.ingredient.flavor;
    texture += r.amount * r.ingredient.texture;
  });

  return Math.max(capacity, 0) * Math.max(durability, 0) * Math.max(flavor, 0) *
    Math.max(texture, 0);
}

function solve(input: string[]): number {
  const ingredients = parse(input);

  let maxScore = 0;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100 - i; j++) {
      for (let k = 0; k < 100 - i - j; k++) {
        const l = 100 - i - j - k;

        const calories = ingredients[0].calories * i +
          ingredients[1].calories * j +
          ingredients[2].calories * k +
          ingredients[3].calories * l;
        if (calories !== 500) continue;

        const score = calculateScore([
          { ingredient: ingredients[0], amount: i },
          { ingredient: ingredients[1], amount: j },
          { ingredient: ingredients[2], amount: k },
          { ingredient: ingredients[3], amount: l },
        ]);

        maxScore = Math.max(maxScore, score);
      }
    }
  }

  return maxScore;
}

console.info(solve(input));
