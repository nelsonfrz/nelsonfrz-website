import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "projects");

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData: Project[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return ({
      id,
      ...matterResult.data,
    } as Project);
  });
  return allProjectsData.sort((a: Project, b: Project) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}