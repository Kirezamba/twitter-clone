import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
