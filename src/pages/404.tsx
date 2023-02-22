import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

const Page404 = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h2>Errore 404</h2>
        <h1>Ooops! Sembra che non abbiamo trovato la pagina che stai cercando</h1>
        <h1>
          Prova a tornare sulla <a href="/">Pagina principale</a>
        </h1>
      </Layout>
    </>
  )
}

export default Page404
