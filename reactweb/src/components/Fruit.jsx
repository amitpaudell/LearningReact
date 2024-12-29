export default function Fruit({ name, price, emoji, sold }) {
  return (
    <>
      <li>
        {name} ${price} {emoji} {sold ? "Soldout" : "Available"}
      </li>
    </>
  );
}
