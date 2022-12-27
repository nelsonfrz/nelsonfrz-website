export default function Tag({ children }: { children: string }) {
  return (<li className="rounded-full border-[1px] border-[#EBEBEB] inline-block px-2 select-none">
    <p className="text-[14px] font-medium text-[#666666]">{children}</p>
  </li>);
}