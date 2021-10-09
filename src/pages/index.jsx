import Head from "next/head";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Knowledge } from "../components/Knowledge";
import { Layout } from "../styles/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conheça Bruno Franco</title>
      </Head>
      
      <Header />
      <Layout>
        <About />
        <Knowledge />
      </Layout>
    </>
  )
}
