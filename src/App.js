import Side from "./Components/Sidebar";
import Nave from "./Components/Navbar";
import Dash from "./Components/Dasboard";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App position-relative">
      < Nave />
      < Side />
      <Dash />
    </div>
  );
}

export default App;
