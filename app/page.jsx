"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-800 py-4 px-8 flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Vecinos Comprometidos</div>
        <div>
          <Link
            href="sign-in"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Iniciar Sesión
          </Link>
        </div>
      </nav>

      <div className="bg-white text-black py-20 px-8 h-[100vh] flex justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-4">Administración residencial</h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dolor veniam earum non ut animi expedita accusamus praesentium possimus!
          </p>
          <Link
            href="sign-up"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
}
