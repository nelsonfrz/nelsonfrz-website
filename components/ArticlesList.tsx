import ArticleLink from "./ArticleLink";
import Link from "next/link";

export default function ArticlesList({ articles, className }: { articles: Article[], className?: string }) {
  return (
    <ul className={`${className} grid-auto-fill`}>
        {articles.map(article => <ArticleLink key={article.id} article={article} />)}
    </ul>); 
}