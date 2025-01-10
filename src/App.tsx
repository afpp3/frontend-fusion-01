import Contribuicoes from "./components/contribuicoes";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Skills } from "./components/skills";

export function App() {
  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mt-12 space-y-8">
        <div className="text-center ">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            André Felippe
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Desenvolvedor apaixonado por transformar ideias em código. Focado em
            criar experiências web excepcionais com as melhores tecnologias.
          </p>
        </div>

        <Skills />

        <Projects />

        <Contribuicoes />

        <Contact />
      </div>
    </div>
  );
}
