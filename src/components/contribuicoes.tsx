"use client";

import { GitFork, GitPullRequest } from "lucide-react";
// import { Card } from "@/components/ui/card"

interface ActivityItem {
  id: number;
  type: "pull-request";
  title: string;
  repository: string;
  link: string;
}

const activities: ActivityItem[] = [
  {
    id: 2,
    type: "pull-request",
    title: "fix(modal): Icone de fechar modal nao fecha",
    repository: "bolodissenoura/lantera-luminosa",
    link: "https://github.com/bolodissenoura/lantera-luminosa/pull/22",
  },

  {
    id: 1,
    type: "pull-request",
    title: "feat: list selected participants from database",
    repository: "codeinthedarkbrasil/manage-citd",
    link: "https://github.com/codeinthedarkbrasil/manage-citd/pull/29",
  },
];

export default function Contribuicoes() {
  return (
    <div className="">
      <div className="flex items-center gap-2 mb-6">
        <GitFork className="size-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">Contribuições</h2>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="relative pl-4 border-l-2 border-indigo-200"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <GitPullRequest className="size-5 text-indigo-600" />
                  <span className="text-gray-800">{activity.title}</span>
                </div>
              </div>

              <div className="pl-4">
                <a
                  target="__blank"
                  href={activity.link}
                  className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                >
                  {activity.repository}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
