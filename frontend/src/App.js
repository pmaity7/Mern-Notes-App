import "./App.css";
import "./bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./components/screens/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
