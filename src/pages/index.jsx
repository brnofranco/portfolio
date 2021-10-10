import Head from "next/head";
import { About } from "../components/About";
import { Certifications } from "../components/Certifications";
import { Header } from "../components/Header";
import { Knowledge } from "../components/Knowledge";
import { Projects } from "../components/Projects";
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
        <Certifications />
        <Projects />
      </Layout>
    </>
  )
}
