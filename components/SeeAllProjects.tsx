import Link from "next/link";

export default function SeeAllArticles() {
  return (<div className="flex justify-center">
    <Link href="/projects">
      <p className="select-none flex items-center text-[#7B78FF] hover:cursor-pointer">
        <span className="mr-1 font-bold text-black">See All Projects</span> 
        <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4419 5.44194C20.686 5.19786 20.686 4.80214 20.4419 4.55806L16.4645 0.580583C16.2204 0.336505 15.8247 0.336505 15.5806 0.580583C15.3365 0.82466 15.3365 1.22039 15.5806 1.46447L19.1161 5L15.5806 8.53553C15.3365 8.77961 15.3365 9.17534 15.5806 9.41942C15.8247 9.6635 16.2204 9.6635 16.4645 9.41942L20.4419 5.44194ZM0 5.625H20V4.375H0V5.625Z" fill="black"/>
        </svg>
      </p>
    </Link>
</div>);
}