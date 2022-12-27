import Image from "next/image";
import Link from "next/link";

export default function ArticleLink({ article }: { article: Article }) {
  return (<>
    <li className="p-4 max-w-xs h-80 bg-white rounded-xl flex justify-center border-[#C5C5C5] border-[1px] hover:opacity-[97%] transition-opacity duration-[250]">
      <div className="flex flex-col justify-around">
        <Image className="rounded-xl select-none" width="280" height="183" src={`/articles/${article.thumbnail}`} alt="Article Thumbnail" />
        <div>
          <h3 className="text-[15px] font-semibold text-black" >{article.title}</h3>
          <p className="text-[15px] font-medium max-w-[280px] text-ellipsis overflow-hidden">{article.description}</p>
        </div>
        <Link href={`/articles/${article.id}`}>
          <p className="select-none flex items-center text-[#7B78FF] hover:cursor-pointer ">
            <span className="pr-1 ">Read Article</span> 
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="#7B78FF"/>
            </svg>
          </p>
        </Link>
      </div>
    </li>
  </>);
}