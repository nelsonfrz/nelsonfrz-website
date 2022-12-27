import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "articles");

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData: Article[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return ({
      id,
      ...matterResult.data,
    } as Article);
  });
  return allArticlesData.sort((a: Article, b: Article) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllArticlesIds() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getArticleData(id: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const content = matterResult.content;

  return ({
    id,
    content,
    ...matterResult.data,
  } as Article);
}