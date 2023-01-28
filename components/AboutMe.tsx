import Image from "next/image";

export default function AboutMe({ className }: { className?: string }) {
  return (<div className={`${className} w-full h-[750px] bg-black flex flex-col items-center gap-8`}>
    <h2 className="text-white font-black text-5xl text-center">About Me</h2>
    <h2 className="text-3xl text-white flex gap-1">
      <span>Hello I&apos;m</span>
      <span className="font-semibold text-gradient-purple">@nelsonfrz</span>
      <span>!</span>
    </h2>
    <Image className="select-none" width={160} height={160}  src="/man-technologist.png" alt="Man Technologist Emoji" />
    <p className="text-white max-w-[330px] font-semibold text-center text-[16px] text-gradient-radial-white">I&apos;m a Software Engineer located in Germany. Ocassionally I write articles here about my passions e.g. Web Development. Additionally I’m a full-time student at a high school.</p>
    <ul className="flex items-center justify-around w-52">
      <li className="hover:cursor-pointer" title="1051087527127285830">
        <a href="https://discordapp.com/users/1051087527127285830" target="_blank" rel="noreferrer">
          <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4_185)">
            <path d="M21.1636 1.69206C19.5701 0.97476 17.8614 0.446284 16.0749 0.143604C16.0424 0.137762 16.0099 0.152361 15.9931 0.181558C15.7733 0.565017 15.5299 1.06527 15.3595 1.45847C13.4379 1.17623 11.5262 1.17623 9.64408 1.45847C9.47359 1.05653 9.22134 0.565017 9.0006 0.181558C8.98384 0.153335 8.95134 0.138736 8.9188 0.143604C7.13324 0.445317 5.42454 0.973793 3.83014 1.69206C3.81634 1.6979 3.80451 1.70764 3.79666 1.72029C0.555616 6.47077 -0.33224 11.1045 0.103313 15.6808C0.105283 15.7031 0.118094 15.7246 0.135831 15.7382C2.27418 17.2788 4.34553 18.2142 6.37842 18.8341C6.41095 18.8438 6.44542 18.8322 6.46613 18.8059C6.94701 18.1616 7.37567 17.4823 7.7432 16.7679C7.76489 16.726 7.74419 16.6764 7.69986 16.6598C7.01993 16.4068 6.3725 16.0983 5.74972 15.7479C5.70046 15.7197 5.69651 15.6506 5.74183 15.6175C5.87289 15.5211 6.00398 15.4209 6.12912 15.3197C6.15176 15.3012 6.18331 15.2973 6.20993 15.3089C10.3013 17.1416 14.7308 17.1416 18.7739 15.3089C18.8005 15.2963 18.8321 15.3002 18.8557 15.3187C18.9809 15.4199 19.1119 15.5211 19.244 15.6175C19.2893 15.6506 19.2863 15.7197 19.2371 15.7479C18.6143 16.1051 17.9669 16.4068 17.2859 16.6589C17.2416 16.6754 17.2219 16.726 17.2436 16.7679C17.619 17.4813 18.0477 18.1606 18.5197 18.8049C18.5394 18.8322 18.5749 18.8438 18.6074 18.8341C20.6501 18.2142 22.7215 17.2788 24.8598 15.7382C24.8786 15.7246 24.8904 15.7041 24.8924 15.6817C25.4136 10.3911 24.0193 5.79534 21.1961 1.72125C21.1892 1.70764 21.1774 1.6979 21.1636 1.69206ZM8.35419 12.8943C7.12239 12.8943 6.10743 11.7848 6.10743 10.4222C6.10743 9.05964 7.10271 7.95014 8.35419 7.95014C9.61549 7.95014 10.6206 9.06938 10.6009 10.4222C10.6009 11.7848 9.60563 12.8943 8.35419 12.8943ZM16.6612 12.8943C15.4294 12.8943 14.4145 11.7848 14.4145 10.4222C14.4145 9.05964 15.4097 7.95014 16.6612 7.95014C17.9225 7.95014 18.9276 9.06938 18.908 10.4222C18.908 11.7848 17.9225 12.8943 16.6612 12.8943Z" fill="#9D9D9D"/>
            </g>
            <defs>
            <clipPath id="clip0_4_185">
            <rect width="25" height="19" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </a>
      </li>
      <li className="hover:cursor-pointer" title="nelson.frz@proton.me">
        <a href="mailto:nelson.frz@proton.me" target="_blank" rel="noreferrer">
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.56 2.15991C4.58388 2.15991 2.16 4.58379 2.16 7.55991V19.4399C2.16 22.416 4.58388 24.8399 7.56 24.8399H19.44C22.4161 24.8399 24.84 22.416 24.84 19.4399V7.55991C24.84 4.58379 22.4161 2.15991 19.44 2.15991H7.56ZM7.02 8.63991H19.98C20.0772 8.63991 20.1689 8.65088 20.2553 8.67788L14.947 13.9808C14.1478 14.78 12.8469 14.78 12.0477 13.9808L6.74473 8.67788C6.83113 8.65088 6.9228 8.63991 7.02 8.63991ZM5.97797 9.44464L10.0385 13.4999L5.97797 17.5552C5.95097 17.4688 5.94 17.3771 5.94 17.2799V9.71991C5.94 9.62271 5.95097 9.53104 5.97797 9.44464ZM21.022 9.44464C21.049 9.53104 21.06 9.62271 21.06 9.71991V17.2799C21.06 17.3771 21.049 17.4688 21.022 17.5552L16.9562 13.4999L21.022 9.44464ZM10.8 14.2614L11.2809 14.7476C11.8911 15.3578 12.6955 15.6599 13.4947 15.6599C14.2993 15.6599 15.0983 15.3578 15.7085 14.7476L16.1947 14.2614L20.2553 18.3219C20.1689 18.3489 20.0772 18.3599 19.98 18.3599H7.02C6.9228 18.3599 6.83113 18.3489 6.74473 18.3219L10.8 14.2614Z" fill="#9D9D9D"/>
          </svg>
        </a>
      </li>
      <li className="hover:cursor-pointer" title="@nelsonfrz">
        <a href="https://www.youtube.com/@nelsonfrz" target="_blank" rel="noreferrer">
          <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 3.7334C9.7326 3.7334 4.84278 4.7123 4.84278 4.7123L4.83047 4.72689C3.1146 5.01147 1.8 6.54051 1.8 8.40006V14.0001V14.0019V19.6001V19.6019C1.80168 20.49 2.10859 21.3484 2.66562 22.0229C3.22266 22.6975 3.99333 23.144 4.83926 23.2824L4.84278 23.2878C4.84278 23.2878 9.7326 24.2686 13.5 24.2686C17.2674 24.2686 22.1572 23.2878 22.1572 23.2878L22.159 23.286C23.0058 23.148 23.7774 22.7011 24.3349 22.0257C24.8923 21.3504 25.1991 20.4909 25.2 19.6019V19.6001V14.0019V14.0001V8.40006C25.1987 7.51165 24.892 6.65282 24.335 5.97789C23.7779 5.30295 23.007 4.85615 22.1607 4.71777L22.1572 4.7123C22.1572 4.7123 17.2674 3.7334 13.5 3.7334ZM10.8 9.70527L18 14.0001L10.8 18.2949V9.70527Z" fill="#9D9D9D"/>
          </svg>
        </a>
      </li>
      <li className="hover:cursor-pointer" title="nelsonfrz">
        <a href="https://github.com/nelsonfrz" target="_blank" rel="noreferrer">
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5166 0.374023C5.84603 0.374023 0.388321 5.72678 0.388321 12.269C0.388321 17.473 3.87519 21.9337 8.72648 23.5693C9.33289 23.718 9.4845 23.2719 9.4845 22.9746V20.8929C6.14924 21.6363 5.39122 19.4061 5.39122 19.4061C4.7848 18.0678 4.0268 17.6218 4.0268 17.6218C2.96557 16.8783 4.17839 16.8783 4.17839 16.8783C5.39122 17.0271 5.99763 18.0678 5.99763 18.0678C7.05886 20.0008 8.87809 19.4061 9.4845 19.1086C9.6361 18.3652 9.9393 17.7705 10.2425 17.473C7.51366 17.1757 4.7848 16.1349 4.7848 11.5256C4.7848 10.1874 5.23962 9.14658 5.99763 8.40315C5.84603 8.10578 5.39122 6.91628 6.14924 5.28071C6.14924 5.28071 7.21045 4.98333 9.4845 6.47021C10.3941 6.17283 11.4553 6.02415 12.5166 6.02415C13.5778 6.02415 14.639 6.17283 15.5486 6.47021C17.8227 4.98333 18.8839 5.28071 18.8839 5.28071C19.4904 6.91628 19.1871 8.10578 19.0355 8.40315C19.7935 9.29528 20.2483 10.3361 20.2483 11.5256C20.2483 16.1349 17.3678 17.0271 14.639 17.3244C15.0938 17.9191 15.5486 18.6625 15.5486 19.7034V22.9746C15.5486 23.2719 15.7002 23.718 16.4583 23.5693C21.3096 21.9337 24.7963 17.473 24.7963 12.269C24.6448 5.72678 19.1871 0.374023 12.5166 0.374023Z" fill="#9D9D9D"/>
          </svg>
        </a>  
      </li>
    </ul>
  </div>);
}
