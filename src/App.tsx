import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Terminal } from "./components/Terminal";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main className="max-w-6xl mx-auto px-10">
        <section id="hero"><Hero /></section>
        <div className="divider" />

        <section id="terminal"><Terminal /></section>
        <div className="divider" />

        <section id="sobre">sobre</section>
        <div className="divider" />

        <section id="skills">skills</section>
        <div className="divider" />

        <section id="projetos">projetos</section>
        <div className="divider" />

        <section id="contato">contato</section>
      </main>

      <footer>footer</footer>
    </div>
  )
}

export default App