import { Link } from 'react-router-dom'
import { H1, H2, H2_btn, H2_titulo, P } from './Texto'

export default function Button({ text }) {

    return (
      <button className="bg-verdenormal hover:bg-[#003F00] text-white text-sm w-full md:h-[54px] h-[37px] rounded-[10px] cursor-pointer">
        <H2>{text}</H2>
      </button>
    )
  }

export function Button_nav({ text }) { 
  return (
    <button className="bg-verdemusgo dark:bg-darkverdemusgo dark:hover:bg-[#003F00] hover:bg-[#73963A] text-white text-sm md:w-[197px] md:h-[60px] w-[110px]  h-[45px] rounded-[55px] cursor-pointer">
      <H2_btn>{text}</H2_btn>
    </button>
  )
}

export function Button_home({text}) {
  return (
    <button className="bg-verdenormal hover:bg-[#003F00] text-white text-sm md:w-[197px] md:h-[60px] w-[99px] h-[30px] rounded-[55px] cursor-pointer"> 
      <H2_btn>{text}</H2_btn>
    </button>
  )
}

export function Button_paraquem ({text, onClick, ativo}) {
  return (
    <button onClick={onClick} className={`bg-white dark:bg-darkpreto hover:bg-verdeclaro  dark:hover:bg-darkverdeclaro  hover:text-verdemusgo dark:text-white text-black text-sm border border-black-30 md:w-[220px] md:h-[65px] w-[105px] h-[35px] rounded-[55px] cursor-pointer px-5`}>
      <H2>{text}</H2>
    </button>
  )
}

export function Button_decoration({text}) {
  return (
    <button className="bg-verdeclaro dark:bg-darkverdeclaro dark:text-white text-black text-sm md:w-[177px] md:h-[55px] w-[106px] h-[33px] rounded-[55px] absolute bottom-3 left-3 z-10">
      <H2_btn>{text}</H2_btn>
    </button>
  )
} 

export function Button_como({text}) {
  return (
    <button className='bg-white hover:bg-cinza text-verdenormal rounded-[55px] md:w-[262px] md:h-[70px] w-[123px] h-[34px] '>
        <H2_btn>{text}</H2_btn>
    </button>
  )
}

export function Button_materiais({text}) {
  return (
    <button className='bg-verdemusgo dark:bg-darkverdemusgo dark:hover:bg-[#003F00] hover:bg-[#73963A] text-white rounded-[55px] md:w-[181px] w-[96px] md:h-[58px] h-[41px] '>
        <H2_btn>{text}</H2_btn>
    </button>
  )
} 

export function Button_jogar({text}) {
  return (
    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-10 py-3 rounded-full shadow-lg hover:bg-gray-700 transition">
      <H2_btn>{text}</H2_btn>
    </button>
  )
}

export function Button_adm({text}) {
  return (
    <button className="bg-verdenormal hover:bg-[#003F00] text-white rounded-full w-[135px] md:w-[389px] h-[48px] md:h-[71px] cursor-pointer"> 
      <H2_btn>{text}</H2_btn>
    </button>
  )
}

export function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
} 