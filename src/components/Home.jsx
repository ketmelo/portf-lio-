import React from "react";
import bgimg from "../assets/bg-img.svg";
import Header from '/src/components/Header.jsx';
import circulo from "../assets/circulo.svg";
import c from "../assets/c++.svg";
import reactn from "../assets/react.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.svg";
import python from "../assets/python.svg";
import tailwind from "../assets/tailwind.svg";
import astronomy from "../assets/astronomy.svg";
import albania from "../assets/albania.svg";
import apple from "../assets/apple.svg";
import feedback from "../assets/feedback.svg";
import opti from "../assets/opti.svg";
import copa from "../assets/copa.svg";
import zap from "../assets/zap.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default function Home() {
  return (
    <div className="bg-bgfundo ">
       {/* Cabeçalho */}
      <Header/>
      <div className="relative">
        <img src={bgimg} alt="" className="w-full" />
        <img src={circulo} alt="" className="absolute left-2 top-0 h-32 z-10 lg:h-64 lg:ml-5 lg:mt-36" />
        
        <h1 className="absolute ml-36 top-12 text-white text-2xl font-coiny font-semibold z-20 lg:ml-80 lg:text-6xl lg:mt-36">
            Ketlyn Melo
        </h1>
        
        <p className="absolute text-white text-[8px] p-8 top-12 ml-28 font-bela z-20 lg:text-xl lg:ml-72 lg:top-56">
            Profissional apaixonada por tecnologia, em transição para o desenvolvimento de software, com foco em front-end e back-end. Experiência prática em projetos, criando interfaces intuitivas e estruturas de dados. Comprometida com o aprendizado contínuo e soluções inovadoras para melhorar a experiência do usuário.
        </p>
      </div>
       {/* Fim do Cabeçalho */}

       {/* Botões de Contato e  Download */}
      <div>
        <div  className="flex items-center absolute top-60 left-36 flex font-bela z-20 lg:top-[450px] lg:ml-44">
          <div>
            <a href="/KetlynMelo.pdf" download="KetlynMelo.pdf">
              <button className="bg-amarelo text-white text-[9px] px-2 py-1 rounded mr-4 lg:px-14 lg:py-[8px] lg:text-base ">Download CV</button>
            </a>
          </div>

        <div>
          <a href="/Contato">
            <button className="bg-amarelo text-white rounded text-[9px] px-5 py-1 lg:px-14 lg:py-[8px] lg:text-base ">  Contato  </button>
          </a>
        </div>
       </div>
      </div>
      {/* Botões final */}

       {/* Textos HABILIDADE FRONT E BACK */}
      <div className="" >
        <div className="lg:flex lg:mt-20">
                   {/* Front end texto */}
        <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-52 lg:mt-20 ">
            <h1 className="text-amarelo text-2xl text-center mb-3 font-bela font-semibold lg:text-3xl">Front-end</h1>
            <p className=" font-bela lg:text-base"> <strong className="text-amarelo lg:text-base">Desenvolvimento de Websites:</strong> 
            Criação de sites personalizados, com foco na qualidade e nas necessidades específicas de cada cliente.</p>
            <p className=" font-bela lg:text-base"><strong className="text-amarelo lg:text-base">Design Responsivo: </strong> Design adaptável para dispositivos móveis, proporcionando uma experiência de usuário otimizada em qualquer plataforma.</p>
            <p className=" font-bela lg:text-base">
            <strong  className="text-amarelo lg:text-base">Soluções para Problemas Web:</strong> Identificação e resolução eficaz de problemas em páginas da web, garantindo funcionalidade, desempenho.
            </p>
        </div>
         {/* Fim front end texto */}

          {/* Back end texto */}
        <div className="text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-amarelo text-2xl text-center font-bela font-semibold mb-3 text-3xl">Back-end</h1>
          <p className="lg:text-base font-bela"> <strong className="text-amarelo lg:text-base">Desenvolvimento Python: </strong> 
             Conhecimento fundamental em Python para criar soluções simples e escaláveis.</p>
          <p className="lg:text-base font-bela"><strong className="text-amarelo lg:text-base">Banco de Dados SQL: </strong> 
           Capacidade de conectar front-end e back-end de forma eficiente, garantindo uma troca de dados funcional e uma experiência de usuário satisfatória.</p>
          <p className="lg:text-base font-bela">
          <strong  className="text-amarelo lg:text-base ">Integração de Sistemas:</strong> Identificação e resolução eficaz de problemas em páginas da web, garantindo funcionalidade, desempenho.
          </p>
        </div>
         {/* Fim backend texto */}

         {/* Habilidades img */}
        <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-amarelo text-2xl text-center mt-3 mb-3 font-bela font-semibold ">Habilidades</h1>
          <div className="flex mt-2">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={reactn} alt="" />
          </div>
          <div className="flex mt-3">
          <img src={python} alt="" />
          <img src={tailwind} alt="" className="ml-1" />
          <img src={mysql} alt="" className="ml-3"/>
          <img src={c} alt="" className="ml-1" />
          </div>

        </div>
         {/* Fim habilidades img */}
        </div>

      </div>
      {/* FIM textos HABILIDADE FRONT E BACK */}

      {/* CARROSSEL*/}
      <div className="">
      <h1 className="text-amarelo text-3xl text-center font-bela mt-10 lg:text-5xl lg:mt-20">Meus Projetos</h1>

      <div>
      <div className="lg:flex">
        <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-white text-2xl text-center mt-3 mb-3 font-coiny font-semibold">Astronomy</h1>
          <a href="https://astronomy-website.netlify.app/"><img src={astronomy} alt="" className="rounded"/></a>
          <div className="flex items-center justify-center font-bela text-sm space-x-4 mt-3">
          <p>CSS</p>
          <p>HTML</p>
          <p>JavaScript</p>
          </div>
          <p className="font-bela text-sm text-center text-final">Apenas Desktop</p>
          <a href="https://github.com/ketmelo/Astronomy" className="font-bela text-sm flex items-center justify-center mt-2">Site</a>
        </div>


        <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-white text-2xl text-center mt-3 mb-3 font-coiny font-semibold">Albânia</h1>
          <a href="https://site-albania12a.netlify.app/"><img src={albania} alt="" className="rounded"/></a>
          <div className="flex items-center justify-center font-bela text-sm space-x-4 mt-3">
          <p>CSS</p>
          <p>HTML</p>
          <p>JavaScript</p>
          </div>
          <a href="https://github.com/saulgabriel7/Albania" className="font-bela text-sm flex items-center justify-center mt-2">Site</a>
        </div>

        <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-white text-2xl text-center mt-3 mb-3 font-coiny font-semibold">Cópia Apple</h1>
          <a href="https://applecopiasaul.netlify.app/"><img src={apple} alt="" className="rounded"/></a>
          <div className="flex items-center justify-center font-bela text-sm space-x-4 mt-3">
          <p>CSS</p>
          <p>HTML</p>
          <p>JavaScript</p>
          </div>
          <a href="https://github.com/saulgabriel7/Apple" className="font-bela text-sm flex items-center justify-center mt-2">Site</a>
        </div>
      </div>
    


       <div className="lg:flex">
       <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-white text-2xl text-center mt-3 mb-3 font-coiny font-semibold">FeedBack</h1>
          <a href="https://feedback-ketlynmelo03ma.vercel.app/"><img src={feedback} alt="" className="rounded"/></a>
          <div className="flex items-center justify-center font-bela text-sm space-x-4 mt-3">
          <p>HTML</p>
          <p>JavaScript</p>
          </div>
          <a href="https://github.com/ketmelo/feedback" className="font-bela text-sm flex items-center justify-center mt-2">Site</a>
        </div>

        <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-white text-2xl text-center mt-3 mb-3 font-coiny font-semibold">Opti-Color TCC</h1>
          <a href="https://opti-color.vercel.app/"><img src={opti} alt="" className="rounded"/></a>
          <div className="flex items-center justify-center font-bela text-sm space-x-4 mt-3">
          <p>React</p>
          <p>Tailwind</p>
          <p>JavaScript</p>
          </div>
          <a href="https://github.com/ketmelo/Opti-Color" className="font-bela text-sm flex items-center justify-center mt-2">Site</a>
        </div>

        <div className=" text-white p-3 w-64 text-xs mx-auto border-2 border-white rounded-lg mt-20">
          <h1 className="text-white text-2xl text-center mt-3 mb-3 font-coiny font-semibold">Copa Calendário</h1>
          <a href="https://calendariodacopa-eight.vercel.app/"><img src={copa} alt="" className="rounded"/></a>
          <div className="flex items-center justify-center font-bela text-sm space-x-4 mt-3">
          <p>CSS</p>
          <p>HTML</p>
          <p>JavaScript</p>
          </div>
          <a href="https://github.com/ketmelo/calendariodacopa" className="font-bela text-sm flex items-center justify-center mt-2">Site</a>
        </div>
       </div>
      </div>
      {/* FIM CARROSSEL*/}

      {/* CONTATO*/}

      <div>
        <h1 className="text-amarelo text-4xl text-center font-bela mt-10 lg:text-5xl">Contate<strong className="text-white">-me</strong></h1>
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
    </div>
  );
}
