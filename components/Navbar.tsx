import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Link from "next/link";
import useMediaQuery from "../lib/useHooks";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const router = useRouter();
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    setPage(router.asPath.split("/")[1]);
  }, [router]);

  return (
    <div className="h-[72px] border-b-[1px] sticky top-0 bg-white top-z-index">
      <div className="h-[72px] flex items-center justify-around">
        <p className="text-2xl font-semibold text-gradient-purple select-none hover:cursor-pointer top-z-index"><Link href="/">@nelsonfrz</Link></p>
        
        <div className="flex items-center navbar-links">
          <ul className="flex items-center justify-end gap-14 font-medium text-[#7B7B7B]">
            {(page === "") ? 
            (<Link href="/"><li className={`select-none font-semibold text-black hover:cursor-pointer`} >
              Home
            </li></Link>)
            :
            <Link href="/"><li className="select-none hover:text-black hover:cursor-pointer transition-colors duration-[250]">
              Home
            </li></Link>
            }

            {(page === "articles") ? 
            (<Link href="/articles">
              <li className={`select-none font-semibold text-black hover:cursor-pointer`} >
              Articles
            </li></Link>)
            :
            <Link href="/articles">
            <li className="select-none hover:text-black hover:cursor-pointer transition-colors duration-[250]">
              Articles
            </li></Link>
            }

            {(page === "projects") ? 
            (<Link href="/projects"><li className={`select-none font-semibold text-black hover:cursor-pointer`} >
              Projects
            </li></Link>)
            :
            <Link href="/projects"><li className="select-none hover:text-black hover:cursor-pointer transition-colors duration-[250]">
              Projects
            </li></Link>
            }

            {(page === "about") ? 
            (<Link href="/about"><li className={`select-none font-semibold text-black hover:cursor-pointer`} >
              About
            </li></Link>)
            :
            <Link href="/about"><li className="select-none hover:text-black hover:cursor-pointer transition-colors duration-[250]">
              About
            </li></Link>
            }
            <li className="w-[1px] h-[40px] bg-[#CECECE]"></li>
          </ul>
          <a href="https://github.com/nelsonfrz" target="_blank" rel="noreferrer">
            <svg className="mx-8 hover:cursor-pointer" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.5165 0.373901C5.84602 0.373901 0.388306 5.72665 0.388306 12.2689C0.388306 17.4729 3.87517 21.9336 8.72647 23.5692C9.33288 23.7178 9.48449 23.2718 9.48449 22.9745V20.8927C6.14922 21.6362 5.3912 19.4059 5.3912 19.4059C4.78479 18.0676 4.02678 17.6217 4.02678 17.6217C2.96555 16.8781 4.17838 16.8782 4.17838 16.8782C5.3912 17.027 5.99761 18.0676 5.99761 18.0676C7.05884 20.0007 8.87808 19.406 9.48449 19.1085C9.63608 18.3651 9.93929 17.7703 10.2425 17.4729C7.51364 17.1756 4.78479 16.1347 4.78479 11.5255C4.78479 10.1873 5.23961 9.14646 5.99761 8.40303C5.84602 8.10565 5.3912 6.91615 6.14922 5.28058C6.14922 5.28058 7.21044 4.98321 9.48449 6.47008C10.3941 6.17271 11.4553 6.02403 12.5165 6.02403C13.5778 6.02403 14.639 6.17271 15.5486 6.47008C17.8227 4.98321 18.8839 5.28058 18.8839 5.28058C19.4903 6.91615 19.1871 8.10565 19.0355 8.40303C19.7935 9.29515 20.2483 10.336 20.2483 11.5255C20.2483 16.1347 17.3678 17.027 14.639 17.3243C15.0938 17.919 15.5486 18.6624 15.5486 19.7033V22.9745C15.5486 23.2718 15.7002 23.7178 16.4583 23.5692C21.3096 21.9336 24.7963 17.4729 24.7963 12.2689C24.6448 5.72665 19.1871 0.373901 12.5165 0.373901Z" fill="#9D9D9D"/>
            </svg>
          </a>
        </div>
        
        <Hamburger className="hamburger" />
      </div>
    </div>
  )
}
