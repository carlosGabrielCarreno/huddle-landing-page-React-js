import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "./css/App.module.css";

function App() {
  return (
    <div className={styled.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
