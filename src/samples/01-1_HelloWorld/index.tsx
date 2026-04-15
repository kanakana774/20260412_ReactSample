import { useState } from "react";

export default function Sample() {
  // State定義
  const [choice, setChoice] = useState<string>("");

  type FavoriteAnimal = {
    name: string;
    value: string;
  };

  const animals: FavoriteAnimal[] = [
    { name: "イヌ", value: "dog" },
    { name: "ネコ", value: "cat" },
    { name: "ハムスター", value: "hamster" },
  ];

  return (
    <div>
      <p>あなたの好きな動物：{choice}</p>
      <div>
        {animals.map((animal) => (
          <label key={animal.value}>
            <input
              type="radio"
              name="animal"
              value={animal.value}
              checked={choice.includes(animal.value)}
              onChange={(e) => setChoice(e.target.value)}
            />
            <label>{animal.name}</label>
          </label>
        ))}
      </div>
    </div>
  );
}
