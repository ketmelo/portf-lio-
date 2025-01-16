import React from 'react'
import zap from "../assets/zap.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import Header from '/src/components/Header.jsx';
import circulo from "../assets/circulo.svg";
import bgimg from "../assets/bg-img.svg";

export default function Contato() {
  return (
    <div className='bg-bgfundo'>
      <Header></Header>
      <img src={bgimg} alt="" className="w-full" />
      <img src={circulo} alt="" className="absolute left-2 top-10 lg:top-0 h-32 z-10 lg:h-64 lg:ml-[500px] lg:mt-36" />

       {/* CONTATO*/}
      
            <div>
              <h1 className="text-amarelo text-4xl text-center font-bela mt-10 lg:text-6xl">Contate<strong className="text-white">-me</strong></h1>
              <p className="text-white text-xs text-center">ketlyn.code@gmail.com</p>
            </div>
      
            <div className="flex justify-center items-center mt-3 ">
                <a href="https://wa.me/5511980978450"><img src={zap} alt="" /></a>
                <a href="https://www.linkedin.com/in/ketlyn-de-melo-73a0a0221/"><img src={linkedin} alt="" className="ml-3"/></a>
                <a href="https://github.com/ketmelo"><img src={github} alt="" className="ml-2"/></a>
            </div>
      
            {/* Caixa de mensagem */}
            <div className="flex justify-center items-center mt-10 text-white">
              <form action="https://formspree.io/f/xnnnrwgg" method="POST">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm text-white"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu E-mail:"
                    className="w-full p-2 px-5 bg-cinza rounded-lg mt-2 "
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm text-white"></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem:"
                    className="w-full p-2 bg-cinza rounded-lg mt-2"
                    required
                  />
                </div>
                <button type="submit" className="bg-amarelo text-white px-1 py-1 rounded-lg w-full mb-10">
                  Enviar
                </button>
              </form>
            </div>
            {/* Fim Caixa de mensagem */}
            <p className="w-full bg-final p-2 text-xs text-white text-center">Ketlyn de Melo© 2025. Todos os Direitos Reservados</p>

    </div>
  )
}
