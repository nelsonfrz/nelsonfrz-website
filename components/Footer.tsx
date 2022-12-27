import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer w-full bg-[#FAFAFA] border-t-[1px] border-[#D6D6D6]">
      <div className="max-w-[500px] flex flex-col justify-between h-[345px] mx-auto px-8">
        <div className="flex justify-between mt-12">
          <ul>
            <li className="text-[15px] font-semibold">Pages</li>
            <li><p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline"><Link href="/">Home</Link></p></li>
            <li><p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline"><Link href="/articles">Articles</Link></p></li>
            <li><p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline"><Link href="/projects">Projects</Link></p></li>
            <li><p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline"><Link href="/about">About</Link></p></li>
          </ul>
          <ul>
            <li className="text-[15px] font-semibold">Links</li>
            <li>
              <p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline" title="1051087527127285830">
              <a href="https://discordapp.com/users/1051087527127285830" target="_blank" rel="noreferrer">Discord</a>
              </p>
            </li>
            <li>
              <p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline" title="nelson.frz@proton.me">
                <a href="mailto:nelson.frz@proton.me" target="_blank" rel="noreferrer">Email</a>
              </p>
              </li>
            <li>
              <p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline" title="@nelsonfrz">
                <a href="https://www.youtube.com/@nelsonfrz" target="_blank" rel="noreferrer">YouTube</a>
              </p>
              </li>
            <li>
              <p className="text-[14px] text-[#989898] font-medium hover:cursor-pointer hover:text-[#767676] transition-colors duration-[250] hover:underline" title="nelsonfrz">
              <a href="https://github.com/nelsonfrz" target="_blank" rel="noreferrer">GitHub</a>
              </p>
              </li>
          </ul>
        </div>
        <div className="mb-12">
          <p className="text-2xl font-semibold text-gradient-purple select-none hover:cursor-pointer">@nelsonfrz</p>
          <p className="text-xs text-[#989898] font-medium">No Copyright © 2022 @nelsonfrz, Inc. No rights reserved.</p>
        </div>
      </div>
    </div>
  )
}