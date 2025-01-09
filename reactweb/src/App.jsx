import Message from "./components/Message";
import Form from "./components/Form";
import InnerComponent from "./components/InnerComponent";
import OuterComponent from "./components/OuterComponent";
function App() {
  return (
    <>
      <Form></Form>
      <InnerComponent></InnerComponent>
      <OuterComponent></OuterComponent>
    </>
  );
}

export default App;
