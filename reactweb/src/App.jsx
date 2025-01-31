import Parent from "./components/Parent";
import Child from "./components/Child";
import UseReducer from "./components/UseReducer";
function App() {
  const parentOperation = () => {
    console.log("Clicked");
  };
  return (
    <>
      <Parent>
        <Child executeOperation={parentOperation}></Child>
      </Parent>

      <UseReducer></UseReducer>
    </>
  );
}

export default App;
