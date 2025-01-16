import React from 'react';
import { useState } from 'react';
import { List } from "@phosphor-icons/react";
import github from "../assets/github.svg";




export default function Header() {
  const [abrirMenu, setabrirMenu] = useState(false);

  const handleMenu = () => {
    setabrirMenu(!abrirMenu);
  };

  return (
    <header className="bg-bgfundo relative mb-10 w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 z-40">
      <button onClick={handleMenu} className="block md:hidden text-white absolute right-4 top-2">
        <List size={32} /> 
      </button>
      <nav className={`w-full md:w-auto ${abrirMenu ? 'block' : 'hidden'} md:flex md:space-x-2.5 mt-4 md:mt-2 absolute mt-8 mb-10 bg-fundo lg:bg-bgfundo` }>
        <ul className="flex flex-col md:flex-row p-4 md:p-0 space-y-2 md:space-y-0 lg:bg-opacity-0 font-bela font-semibold text-xs lg:text-xl lg:mt-24 lg:text-center lg:text-4xl lg:ml-96 ">
          <li><a href="/" className="block text-white py-2 px-4 ">Home</a></li>
          <li><a href="/Contato" className="block text-white py-2 px-4 ">Contato</a></li>
          <li>
  <a href="https://github.com/ketmelo" className="ml-3 text-white text-[9px] px-3 py-1 rounded-3xl bg-gradient-to-r from-amarelo/100 via-black/70 to-black lg:text-3xl flex items-center w-16 h-6 lg:w-48 lg:h-10 lg:mt-2 ">
    <img src={github} alt="GitHub" className="w-4 h-6 lg:w-8 lg:h-8" />
    <span>GitHub</span>
  </a>
</li>  
        </ul>
      </nav>
    </header>
  );
}
