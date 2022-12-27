import Link from "next/link";

interface ButtonProps {
  color: "purple" | "white",
  url: string
  children: string,
  className?: string,
}

export default function Button({ color, children, className, url }: ButtonProps) {
  switch (color) {
    case "purple":
      return (<Link href={url}>
          <button 
          className={`${className} w-44 h-10 bg-gradient-purple text-white rounded-lg drop-shadow-purple hover:opacity-95 transition-opacity duration-[250] select-none`}
          >
            {children}
          </button>
        </Link>);
      break;
    case "white":
      return (<Link href={url}>
        <button 
        className={`${className} w-44 h-10 bg-white text-[#696969] rounded-lg drop-shadow-white hover:bg-slate-50 transition-colors duration-[250] select-none`}
        >
          {children}
        </button>
      </Link>);
      break;
  }
  return (<></>);
}