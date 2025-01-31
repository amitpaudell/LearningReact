export default function Child({ executeOperation }) {
  return (
    <>
      <p>Hello</p>
      <button onClick={executeOperation}>Click me</button>
    </>
  );
}
