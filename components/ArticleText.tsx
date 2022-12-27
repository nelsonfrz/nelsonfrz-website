import styles from "../styles/ArticleText.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ArticleText({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className={styles.articletext}
      linkTarget="_blank"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
              <SyntaxHighlighter
                // @ts-ignore
                style={atomDark}
                language={match[1]}
                showLineNumbers={true}
                PreTag="div"
                {...props}
              >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        blockquote: ({node, children, ...props}) => <blockquote {...props}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5 mt-1 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
          {children}
        </blockquote>,
        table: ({node, children, ...props}) => <div style={{overflowX: "auto"}}><table {...props}>{children}</table></div>
    }}>{content}</ReactMarkdown>
    );
} 