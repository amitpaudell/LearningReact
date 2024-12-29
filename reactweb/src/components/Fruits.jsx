import Fruit from "./Fruit.jsx";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldOut: true },
    { name: "Banana", price: 7, emoji: "🍌", soldOut: false },
    { name: "Mango", price: 4, emoji: "🥭", soldOut: false },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} sold={fruit.soldOut} />
        ))}
      </ul>
    </>
  );
}
