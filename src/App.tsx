import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Terminal } from "./components/Terminal";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main className="max-w-6xl mx-auto px-10">
        <section id="hero"><Hero /></section>
        <div className="divider" />

        <section id="terminal"><Terminal /></section>
        <div className="divider m-10" />

        <section id="sobre"><About /></section>
        <div className="divider m-10" />

        <section id="skills"><Skills /></section>
        <div className="divider m-10" />

        <section id="projetos"><Projects /></section>
        <div className="divider m-10" />

        <section id="contato"><Contact /></section>
      </main>

      <footer><Footer /></footer>
    </div>
  )
}

export default App