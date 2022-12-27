import { SyntheticEvent, useRef, useState, useEffect } from "react";
import styles from "../styles/Hamburger.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Hamburger({ className }: { className?: string}) {
  const [open, setOpen] = useState(false);
  const line1 = useRef<any>()
  const line2 = useRef<any>()
  const line3 = useRef<any>()

  const router = useRouter();
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    setPage(router.asPath.split("/")[1]);
  }, [router]);

  const handleClick = (e: SyntheticEvent) => {
    setOpen(!open);
    if (open) {
      line1.current.style.transform = "translateX(-0) rotate(-0) translateY(0) ";
      line2.current.style.opacity = "1";
      line3.current.style.transform = "translateX(-0) rotate(0) translateY(-0)";
    } else {
      line1.current.style.transform = "translateX(-5px) rotate(-45deg) translateY(13px) ";
      line2.current.style.opacity = "0";
      line3.current.style.transform = "translateX(-5px) rotate(45deg) translateY(-13px)";
    }
  }

  return (<div className={className}>
  {open && (
    <div className="absolute top-0 left-0 w-[100%] bg-white">
      <ul className="h-[100vh] justify-center flex flex-col items-center gap-20 text-2xl mx-auto font-medium text-[#7B7B7B]">
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
      </ul>
    </div>
  )}
    <div className={styles.hamburger} onClick={e => handleClick(e)}>
      <div ref={line1} className={styles.line} />
      <div ref={line2} className={styles.line} />
      <div ref={line3} className={styles.line} />
    </div>
  </div>);
}