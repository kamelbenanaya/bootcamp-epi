import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/navbar";
import Layout from "./components/layout";
import Routing from "./routers/index";

function App() {
  return (
    <Layout>
      <Routing />
    </Layout>
  );
}

export default App;
