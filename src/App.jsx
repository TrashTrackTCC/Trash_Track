import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ParaQuem } from "./pages/ParaQuem"
import { ParaQuemConteudo } from "./pages/ParaQuemConteudo"
import { ComoFunciona }from "./pages/ComoFunciona"
import { Materiais } from "./pages/Materiais"
import { VerMais } from "./pages/VerMais"
import { Jogo } from "./pages/Jogo"
import { QuemSomos } from "./pages/QuemSomos"
import { Referencias } from "./pages/Referencias"


export function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/para-quem" element={<ParaQuem />} />
        <Route path="/para-quem-conteudo" element={<ParaQuemConteudo />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/materiais" element={<Materiais />} />
        <Route path="/ver-mais" element={<VerMais />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/referencias" element={<Referencias />} /> 
      </Routes>
  )
}