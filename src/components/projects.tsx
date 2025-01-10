import { MonitorIcon } from "lucide-react";

export function Projects() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <MonitorIcon className="size-5 text-purple-600" />
        <h2 className="text-xl font-semibold text-gray-800">Projetos</h2>
      </div>
      <div className="space-y-4">
        <a
          href="https://github.com/afpp3/centi-challenge"
          target="__blank"
          className="flex flex-col p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:border-purple-200 transition-colors"
        >
          <h3 className="font-medium text-gray-800">Galeria de Imagens</h3>
          <p className="text-sm text-gray-600 mt-1">
            Projeto feito com React, Redux e Typescript que navegua pela api da
            IMGUR e busca os dados de galeria de imagens
          </p>
        </a>
      </div>
    </div>
  );
}
