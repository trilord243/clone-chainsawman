import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <body className="w-full h-full  ">
        <header className="w-full h-16  ">
          <nav className="flex justify-end ">
            <ul className=" w-64 h-auto flex justify-center mt-2 items-center ">
              <li>
                <NavLink className="mx-3">Gmail</NavLink>
              </li>
              <li>
                <NavLink className="mx-3">Imagenes</NavLink>
              </li>
              <li className="mx-3  w-6 ">
                <NavLink className="mx-3">
                  {" "}
                  <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M 6 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 12 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 6 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 6 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 12 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 16 6 c 0 1.1 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 Z M 12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 18 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 18 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z"></path>
                  </svg>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className=" ">
                  <img
                    className="rounded-full h-8 w-8"
                    src="https://i.pinimg.com/736x/74/e2/ea/74e2eaa93cafe3ecfa142b773e9ee3b3.jpg "
                    alt=""
                  ></img>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="mt-36 text-center">
          <section className="w-96 mb-9 mx-auto">
            <img
              src="/src/assets/Chainsaw_Man_Alt_English_Logo.webp"
              alt=""
            ></img>
          </section>
          <section className="w-3/5 mx-auto mb-8">
            <div className="w-3/5  mx-auto rounded-3xl border border-borde flex justify-center items-center hover:shadow-md ">
              <span className="bg-Search bg-no-repeat bg-center bg-contain w-4 h-4">
                {" "}
              </span>
              <input
                className=" w-10/12 h-10 border-none outline-none"
                type="text"
              />
              <a
                className="bg-mic bg-no-repeat bg-center bg-contain w-4 h-4"
                href=""
              ></a>
            </div>
          </section>
          <section className="w-3/5 mx-auto">
            <div className="inline-block">
              <button className="mx-5 w-auto h-8 bg-botones text-sm rounded-md px-2">
                Buscar en google
              </button>
            </div>
            <div className="inline-block mx-5 w-auto h-8 bg-botones text-sm rounded-md text-center py-1 px-2 ">
              <button>Me siento con suerte</button>
            </div>
          </section>
        </main>
        <footer className="w-full h-15 absolute bottom-0 grid grid-cols-2 items-center bg-botones border-x-borde ">
          <ul className="m-2 flex pl-0 justify-self-start">
            <li>
              <a href="">Publicidad</a>
            </li>
            <li>
              <a href="">Negocios</a>
            </li>
            <li>
              <a href="">Acerca</a>
            </li>
            <li>
              <a href="">Busqueda</a>
            </li>
          </ul>
          <ul className="m-2 flex pl-0 justify-end">
            <li>
              <a className="m-2 " href="">
                Privacidad
              </a>
            </li>
            <li>
              <a href="">Condiciones</a>
            </li>
            <li>
              <a href="">Preferencas</a>
            </li>
          </ul>
        </footer>
      </body>
    </>
  );
}

export default HomePage;
