import Item from "./components/item";

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com react</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
    </>
  );
};

export default App;