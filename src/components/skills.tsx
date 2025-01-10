import { Code2Icon } from "lucide-react";

export function Skills() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Code2Icon className="size-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">Habilidades</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "React",
          "Next.js",
          "Tailwind",
          "Astro",
          "Node.js",
          "TypeScript",
          "UI/UX",
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
