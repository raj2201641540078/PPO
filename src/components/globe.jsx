
import { useMemo } from "react";
import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function IconCloudDemo() {
  const stableSlugs = useMemo(() => slugs, []);

  return (
    <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-2 py-6 sm:px-6">
      <IconCloud iconSlugs={stableSlugs} />
    </div>
  );
}
