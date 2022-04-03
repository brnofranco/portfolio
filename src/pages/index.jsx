import Head from "next/head";
import { About } from "../components/About";
import { Certifications } from "../components/Certifications";
import { Header } from "../components/Header";
import { Knowledge } from "../components/Knowledge";
import { Projects } from "../components/Projects";
import { ScrollToTop } from "../components/ScrollToTop";
import { Layout } from "../styles/layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Conheça o portfólio de Bruno Franco de Moraes, desenvolvedor web full-stack."
        />
        <title>Dev Bruno Franco</title>
      </Head>
      
      <Header />
      <Layout>
        <About />
        <Knowledge />
        <Certifications />
        <Projects />
        <ScrollToTop />
      </Layout>
    </>
  )
}
