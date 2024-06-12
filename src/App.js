import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Router} from "./components/router/Router";
import {Map} from "./components/map/Map";

function App() {
  return (
    <>
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
      <Map/>
    </>
  );
}

export default App;
