import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookService from "./pages/BookService";
function App() {
  return (
    <div className="App bg-white dark:bg-secondary">
      <NavBar />
      <Home />
      {/* <BookService /> */}
      <Footer />
    </div>
  );
}

export default App;
