import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import ContentHooksAPI from "./components/ContentHooksAPI";


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      <ContentHooksAPI />
    </div>
  );
}

export default App;