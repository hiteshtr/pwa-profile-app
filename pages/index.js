import Head from 'next/head'
import { ShortProfile } from '../components/ShortProfile'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
          <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start">
            {/* <article class="p-6 mt-6 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
              <div class="relative max-h-125 overflow-hidden">
                  <img class="absolute" src="https://images.unsplash.com/photo-1606763106075-85bfbe11e07f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt=""/>
                  <img class="relative transform duration-500 group-hover:opacity-0" src="https://images.unsplash.com/photo-1606763106198-4ffc663c2419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt=""/>
              </div>
              <div class="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
                  <a target="_blank" href="https://unsplash.com/@guilhermestecanella">
                      <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="rgba(0,0,0,0.5)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
                  </a>
              </div>
              <ul class="mt-6 font-semibold text-gray-500">
                  <li class="inline mr-3 pb-1 border-b-2 border-green-500">Features</li>
                  <li class="inline mr-3 pb-1 border-b-2 border-green-500">Fashion</li>
              </ul>
              <p class="mt-6  text-xl leading-relaxed text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquid atque officia? Earum dolores voluptatibus reiciendis, excepturi corporis corrupti eaque!
              </p>
              <p class="text-gray-400 mt-10 font-semibold">23rd March, 2021</p>
            </article> */}
            <ShortProfile/>
          </section>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}