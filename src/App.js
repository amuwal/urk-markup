import Navbar from "./components/Navbar";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import "./styles/app.css"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Component1 />
        <Component2 />
        <Component3 />
    </div>
  );
}

export default App;
