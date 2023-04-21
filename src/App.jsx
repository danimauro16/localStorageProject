import { manageOrders } from "./data/manageOrders";

const App = () => {

  const manageData = () => {
    manageOrders.writeData([{ id: 1, name: "hola 1" }, { id: 2, name: "hola 2" }]);
    manageOrders.save({ id: 3, name: "hola 3" })
    manageOrders.deleteById(10000)
  };
  
  return (
    <>
      <button onClick={manageData}>Save</button>
    </>
  );
};

export default App;
