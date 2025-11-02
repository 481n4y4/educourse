import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}
