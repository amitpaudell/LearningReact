export default function ConditionalComponent() {
  let display = false;
  return display ? <h1>This is message 1</h1> : <h2>This is message 2</h2>;
}
