import { BriefcaseIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import type { SVGProps } from "react";

export function Contact() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <BriefcaseIcon className="size-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">Social</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/afpp3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          <GithubIcon className="size-4" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/andre-felippe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <LinkedinIcon className="size-4" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://bsky.app/profile/andrefelippe.com"
          target="__blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <BlueskyIcon className="size-4" />
          <span>BlueSky</span>
        </a>
      </div>
    </div>
  );
}

function BlueskyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <title>BlueSky</title>
      <path
        fill="currentColor"
        d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2c-18.2 64.8-84.4 81.4-143.3 71.3C456 322 482.2 380 425.6 438c-107.4 110.2-154.3-27.6-166.3-62.9c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"
      />
    </svg>
  );
}
