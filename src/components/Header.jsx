import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import iconemenu from "../assets/iconemenu.png"
import { H2 } from '../components/Texto'
import { useTema } from "../context/ThemeContext"

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { tema, alterarTema } = useTema()

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-[52px] md:h-[120px] p-10 py-2 dark:bg-darkpreto bg-white shadow-md border-b dark:border-white border-black dark:text-white">
      
      <Link to="/"><img src={logo} alt="TrashTrack" className='h-[21px] md:h-[47px]'/></Link>

      <div className="hidden md:flex items-center gap-8  p-10">
        <nav className="flex gap-6">
          <H2><Link to="/para-quem" className="hover:underline">Para quem?</Link></H2>
          <H2><Link to="/como-funciona" className="hover:underline">Como funciona</Link></H2>
          <H2><Link to="/materiais" className="hover:underline">Materiais</Link></H2>
          <H2><Link to="/jogo" className="hover:underline">Jogo</Link></H2>
          <H2><Link to="/quem-somos" className="hover:underline">Quem somos?</Link></H2>
          <H2><Link to="/referencias" className="hover:underline">Referências</Link></H2>
        </nav>

        <div className="hidden md:flex items-center gap-4">
              <img src={tema === "light" ? "../src/assets/modoclaro.png" : "../src/assets/modoescuro.png"} alt="Alterar tema" onClick={alterarTema} className="h-6 cursor-pointer"/>
        </div>

      </div>

      <button className="md:hidden z-50" onClick={() => setMenuAberto(!menuAberto)}>
        <img src={iconemenu} alt="Menu" className="h-3.5 w-full dark:hidden" />
        <img src="./src/assets/darkiconemenu.png" alt="Menu" className="h-3.5 w-full hidden dark:block" />
      </button>

      {menuAberto && (
      <div className='fixed top-[52px] right-0 w-[75%] dark:bg-darkpreto bg-white shadow-lg rounded-[15px] border-l dark:border-white border-black px-6 py-4 flex flex-col gap-4  md:hidden'>
        <nav className="flex flex-col gap-2">
          <H2><Link to="/para-quem" className="hover:underline">Para quem?</Link></H2>
          <section className='bg-verdemusgo h-1 w-full mt-2 mb-4 rounded-full'></section>
          <H2><Link to="/como-funciona" className="hover:underline">Como funciona</Link></H2>
          <section className='bg-verdemusgo h-1 w-full mt-2 mb-4 rounded-full'></section>
          <H2><Link to="/materiais" className="hover:underline">Materiais</Link></H2>
          <section className='bg-verdemusgo h-1 w-full mt-2 mb-4 rounded-full'></section>
          <H2><Link to="/jogo" className="hover:underline">Jogo</Link></H2>
          <section className='bg-verdemusgo h-1 w-full mt-2 mb-4 rounded-full'></section>
          <H2><Link to="/quem-somos" className="hover:underline">Quem somos?</Link></H2>
          <section className='bg-verdemusgo h-1 w-full mt-2 mb-4 rounded-full'></section>
          <H2><Link to="/referencias" className="hover:underline">Referências</Link></H2>
          <section className='bg-verdemusgo h-1 w-full mt-2 mb-4 rounded-full'></section>
        </nav>

        <div className="flex justify-center items-center mt-3 mb-3">
              <img src={tema === "light" ? "../src/assets/modoclaro.png" : "../src/assets/modoescuro.png"} alt="Alterar tema" onClick={alterarTema} className="h-6 cursor-pointer"/>
        </div>
      </div>
      )}
    </header>
  );
}
