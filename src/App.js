import { useLocation,Outlet } from "react-router-dom";
import Header from "./components/header";
import Router from "./Router";
function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <div className="App">

      {currentRoute !== "/" && <Header />}

      <Router />
    </div>
  );
}

export default App;