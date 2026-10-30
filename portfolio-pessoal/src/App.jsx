import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Inicio from "./components/Inicio.jsx";
import Sobre from "./components/Sobre.jsx";
import Atividades from "./components/Atividades.jsx";
import Projetos from "./components/Projetos.jsx";
import Eventos from "./components/Eventos.jsx";
import Sites from "./components/Sites.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}


