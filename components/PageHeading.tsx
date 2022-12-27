export default function PageHeading({ children } : { children: string }) {
  return (<h1 className="break-words text-[48px] font-black text-gradient-black">{children}</h1>);
}