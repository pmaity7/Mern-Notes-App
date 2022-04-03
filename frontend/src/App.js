import "./App.css";
import "./bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";
import CreateNote from "./components/screens/MyNotes/CreateNote";
import UpdateNote from "./components/screens/MyNotes/UpdateNote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<UpdateNote />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
